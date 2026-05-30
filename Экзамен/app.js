// ================================================================
//  RENDER ENGINE
// ================================================================
let currentVariant = null;
let katexLoaded    = false;

function onKatexLoad() {
  katexLoaded = true;
  if (currentVariant !== null) runKatex(document.getElementById('main'));
}

function runKatex(el) {
  if (!katexLoaded) return;
  renderMathInElement(el, {
    delimiters: [
      { left: '$$', right: '$$', display: true  },
      { left: '$',  right: '$',  display: false },
    ],
    throwOnError: false,
  });
}

// ── Панель выбора варианта ──────────────────────────────────────
function buildGrid() {
  const grid = document.getElementById('variantGrid');
  grid.innerHTML = '';
  Object.keys(VARIANTS).forEach(n => {
    const btn = document.createElement('button');
    const tasks = VARIANTS[n].tasks || [];
    const solCount = tasks.filter(t => t.sol).length;
    const totalTasks = tasks.length;
    let solClass = '';
    if (solCount === totalTasks && totalTasks > 0) solClass = ' done';
    else if (solCount > 0) solClass = ' partial';
    btn.className = 'vg-btn' + solClass + (n == currentVariant ? ' active' : '');
    btn.textContent = n;
    btn.title = VARIANTS[n].label + (solClass === ' done' ? ' ✓' : solClass === ' partial' ? ' (' + solCount + '/' + totalTasks + ')' : '');
    btn.onclick = () => { selectVariant(Number(n)); closePanel(); };
    grid.appendChild(btn);
  });
}

function togglePanel() {
  const overlay = document.getElementById('variantOverlay');
  const pickerBtn = document.getElementById('variantPickerBtn');
  const isOpen = overlay.classList.contains('visible');
  if (isOpen) { closePanel(); }
  else {
    buildGrid();
    overlay.classList.add('visible');
    pickerBtn.classList.add('open');
    document.addEventListener('keydown', onEsc);
  }
}

function closePanel() {
  document.getElementById('variantOverlay').classList.remove('visible');
  document.getElementById('variantPickerBtn').classList.remove('open');
  document.removeEventListener('keydown', onEsc);
}

function onOverlayClick(e) {
  if (e.target === document.getElementById('variantOverlay')) closePanel();
}

function onEsc(e) { if (e.key === 'Escape') closePanel(); }

// ── Задания ─────────────────────────────────────────────────────
function buildOpts(opts) {
  const isLong = opts.some(([, t]) => t.length > 40 && !t.startsWith('$'));
  const cls = isLong ? 'opts-vertical' : 'opts';
  return `<div class="${cls}">` +
    opts.map(([l, t]) =>
      `<span class="opt"><span class="opt-lbl">${l})</span><span>${t}</span></span>`
    ).join('') + `</div>`;
}

function renderVariant(num) {
  const main = document.getElementById('main');
  const v = VARIANTS[num];
  if (!v) { main.innerHTML = '<p style="padding:32px;color:#888">Вариант не найден.</p>'; return; }

  main.innerHTML =
    `<div class="variant-title">${v.label}<small>${v.tasks.length} заданий</small></div>` +
    v.tasks.map((t, i) => `
      <div class="task-card">
        <div class="task-header">
          <div class="task-num">${i + 1}</div>
          <div class="task-label">Задание ${i + 1}</div>
        </div>
        <div class="task-body">
          <div class="task-text">${t.text}</div>
          ${t.figure ? `<div class="task-figure">${t.figure}</div>` : ''}
          ${t.opts ? buildOpts(t.opts) : ''}
        </div>
        ${t.sol ? `<div class="sol-wrap">
          <button class="sol-btn" onclick="toggleSol(this)">▶ Показать решение</button>
          <div class="sol-panel">${t.sol}</div>
        </div>` : ''}
      </div>`
    ).join('');

  runKatex(main);
}

function toggleSol(btn) {
  const panel = btn.nextElementSibling;
  const open = panel.classList.contains('visible');
  panel.classList.toggle('visible', !open);
  btn.classList.toggle('open', !open);
  btn.textContent = open ? '▶ Показать решение' : '▼ Скрыть решение';
  if (!open && !panel.dataset.k) { runKatex(panel); panel.dataset.k = '1'; }
}

function selectVariant(num) {
  currentVariant = num;
  document.getElementById('variantPickerLabel').textContent = VARIANTS[num].label;
  // обновить активную кнопку в сетке если открыта
  document.querySelectorAll('.vg-btn').forEach(b => {
    b.classList.toggle('active', Number(b.textContent) === num);
  });
  renderVariant(num);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

selectVariant(Number(Object.keys(VARIANTS)[0]));
