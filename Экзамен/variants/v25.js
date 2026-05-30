VARIANTS[25] = {
    label: "Вариант 25",
    tasks: [
      {
        text: `Какое из приведённых ниже выражений тождественно равно произведению $-2(-5-a)$:`,
        opts: [
          ["а", "$10-a$"], ["б", "$2a-10$"], ["в", "$10+2a$"],
          ["г", "$10-2a$"], ["д", "$2a-5$"],
        ],
        sol: `Раскрываем скобки:
$$-2(-5-a) = (-2)\\cdot(-5) + (-2)\\cdot(-a) = 10 + 2a$$
<div class="sol-ans">Ответ: в)&ensp;$10+2a$</div>`
      },
      {
        text: `Значение выражения $68{,}3 - 50{,}08$ равно:`,
        opts: [
          ["а", "$8{,}38$"], ["б", "$8{,}22$"], ["в", "$18{,}32$"],
          ["г", "$7{,}32$"], ["д", "$18{,}22$"],
        ],
        sol: `$$68{,}30 - 50{,}08 = 18{,}22$$
<div class="sol-ans">Ответ: д)&ensp;$18{,}22$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "треугольник со сторонами $3$, $4$, $5$ — прямоугольный;"],
          ["б", "центр описанной окружности треугольника лежит на пересечении серединных перпендикуляров к его сторонам;"],
          ["в", "если у параллелограмма диагонали равны, то это прямоугольник;"],
          ["г", "вписанный угол равен соответствующему центральному углу?"],
        ],
        sol: `<ul>
<li>а) $3^2+4^2=25=5^2$ ⟹ прямоугольный — <b>верно</b></li>
<li>б) Центр описанной окружности — точка пересечения серединных перпендикуляров — <b>верно</b></li>
<li>в) Если диагонали параллелограмма равны — это прямоугольник — <b>верно</b></li>
<li>г) «Вписанный угол равен центральному» — <b style="color:#dc2626">НЕВЕРНО</b>. Вписанный угол равен <em>половине</em> центрального угла, опирающегося на ту же дугу.</li>
</ul>
<div class="sol-ans">Ответ: г)</div>`
      },
      {
        text: `Последовательность $-18;\\; -16;\\; -14;\\; \\ldots$ — арифметическая прогрессия.
               Продолжите её далее, записав ещё три члена прогрессии.`,
        sol: `Разность прогрессии: $d = -16-(-18) = 2$.
<br>Продолжаем, прибавляя $2$ к каждому члену:
$$-14+2=-12; \\ -12+2=-10; \\ -10+2=-8$$
<div class="sol-ans">Ответ: $-12;\;-10;\;-8$</div>`
      },
      {
        text: `В треугольнике две стороны равны $6$ см и $10$ см,
               а сумма углов, противолежащих этим сторонам, равна $120^{\\circ}$.
               Найдите третью сторону треугольника.`,
        sol: `Пусть $a=6$, $b=10$ — данные стороны, $\\alpha$ и $\\beta$ — углы, им противолежащие.
<br>По условию: $\\alpha+\\beta=120°$. Значит, третий угол:
$$\\gamma = 180°-120°=60°$$
Угол $\\gamma$ заключён <em>между</em> сторонами $a=6$ и $b=10$.
<svg viewBox="0 0 275 175" xmlns="http://www.w3.org/2000/svg" style="max-width:275px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="80,152 220,152 122,79" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <path d="M 100 152 A 20 20 0 0 0 94 135" fill="none" stroke="#555" stroke-width="1.2"/>
  <text x="66" y="166" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="222" y="166" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="120" y="73" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="100" y="138" font-size="10" fill="#555">60°</text>
  <text x="70" y="116" font-size="12" fill="#334155">6</text>
  <text x="148" y="165" font-size="12" fill="#334155">10</text>
  <text x="175" y="108" font-size="12" fill="#1d4ed8">$c$</text>
