// Static validator for variants/v01.js..v80.js
// Checks:
//   1. JS parses (already verified at load time)
//   2. Math delimiters $...$ and $$...$$ are balanced
//   3. No <letter inside $...$  (HTML parser eats it before KaTeX)
//   4. No single-backslash KaTeX commands (\dfrac instead of \\dfrac in source)
//   5. Balanced braces { } inside each math span
//   6. No stray backticks inside template literal values

const fs = require('fs');
const path = require('path');

global.VARIANTS = {};
for (let n = 1; n <= 80; n++) {
  const nn = String(n).padStart(2, '0');
  const src = fs.readFileSync(path.join('variants', `v${nn}.js`), 'utf8');
  new Function('VARIANTS', src)(global.VARIANTS);
}

const issues = [];
const stats = { tasks: 0, mathSpans: 0, htmlSpans: 0 };

function addIssue(variant, taskIdx, field, msg, snippet) {
  issues.push({ variant, taskIdx, field, msg, snippet });
}

// Extract math spans from a string. Returns [{ type: 'inline'|'display', body, start, end }, ...]
function findMath(s) {
  const spans = [];
  let i = 0;
  while (i < s.length) {
    // Skip escaped $ (\$) — though KaTeX-style is rare here
    if (s[i] === '$' && s[i + 1] === '$') {
      const start = i;
      i += 2;
      const j = s.indexOf('$$', i);
      if (j < 0) { spans.push({ type: 'display', body: s.slice(i), start, end: s.length, unclosed: true }); break; }
      spans.push({ type: 'display', body: s.slice(i, j), start, end: j + 2 });
      i = j + 2;
    } else if (s[i] === '$') {
      const start = i;
      i++;
      // Find next non-escaped $
      let j = i;
      while (j < s.length && s[j] !== '$') j++;
      if (j >= s.length) { spans.push({ type: 'inline', body: s.slice(i), start, end: s.length, unclosed: true }); break; }
      spans.push({ type: 'inline', body: s.slice(i, j), start, end: j + 1 });
      i = j + 1;
    } else {
      i++;
    }
  }
  return spans;
}

function checkField(variant, taskIdx, field, value) {
  if (typeof value !== 'string') return;

  // 1. Unclosed template literal (shouldn't happen after JS parse, but check stray backticks)
  if (value.includes('`')) {
    addIssue(variant, taskIdx, field, 'stray backtick in text', value.slice(Math.max(0, value.indexOf('`') - 20), value.indexOf('`') + 20));
  }

  const spans = findMath(value);
  for (const span of spans) {
    stats.mathSpans++;
    if (span.unclosed) {
      addIssue(variant, taskIdx, field, `unclosed ${span.type} math`, span.body.slice(0, 60));
      continue;
    }
    const body = span.body;

    // 3. <letter inside math — HTML parser eats it
    const m = body.match(/<[a-zA-Z]/);
    if (m) {
      addIssue(variant, taskIdx, field, `'<letter' inside $${span.type === 'display' ? '$' : ''}...$${span.type === 'display' ? '$' : ''} — HTML parses as tag`, body);
    }

    // 4. Single-backslash command (KaTeX command without doubled \\) — rare but possible
    // After JS parsing, \dfrac becomes "dfrac" (since \d is not a valid escape, JS strips the backslash).
    // We can detect this by looking for known KaTeX commands without their leading backslash, but that's hard.
    // Instead, check the SOURCE for this — done separately.

    // 5. Balanced braces — skip \{ and \} which are LaTeX escapes
    let depth = 0;
    let ok = true;
    for (let k = 0; k < body.length; k++) {
      const ch = body[k];
      if (ch === '\\' && (body[k+1] === '{' || body[k+1] === '}')) { k++; continue; }
      if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth < 0) { ok = false; break; } }
    }
    if (!ok || depth !== 0) {
      addIssue(variant, taskIdx, field, `unbalanced braces in math (depth=${depth})`, body);
    }
  }

  // 6. Count $ outside of $$ to check overall parity (rough)
  // (Already covered by unclosed detection.)
}

