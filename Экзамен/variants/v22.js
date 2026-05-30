VARIANTS[22] = {
    label: "Вариант 22",
    tasks: [
      {
        text: `Значение выражения $\\dfrac{3}{7} : \\dfrac{7}{8}$ равно:`,
        opts: [
          ["а", "$\\dfrac{49}{24}$"], ["б", "$\\dfrac{21}{8}$"], ["в", "$\\dfrac{24}{49}$"],
          ["г", "$\\dfrac{3}{8}$"], ["д", "$\\dfrac{8}{3}$"],
        ],
        sol: `Деление дробей — умножаем первую на обратную второй:
$$\\dfrac{3}{7} : \\dfrac{7}{8} = \\dfrac{3}{7} \\cdot \\dfrac{8}{7} = \\dfrac{24}{49}$$
<div class="sol-ans">Ответ: в)&ensp;$\\dfrac{24}{49}$</div>`
      },
      {
        text: `Определите, какое из чисел является решением уравнения $-5 = 10x$:`,
        opts: [
          ["а", "$-2$"], ["б", "$2$"], ["в", "$\\dfrac{1}{2}$"],
          ["г", "$-\\dfrac{1}{2}$"], ["д", "$-5$"],
        ],
        sol: `$$-5 = 10x \\implies x = \\dfrac{-5}{10} = -\\dfrac{1}{2}$$
<b>Проверка:</b> $10\\cdot\\bigl(-\\tfrac{1}{2}\\bigr)=-5$ ✓
<div class="sol-ans">Ответ: г)&ensp;$-\\dfrac{1}{2}$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "вертикальные углы равны;"],
          ["б", "на плоскости две прямые, перпендикулярные третьей, параллельны между собой;"],
          ["в", "в любой трапеции углы, прилежащие к боковой стороне, в сумме равны $180^{\\circ}$;"],
          ["г", "существует треугольник со сторонами, равными $10$ см, $6$ см и $4$ см?"],
        ],
        sol: `<ul>
<li>а) Вертикальные углы равны — <b>верно</b></li>
<li>б) На плоскости две прямые, перпендикулярные третьей, параллельны между собой — <b>верно</b></li>
<li>в) В любой трапеции углы, прилежащие к боковой стороне, в сумме равны $180^{\\circ}$ — <b>верно</b></li>
<li>г) Стороны $10$, $6$, $4$: $6+4=10$, но для треугольника нужно <em>строгое</em> неравенство $a+b>c$ — <b style="color:#dc2626">НЕВЕРНО</b> (вырожденный «треугольник»)</li>
</ul>
<div class="sol-ans">Ответ: г)</div>`
      },
      {
        text: `Упростите выражение $-2(m - n) - 3(m + n)$.`,
        sol: `Раскрываем скобки и собираем подобные:
$$-2(m-n)-3(m+n) = -2m+2n-3m-3n = -5m-n$$
<div class="sol-ans">Ответ: $-5m-n$</div>`
      },
      {
        text: `На уроке математики, который длится $45$ минут, $\\dfrac{4}{9}$ всего времени
               учащиеся выполняли самостоятельную работу, а оставшееся время изучали новую тему.
               Сколько минут учащиеся изучали новую тему?`,
        sol: `<b>Правило нахождения части от числа:</b> чтобы найти $\\dfrac{m}{n}$ от числа $A$, умножают $A$ на $\\dfrac{m}{n}$.
<br><b>Шаг 1.</b> Найдём время, затраченное на самостоятельную работу. По условию оно составляет $\\dfrac{4}{9}$ от всего времени урока:
$$\\dfrac{4}{9}\\cdot 45 = \\dfrac{4\\cdot 45}{9} = \\dfrac{180}{9} = 20\\text{ мин}.$$
<b>Шаг 2.</b> Оставшееся время — это разность между длительностью урока и временем на самостоятельную работу:
$$45 - 20 = 25\\text{ мин}.$$
Значит, новую тему изучали $25$ минут.
<div class="sol-ans">Ответ: $25$ минут</div>`
      },
      {
        text: `Разность длин гипотенузы и катета, лежащего в данном треугольнике против угла в $30^{\\circ}$,
               равна $12$ см. Найдите длину окружности, описанной около треугольника.`,
        sol: `<b>Свойство прямоугольного треугольника с углом $30°$:</b> катет, лежащий против угла $30°$, равен половине гипотенузы.