</svg>
По теореме косинусов (для стороны $c$, противолежащей углу $\\gamma=60°$):
$$c^2 = a^2+b^2-2ab\\cos\\gamma = 6^2+10^2-2\\cdot6\\cdot10\\cdot\\cos60°$$
$$c^2 = 36+100-120\\cdot\\tfrac{1}{2} = 136-60 = 76$$
$$c = \\sqrt{76} = 2\\sqrt{19}\\text{ см}$$
<div class="sol-ans">Ответ: $2\\sqrt{19}$ см</div>`
      },
      {
        text: `После проведения профилактических мероприятий необходимо наполнить один из бассейнов
               спорткомплекса объёмом $1500$ л.
               Через первый кран в бассейн вливается $30$ л воды в минуту, а через второй — $20$ л в минуту.
               За какое время бассейн будет наполнен, если открыть оба крана одновременно?`,
        sol: `<b>Правило совместной работы:</b> при одновременной работе производительности (скорости наполнения) складываются. <b>Формула времени:</b> $t=\\dfrac{V}{v}$, где $V$ — объём, $v$ — суммарная производительность.
<br><b>Шаг 1.</b> Найдём суммарную производительность двух кранов. Так как краны работают одновременно, объёмы воды, поступающие в минуту, складываются:
$$v = 30 + 20 = 50\\text{ л/мин}.$$
<b>Шаг 2.</b> Делим объём бассейна на совместную производительность, чтобы найти время наполнения:
$$t = \\dfrac{V}{v} = \\dfrac{1500}{50} = 30\\text{ мин}.$$
<div class="sol-ans">Ответ: $30$ минут</div>`
      },
      {
        text: `Найдите наибольшее целое число, принадлежащее множеству решений системы неравенств
               $$\\begin{cases} \\dfrac{1}{3}(x+3) \\geq \\dfrac{6x-7}{4}, \\\\[6pt] \\dfrac{1}{4}x + 3 \\leq 6{,}5x + 2. \\end{cases}$$`,
        sol: `<b>Метод решения системы неравенств:</b> решаем каждое неравенство отдельно, затем берём пересечение решений.
<br><b>Шаг 1. Решаем первое неравенство.</b> Умножим обе части на $12$ (общий знаменатель), чтобы избавиться от дробей:
$$\\dfrac{1}{3}(x+3) \\geq \\dfrac{6x-7}{4} \\;\\;\\bigg|\\cdot 12$$
$$4(x+3) \\geq 3(6x-7)$$
$$4x+12 \\geq 18x-21$$
$$12+21 \\geq 18x-4x$$
$$33 \\geq 14x \\;\\implies\\; x \\leq \\dfrac{33}{14}\\approx 2{,}36$$
<b>Шаг 2. Решаем второе неравенство.</b>
$$\\dfrac{1}{4}x + 3 \\leq 6{,}5x + 2$$
$$3-2 \\leq 6{,}5x - 0{,}25x$$
$$1 \\leq 6{,}25x \\;\\implies\\; x \\geq \\dfrac{1}{6{,}25}=\\dfrac{4}{25}=0{,}16$$
<b>Шаг 3. Пересечение решений:</b> $\\dfrac{4}{25}\\leq x\\leq\\dfrac{33}{14}$, то есть приблизительно $0{,}16\\leq x\\leq 2{,}36$.
<svg viewBox="0 0 280 56" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;width:100%;height:auto;display:block;margin:6px 0">
  <defs><marker id="v25t7" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="28" x2="272" y2="28" stroke="#bbb" stroke-width="1.2" marker-end="url(#v25t7)"/>
  <line x1="55" y1="24" x2="55" y2="32" stroke="#777" stroke-width="1"/><text x="55" y="44" font-size="10" text-anchor="middle" fill="#555">0</text>
  <line x1="115" y1="24" x2="115" y2="32" stroke="#777" stroke-width="1"/><text x="115" y="44" font-size="10" text-anchor="middle" fill="#555">1</text>
  <line x1="175" y1="24" x2="175" y2="32" stroke="#777" stroke-width="1"/><text x="175" y="44" font-size="10" text-anchor="middle" fill="#555">2</text>
  <line x1="235" y1="24" x2="235" y2="32" stroke="#777" stroke-width="1"/><text x="235" y="44" font-size="10" text-anchor="middle" fill="#555">3</text>
  <line x1="65" y1="28" x2="207" y2="28" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
  <circle cx="65" cy="28" r="5" fill="#2563eb"/>
  <circle cx="207" cy="28" r="5" fill="#2563eb"/>
  <text x="65" y="16" font-size="9" text-anchor="middle" fill="#2563eb">4/25</text>
  <text x="207" y="16" font-size="9" text-anchor="middle" fill="#2563eb">33/14</text>
  <circle cx="175" cy="28" r="4" fill="none" stroke="#16a34a" stroke-width="2"/>
  <text x="175" y="16" font-size="9" text-anchor="middle" fill="#16a34a">2</text>
