VARIANTS[26] = {
    label: "Вариант 26",
    tasks: [
      {
        text: `Какое из приведённых ниже выражений тождественно равно произведению $-3(-4-a)$:`,
        opts: [
          ["а", "$12-a$"], ["б", "$3a-12$"], ["в", "$12+3a$"],
          ["г", "$12-3a$"], ["д", "$3a-4$"],
        ],
        sol: `Раскрываем скобки:
$$-3(-4-a) = (-3)\\cdot(-4) + (-3)\\cdot(-a) = 12 + 3a$$
<div class="sol-ans">Ответ: в)&ensp;$12+3a$</div>`
      },
      {
        text: `Значение выражения $126{,}4 - 100{,}97$ равно:`,
        opts: [
          ["а", "$25{,}78$"], ["б", "$25{,}52$"], ["в", "$125{,}97$"],
          ["г", "$25{,}43$"], ["д", "$125{,}42$"],
        ],
        sol: `$$126{,}40 - 100{,}97 = 25{,}43$$
<div class="sol-ans">Ответ: г)&ensp;$25{,}43$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "если у параллелограмма диагонали перпендикулярны, то это ромб;"],
          ["б", "центр вписанной окружности треугольника лежит на пересечении его биссектрис;"],
          ["в", "треугольник со сторонами $5$, $12$, $13$ — прямоугольный;"],
          ["г", "центральный угол равен половине градусной меры дуги, на которую он опирается?"],
        ],
        sol: `<ul>
<li>а) Если диагонали параллелограмма перпендикулярны — это ромб — <b>верно</b></li>
<li>б) Центр вписанной окружности — точка пересечения биссектрис — <b>верно</b></li>
<li>в) $5^2+12^2=25+144=169=13^2$ ⟹ прямоугольный — <b>верно</b></li>
<li>г) «Центральный угол равен <em>половине</em> дуги» — <b style="color:#dc2626">НЕВЕРНО</b>. Центральный угол в градусах <em>равен</em> градусной мере дуги, на которую он опирается (а не половине).</li>
</ul>
<div class="sol-ans">Ответ: г)</div>`
      },
      {
        text: `Последовательность $-9;\\; -6;\\; -3;\\; \\ldots$ — арифметическая прогрессия.
               Продолжите её далее, записав ещё три члена прогрессии.`,
        sol: `Разность прогрессии: $d = -6-(-9) = 3$.
<br>Продолжаем, прибавляя $3$ к каждому члену:
$$-3+3=0; \\ 0+3=3; \\ 3+3=6$$
<div class="sol-ans">Ответ: $0;\\;3;\\;6$</div>`
      },
      {
        text: `В треугольнике две стороны равны $5$ см и $8$ см,
               а внешний угол при вершине, противолежащей третьей стороне, равен $120^{\\circ}$.
               Найдите третью сторону треугольника.`,
        sol: `<b>Свойство внешнего угла:</b> внешний и внутренний углы при одной вершине в сумме дают $180°$.
<br><b>Теорема косинусов:</b> $c^2 = a^2+b^2-2ab\\cos C$, где $C$ — угол между сторонами $a$ и $b$, $c$ — противолежащая сторона.
<br><b>Шаг 1.</b> Внешний угол при вершине $C$ равен $120°$. Тогда внутренний угол:
$$\\angle C = 180°-120° = 60°$$
<b>Шаг 2.</b> По условию вершина $C$ противолежит третьей стороне, значит стороны $a=5$ и $b=8$ выходят из этой вершины — угол $C$ заключён между ними.
<svg viewBox="0 0 275 175" xmlns="http://www.w3.org/2000/svg" style="max-width:275px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="80,152 220,152 122,79" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <path d="M 100 152 A 20 20 0 0 0 94 135" fill="none" stroke="#555" stroke-width="1.2"/>
  <text x="66" y="166" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="222" y="166" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="120" y="73" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="100" y="138" font-size="10" fill="#555">60°</text>
  <text x="70" y="116" font-size="12" fill="#334155">5</text>
  <text x="148" y="165" font-size="12" fill="#334155">8</text>
  <text x="175" y="108" font-size="12" fill="#1d4ed8">$c$</text>
