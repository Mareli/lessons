VARIANTS[31] = {
    label: "Вариант 31",
    tasks: [
      {
        text: `Значение выражения $3 : \\dfrac{3}{5} + 7$ равно:`,
        opts: [
          ["а", "$9$"], ["б", "$12$"], ["в", "$8{,}4$"],
          ["г", "$7{,}2$"], ["д", "$11$"],
        ],
        sol: `$$3:\\dfrac{3}{5}+7 = 3\\cdot\\dfrac{5}{3}+7 = 5+7 = 12$$
<div class="sol-ans">Ответ: б)&ensp;$12$</div>`
      },
      {
        text: `Запись выражения $\\dfrac{3m}{n^3} \\cdot \\dfrac{n}{m}$ в виде дроби имеет вид:`,
        opts: [
          ["а", "$\\dfrac{3}{n^3}$"], ["б", "$\\dfrac{n^4}{3m^2}$"], ["в", "$\\dfrac{3}{n^2}$"],
          ["г", "$\\dfrac{3m^2}{n^4}$"], ["д", "$\\dfrac{3n}{m}$"],
        ],
        sol: `Сокращаем $m$ и одну степень $n$:
$$\\dfrac{3m}{n^3}\\cdot\\dfrac{n}{m} = \\dfrac{3\\cancel{m}\\cdot\\cancel{n}}{n^3\\cdot\\cancel{m}\\cdot\\cancel{1}} = \\dfrac{3}{n^2}$$
<div class="sol-ans">Ответ: в)&ensp;$\\dfrac{3}{n^2}$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "окружность, вписанная в треугольник, касается всех его сторон;"],
          ["б", "синус острого угла прямоугольного треугольника равен отношению прилежащего катета к гипотенузе;"],
          ["в", "средняя линия треугольника равна половине его основания;"],
          ["г", "радиус описанной окружности треугольника со стороной $a$ и углом $\\alpha$ находится из формулы $\\dfrac{a}{\\sin\\alpha} = 2R$?"],
        ],
        sol: `<ul>
<li>а) Вписанная окружность касается всех сторон — <b>верно</b></li>
<li>б) «Синус равен отношению <em>прилежащего</em> катета к гипотенузе» — <b style="color:#dc2626">НЕВЕРНО</b>. Синус = <em>противолежащий</em> катет / гипотенуза. Прилежащий катет / гипотенуза — это <em>косинус</em>.</li>
<li>в) Средняя линия треугольника $=$ половина основания — <b>верно</b></li>
<li>г) Теорема синусов: $\\dfrac{a}{\\sin\\alpha}=2R$ — <b>верно</b></li>
</ul>
<div class="sol-ans">Ответ: б)</div>`
      },
      {
        text: `Расстояние между городами на карте $5$ см.
               Определите это расстояние на местности, если масштаб карты $1 : 100\\,000$.`,
        sol: `Масштаб $1:100\\,000$ означает: $1$ см на карте $= 100\\,000$ см $= 1$ км на местности.
$$5\\text{ см}\\times100\\,000 = 500\\,000\\text{ см} = 5\\text{ км}$$
<div class="sol-ans">Ответ: $5$ км</div>`
      },
      {
        text: `На покраску пола в спортивном зале школы израсходовали $32$ кг краски,
               что составило $\\dfrac{1}{4}$ всей купленной краски.
               Сколько всего килограммов краски было куплено?`,
        sol: `<b>Правило нахождения числа по его части:</b> чтобы найти всё число, зная его часть $\\dfrac{m}{n}$, нужно эту часть разделить на $\\dfrac{m}{n}$ (или умножить на обратную дробь $\\dfrac{n}{m}$).
<br><b>Шаг 1.</b> Пусть всего было куплено $x$ кг краски. По условию израсходованные $32$ кг составляют $\\dfrac{1}{4}$ от $x$:
$$\\dfrac{1}{4}\\cdot x = 32.$$
<b>Шаг 2.</b> Умножим обе части уравнения на $4$, чтобы найти $x$:
$$x = 32\\cdot 4 = 128\\text{ кг}.$$
<b>Проверка:</b> $\\dfrac{1}{4}\\cdot 128 = 32$ — совпадает с условием.
<div class="sol-ans">Ответ: $128$ кг</div>`
      },
      {
        text: `Найдите наименьшее целое решение двойного неравенства $-12 < 2x - 6 \\leq 4$.`,
        sol: `<b>Метод решения двойного неравенства:</b> выполняем одинаковые действия со всеми тремя частями (прибавлять, вычитать, умножать или делить на положительное число — знак сохраняется; на отрицательное — меняется).