</svg>
<b>Шаг 4.</b> Среди целых чисел в промежутке $[0{,}16;\\,2{,}36]$ есть $1$ и $2$. Наибольшее из них — $x=2$.
<div class="sol-ans">Ответ: $2$</div>`
      },
      {
        text: `Постройте график функции $y = \\dfrac{(2x-5)^2}{2x-5}$.
               Определите, при каких значениях аргумента значение функции не больше $7$.`,
        sol: `<b>Правило сокращения дроби:</b> если множитель встречается в числителе и в знаменателе, его можно сократить, но только при условии, что он не равен нулю.
<br><b>Шаг 1.</b> Найдём ОДЗ. Знаменатель не должен равняться нулю:
$$2x-5\\neq 0 \\;\\implies\\; x\\neq\\dfrac{5}{2}.$$
<b>Шаг 2.</b> Упростим выражение. В числителе $(2x-5)^2=(2x-5)\\cdot(2x-5)$, поэтому при $x\\neq\\dfrac{5}{2}$ один множитель $(2x-5)$ сокращается:
$$y = \\dfrac{(2x-5)^2}{2x-5} = 2x-5,\\quad x\\neq\\dfrac{5}{2}.$$
Значит, график — это прямая $y=2x-5$ с <b>выколотой точкой</b> при $x=\\dfrac{5}{2}$, где $y=2\\cdot\\dfrac{5}{2}-5=0$.
<svg viewBox="0 0 215 220" xmlns="http://www.w3.org/2000/svg" style="max-width:215px;width:100%;height:auto;display:block;margin:8px 0">
  <defs>
    <marker id="v25ax" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
    <marker id="v25ay" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
  </defs>
  <line x1="10" y1="165" x2="208" y2="165" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v25ax)"/>
  <line x1="70" y1="212" x2="70" y2="12" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v25ay)"/>
  <line x1="84" y1="207" x2="168" y2="39" stroke="#2563eb" stroke-width="2"/>
  <line x1="10" y1="67" x2="205" y2="67" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5,3"/>
  <line x1="154" y1="165" x2="154" y2="67" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="105" cy="165" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="154" cy="67" r="4" fill="#16a34a"/>
  <line x1="66" y1="67" x2="74" y2="67" stroke="#94a3b8" stroke-width="1"/><text x="56" y="71" font-size="9" fill="#64748b">7</text>
  <line x1="66" y1="165" x2="74" y2="165" stroke="#94a3b8" stroke-width="1"/>
  <line x1="84" y1="161" x2="84" y2="169" stroke="#94a3b8" stroke-width="1"/><text x="84" y="180" font-size="9" text-anchor="middle" fill="#64748b">1</text>
  <line x1="154" y1="161" x2="154" y2="169" stroke="#94a3b8" stroke-width="1"/><text x="154" y="180" font-size="9" text-anchor="middle" fill="#16a34a">6</text>
  <text x="105" y="179" font-size="9" text-anchor="middle" fill="#2563eb">5/2</text>
  <text x="170" y="44" font-size="10" fill="#2563eb" font-style="italic">y=2x−5</text>
  <text x="158" y="62" font-size="10" fill="#dc2626">y=7</text>
  <text x="200" y="169" font-size="11" fill="#555" font-style="italic">x</text>
  <text x="73" y="18" font-size="11" fill="#555" font-style="italic">y</text>
