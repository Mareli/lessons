/* ============================================================
   Геометрия 10 — Интенсив. Движок 3D-фигур (canvas).
   Параллельное (ортографическое) проектирование — как в учебнике:
   параллельные рёбра остаются параллельными. Вращение мышью/пальцем,
   штриховка невидимых рёбер, подписи вершин, сечения и вспом. элементы.
   Без внешних библиотек.  window.Figure3D
   ============================================================ */
(function () {
  'use strict';

  function v(a){ return a.slice(); }
  function sub(a,b){ return [a[0]-b[0], a[1]-b[1], a[2]-b[2]]; }
  function add(a,b){ return [a[0]+b[0], a[1]+b[1], a[2]+b[2]]; }
  function scale(a,k){ return [a[0]*k, a[1]*k, a[2]*k]; }
  function cross(a,b){ return [ a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0] ]; }
  function dot(a,b){ return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; }
  function centroidOf(list){
    var c=[0,0,0]; for(var i=0;i<list.length;i++){ c=add(c,list[i]); }
    return scale(c, 1/list.length);
  }

  function Figure(container, spec){
    this.spec = spec || {};
    this.container = container;
    this.yaw   = (spec.yaw  != null ? spec.yaw  : 0.6);
    this.pitch = (spec.pitch!= null ? spec.pitch: -0.35);
    this.zoom  = spec.zoom || 1;
    this.showLabels = spec.labels !== false;
    this.showHidden = spec.hidden !== false; // штриховать невидимые рёбра
    this.shade = spec.shade !== false;       // лёгкая заливка граней
    this._auto = false;
    this._hl = spec.highlights || {};
    this._build();
  }

  Figure.prototype._build = function(){
    var self = this;
    var wrap = document.createElement('div');
    wrap.className = 'viz-canvas-wrap';
    this.canvas = document.createElement('canvas');
    wrap.appendChild(this.canvas);
    var hint = document.createElement('div');
    hint.className = 'viz-hint';
    hint.textContent = 'Потяните, чтобы повернуть';
    wrap.appendChild(hint);
    this.container.appendChild(wrap);
    this.ctx = this.canvas.getContext('2d');

    // Ресайз под контейнер
    this._ro = new ResizeObserver(function(){ self._fit(); self.draw(); });
    this._ro.observe(this.container);

    // Управление вращением
    var dragging=false, lx=0, ly=0;
    var down = function(e){ dragging=true; var p=pt(e); lx=p.x; ly=p.y; hint.style.opacity=0; };
    var move = function(e){
      if(!dragging) return;
      var p=pt(e);
      self.yaw   += (p.x-lx)*0.01;
      self.pitch += (p.y-ly)*0.01;
      self.pitch = Math.max(-1.45, Math.min(1.45, self.pitch));
      lx=p.x; ly=p.y; self.draw();
      if(e.cancelable) e.preventDefault();
    };
    var up = function(){ dragging=false; };
    function pt(e){ var t=e.touches?e.touches[0]:e; return {x:t.clientX, y:t.clientY}; }
    this.canvas.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move, {passive:false});
    window.addEventListener('pointerup', up);
    this._listeners = [['pointermove',move],['pointerup',up]];

    this._fit();
    this.draw();
  };

  Figure.prototype._fit = function(){
    var dpr = window.devicePixelRatio || 1;
    var w = this.container.clientWidth || 640;
    var h = this.spec.height || Math.round(w * 0.62);
    this.canvas.style.height = h + 'px';
    this.canvas.width  = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.ctx.setTransform(dpr,0,0,dpr,0,0);
    this._w = w; this._h = h;
  };

  // Вращение точки: yaw вокруг Y, затем pitch вокруг X
  Figure.prototype._rot = function(p){
    var cy=Math.cos(this.yaw), sy=Math.sin(this.yaw);
    var x = p[0]*cy + p[2]*sy;
    var z = -p[0]*sy + p[2]*cy;
    var y = p[1];
    var cx=Math.cos(this.pitch), sx=Math.sin(this.pitch);
    return [ x, y*cx - z*sx, y*sx + z*cx ];
  };

  // Ортографическая проекция в пиксели
  Figure.prototype._project = function(p){
    var r = this._rot(p);
    var base = Math.min(this._w, this._h);
    var s = base * 0.30 * this.zoom;
    return { x: this._w/2 + r[0]*s, y: this._h/2 - r[1]*s, z: r[2] };
  };

  Figure.prototype._verts = function(){
    // spec.vertices: { A:[x,y,z], ... } ИЛИ массив [[x,y,z],...] c именами по индексу
    var vs = this.spec.vertices;
    if(Array.isArray(vs)){
      var o={}; for(var i=0;i<vs.length;i++){ o[String.fromCharCode(65+i)]=vs[i]; } return o;
    }
    return vs || {};
  };

  Figure.prototype.draw = function(){
    var ctx = this.ctx, V = this._verts();
    ctx.clearRect(0,0,this._w,this._h);

    // Проекции всех вершин
    var P = {}; for(var k in V){ P[k]=this._project(V[k]); }

    var faces = this.spec.faces || [];
    var solidCentroid = centroidOf(objVals(V));

    // Какие грани обращены к нам (для штриховки рёбер и заливки)
    var faceFront = [];
    var faceDepth = [];
    for(var f=0; f<faces.length; f++){
      var pts = faces[f].map(function(n){ return V[n]; });
      var rc = pts.map(this._rot, this);
      var n = cross(sub(rc[1],rc[0]), sub(rc[2],rc[0]));
      // outward: нормаль должна смотреть от центра тела
      var fc = centroidOf(rc);
      var cc = this._rot(solidCentroid);
      if(dot(n, sub(fc,cc)) < 0) n = scale(n,-1);
      faceFront[f] = n[2] > 0.0001;
      faceDepth[f] = fc[2];
    }

    // Заливка граней (painter: сзади вперёд), лёгкая
    if(this.shade && faces.length){
      var order = faces.map(function(_,i){return i;}).sort(function(a,b){return faceDepth[a]-faceDepth[b];});
      for(var oi=0; oi<order.length; oi++){
        var fi=order[oi];
        if(!faceFront[fi]) continue;
        var poly = faces[fi].map(function(n){ return P[n]; });
        ctx.beginPath();
        ctx.moveTo(poly[0].x, poly[0].y);
        for(var j=1;j<poly.length;j++) ctx.lineTo(poly[j].x, poly[j].y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(106,92,255,0.055)';
        ctx.fill();
      }
    }

    // Сечения / плоскости-выделения (полупрозрачные)
    (this._hl.planes||[]).forEach(function(pl){
      var poly = pl.pts.map(function(nOrPt){ return typeof nOrPt==='string' ? P[nOrPt] : this._project(nOrPt); }, this);
      ctx.beginPath(); ctx.moveTo(poly[0].x, poly[0].y);
      for(var j=1;j<poly.length;j++) ctx.lineTo(poly[j].x, poly[j].y);
      ctx.closePath();
      ctx.fillStyle = pl.fill || 'rgba(16,165,196,0.16)';
      ctx.strokeStyle = pl.color || '#10a5c4';
      ctx.lineWidth = 2; ctx.setLineDash([]); ctx.fill(); ctx.stroke();
    }, this);

    // Рёбра тела
    var edges = this.spec.edges || [];
    var hlEdges = (this._hl.edges||[]).map(keyEdge);
    for(var e=0; e<edges.length; e++){
      var a=edges[e][0], b=edges[e][1];
      if(!P[a]||!P[b]) continue;
      var visible = true;
      if(faces.length && this.showHidden){
        // ребро видимо, если хоть одна смежная грань обращена к нам
        visible = false;
        for(var ff=0; ff<faces.length; ff++){
          if(faceHasEdge(faces[ff], a, b) && faceFront[ff]){ visible=true; break; }
        }
      }
      var isHL = hlEdges.indexOf(keyEdge(edges[e]))>=0;
      ctx.beginPath();
      ctx.moveTo(P[a].x, P[a].y); ctx.lineTo(P[b].x, P[b].y);
      if(isHL){ ctx.strokeStyle='#d6559b'; ctx.lineWidth=3.5; ctx.setLineDash([]); }
      else if(visible){ ctx.strokeStyle='#2b3247'; ctx.lineWidth=2; ctx.setLineDash([]); }
      else { ctx.strokeStyle='#9aa3b8'; ctx.lineWidth=1.5; ctx.setLineDash([5,5]); }
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Вспом. отрезки (высоты, перпендикуляры, диагонали)
    (this._hl.segments||[]).forEach(function(s){
      var a = typeof s.a==='string'? P[s.a] : this._project(s.a);
      var b = typeof s.b==='string'? P[s.b] : this._project(s.b);
      ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
      ctx.strokeStyle = s.color || '#14a06b';
      ctx.lineWidth = s.width || 2.5;
      ctx.setLineDash(s.dashed ? [6,5] : []);
      ctx.stroke(); ctx.setLineDash([]);
      if(s.right){ // маркер прямого угла в точке b, к точке a и к s.right
        drawRightAngle(ctx, b, a, typeof s.right==='string'?P[s.right]:this._project(s.right));
      }
    }, this);

    // Точки-выделения
    (this._hl.points||[]).forEach(function(pn){
      var p = typeof pn==='string'? P[pn] : this._project(pn);
      ctx.beginPath(); ctx.arc(p.x,p.y,4.5,0,7); ctx.fillStyle='#d6559b'; ctx.fill();
    }, this);

    // Подписи вершин
    if(this.showLabels){
      var cScr = this._project(solidCentroid);
      ctx.font = '600 14px -apple-system, "Segoe UI", Arial, sans-serif';
      ctx.textAlign='center'; ctx.textBaseline='middle';
      var hideLbl = this.spec.hideLabels || [];
      for(var name in P){
        if(hideLbl.indexOf(name)>=0) continue;
        var pp=P[name];
        var dx=pp.x-cScr.x, dy=pp.y-cScr.y, d=Math.hypot(dx,dy)||1;
        var lx=pp.x+dx/d*14, ly=pp.y+dy/d*14;
        ctx.lineWidth=3; ctx.strokeStyle='rgba(255,255,255,0.95)';
        ctx.strokeText(name, lx, ly);
        ctx.fillStyle='#1c2333'; ctx.fillText(name, lx, ly);
      }
    }
  };

  Figure.prototype.setAuto = function(on){
    var self=this;
    this._auto=on;
    if(on && !this._raf){
      var tick=function(){ if(!self._auto){ self._raf=null; return; } self.yaw+=0.006; self.draw(); self._raf=requestAnimationFrame(tick); };
      this._raf=requestAnimationFrame(tick);
    }
  };
  Figure.prototype.reset = function(){
    this.yaw = this.spec.yaw!=null?this.spec.yaw:0.6;
    this.pitch = this.spec.pitch!=null?this.spec.pitch:-0.35;
    this.zoom = this.spec.zoom||1; this.draw();
  };
  Figure.prototype.setZoom = function(z){ this.zoom=z; this.draw(); };
  Figure.prototype.highlight = function(hl){ this._hl = hl||{}; this.draw(); };
  // Заменить геометрию фигуры (вершины/рёбра/грани/выделения), сохранив ракурс
  Figure.prototype.setSpec = function(spec){
    this.spec = spec || {};
    this._hl = this.spec.highlights || {};
    this.draw();
  };
  Figure.prototype.destroy = function(){
    this.setAuto(false);
    if(this._ro) this._ro.disconnect();
    var self=this; (this._listeners||[]).forEach(function(l){ window.removeEventListener(l[0], l[1]); });
    if(this.container) this.container.innerHTML='';
  };

  // ---- вспом ----
  function objVals(o){ var a=[]; for(var k in o) a.push(o[k]); return a; }
  function keyEdge(e){ return [e[0],e[1]].sort().join('-'); }
  function faceHasEdge(face, a, b){
    for(var i=0;i<face.length;i++){
      var j=(i+1)%face.length;
      if((face[i]===a&&face[j]===b)||(face[i]===b&&face[j]===a)) return true;
    }
    return false;
  }
  function drawRightAngle(ctx, corner, p1, p2){
    var u = norm2(sub2(p1,corner)), w = norm2(sub2(p2,corner)), s=11;
    var a={x:corner.x+u.x*s, y:corner.y+u.y*s};
    var b={x:corner.x+w.x*s, y:corner.y+w.y*s};
    var c={x:a.x+w.x*s, y:a.y+w.y*s};
    ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(c.x,c.y); ctx.lineTo(b.x,b.y);
    ctx.strokeStyle='#4a5266'; ctx.lineWidth=1.3; ctx.setLineDash([]); ctx.stroke();
  }
  function sub2(a,b){ return {x:a.x-b.x, y:a.y-b.y}; }
  function norm2(a){ var d=Math.hypot(a.x,a.y)||1; return {x:a.x/d, y:a.y/d}; }

  /* ---------- Фабрики распространённых тел ---------- */
  var Solids = {
    // Прямоугольный параллелепипед a×b×c (центрирован)
    box: function(a,b,c){
      a=a/2; b=b/2; c=c/2;
      return {
        vertices: { A:[-a,-c,-b], B:[a,-c,-b], C:[a,-c,b], D:[-a,-c,b],
                    A1:[-a,c,-b], B1:[a,c,-b], C1:[a,c,b], D1:[-a,c,b] },
        edges: [['A','B'],['B','C'],['C','D'],['D','A'],
                ['A1','B1'],['B1','C1'],['C1','D1'],['D1','A1'],
                ['A','A1'],['B','B1'],['C','C1'],['D','D1']],
        faces: [['A','B','C','D'],['A1','B1','C1','D1'],
                ['A','B','B1','A1'],['B','C','C1','B1'],
                ['C','D','D1','C1'],['D','A','A1','D1']]
      };
    },
    cube: function(a){ return Solids.box(a,a,a); },
    // Правильная n-угольная пирамида
    pyramid: function(n, R, h){
      var vs={}, base=[], edges=[], faces=[];
      for(var i=0;i<n;i++){
        var ang = Math.PI/2 + i*2*Math.PI/n;
        var name = String.fromCharCode(65+i);
        vs[name]=[R*Math.cos(ang), -h/2, R*Math.sin(ang)];
        base.push(name);
      }
      vs['S']=[0, h/2, 0];
      for(var j=0;j<n;j++){
        edges.push([base[j], base[(j+1)%n]]);
        edges.push([base[j], 'S']);
        faces.push([base[j], base[(j+1)%n], 'S']);
      }
      faces.push(base.slice());
      return { vertices:vs, edges:edges, faces:faces, apex:'S', base:base };
    },
    // Правильная n-угольная призма
    prism: function(n, R, h){
      var vs={}, bot=[], top=[], edges=[], faces=[];
      for(var i=0;i<n;i++){
        var ang=Math.PI/2 + i*2*Math.PI/n;
        var lo=String.fromCharCode(65+i), hi=lo+'1';
        vs[lo]=[R*Math.cos(ang), -h/2, R*Math.sin(ang)];
        vs[hi]=[R*Math.cos(ang),  h/2, R*Math.sin(ang)];
        bot.push(lo); top.push(hi);
      }
      for(var j=0;j<n;j++){
        edges.push([bot[j],bot[(j+1)%n]]);
        edges.push([top[j],top[(j+1)%n]]);
        edges.push([bot[j],top[j]]);
        faces.push([bot[j],bot[(j+1)%n],top[(j+1)%n],top[j]]);
      }
      faces.push(bot.slice()); faces.push(top.slice());
      return { vertices:vs, edges:edges, faces:faces, bot:bot, top:top };
    },
    tetra: function(R,h){ return Solids.pyramid(3,R,h); }
  };

  /* ---------- Публичное API ---------- */
  window.Figure3D = {
    mount: function(container, spec){
      if(typeof container==='string') container=document.querySelector(container);
      return new Figure(container, spec);
    },
    Solids: Solids,
    // Быстрый монтаж в стандартную .viz-панель с заголовком и кнопками
    panel: function(host, opts){
      if(typeof host==='string') host=document.querySelector(host);
      opts = opts || {};
      var viz = document.createElement('div'); viz.className='viz';
      var head = document.createElement('div'); head.className='viz-head';
      head.innerHTML = '<span class="viz-title">'+(opts.title||'Модель')+'</span><span class="spacer"></span>';
      var body = document.createElement('div');
      viz.appendChild(head); viz.appendChild(body);
      host.appendChild(viz);
      var fig = new Figure(body, opts.spec || opts);

      // Кнопки: вращение / сброс
      var bAuto = mkChip(window.ICON?window.ICON.rotate+' Авто':'Авто');
      var bReset= mkChip('Сброс');
      head.appendChild(bAuto); head.appendChild(bReset);
      bAuto.addEventListener('click', function(){ var on=!fig._auto; fig.setAuto(on); bAuto.classList.toggle('on', on); });
      bReset.addEventListener('click', function(){ fig.reset(); bAuto.classList.remove('on'); fig.setAuto(false); });

      // Доп. чипы-переключатели выделений
      (opts.toggles||[]).forEach(function(t){
        var c = mkChip(t.label);
        if(t.on){ c.classList.add('on'); }
        c.addEventListener('click', function(){
          var on=!c.classList.contains('on'); c.classList.toggle('on', on);
          t.apply(fig, on);
        });
        head.appendChild(c);
      });
      return fig;
    }
  };
  function mkChip(html){ var c=document.createElement('button'); c.className='chip'; c.innerHTML=html; return c; }
})();