// Source-level check: single-backslash commands like \dfrac (should be \\dfrac in template literal)
function checkSourceBackslashes(variant, src) {
  // Find template literals and check
  // Common KaTeX commands that must have \\ in source
  const cmds = ['dfrac', 'frac', 'sqrt', 'cdot', 'implies', 'in', 'cup', 'cap', 'leq', 'geq', 'ne', 'neq',
                'infty', 'pm', 'mp', 'times', 'le', 'ge', 'lt', 'gt', 'pi', 'alpha', 'beta', 'gamma',
                'triangle', 'angle', 'parallel', 'perp', 'sin', 'cos', 'tan', 'log', 'ln',
                'left', 'right', 'text', 'mathbb', 'sum', 'prod', 'int', 'lim', 'to', 'mapsto',
                'overline', 'underline', 'hat', 'bar', 'tilde', 'dot', 'vec', 'circ',
                'Leftrightarrow', 'Rightarrow', 'Leftarrow', 'iff'];
  const re = new RegExp('(^|[^\\\\])\\\\(' + cmds.join('|') + ')\\b', 'g');
  let m;
  let count = 0;
  while ((m = re.exec(src)) !== null) {
    // We want to find SINGLE backslash followed by command (i.e. `\dfrac` in source instead of `\\dfrac`).
    // The regex above captures preceding char (group 1) and command (group 2).
    // If preceding is not backslash, then we have a single backslash — BAD.
    if (m[1] !== '\\') {
      count++;
      if (count <= 3) {
        const ctx = src.slice(Math.max(0, m.index - 30), m.index + 30);
        addIssue(variant, -1, 'SOURCE', `single \\${m[2]} (should be \\\\${m[2]})`, ctx);
      }
    }
  }
  if (count > 3) {
    addIssue(variant, -1, 'SOURCE', `... and ${count - 3} more single-backslash commands`, '');
  }
}

for (let n = 1; n <= 80; n++) {
  const nn = String(n).padStart(2, '0');
  const src = fs.readFileSync(path.join('variants', `v${nn}.js`), 'utf8');
  checkSourceBackslashes(n, src);

  const v = global.VARIANTS[n];
  if (!v) { addIssue(n, -1, 'VARIANT', 'not loaded', ''); continue; }
  if (!v.tasks || v.tasks.length !== 10) {
    addIssue(n, -1, 'VARIANT', `expected 10 tasks, got ${v.tasks ? v.tasks.length : 0}`, '');
  }
  v.tasks.forEach((t, i) => {
    stats.tasks++;
    if (t.text) checkField(n, i + 1, 'text', t.text);
    if (t.sol) checkField(n, i + 1, 'sol', t.sol);
    if (t.opts) {
      t.opts.forEach(([lbl, opt], j) => checkField(n, i + 1, `opts[${j}]`, opt));
    }
  });
}

console.log(`Checked ${stats.tasks} tasks, ${stats.mathSpans} math spans`);
console.log(`Issues found: ${issues.length}`);
if (issues.length) {
  // Group by variant
  const byVariant = {};
  for (const iss of issues) {
    (byVariant[iss.variant] = byVariant[iss.variant] || []).push(iss);
  }
  for (const v of Object.keys(byVariant).sort((a, b) => a - b)) {
    console.log(`\n— Вариант ${v} (${byVariant[v].length} issues) —`);
    for (const iss of byVariant[v].slice(0, 10)) {
      const t = iss.taskIdx === -1 ? '' : ` t${iss.taskIdx}`;
      console.log(`  [${iss.field}${t}] ${iss.msg}`);
      if (iss.snippet) console.log(`    ${iss.snippet.replace(/\n/g, ' ').slice(0, 150)}`);
    }
    if (byVariant[v].length > 10) console.log(`  ... and ${byVariant[v].length - 10} more`);
  }
} else {
  console.log('\nALL CLEAN ✓');
}