</svg>
<b>Шаг 3.</b> Решаем неравенство $y\\leq 7$. Подставляем упрощённое выражение:
$$2x-5\\leq 7 \\;\\implies\\; 2x\\leq 12 \\;\\implies\\; x\\leq 6.$$
<b>Шаг 4.</b> Учитываем ОДЗ — точка $x=\\dfrac{5}{2}$ выколота из графика, значит её исключаем из ответа.
<div class="sol-ans">Ответ: $x\\leq 6$, $x\\neq\\dfrac{5}{2}$</div>`
      },
      {
        text: `На плане размеры прямоугольника $32$ мм $\\times$ $25$ мм.
               В реальности площадь прямоугольника равна $200$ см².
               Изобразите в заданном масштабе квадрат, если по реальным измерениям
               его периметр на $230$ мм больше периметра прямоугольника.`,
        sol: `<b>Шаг 1. Масштаб.</b>
<br>Площадь прямоугольника на плане: $32\\cdot25=800$ мм². В реальности: $200$ см² $=20000$ мм².
$$k^2=\\dfrac{20000}{800}=25 \\implies k=5$$
Масштаб $1:5$ (1 мм на плане = 5 мм в реальности).
<br><b>Шаг 2. Периметр прямоугольника (реальный).</b>
<br>Реальные размеры: $32\\cdot5=160$ мм и $25\\cdot5=125$ мм.
$$P_{\\text{пр}} = 2(160+125) = 570\\text{ мм}$$
<b>Шаг 3. Сторона квадрата.</b>
$$P_{\\text{кв}} = 570+230 = 800\\text{ мм} \\implies a = \\dfrac{800}{4}=200\\text{ мм}$$
<b>Шаг 4. Сторона квадрата на плане.</b>
$$a_{\\text{план}} = \\dfrac{200}{5} = 40\\text{ мм}$$
<svg viewBox="0 0 310 165" xmlns="http://www.w3.org/2000/svg" style="max-width:310px;width:100%;height:auto;display:block;margin:8px 0">
  <rect x="12" y="18" width="112" height="88" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.5"/>
  <text x="62" y="72" font-size="11" text-anchor="middle" fill="#334155">Прямоугольник</text>
  <text x="62" y="120" font-size="10" text-anchor="middle" fill="#475569">32 мм × 25 мм</text>
  <rect x="155" y="12" width="140" height="140" fill="rgba(22,163,74,0.09)" stroke="#15803d" stroke-width="1.8"/>
  <text x="225" y="87" font-size="11" text-anchor="middle" fill="#15803d">Квадрат</text>
  <text x="225" y="166" font-size="10" text-anchor="middle" fill="#475569">40 мм × 40 мм</text>
  <text x="12" y="13" font-size="9" fill="#64748b">план (масштаб 1:5)</text>
</svg>
<div class="sol-ans">Ответ: квадрат со стороной $40$ мм на плане ($200$ мм в реальности)</div>`
      },
      {
        text: `Точка $M$ — середина стороны $BC$ квадрата $ABCD$, площадь которого равна $20$ см².
               К отрезку $AM$ проведён перпендикуляр $DK$.
               Найдите площадь четырёхугольника $DKMC$.`,
        sol: `Пусть сторона квадрата $a$, тогда $a^2=20$.