<br><b>Шаг 1.</b> Прибавим $6$ ко всем трём частям:
$$-12+6 \\lt 2x-6+6 \\leq 4+6$$
$$-6 \\lt 2x \\leq 10$$
<b>Шаг 2.</b> Разделим все части на $2$ (положительное число, знак не меняется):
$$-3 \\lt x \\leq 5$$
<svg viewBox="0 0 260 52" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%;height:auto;display:block;margin:6px 0">
  <defs><marker id="v31t6" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="26" x2="252" y2="26" stroke="#bbb" stroke-width="1.2" marker-end="url(#v31t6)"/>
  <line x1="28" y1="22" x2="28" y2="30" stroke="#777" stroke-width="1"/><text x="28" y="43" font-size="10" text-anchor="middle" fill="#555">−3</text>
  <line x1="53" y1="22" x2="53" y2="30" stroke="#777" stroke-width="1"/><text x="53" y="43" font-size="10" text-anchor="middle" fill="#555">−2</text>
  <line x1="103" y1="22" x2="103" y2="30" stroke="#777" stroke-width="1"/><text x="103" y="43" font-size="10" text-anchor="middle" fill="#555">0</text>
  <line x1="203" y1="22" x2="203" y2="30" stroke="#777" stroke-width="1"/><text x="203" y="43" font-size="10" text-anchor="middle" fill="#555">5</text>
  <line x1="28" y1="26" x2="203" y2="26" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
  <circle cx="28" cy="26" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="203" cy="26" r="5" fill="#2563eb"/>
  <circle cx="53" cy="26" r="6" fill="none" stroke="#16a34a" stroke-width="2.5"/>
</svg>
<b>Шаг 3.</b> Так как левое неравенство строгое, $x=-3$ не подходит. Наименьшее целое число, строго большее $-3$, — это $-2$.
<div class="sol-ans">Ответ: $-2$</div>`
      },
      {
        text: `$ABCD$ — прямоугольник с периметром $28$ см, у которого $AC = 10$ см.
               Найдите радиус окружности, вписанной в треугольник $ABD$.`,
        sol: `<b>Шаг 1. Находим стороны прямоугольника.</b>
<br>Пусть $AB = a$, $AD = b$. Тогда:
$$2(a+b)=28 \\implies a+b=14$$
$$a^2+b^2 = AC^2 = 100$$
$$(a+b)^2 = a^2+2ab+b^2 \\implies 196 = 100+2ab \\implies ab=48$$
Из $a+b=14$, $ab=48$: решаем $t^2-14t+48=0 \\implies t=6$ или $t=8$.
Стороны: $AB=8$, $AD=6$ (или наоборот).
<svg viewBox="0 0 120 108" xmlns="http://www.w3.org/2000/svg" style="max-width:165px;width:100%;height:auto;display:block;margin:8px 0">
  <rect x="18" y="22" width="72" height="54" fill="rgba(37,99,235,0.06)" stroke="#94a3b8" stroke-width="1.3"/>
  <polygon points="18,76 90,76 18,22" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="34" cy="60" r="16" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="1.5"/>
  <path d="M18,76 L26,76 L26,68 L18,68" fill="none" stroke="#334155" stroke-width="1.2"/>
  <line x1="34" y1="60" x2="34" y2="76" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="5" y="80" font-size="11" font-family="serif" font-style="italic">A</text>
  <text x="93" y="80" font-size="11" font-family="serif" font-style="italic">B</text>
  <text x="93" y="20" font-size="11" font-family="serif" font-style="italic">C</text>
  <text x="5" y="20" font-size="11" font-family="serif" font-style="italic">D</text>
  <text x="48" y="90" font-size="10" fill="#334155">8 см</text>
  <text x="2" y="53" font-size="10" fill="#334155">6</text>
  <text x="36" y="55" font-size="10" fill="#16a34a">r</text>
  <text x="58" y="48" font-size="10" fill="#475569">BD=10</text>
</svg>
<b>Шаг 2. Треугольник $ABD$.</b>
<br>В прямоугольнике $\\angle DAB=90°$, поэтому $\\triangle ABD$ — <b>прямоугольный</b> с прямым углом при $A$.
Катеты: $AB=8$, $AD=6$. Гипотенуза: $BD=AC=10$.
<br><b>Шаг 3. Радиус вписанной окружности прямоугольного треугольника:</b>
$$r = \\dfrac{AB + AD - BD}{2} = \\dfrac{8+6-10}{2} = \\dfrac{4}{2} = 2\\text{ см}$$
<div class="sol-ans">Ответ: $r = 2$ см</div>`
      },
      {
        text: `При каких действительных значениях $a$ график функции $y = x^2 - 5x + 5a$
               имеет с осью абсцисс единственную общую точку?`,
        sol: `<b>Условие единственной общей точки параболы с осью $Ox$:</b> уравнение $y=0$ должно иметь ровно один корень. Для квадратного уравнения $Ax^2+Bx+C=0$ это значит, что дискриминант $D = B^2-4AC$ равен нулю.