<br><b>Свойство описанной окружности прямоугольного треугольника:</b> гипотенуза является диаметром окружности, описанной около треугольника, поэтому $R=\\dfrac{c}{2}$.
<br><b>Формула длины окружности:</b> $L = 2\\pi R$.
<br><b>Шаг 1.</b> Обозначим гипотенузу $c$. Тогда катет против $30°$ равен $\\dfrac{c}{2}$.
<br><b>Шаг 2.</b> Составим уравнение из условия «разность равна $12$»:
$$c - \\dfrac{c}{2} = 12 \\;\\implies\\; \\dfrac{c}{2} = 12 \\;\\implies\\; c = 24\\text{ см}$$
<svg viewBox="0 0 230 185" xmlns="http://www.w3.org/2000/svg" style="max-width:230px;width:100%;height:auto;display:block;margin:8px 0">
  <circle cx="110" cy="150" r="66" fill="rgba(37,99,235,0.05)" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5,3"/>
  <polygon points="44,150 176,150 143,93" fill="rgba(37,99,235,0.09)" stroke="#334155" stroke-width="1.8"/>
  <polygon points="143,93 137,96 141,102 147,99" fill="none" stroke="#15803d" stroke-width="1.3"/>
  <path d="M 64 150 A 20 20 0 0 0 61 140" fill="none" stroke="#555" stroke-width="1.2"/>
  <line x1="110" y1="150" x2="143" y2="93" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="4,3"/>
  <circle cx="110" cy="150" r="3" fill="#334155"/>
  <text x="30" y="164" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">A</text>
  <text x="178" y="164" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">B</text>
  <text x="145" y="88" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">C</text>
  <text x="105" y="144" font-size="11" font-family="serif" font-style="italic" fill="#334155">O</text>
  <text x="131" y="115" font-size="11" fill="#2563eb" font-style="italic">R</text>
  <text x="66" y="137" font-size="10" fill="#555">30°</text>
  <text x="90" y="170" font-size="10" fill="#334155">AB = 24 см</text>
  <text x="152" y="130" font-size="10" fill="#64748b">BC=12</text>
</svg>
<b>Шаг 3.</b> Радиус описанной окружности:
$$R = \\dfrac{c}{2} = \\dfrac{24}{2} = 12\\text{ см}$$
<b>Шаг 4.</b> Применяем формулу длины окружности:
$$L = 2\\pi R = 2\\pi\\cdot 12 = 24\\pi\\text{ см}$$
<div class="sol-ans">Ответ: $24\\pi$ см</div>`
      },
      {
        text: `Найдите наименьшее целое решение неравенства
               $\\dfrac{(x-5)^2}{x^2+x-20} \\leq 0$.`,
        sol: `<b>Метод интервалов для дробного неравенства:</b> сначала находим ОДЗ (знаменатель $\\neq 0$), затем определяем знаки числителя и знаменателя.
<br><b>Шаг 1.</b> Разложим знаменатель на множители. Ищем два числа с произведением $-20$ и суммой $1$ — это $5$ и $-4$:
$$x^2+x-20=(x+5)(x-4)$$
<b>ОДЗ:</b> $x\\neq -5$ и $x\\neq 4$, иначе знаменатель равен нулю.
<br><b>Шаг 2.</b> Числитель $(x-5)^2$ — квадрат, поэтому $\\geq 0$. Значит дробь $\\leq 0$ в двух случаях:
<ul>
<li>числитель равен нулю: $x=5$ (знаменатель при $x=5$ равен $25+5-20=10\\neq 0$, ОДЗ соблюдено);</li>
<li>числитель строго положителен, а знаменатель отрицателен.</li>
</ul>
<b>Шаг 3.</b> Решаем $(x+5)(x-4)\\lt 0$. Произведение отрицательно, когда множители разных знаков: $-5\\lt x\\lt 4$.
<br><b>Шаг 4.</b> Объединяем: $x\\in(-5;\\,4)\\cup\\{5\\}$.
<br><b>Шаг 5.</b> Целые числа в интервале $(-5;\\;4)$: $-4,-3,-2,-1,0,1,2,3$, и ещё $x=5$.
<br>Наименьшее целое решение — $x=-4$.
<div class="sol-ans">Ответ: наименьшее целое решение $x = -4$</div>`
      },
      {
        text: `Постройте графики уравнений системы
               $$\\begin{cases} 3x + y = 5, \\\\[4pt] y - x^2 = 1 \\end{cases}$$
               и найдите сумму ординат точек пересечения.`,
        sol: `<b>Метод решения:</b> точки пересечения графиков — это решения системы. Используем метод подстановки.