<svg viewBox="0 0 218 215" xmlns="http://www.w3.org/2000/svg" style="max-width:218px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="20,25 180,25 180,185 20,185" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="20,25 84,153 180,105 180,25" fill="rgba(22,163,74,0.18)" stroke="#16a34a" stroke-width="1.8"/>
  <line x1="20" y1="185" x2="180" y2="105" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="20" y1="25" x2="84" y2="153" stroke="#f97316" stroke-width="1.5"/>
  <polygon points="84,153 80,146 87,142 91,149" fill="none" stroke="#334155" stroke-width="1.2"/>
  <circle cx="180" cy="105" r="3.5" fill="#334155"/>
  <circle cx="84" cy="153" r="3.5" fill="#f97316"/>
  <text x="6" y="192" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="183" y="192" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="183" y="21" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="6" y="21" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="184" y="108" font-size="12" font-family="serif" font-style="italic">M</text>
  <text x="68" y="162" font-size="12" font-family="serif" font-style="italic" fill="#f97316">K</text>
  <text x="108" y="90" font-size="12" fill="#16a34a" font-weight="bold">DKMC</text>
</svg>
Пусть сторона квадрата $a$, тогда $a^2=20$.
<br><b>Шаг 1.</b> Квадрат разбивается отрезком $AM$ и перпендикуляром $DK$ на три части:
$$S_{ABCD} = S_{\\triangle ABM} + S_{\\triangle ADK} + S_{DKMC}$$
<b>Шаг 2. Находим $S_{\\triangle ABM}$.</b>
<br>Прямой угол при $B$, катеты $AB=a$ и $BM=\\dfrac{a}{2}$:
$$S_{\\triangle ABM}=\\dfrac{1}{2}\\cdot a\\cdot\\dfrac{a}{2}=\\dfrac{a^2}{4}=5\\text{ см}^2$$
<b>Шаг 3. Находим $AM$.</b>
<br>В прямоугольном $\\triangle ABM$ по теореме Пифагора:
$$AM=\\sqrt{AB^2+BM^2}=\\sqrt{a^2+\\dfrac{a^2}{4}}=\\dfrac{a\\sqrt{5}}{2}$$
<b>Шаг 4. Находим $S_{\\triangle ADM}$.</b>
<br>Основание $AD=a$, высота из $M$ на $AD$ = ширина квадрата $= a$:
$$S_{\\triangle ADM}=\\dfrac{1}{2}\\cdot a\\cdot a=\\dfrac{a^2}{2}=10\\text{ см}^2$$
<b>Шаг 5. Находим $DK$.</b>
<br>$DK$ — высота треугольника $ADM$, проведённая к основанию $AM$:
$$S_{\\triangle ADM}=\\dfrac{1}{2}\\cdot AM\\cdot DK \\implies DK=\\dfrac{2\\cdot S_{\\triangle ADM}}{AM}=\\dfrac{2\\cdot\\dfrac{a^2}{2}}{\\dfrac{a\\sqrt{5}}{2}}=\\dfrac{2a}{\\sqrt{5}}$$
<b>Шаг 6. Находим $AK$.</b>
<br>В прямоугольном $\\triangle ADK$ (прямой угол при $K$) по теореме Пифагора:
$$AK=\\sqrt{AD^2-DK^2}=\\sqrt{a^2-\\dfrac{4a^2}{5}}=\\sqrt{\\dfrac{a^2}{5}}=\\dfrac{a}{\\sqrt{5}}$$
<b>Шаг 7. Находим $S_{\\triangle ADK}$.</b>
$$S_{\\triangle ADK}=\\dfrac{1}{2}\\cdot AK\\cdot DK=\\dfrac{1}{2}\\cdot\\dfrac{a}{\\sqrt{5}}\\cdot\\dfrac{2a}{\\sqrt{5}}=\\dfrac{a^2}{5}=4\\text{ см}^2$$
<b>Шаг 8. Итог.</b>
$$S_{DKMC}=S_{ABCD}-S_{\\triangle ABM}-S_{\\triangle ADK}=20-5-4=11\\text{ см}^2$$
<div class="sol-ans">Ответ: $11$ см²</div>`
      },
    ]
};