<br><b>Шаг 1.</b> Точки пересечения графика с осью $Ox$ — это корни уравнения $y=0$, то есть:
$$x^2 - 5x + 5a = 0.$$
<b>Шаг 2.</b> Чтобы было ровно одно решение, нужно $D=0$. Вычислим дискриминант ($A=1$, $B=-5$, $C=5a$):
$$D = (-5)^2 - 4\\cdot 1\\cdot 5a = 25 - 20a.$$
<b>Шаг 3.</b> Приравниваем дискриминант к нулю и решаем:
$$25 - 20a = 0 \\;\\implies\\; 20a = 25 \\;\\implies\\; a = \\dfrac{25}{20} = \\dfrac{5}{4}.$$
<div class="sol-ans">Ответ: $a = \\dfrac{5}{4}$</div>`
      },
      {
        text: `Какое наименьшее число членов прогрессии $32{,}5;\\; 37{,}5;\\; 42{,}5;\\; \\ldots$
               нужно взять, чтобы их сумма была больше $2160$?`,
        sol: `<b>Формула суммы первых $n$ членов арифметической прогрессии:</b> $S_n = \\dfrac{2a_1+(n-1)d}{2}\\cdot n$.
<br><b>Шаг 1.</b> Из условия $a_1=32{,}5$. Разность прогрессии $d = 37{,}5-32{,}5 = 5$.
<br><b>Шаг 2.</b> Запишем формулу суммы:
$$S_n = \\dfrac{2\\cdot 32{,}5+(n-1)\\cdot 5}{2}\\cdot n = \\dfrac{65+5n-5}{2}\\cdot n = \\dfrac{n(60+5n)}{2}$$
<b>Шаг 3.</b> Запишем неравенство $S_n \\gt 2160$:
$$\\dfrac{n(60+5n)}{2} \\gt 2160$$
$$n(60+5n) \\gt 4320$$
$$5n^2+60n - 4320 \\gt 0$$
$$n^2+12n-864 \\gt 0$$
<b>Шаг 4.</b> Решаем квадратное уравнение $n^2+12n-864 = 0$:
$$D = 12^2+4\\cdot 864 = 144+3456 = 3600$$
$$\\sqrt{D} = 60,\\quad n = \\dfrac{-12+60}{2} = 24$$
Неравенство выполняется при $n \\gt 24$ (поскольку коэффициент при $n^2$ положителен и нас интересуют натуральные $n$).
<br><b>Шаг 5.</b> Проверим: при $n=24$ имеем $S_{24} = \\dfrac{24\\cdot(60+120)}{2} = \\dfrac{24\\cdot 180}{2} = 2160$ — равно, но нужно строго больше.
<br>При $n=25$: $S_{25} = \\dfrac{25\\cdot(60+125)}{2} = \\dfrac{25\\cdot 185}{2} = 2312{,}5 \\gt 2160$ ✓.
<br>Значит, наименьшее $n = 25$.
<div class="sol-ans">Ответ: наименьшее число членов $= 25$</div>`
      },
      {
        text: `Дана трапеция $ABCD$ с основаниями $AD$ и $BC$, $AB = CD$,
               диагональ $AC$ перпендикулярна стороне $CD$, угол $BAC$ равен углу $DAC$.
               Найдите площадь трапеции, если площадь треугольника $ACD$ равна $6$ см².`,
        sol: `<b>Шаг 1. Находим угол при вершине $A$.</b>
