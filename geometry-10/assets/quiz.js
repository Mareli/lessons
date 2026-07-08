/* ============================================================
   Геометрия 10 — Интенсив. Движок задач и самопроверки.
   Типы: choice (один верный), multi (несколько верных),
         numeric (число ± допуск), text (короткий ответ).
   Проверка на клиенте, фидбэк + разбор. Без eval.  window.Quiz
   ============================================================ */
(function () {
  'use strict';

  function el(tag, cls, html){ var n=document.createElement(tag); if(cls)n.className=cls; if(html!=null)n.innerHTML=html; return n; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // Нормализация строкового ответа
  function normText(s){
    return String(s).toLowerCase().replace(/ё/g,'е').replace(/\s+/g,'').replace(/,/g,'.').trim();
  }
  // Разбор числа (запятая/точка, ведущий знак)
  function parseNum(s){
    s = String(s).replace(/\s+/g,'').replace(',', '.');
    if(!/^[-+]?\d*\.?\d+$/.test(s)) return NaN;
    return parseFloat(s);
  }

  var _seq = 0;

  function render(host, def){
    if(typeof host==='string') host=document.querySelector(host);
    if(!host) return;
    _seq++;
    var num = def.num != null ? def.num : _seq;
    var q = el('div','quiz');

    var head = el('header');
    head.innerHTML = '<span class="q-num">'+esc(num)+'</span>' +
                     '<b style="font-size:14.5px">Задача</b>' +
                     (def.tag ? '<span class="q-tag">'+esc(def.tag)+'</span>' : '');
    q.appendChild(head);

    var body = el('div','q-body');
    body.appendChild(el('div','q-prompt', def.prompt || ''));
    q.appendChild(body);

    var state = { answered:false, sel:[], type:def.type||'choice' };

    // ---- Ввод в зависимости от типа ----
    var inputEl;
    if(state.type==='choice' || state.type==='multi'){
      var opts = def.options||[];
      var optNodes=[];
      opts.forEach(function(o, i){
        var node = el('div','opt');
        node.innerHTML = '<span class="mark"></span><div>'+(o.html||'')+'</div>';
        node.addEventListener('click', function(){
          if(state.answered) return;
          if(state.type==='choice'){
            optNodes.forEach(function(n){ n.classList.remove('sel'); });
            node.classList.add('sel'); state.sel=[i];
          } else {
            node.classList.toggle('sel');
            state.sel = optNodes.map(function(n,k){return n.classList.contains('sel')?k:-1;}).filter(function(k){return k>=0;});
          }
        });
        optNodes.push(node); body.appendChild(node);
      });
      state.optNodes = optNodes;
    } else if(state.type==='numeric' || state.type==='text'){
      var row = el('div'); row.style.display='flex'; row.style.alignItems='center'; row.style.gap='8px';
      inputEl = el('input','q-input');
      inputEl.type='text';
      inputEl.setAttribute('placeholder', def.placeholder || (state.type==='numeric'?'число':'ответ'));
      inputEl.addEventListener('keydown', function(e){ if(e.key==='Enter'){ e.preventDefault(); check(); } });
      row.appendChild(inputEl);
      if(def.unit){ var u=el('span','muted'); u.style.fontWeight='600'; u.innerHTML=def.unit; row.appendChild(u); }
      body.appendChild(row);
      state.inputEl = inputEl;
    }

    // ---- Кнопки ----
    var actions = el('div','q-actions');
    var btn = el('button','btn btn-primary btn-sm', (window.ICON?window.ICON.check:'')+' Проверить');
    actions.appendChild(btn);
    if(def.hint){
      var hintBtn = el('button','btn btn-ghost btn-sm','Подсказка');
      var hintShown=false;
      hintBtn.addEventListener('click', function(){
        hintShown=!hintShown;
        fb.classList.toggle('show', hintShown || state.answered);
        fbInner.className='fb'; fbInner.innerHTML = state.answered ? fbInner.innerHTML : '<b>Подсказка</b>'+def.hint;
        if(!state.answered && hintShown && window.typeset) window.typeset(fbInner);
      });
      actions.appendChild(hintBtn);
    }
    q.appendChild(actions);

    // ---- Фидбэк ----
    var fb = el('div','q-feedback'); var fbInner=el('div','fb'); fb.appendChild(fbInner); q.appendChild(fb);

    function check(){
      if(state.answered) return;
      var correct=false;
      if(state.type==='choice'){
        if(!state.sel.length){ shake(); return; }
        correct = !!(def.options[state.sel[0]]||{}).correct;
        state.optNodes.forEach(function(n,i){
          n.classList.add('disabled');
          if(def.options[i].correct) n.classList.add('correct');
          else if(state.sel.indexOf(i)>=0) n.classList.add('wrong');
        });
      } else if(state.type==='multi'){
        var need = def.options.map(function(o,i){return o.correct?i:-1;}).filter(function(k){return k>=0;});
        correct = need.length===state.sel.length && need.every(function(k){return state.sel.indexOf(k)>=0;});
        state.optNodes.forEach(function(n,i){
          n.classList.add('disabled');
          if(def.options[i].correct) n.classList.add('correct');
          else if(state.sel.indexOf(i)>=0) n.classList.add('wrong');
        });
      } else if(state.type==='numeric'){
        var val=parseNum(inputEl.value);
        if(isNaN(val)){ shake(); return; }
        correct = Math.abs(val-def.answer) <= (def.tol!=null?def.tol:1e-9);
        inputEl.classList.add(correct?'ok':'no'); inputEl.disabled=true;
      } else if(state.type==='text'){
        var got=normText(inputEl.value);
        if(!got){ shake(); return; }
        var acc=(def.accept||[]).map(normText);
        correct = acc.indexOf(got)>=0;
        inputEl.classList.add(correct?'ok':'no'); inputEl.disabled=true;
      }

      state.answered=true;
      btn.disabled=true; btn.classList.add('disabled');
      fb.classList.add('show');
      fbInner.className = 'fb ' + (correct?'ok':'no');
      var head = correct ? (window.ICON?window.ICON.check+' ':'')+'Верно!' : 'Не совсем';
      var expl = def.explain ? def.explain : '';
      var showAns = '';
      if(!correct){
        if(state.type==='numeric') showAns = '<div style="margin-top:6px">Правильный ответ: <b>'+def.answer+(def.unit?' '+def.unit:'')+'</b></div>';
        else if(state.type==='text' && def.accept) showAns = '<div style="margin-top:6px">Правильный ответ: <b>'+esc(def.accept[0])+'</b></div>';
      }
      fbInner.innerHTML = '<b>'+head+'</b>'+expl+showAns;
      if(window.typeset) window.typeset(fbInner);
    }
    btn.addEventListener('click', check);

    function shake(){
      q.animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}], {duration:220});
    }

    host.appendChild(q);
    if(window.typeset) window.typeset(q);
    return q;
  }

  window.Quiz = {
    render: render,
    // Набор задач с указанием контейнера и заголовка
    set: function(host, defs, opts){
      if(typeof host==='string') host=document.querySelector(host);
      opts=opts||{};
      if(opts.title){ var h=el('h2',null,opts.title); host.appendChild(h); }
      if(opts.intro){ host.appendChild(el('p','lead',opts.intro)); }
      defs.forEach(function(d,i){ if(d.num==null)d.num=i+1; render(host,d); });
    }
  };
})();