<br><b>Шаг 1.</b> Из первого уравнения выразим $y$: $y = 5 - 3x$.
<br><b>Шаг 2.</b> Подставим во второе уравнение $y - x^2 = 1$:
$$(5-3x)-x^2 = 1 \\;\\implies\\; -x^2 - 3x + 4 = 0 \\;\\implies\\; x^2+3x-4=0$$
<b>Шаг 3.</b> По теореме Виета ищем корни: сумма $-3$, произведение $-4$ — это $-4$ и $1$:
$$(x+4)(x-1)=0 \\;\\implies\\; x_1 = -4,\\; x_2 = 1$$
<b>Шаг 4.</b> Находим $y$ по формуле $y = 5 - 3x$:
<br>при $x = -4$:&ensp;$y = 5 - 3\\cdot(-4) = 5 + 12 = 17$;
<br>при $x = 1$:&ensp;$y = 5 - 3\\cdot 1 = 2$.
<svg viewBox="0 0 240 230" xmlns="http://www.w3.org/2000/svg" style="max-width:240px;width:100%;height:auto;display:block;margin:8px 0">
  <defs>
    <marker id="v22ax" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
    <marker id="v22ay" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
  </defs>
  <line x1="8" y1="210" x2="232" y2="210" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v22ax)"/>
  <line x1="170" y1="222" x2="170" y2="8" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v22ay)"/>
  <line x1="50" y1="206" x2="50" y2="214" stroke="#cbd5e1" stroke-width="1"/><text x="50" y="222" font-size="9" text-anchor="middle" fill="#64748b">−4</text>
  <line x1="80" y1="206" x2="80" y2="214" stroke="#cbd5e1" stroke-width="1"/><text x="80" y="222" font-size="9" text-anchor="middle" fill="#64748b">−3</text>
  <line x1="110" y1="206" x2="110" y2="214" stroke="#cbd5e1" stroke-width="1"/><text x="110" y="222" font-size="9" text-anchor="middle" fill="#64748b">−2</text>
  <line x1="140" y1="206" x2="140" y2="214" stroke="#cbd5e1" stroke-width="1"/><text x="140" y="222" font-size="9" text-anchor="middle" fill="#64748b">−1</text>
  <line x1="200" y1="206" x2="200" y2="214" stroke="#cbd5e1" stroke-width="1"/><text x="200" y="222" font-size="9" text-anchor="middle" fill="#64748b">1</text>
  <line x1="166" y1="30" x2="174" y2="30" stroke="#cbd5e1" stroke-width="1"/><text x="162" y="34" font-size="9" text-anchor="end" fill="#64748b">17</text>
  <line x1="166" y1="180" x2="174" y2="180" stroke="#cbd5e1" stroke-width="1"/><text x="162" y="184" font-size="9" text-anchor="end" fill="#64748b">2</text>
  <line x1="166" y1="195" x2="174" y2="195" stroke="#cbd5e1" stroke-width="1"/><text x="162" y="199" font-size="9" text-anchor="end" fill="#64748b">1</text>
  <polyline points="50,30 65,76 80,116 95,150 110,178 125,196 140,206 155,210 170,206 185,196 200,180" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="50" y1="30" x2="220" y2="200" stroke="#dc2626" stroke-width="2"/>
  <circle cx="50" cy="30" r="4.5" fill="#16a34a" stroke="white" stroke-width="1.5"/>
  <circle cx="200" cy="180" r="4.5" fill="#16a34a" stroke="white" stroke-width="1.5"/>
  <text x="54" y="27" font-size="9" fill="#15803d">(−4; 17)</text>
  <text x="160" y="175" font-size="9" fill="#15803d">(1; 2)</text>
  <text x="40" y="80" font-size="10" fill="#dc2626" font-style="italic">y=5−3x</text>
  <text x="190" y="76" font-size="10" fill="#2563eb" font-style="italic">y=x²+1</text>
  <text x="223" y="214" font-size="11" fill="#555" font-style="italic">x</text>
  <text x="173" y="14" font-size="11" fill="#555" font-style="italic">y</text>
</svg>
<b>Шаг 5.</b> Точки пересечения: $(-4;\\,17)$ и $(1;\\,2)$. Сумма ординат:
$$17 + 2 = 19$$
<div class="sol-ans">Ответ: $19$</div>`
      },
      {
        text: `Три числа, дающие в сумме $18$, являются последовательными членами арифметической прогрессии.
               Если от первого числа вычесть $2$, от второго вычесть $3$, а третье число оставить без изменения,
               то полученные числа будут последовательными членами геометрической прогрессии.
               Найдите эти числа.`,
        sol: `Пусть три члена АП: $6-d$, $6$, $6+d$ (сумма $=3\\cdot6=18$).