</svg>
<b>Шаг 3.</b> Применяем теорему косинусов, подставив $a=5$, $b=8$, $\\angle C=60°$ и зная, что $\\cos 60°=\\dfrac{1}{2}$:
$$c^2 = a^2+b^2-2ab\\cos C = 5^2+8^2-2\\cdot 5\\cdot 8\\cdot\\dfrac{1}{2}$$
$$c^2 = 25+64-40 = 49$$
<b>Шаг 4.</b> Извлекаем корень:
$$c = \\sqrt{49} = 7\\text{ см}$$
<div class="sol-ans">Ответ: $7$ см</div>`
      },
      {
        text: `После проведения профилактических мероприятий необходимо наполнить один из бассейнов
               спорткомплекса объёмом $2500$ л.
               Через первый кран в бассейн вливается $60$ л воды в минуту.
               Сколько литров воды в минуту вливается через второй кран, если при работе двух кранов
               одновременно бассейн заполняется через $20$ минут?`,
        sol: `<b>Метод введения переменной:</b> неизвестную скорость наполнения второго крана обозначим за $x$. <b>Правило совместной работы:</b> при одновременной работе кранов их производительности складываются.
<br><b>Шаг 1.</b> Пусть второй кран вливает $x$ л воды в минуту.
<br><b>Шаг 2.</b> Запишем выражение для объёма воды, поступающего в бассейн за $20$ минут. Первый кран за это время даст $20\\cdot 60 = 1200$ л, второй — $20\\cdot x$ л. Суммарно бассейн заполняется на $2500$ л:
$$20\\cdot 60 + 20\\cdot x = 2500.$$
<b>Шаг 3.</b> Решаем уравнение:
$$1200 + 20x = 2500;$$
$$20x = 2500-1200 = 1300;$$
$$x = \\dfrac{1300}{20} = 65\\text{ л/мин}.$$
<div class="sol-ans">Ответ: $65$ л/мин</div>`
      },
      {
        text: `Найдите наименьшее целое число, принадлежащее множеству решений системы неравенств
               $$\\begin{cases} \\dfrac{1}{3}(3-6x) + 3x \\leq 1, \\\\[6pt] \\dfrac{1}{2}(2x-12) - 5x \\leq 0. \\end{cases}$$`,
        sol: `<b>Метод решения:</b> решаем каждое неравенство отдельно и берём пересечение решений.
<br><b>Шаг 1. Решаем первое неравенство.</b> Раскроем скобки:
$$\\dfrac{1}{3}(3-6x)+3x \\leq 1$$
$$1 - 2x + 3x \\leq 1$$
$$1 + x \\leq 1 \\;\\implies\\; x \\leq 0$$
<b>Шаг 2. Решаем второе неравенство.</b> Раскроем скобки:
$$\\dfrac{1}{2}(2x-12) - 5x \\leq 0$$
$$x - 6 - 5x \\leq 0$$
$$-4x \\leq 6 \\;\\implies\\; x \\geq -\\dfrac{3}{2}$$
(при делении на $-4$ знак неравенства меняется)
<br><b>Шаг 3. Пересечение решений:</b> $-\\dfrac{3}{2}\\leq x \\leq 0$, то есть $x\\in[-1{,}5;\\;0]$.
<svg viewBox="0 0 260 52" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%;height:auto;display:block;margin:6px 0">
  <defs><marker id="v26t7" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="28" x2="252" y2="28" stroke="#bbb" stroke-width="1.2" marker-end="url(#v26t7)"/>
  <line x1="60" y1="24" x2="60" y2="32" stroke="#777" stroke-width="1"/><text x="60" y="44" font-size="10" text-anchor="middle" fill="#555">−2</text>
  <line x1="120" y1="24" x2="120" y2="32" stroke="#777" stroke-width="1"/><text x="120" y="44" font-size="10" text-anchor="middle" fill="#555">−1</text>
  <line x1="180" y1="24" x2="180" y2="32" stroke="#777" stroke-width="1"/><text x="180" y="44" font-size="10" text-anchor="middle" fill="#555">0</text>
  <line x1="90" y1="28" x2="180" y2="28" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <circle cx="90" cy="28" r="5" fill="#2563eb"/>
  <circle cx="180" cy="28" r="5" fill="#2563eb"/>
  <text x="85" y="16" font-size="9" text-anchor="middle" fill="#2563eb">−3/2</text>
</svg>
<b>Шаг 4.</b> Целые числа в $[-1{,}5;\\;0]$ — это $-1$ и $0$. Наименьшее из них — $-1$.
<div class="sol-ans">Ответ: $-1$</div>`
      },
      {
        text: `Постройте график функции $y = \\dfrac{(x-4)^2}{x-4}$.
               Определите, при каких значениях аргумента значение функции не меньше $-2$.`,
        sol: `<b>Правило сокращения дроби:</b> множитель из числителя и знаменателя можно сократить только при условии, что он не равен нулю.
