/* ============================================================
   Геометрия 10 — Интенсив. Реестр курса (единый источник).
   Из него строится карта на главной и навигация между уроками.
   window.COURSE — массив модулей; window.CourseNav — навигация урока.
   ============================================================ */
(function () {
  'use strict';

  var COURSE = [
    { m: 0, title: 'Мост из планиметрии', sub: 'то, на чём стоит вся стереометрия', para: 'повторение 7–9',
      lessons: [
        { id:'m0-l1', file:'m0-l1.html', title:'Диагностика',
          desc:'Быстрый тест: какие темы планиметрии нужно подтянуть перед стартом.', min:20 },
        { id:'m0-l2', file:'m0-l2.html', title:'Планиметрический фундамент',
          desc:'Пифагор, подобие, площади, тригонометрия прямоугольного треугольника.', min:60 }
      ] },
    { m: 1, title: 'Введение в стереометрию', sub: 'учимся видеть и строить пространство', para: '§1–3',
      lessons: [
        { id:'m1-l1', file:'m1-l1.html', title:'Пространственные фигуры',
          desc:'Многогранники и тела. Как правильно изображать фигуры (параллельное проектирование).', min:60 },
        { id:'m1-l2', file:'m1-l2.html', title:'Аксиомы стереометрии',
          desc:'Три аксиомы и их следствия. Способы задания плоскости.', min:70 },
        { id:'m1-l3', file:'m1-l3.html', title:'Сечения многогранников',
          desc:'Метод следов: строим сечение куба и призмы плоскостью по трём точкам.', min:80 }
      ] },
    { m: 2, title: 'Параллельность', sub: 'прямые и плоскости, которые не встречаются', para: '§4–6',
      lessons: [
        { id:'m2-l1', file:'m2-l1.html', title:'Прямые в пространстве',
          desc:'Пересекающиеся, параллельные, скрещивающиеся. Угол между прямыми.', min:70 },
        { id:'m2-l2', file:'m2-l2.html', title:'Прямая и плоскость',
          desc:'Признак и свойства параллельности прямой и плоскости.', min:60 },
        { id:'m2-l3', file:'m2-l3.html', title:'Параллельность плоскостей',
          desc:'Признак параллельности плоскостей и его следствия.', min:70 }
      ] },
    { m: 3, title: 'Перпендикулярность', sub: 'сердце курса и главный источник задач', para: '§7–10',
      lessons: [
        { id:'m3-l1', file:'m3-l1.html', title:'Прямая ⟂ плоскость',
          desc:'Определение и признак перпендикулярности прямой и плоскости.', min:70 },
        { id:'m3-l2', file:'m3-l2.html', title:'Расстояния в пространстве',
          desc:'Перпендикуляр и наклонная. Расстояния: точка–плоскость, скрещивающиеся прямые.', min:80 },
        { id:'m3-l3', file:'m3-l3.html', title:'Угол и три перпендикуляра',
          desc:'Угол между прямой и плоскостью. Теорема о трёх перпендикулярах.', min:80 },
        { id:'m3-l4', file:'m3-l4.html', title:'Перпендикулярность плоскостей',
          desc:'Двугранный угол и его линейный угол. Признак перпендикулярности плоскостей.', min:80 }
      ] },
    { m: 4, title: 'Координаты и векторы', sub: 'универсальный метод для углов и расстояний', para: '§11–14',
      lessons: [
        { id:'m4-l1', file:'m4-l1.html', title:'Координаты в пространстве',
          desc:'Прямоугольная система координат. Расстояние и середина отрезка.', min:60 },
        { id:'m4-l2', file:'m4-l2.html', title:'Векторы в пространстве',
          desc:'Действия с векторами, координаты вектора, компланарность.', min:70 },
        { id:'m4-l3', file:'m4-l3.html', title:'Скалярное произведение',
          desc:'Скалярное произведение и угол между векторами.', min:70 },
        { id:'m4-l4', file:'m4-l4.html', title:'Метод координат в задачах',
          desc:'Углы и расстояния «через формулы»: собираем всё вместе.', min:80 }
      ] },
    { m: 5, title: 'Итог и экзамен', sub: 'собираем курс в единую картину', para: 'повторение',
      lessons: [
        { id:'m5-l1', file:'m5-l1.html', title:'Итоговое повторение',
          desc:'Карта всех методов и чек-лист «что знать наизусть».', min:60 },
        { id:'m5-l2', file:'m5-l2.html', title:'Пробный экзамен',
          desc:'Вариант по стереометрии с разбором. Порог 75%.', min:90 }
      ] }
  ];
  window.COURSE = COURSE;

  // Плоский список уроков в порядке прохождения
  function flat(){
    var a=[]; COURSE.forEach(function(mod){ mod.lessons.forEach(function(l){ a.push({mod:mod, l:l}); }); });
    return a;
  }
  window.CourseFlat = flat;

  // Навигация «предыдущий / следующий» для урока по id.
  // Вызов из урока: CourseNav.render(currentId)
  window.CourseNav = {
    render: function(currentId, hostSel){
      var list = flat();
      var idx = -1;
      for(var i=0;i<list.length;i++){ if(list[i].l.id===currentId){ idx=i; break; } }
      var host = document.querySelector(hostSel || '[data-lesson-nav]');
      if(!host || idx<0) return;
      var prev = idx>0 ? list[idx-1] : null;
      var next = idx<list.length-1 ? list[idx+1] : null;
      var A = window.ICON ? window.ICON.arrowL : '';
      var B = window.ICON ? window.ICON.arrowR : '';
      host.className = 'lesson-nav';
      host.innerHTML =
        (prev ? '<a class="prev" href="'+prev.l.file+'"><div class="dir">'+A+' Назад</div><div class="ttl">'+prev.l.title+'</div></a>'
              : '<a class="prev disabled"><div class="dir">Назад</div><div class="ttl">—</div></a>') +
        (next ? '<a class="next" href="'+next.l.file+'"><div class="dir">Дальше '+B+'</div><div class="ttl">'+next.l.title+'</div></a>'
              : '<a class="next" href="../index.html"><div class="dir">К карте курса '+B+'</div><div class="ttl">Готово</div></a>');
    }
  };
})();