<br>После преобразований получаем три члена ГП: $(4-d)$,&ensp;$3$,&ensp;$(6+d)$.
<br>Условие ГП ($b^2=ac$):
$$3^2=(4-d)(6+d) \\implies 9=24+4d-6d-d^2$$
$$9=24-2d-d^2 \\implies d^2+2d-15=0$$
$$D=4+60=64=8^2 \\implies d=\\dfrac{-2\\pm8}{2}$$
<b>$d=3$:</b> АП: $3,\\ 6,\\ 9$.&ensp;ГП: $1,\\ 3,\\ 9$ (знаменатель $3$) ✓
<br><b>$d=-5$:</b> АП: $11,\\ 6,\\ 1$.&ensp;ГП: $9,\\ 3,\\ 1$ (знаменатель $\\tfrac{1}{3}$) ✓
<div class="sol-ans">Ответ: $3,\\ 6,\\ 9$ или $1,\\ 6,\\ 11$</div>`
      },
      {
        text: `$CK$ — медиана треугольника $ABC$, площадь которого $240$ см².
               Точка $E$ — середина медианы $CK$.
               Луч $AE$ пересекает сторону $BC$ в точке $M$.
               Найдите площадь четырёхугольника $КЕМВ$.`,
        sol: `<svg viewBox="0 0 258 215" xmlns="http://www.w3.org/2000/svg" style="max-width:258px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="125,185 113,105 142,78 225,185" fill="rgba(22,163,74,0.18)" stroke="none"/>
  <polygon points="100,25 25,185 225,185" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="100" y1="25" x2="125" y2="185" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="25" y1="185" x2="155" y2="63" stroke="#f97316" stroke-width="1.5"/>
  <polygon points="125,185 113,105 142,78 225,185" fill="none" stroke="#16a34a" stroke-width="1.8"/>
  <circle cx="125" cy="185" r="3.5" fill="#334155"/>
  <circle cx="113" cy="105" r="3.5" fill="#2563eb"/>
  <circle cx="142" cy="78" r="3.5" fill="#f97316"/>
  <text x="96" y="18" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="10" y="198" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="227" y="198" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="121" y="200" font-size="12" font-family="serif" font-style="italic">K</text>
  <text x="96" y="103" font-size="12" font-family="serif" font-style="italic" fill="#2563eb">E</text>
  <text x="145" y="73" font-size="12" font-family="serif" font-style="italic" fill="#f97316">M</text>
  <text x="158" y="158" font-size="12" fill="#16a34a" font-weight="bold">КЕМВ</text>
</svg>
<b>Шаг 1.</b> Медиана $CK$ делит $\\triangle ABC$ пополам ($K$ — середина $AB$):
$$S_{ACK} = S_{BCK} = 120\\text{ см}^2$$
<b>Шаг 2. Находим точку $M$ на $BC$.</b>
<br>Координаты: $A=(0,0)$, $B=(2,0)$, $C=(0,h)$, $K=(1,0)$, $E=\bigl(\tfrac{1}{2},\tfrac{h}{2}\bigr)$.
<br>Прямая $AE$: $y=hx$. Прямая $BC$: $hx+2y=2h$.
<br>Подставляем $y=hx$: $3hx=2h \\implies x=\\dfrac{2}{3}$, $y=\\dfrac{2h}{3}$.
<b>Шаг 3.</b> $S_{\\triangle KEM}$ (вершины $K=(1,0)$, $E=(\tfrac{1}{2},\tfrac{h}{2})$, $M=(\tfrac{2}{3},\tfrac{2h}{3})$):
$$S_{KEM}=\\dfrac{1}{2}\\left|\\left(-\\dfrac{1}{2}\\right)\\cdot\\dfrac{2h}{3}-\\dfrac{h}{2}\\cdot\\left(-\\dfrac{1}{3}\\right)\\right|=\\dfrac{1}{2}\\cdot\\dfrac{h}{6}=\\dfrac{h}{12}$$
<b>Шаг 4.</b> $S_{\\triangle BKM}$: основание $BK=1$, высота из $M$ на $BK$ равна $\\dfrac{2h}{3}$:
$$S_{BKM}=\\dfrac{1}{2}\cdot1\\cdot\\dfrac{2h}{3}=\\dfrac{h}{3}$$
<b>Шаг 5.</b> $S_{\\triangle ABC}=h=240$.
$$S_{\\text{КЕМВ}}=S_{KEM}+S_{BKM}=\\dfrac{240}{12}+\\dfrac{240}{3}=20+80=100\\text{ см}^2$$
<div class="sol-ans">Ответ: $100$ см²</div>`
      },
    ]
};