<br><b>Шаг 1.</b> Найдём ОДЗ. Знаменатель не должен быть равен нулю:
$$x-4\\neq 0 \\;\\implies\\; x\\neq 4.$$
<b>Шаг 2.</b> Упростим выражение. Числитель $(x-4)^2=(x-4)\\cdot(x-4)$, поэтому при $x\\neq 4$ один множитель $(x-4)$ сокращается:
$$y = \\dfrac{(x-4)^2}{x-4} = x-4,\\quad x\\neq 4.$$
Значит, график — прямая $y=x-4$ с <b>выколотой точкой</b> при $x=4$, где $y=4-4=0$.
<svg viewBox="0 0 215 220" xmlns="http://www.w3.org/2000/svg" style="max-width:215px;width:100%;height:auto;display:block;margin:8px 0">
  <defs>
    <marker id="v26ax" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
    <marker id="v26ay" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
  </defs>
  <line x1="10" y1="145" x2="208" y2="145" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v26ax)"/>
  <line x1="50" y1="212" x2="50" y2="12" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v26ay)"/>
  <line x1="10" y1="189" x2="205" y2="4" stroke="#2563eb" stroke-width="2"/>
  <line x1="10" y1="105" x2="205" y2="105" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5,3"/>
  <line x1="90" y1="145" x2="90" y2="105" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="130" cy="145" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="90" cy="105" r="4" fill="#16a34a"/>
  <line x1="46" y1="105" x2="54" y2="105" stroke="#94a3b8" stroke-width="1"/><text x="34" y="109" font-size="9" fill="#64748b">−2</text>
  <line x1="46" y1="145" x2="54" y2="145" stroke="#94a3b8" stroke-width="1"/>
  <line x1="90" y1="141" x2="90" y2="149" stroke="#94a3b8" stroke-width="1"/><text x="90" y="161" font-size="9" text-anchor="middle" fill="#16a34a">2</text>
  <text x="130" y="159" font-size="9" text-anchor="middle" fill="#2563eb">4</text>
  <text x="165" y="12" font-size="10" fill="#2563eb" font-style="italic">y=x−4</text>
  <text x="168" y="101" font-size="10" fill="#dc2626">y=−2</text>
  <text x="200" y="149" font-size="11" fill="#555" font-style="italic">x</text>
  <text x="53" y="18" font-size="11" fill="#555" font-style="italic">y</text>
</svg>
<b>Шаг 3.</b> Решаем неравенство $y\\geq -2$. Подставляем упрощённое выражение:
$$x-4\\geq -2 \\;\\implies\\; x\\geq 2.$$
<b>Шаг 4.</b> С учётом ОДЗ исключаем точку $x=4$ из ответа.
<div class="sol-ans">Ответ: $x\\geq 2$, $x\\neq 4$</div>`
      },
      {
        text: `На плане размеры прямоугольника $20$ мм $\\times$ $15$ мм.
               В реальности площадь прямоугольника равна $300$ см².
               Изобразите в заданном масштабе квадрат, если по реальным измерениям
               его периметр на $100$ мм больше периметра прямоугольника.`,
        sol: `<b>Шаг 1. Масштаб.</b>
<br>Площадь на плане: $20\\cdot15=300$ мм². В реальности: $300$ см² $=30000$ мм².
$$k^2=\\dfrac{30000}{300}=100 \\implies k=10$$
Масштаб $1:10$ (1 мм на плане = 10 мм в реальности).
<br><b>Шаг 2. Периметр прямоугольника (реальный).</b>
<br>Реальные размеры: $20\\cdot10=200$ мм и $15\\cdot10=150$ мм.
$$P_{\\text{пр}} = 2(200+150) = 700\\text{ мм}$$
<b>Шаг 3. Сторона квадрата.</b>
$$P_{\\text{кв}} = 700+100 = 800\\text{ мм} \\implies a = \\dfrac{800}{4}=200\\text{ мм}$$
<b>Шаг 4. Сторона квадрата на плане.</b>
$$a_{\\text{план}} = \\dfrac{200}{10} = 20\\text{ мм}$$
<svg viewBox="0 0 310 165" xmlns="http://www.w3.org/2000/svg" style="max-width:310px;width:100%;height:auto;display:block;margin:8px 0">
  <rect x="12" y="30" width="100" height="75" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.5"/>
  <text x="62" y="72" font-size="11" text-anchor="middle" fill="#334155">Прямоугольник</text>
  <text x="62" y="120" font-size="10" text-anchor="middle" fill="#475569">20 мм × 15 мм</text>
  <rect x="155" y="18" width="100" height="100" fill="rgba(22,163,74,0.09)" stroke="#15803d" stroke-width="1.8"/>
  <text x="205" y="73" font-size="11" text-anchor="middle" fill="#15803d">Квадрат</text>
  <text x="205" y="134" font-size="10" text-anchor="middle" fill="#475569">20 мм × 20 мм</text>
  <text x="12" y="13" font-size="9" fill="#64748b">план (масштаб 1:10)</text>
