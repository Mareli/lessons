// Compare each odd variant N with its twin even variant N+1.
// Report tasks where odd has SVG/figure but even doesn't.

const fs = require('fs');
const path = require('path');

global.VARIANTS = {};
for (let n = 1; n <= 80; n++) {
  const nn = String(n).padStart(2, '0');
  const src = fs.readFileSync(path.join('variants', `v${nn}.js`), 'utf8');
  new Function('VARIANTS', src)(global.VARIANTS);
}

function hasFigure(task) {
  // figure field in task itself
  if (task.figure) return 'figure';
  // <svg in sol
  if (task.sol && /<svg/i.test(task.sol)) return 'sol-svg';
  // <img in sol
  if (task.sol && /<img/i.test(task.sol)) return 'sol-img';
  return null;
}

const mismatches = [];

for (let odd = 1; odd <= 79; odd += 2) {
  const even = odd + 1;
  const vO = global.VARIANTS[odd];
  const vE = global.VARIANTS[even];
  if (!vO || !vE) continue;
  for (let i = 0; i < vO.tasks.length; i++) {
    const tO = vO.tasks[i];
    const tE = vE.tasks[i];
    if (!tE) continue;
    const figO = hasFigure(tO);
    const figE = hasFigure(tE);
    if (figO && !figE) {
      mismatches.push({ odd, even, idx: i + 1, src: figO, oddPreview: (tO.text || '').slice(0, 80), evenPreview: (tE.text || '').slice(0, 80) });
    }
  }
}

console.log(`Mismatches found: ${mismatches.length}\n`);
for (const m of mismatches) {
  console.log(`Task ${m.idx}: В${m.odd} (${m.src}) → В${m.even} (нет)`);
  console.log(`  В${m.odd}: ${m.oddPreview.replace(/\n/g, ' ')}`);
  console.log(`  В${m.even}: ${m.evenPreview.replace(/\n/g, ' ')}`);
  console.log('');
}