<br>Пусть $\\angle DAC = \\angle BAC = \\alpha$. В прямоугольном $\\triangle ACD$ ($\\angle ACD=90°$):
$$\\angle DAC + \\angle ADC = 90° \\implies \\angle ADC = 90°-\\alpha$$
В равнобедренной трапеции ($AB=CD$) углы при основании $AD$ равны: $\\angle ADC = \\angle DAB$.
$$\\angle DAB = 2\\alpha \\implies 2\\alpha = 90°-\\alpha \\implies \\alpha = 30°$$
Значит, $\\angle DAB = \\angle ADC = 60°$.
<br><b>Шаг 2. Определяем размеры трапеции.</b>
<br>Треугольник $ACD$: $\\angle ACD=90°$, $\\angle DAC=30°$, $\\angle ADC=60°$ — это прямоугольный $30°$-$60°$-$90°$.
<br>Пусть $CD = a$. Тогда $AC = a\\sqrt{3}$, $AD = 2a$.
<svg viewBox="0 0 210 215" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%;height:auto;display:block;margin:10px 0">
  <!-- Треугольник ACD — зелёный -->
  <polygon points="20,185 125,124 160,185" fill="rgba(22,163,74,0.20)" stroke="none"/>
  <!-- Треугольник ABC — синий -->
  <polygon points="20,185 55,124 125,124" fill="rgba(37,99,235,0.15)" stroke="none"/>
  <!-- Контур трапеции -->
  <polygon points="20,185 55,124 125,124 160,185" fill="none" stroke="#334155" stroke-width="2"/>
  <!-- Диагональ AC — красная -->
  <line x1="20" y1="185" x2="125" y2="124" stroke="#dc2626" stroke-width="2.2"/>
  <!-- Прямой угол при C: AC⊥CD -->
  <polygon points="125,124 116,129 121,138 130,133" fill="rgba(0,0,0,0.08)" stroke="#334155" stroke-width="1.4"/>
  <!-- Два равных дуговых угла при A (∠DAC = ∠BAC = 30°) -->
  <path d="M 48 185 A 28 28 0 0 1 44 171" fill="none" stroke="#475569" stroke-width="1.5"/>
  <path d="M 44 171 A 28 28 0 0 1 34 161" fill="none" stroke="#475569" stroke-width="1.5"/>
  <!-- Засечки равенства на дугах -->
  <line x1="45" y1="175" x2="49" y2="181" stroke="#475569" stroke-width="2"/>
  <line x1="36" y1="163" x2="41" y2="168" stroke="#475569" stroke-width="2"/>
  <!-- Дуга 60° при D -->
  <path d="M 138 185 A 22 22 0 0 1 149 166" fill="none" stroke="#475569" stroke-width="1.3"/>
  <!-- Метки вершин -->
  <text x="4" y="198" font-size="15" font-family="serif" font-style="italic" fill="#1e293b">A</text>
  <text x="48" y="116" font-size="15" font-family="serif" font-style="italic" fill="#1e293b">B</text>
  <text x="128" y="116" font-size="15" font-family="serif" font-style="italic" fill="#1e293b">C</text>
  <text x="163" y="198" font-size="15" font-family="serif" font-style="italic" fill="#1e293b">D</text>
  <!-- Метки углов -->
  <text x="52" y="175" font-size="10" fill="#475569">30°</text>
  <text x="38" y="161" font-size="10" fill="#475569">30°</text>
  <text x="130" y="180" font-size="10" fill="#475569">60°</text>
  <!-- Метка перпендикуляра -->
  <text x="108" y="143" font-size="10" fill="#334155">90°</text>
  <!-- Площади треугольников -->
  <text x="102" y="168" font-size="13" fill="#15803d" font-weight="bold" text-anchor="middle">6 см²</text>
  <text x="63" y="150" font-size="13" fill="#1d4ed8" font-weight="bold" text-anchor="middle">3 см²</text>
  <!-- Подписи сторон -->
  <text x="27" y="160" font-size="10" fill="#334155" font-style="italic">a</text>
  <text x="139" y="148" font-size="10" fill="#334155" font-style="italic">a</text>
  <text x="84" y="118" font-size="10" fill="#334155" font-style="italic">a</text>
  <text x="82" y="200" font-size="10" fill="#334155" font-style="italic">2a</text>
</svg>
<b>Шаг 3. Треугольник $ABC$.</b>
<br>В трапеции $AD\\|BC$, поэтому $\\angle DAB + \\angle ABC = 180°$, откуда $\\angle ABC = 120°$.
<br>В $\\triangle ABC$: $\\angle BAC=30°$, $\\angle ABC=120°$, значит $\\angle BCA = 180°-30°-120°=30°$.
<br>Поскольку $\\angle BAC = \\angle BCA = 30°$, треугольник $ABC$ — равнобедренный: $AB = BC = a$.
<br><b>Шаг 4. Площади.</b>
$$S_{ACD} = \\tfrac{1}{2}\\cdot AC\\cdot CD = \\tfrac{1}{2}\\cdot a\\sqrt{3}\\cdot a = \\dfrac{a^2\\sqrt{3}}{2} = 6$$
$$S_{ABC} = \\tfrac{1}{2}\\cdot AB\\cdot BC\\cdot\\sin(\\angle ABC) = \\tfrac{1}{2}\\cdot a\\cdot a\\cdot\\sin120° = \\dfrac{a^2\\sqrt{3}}{4} = \\dfrac{1}{2}\\cdot6 = 3\\text{ см}^2$$
$$S_{ABCD} = S_{ACD} + S_{ABC} = 6 + 3 = 9\\text{ см}^2$$
<div class="sol-ans">Ответ: $9$ см²</div>`
      },
    ]
};