</svg>
<div class="sol-ans">Ответ: квадрат со стороной $20$ мм на плане ($200$ мм в реальности)</div>`
      },
      {
        text: `Точка $M$ — середина стороны $BC$ квадрата $ABCD$, площадь которого равна $40$ см².
               К отрезку $DM$ проведён перпендикуляр $AK$.
               Найдите площадь четырёхугольника $ABMK$.`,
        sol: `<svg viewBox="0 0 218 215" xmlns="http://www.w3.org/2000/svg" style="max-width:218px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="20,25 180,25 180,185 20,185" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="20,185 180,185 180,105 84,57" fill="rgba(22,163,74,0.18)" stroke="#16a34a" stroke-width="1.8"/>
  <line x1="20" y1="25" x2="180" y2="105" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="20" y1="185" x2="84" y2="57" stroke="#f97316" stroke-width="1.5"/>
  <polygon points="84,57 88,64 81,68 77,61" fill="none" stroke="#334155" stroke-width="1.2"/>
  <circle cx="180" cy="105" r="3.5" fill="#334155"/>
  <circle cx="84" cy="57" r="3.5" fill="#f97316"/>
  <text x="6" y="192" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="183" y="192" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="183" y="21" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="6" y="21" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="184" y="108" font-size="12" font-family="serif" font-style="italic">M</text>
  <text x="68" y="52" font-size="12" font-family="serif" font-style="italic" fill="#f97316">K</text>
  <text x="108" y="130" font-size="12" fill="#16a34a" font-weight="bold">ABMK</text>
</svg>
<b>Формула площади квадрата:</b> $S_{ABCD}=a^2$, где $a$ — сторона. По условию $a^2 = 40$.
<br><b>Метод решения:</b> используем координаты, чтобы найти точку $K$ — пересечение прямой $DM$ и проходящего через $A$ перпендикуляра к ней.
<br><b>Шаг 1.</b> Введём координаты: $A(0;0)$, $B(a;0)$, $C(a;a)$, $D(0;a)$. Точка $M$ — середина $BC$, поэтому $M\\bigl(a;\\,\\dfrac{a}{2}\\bigr)$.
<br><b>Шаг 2.</b> Уравнение прямой $DM$: проходит через $D(0;a)$ и $M(a;\\,a/2)$. Угловой коэффициент:
$$k_{DM} = \\dfrac{a/2-a}{a-0} = -\\dfrac{1}{2}$$
Уравнение: $y = -\\dfrac{1}{2}x + a$.
<br><b>Шаг 3.</b> Прямая $AK$ перпендикулярна $DM$. Произведение угловых коэффициентов перпендикулярных прямых равно $-1$, значит $k_{AK}=2$. Прямая проходит через $A(0;0)$, поэтому $y=2x$.
<br><b>Шаг 4.</b> Точка $K$ — пересечение этих прямых:
$$2x = -\\dfrac{1}{2}x + a \\;\\implies\\; \\dfrac{5}{2}x = a \\;\\implies\\; x = \\dfrac{2a}{5}$$
$$y = 2\\cdot\\dfrac{2a}{5} = \\dfrac{4a}{5}$$
Значит, $K\\bigl(\\dfrac{2a}{5};\\,\\dfrac{4a}{5}\\bigr)$.
<br><b>Шаг 5.</b> Найдём площадь четырёхугольника $ABMK$ (вершины обходятся по порядку $A\\to B\\to M\\to K$) по формуле площади многоугольника через координаты (формула «шнурков»):
$$S = \\dfrac{1}{2}|x_A(y_B-y_K)+x_B(y_M-y_A)+x_M(y_K-y_B)+x_K(y_A-y_M)|$$
$$= \\dfrac{1}{2}\\left|0+a\\cdot\\dfrac{a}{2}+a\\cdot\\dfrac{4a}{5}+\\dfrac{2a}{5}\\cdot\\left(-\\dfrac{a}{2}\\right)\\right|$$
$$= \\dfrac{1}{2}\\left|\\dfrac{a^2}{2}+\\dfrac{4a^2}{5}-\\dfrac{a^2}{5}\\right| = \\dfrac{1}{2}\\cdot\\dfrac{11a^2}{10} = \\dfrac{11a^2}{20}$$
<b>Шаг 6.</b> Подставим $a^2=40$:
$$S = \\dfrac{11\\cdot 40}{20} = 22\\text{ см}^2$$
<div class="sol-ans">Ответ: $22$ см²</div>`
      },
    ]
};
