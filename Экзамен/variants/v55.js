VARIANTS[55] = {
    label: "Вариант 55",
    tasks: [
      {
        text: `Определите, какое из данных выражений <b>НЕ</b> имеет смысла при $x = 0$:`,
        opts: [
          ["а", "$\\dfrac{5x}{x^2+49}$"], ["б", "$4\\sqrt{x}-6x$"], ["в", "$\\dfrac{x-6}{2x}$"],
          ["г", "$\\dfrac{x}{x-9}$"], ["д", "$\\dfrac{x}{\\sqrt{x}-1}$"],
        ],
        sol: `Подставим $x=0$ в каждое выражение и проверим, определено ли оно:<ul>
              <li>а) $\\dfrac{5\\cdot 0}{0^2+49}=\\dfrac{0}{49}=0$ — <b>имеет смысл</b>;</li>
              <li>б) $4\\sqrt{0}-6\\cdot 0=0$ — <b>имеет смысл</b>;</li>
              <li>в) $\\dfrac{0-6}{2\\cdot 0}=\\dfrac{-6}{0}$ — <b>деление на ноль</b>, выражение не определено;</li>
              <li>г) $\\dfrac{0}{0-9}=\\dfrac{0}{-9}=0$ — имеет смысл;</li>
              <li>д) $\\dfrac{0}{\\sqrt{0}-1}=\\dfrac{0}{-1}=0$ — имеет смысл.</li>
              </ul>
              <div class="sol-ans">Ответ: в) $\\dfrac{x-6}{2x}$.</div>`
      },
      {
        text: `Запись числового выражения $\\dfrac{7^{13}}{7^6 \\cdot 7^5}$ в виде степени с основанием $7$ имеет вид:`,
        opts: [
          ["а", "$7^1$"], ["б", "$7^{26}$"], ["в", "$7^3$"], ["г", "$7^4$"], ["д", "$7^5$"],
        ],
        sol: `Применяем свойства степеней:
              $$\\dfrac{7^{13}}{7^6\\cdot 7^5}=\\dfrac{7^{13}}{7^{6+5}}=\\dfrac{7^{13}}{7^{11}}=7^{13-11}=7^2.$$
              <b>Замечание:</b> в предложенных вариантах нет $7^2$. Возможно, в условии опечатка
              (например, должно быть $7^{14}$ — тогда $\\dfrac{7^{14}}{7^{11}}=7^3$ и подходит вариант <b>в)</b>).
              <div class="sol-ans">Ответ: $7^2$ (в предложенных вариантах отсутствует; вероятно, опечатка — тогда в) $7^3$).</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "прямой угол равен $90^{\\circ}$;"],
          ["б", "если из одной точки к прямой проведены перпендикуляр и наклонная, то наклонная меньше перпендикуляра;"],
          ["в", "углы при большем основании равнобедренной трапеции равны между собой;"],
          ["г", "у квадрата все углы равны между собой?"],
        ],
        sol: `Проверим каждое утверждение:<ul>
              <li>а) Прямой угол действительно равен $90^{\\circ}$ — <b>верно</b>.</li>
              <li>б) Перпендикуляр — это <b>кратчайшее</b> расстояние от точки до прямой, поэтому
              перпендикуляр <b>меньше</b> любой наклонной, проведённой из той же точки.
              Значит утверждение «наклонная меньше перпендикуляра» — <b>НЕВЕРНО</b>.</li>
              <li>в) В равнобедренной трапеции углы при каждом основании равны — верно.</li>
              <li>г) У квадрата все углы равны $90^{\\circ}$ — верно.</li>
              </ul>
              <div class="sol-ans">Ответ: б).</div>`
      },
      {
        text: `В библиотеке $12\\%$ всех книг — словари.
               Какое количество книг в библиотеке, если словарей $900$?`,
        sol: `Пусть всего книг $N$. По условию $12\\%$ от $N$ равно $900$:
              $$0{,}12\\cdot N=900\\;\\implies\\; N=\\dfrac{900}{0{,}12}=\\dfrac{900\\cdot 100}{12}=\\dfrac{90000}{12}=7500.$$
              <div class="sol-ans">Ответ: $7500$ книг.</div>`
      },
      {
        text: `Постройте график функции $y = \\dfrac{2}{x} + 1$.
               Определите целое число, которое не принадлежит области значений функции.`,
        sol: `График функции $y=\\dfrac{2}{x}+1$ — гипербола, полученная из $y=\\dfrac{2}{x}$
              сдвигом вверх на $1$. Асимптоты: $x=0$ (вертикальная) и $y=1$ (горизонтальная).<br>
              <br>
              Найдём область значений. Из равенства $y=1+\\dfrac{2}{x}$ выразим $\\dfrac{2}{x}=y-1$.
              Так как $\\dfrac{2}{x}\\neq 0$ (числитель $2\\neq 0$), то $y-1\\neq 0$, то есть $y\\neq 1$.<br>
              Значит, $E(y)=(-\\infty;1)\\cup(1;+\\infty)$.
              Целое число, которое <b>не</b> принадлежит области значений, — это $y=1$.
              <svg viewBox="0 0 285 245" xmlns="http://www.w3.org/2000/svg" style="max-width:340px;width:100%;height:auto;display:block;margin:8px auto">
  <defs>
    <marker id="v55a5x" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
      <path d="M0,0.5 L7,3 L0,5.5z" fill="#94a3b8"/>
    </marker>
  </defs>
  <!-- Origin (140,120), scale 24px/unit -->
  <!-- Координатные оси -->
  <line x1="8" y1="120" x2="278" y2="120" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v55a5x)"/>
  <line x1="140" y1="237" x2="140" y2="10" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v55a5x)"/>
  <!-- Асимптота y=1 (красная пунктирная) -->
  <line x1="8" y1="96" x2="270" y2="96" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="218" y="91" font-size="12" fill="#dc2626" font-style="italic">y = 1</text>
  <!-- Правая ветвь гиперболы (x &gt; 0) -->
  <polyline points="152,2 156,18 160,36 164,48 170,58 176,64 182,69 188,72 200,77 212,80 224,82 236,84 248,85 260,86 270,87" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <!-- Левая ветвь гиперболы (x &lt; 0) -->
  <polyline points="131,228 130,210 128,192 125,174 122,160 118,148 116,144 110,134 104,128 99,124 92,120 80,115 68,112 56,110 44,108 32,107 20,106 12,105" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <!-- Метки делений на осях -->
  <line x1="164" y1="116" x2="164" y2="124" stroke="#94a3b8" stroke-width="1"/>
  <text x="161" y="136" font-size="10" fill="#64748b">1</text>
  <line x1="188" y1="116" x2="188" y2="124" stroke="#94a3b8" stroke-width="1"/>
  <text x="185" y="136" font-size="10" fill="#64748b">2</text>
  <line x1="116" y1="116" x2="116" y2="124" stroke="#94a3b8" stroke-width="1"/>
  <text x="109" y="136" font-size="10" fill="#64748b">−1</text>
  <line x1="92" y1="116" x2="92" y2="124" stroke="#94a3b8" stroke-width="1"/>
  <text x="85" y="136" font-size="10" fill="#64748b">−2</text>
  <line x1="136" y1="96" x2="144" y2="96" stroke="#94a3b8" stroke-width="1"/>
  <text x="125" y="100" font-size="10" fill="#64748b">1</text>
  <line x1="136" y1="48" x2="144" y2="48" stroke="#94a3b8" stroke-width="1"/>
  <text x="125" y="52" font-size="10" fill="#64748b">3</text>
  <line x1="136" y1="72" x2="144" y2="72" stroke="#94a3b8" stroke-width="1"/>
  <text x="125" y="76" font-size="10" fill="#64748b">2</text>
  <line x1="136" y1="144" x2="144" y2="144" stroke="#94a3b8" stroke-width="1"/>
  <text x="120" y="148" font-size="10" fill="#64748b">−1</text>
  <!-- Метки осей -->
  <text x="266" y="115" font-size="12" fill="#475569" font-style="italic">x</text>
  <text x="146" y="14" font-size="12" fill="#475569" font-style="italic">y</text>
  <!-- Контрольные точки -->
  <circle cx="92" cy="120" r="3.5" fill="#16a34a"/>
  <text x="74" y="115" font-size="9" fill="#15803d">(−2; 0)</text>
  <circle cx="164" cy="48" r="3.5" fill="#16a34a"/>
  <text x="168" y="44" font-size="9" fill="#15803d">(1; 3)</text>
  <circle cx="188" cy="72" r="3" fill="#16a34a"/>
  <text x="192" y="69" font-size="9" fill="#15803d">(2; 2)</text>
  <circle cx="116" cy="144" r="3" fill="#16a34a"/>
  <text x="84" y="156" font-size="9" fill="#15803d">(−1; −1)</text>
</svg>
              <div class="sol-ans">Ответ: $y=1$.</div>`
      },
      {
        text: `Найдите радиус окружности, описанной около правильного треугольника со стороной $a$.`,
        sol: `<b>Теорема синусов:</b> в любом треугольнике
              $$\\dfrac{a}{\\sin\\alpha} = 2R,$$
              где $a$ — сторона, $\\alpha$ — угол, противолежащий этой стороне, $R$ — радиус описанной окружности.<br>
              <b>Шаг 1.</b> В правильном (равностороннем) треугольнике все углы равны $60^{\\circ}$, поэтому угол, противолежащий стороне $a$, равен $60^{\\circ}$.<br>
              <b>Шаг 2.</b> Применяем теорему синусов:
              $$\\dfrac{a}{\\sin 60^{\\circ}} = 2R \\implies R = \\dfrac{a}{2 \\sin 60^{\\circ}}.$$
              <b>Шаг 3.</b> Подставляем табличное значение $\\sin 60^{\\circ} = \\dfrac{\\sqrt{3}}{2}$:
              $$R = \\dfrac{a}{2 \\cdot \\dfrac{\\sqrt{3}}{2}} = \\dfrac{a}{\\sqrt{3}} = \\dfrac{a\\sqrt{3}}{3}.$$
              (Последний шаг — умножение числителя и знаменателя на $\\sqrt{3}$, чтобы избавиться от иррациональности в знаменателе.)
              <div style="text-align:center;margin:8px 0">
              <svg width="220" height="220" viewBox="-110 -110 220 220" style="background:#fff;border:1px solid #cbd5e1">
                <circle cx="0" cy="0" r="80" fill="none" stroke="#2563eb" stroke-width="1.5"/>
                <polygon points="0,-80 69.28,40 -69.28,40" fill="none" stroke="#0f172a" stroke-width="2"/>
                <circle cx="0" cy="0" r="2.5" fill="#0f172a"/>
                <line x1="0" y1="0" x2="0" y2="-80" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4,3"/>
                <text x="-22" y="-35" font-size="12" fill="#dc2626">R</text>
                <text x="-6" y="-86" font-size="13" fill="#0f172a">A</text>
                <text x="74" y="48" font-size="13" fill="#0f172a">B</text>
                <text x="-86" y="48" font-size="13" fill="#0f172a">C</text>
                <text x="6" y="6" font-size="11" fill="#334155">O</text>
                <text x="-50" y="-22" font-size="11" fill="#334155">a</text>
              </svg>
              </div>
              <div class="sol-ans">Ответ: $R=\\dfrac{a\\sqrt{3}}{3}$.</div>`
      },
      {
        text: `Решите систему неравенств
               $$\\begin{cases} 3 - x > 0, \\\\[4pt] 11x - 3x^2 + 14 \\geq 0 \\end{cases}$$
               и определите количество натуральных решений системы.`,
        sol: `<b>Первое неравенство:</b> $3-x>0\\;\\implies\\; x<3$.<br>
              <b>Второе неравенство:</b> умножим на $-1$ (знак неравенства меняется):
              $$11x-3x^2+14\\geq 0\\;\\Leftrightarrow\\; 3x^2-11x-14\\leq 0.$$
              Корни уравнения $3x^2-11x-14=0$: $D=121+168=289=17^2$,
              $$x=\\dfrac{11\\pm 17}{6}\\;\\implies\\; x_1=-1,\\quad x_2=\\dfrac{28}{6}=\\dfrac{14}{3}.$$
              Парабола ветвями вверх, поэтому $3x^2-11x-14\\leq 0$ при $-1\\leq x\\leq \\dfrac{14}{3}$.<br>
              <br>
              <b>Пересечение:</b> $-1\\leq x<3$.<br>
              Натуральные решения (целые $\\geq 1$): $x=1,\\;2$. Их <b>2</b>.
              <div class="sol-ans">Ответ: $x\\in[-1;3)$; натуральных решений $2$ (числа $1$ и $2$).</div>`
      },
      {
        text: `Строительный подрядчик планирует купить $4$ т $300$ кг одинарного облицовочного кирпича.
               Масса одного кирпича — $4{,}3$ кг. Во сколько рублей обойдётся наиболее дешёвый вариант
               покупки у одного из трёх поставщиков:<br>
               <br>
               <table style="border-collapse:collapse;font-size:.9rem;width:100%">
               <tr style="background:#f1f5f9"><th style="border:1px solid #cbd5e1;padding:4px 8px">Поставщик</th><th style="border:1px solid #cbd5e1;padding:4px 8px">Цена, р./шт.</th><th style="border:1px solid #cbd5e1;padding:4px 8px">Доставка, р.</th><th style="border:1px solid #cbd5e1;padding:4px 8px">Условие</th></tr>
               <tr><td style="border:1px solid #cbd5e1;padding:4px 8px">А</td><td style="border:1px solid #cbd5e1;padding:4px 8px">1,70</td><td style="border:1px solid #cbd5e1;padding:4px 8px">700</td><td style="border:1px solid #cbd5e1;padding:4px 8px">—</td></tr>
               <tr><td style="border:1px solid #cbd5e1;padding:4px 8px">Б</td><td style="border:1px solid #cbd5e1;padding:4px 8px">1,80</td><td style="border:1px solid #cbd5e1;padding:4px 8px">600</td><td style="border:1px solid #cbd5e1;padding:4px 8px">При заказе свыше 1500 р. — доставка бесплатно</td></tr>
               <tr><td style="border:1px solid #cbd5e1;padding:4px 8px">В</td><td style="border:1px solid #cbd5e1;padding:4px 8px">1,90</td><td style="border:1px solid #cbd5e1;padding:4px 8px">500</td><td style="border:1px solid #cbd5e1;padding:4px 8px">При заказе свыше 1600 р. — доставка со скидкой 50%</td></tr>
               </table>`,
        sol: `<b>Количество кирпичей:</b> $4$ т $300$ кг $=4300$ кг.
              $$N=\\dfrac{4300}{4{,}3}=1000\\text{ штук}.$$
              <b>Поставщик А:</b> $1000\\cdot 1{,}70+700=1700+700=\\mathbf{2400}$ р.<br>
              <b>Поставщик Б:</b> стоимость кирпича $1000\\cdot 1{,}80=1800$ р. Так как $1800>1500$,
              доставка бесплатна. Итого $\\mathbf{1800}$ р.<br>
              <b>Поставщик В:</b> $1000\\cdot 1{,}90=1900$ р. Так как $1900>1600$, доставка со скидкой $50\\%$:
              $\\dfrac{500}{2}=250$ р. Итого $1900+250=\\mathbf{2150}$ р.<br>
              <br>
              Сравниваем: $1800<2150<2400$. Самый дешёвый — поставщик <b>Б</b>.
              <div class="sol-ans">Ответ: $1800$ р. (поставщик Б).</div>`
      },
      {
        text: `Решите уравнение
               $\\dfrac{6}{x^2-36} + \\dfrac{1}{x^2-12x+36} + \\dfrac{1}{2x+12} = 0$.`,
        sol: `<b>Формулы:</b> разность квадратов $a^2 - b^2 = (a-b)(a+b)$; квадрат разности $a^2 - 2ab + b^2 = (a-b)^2$.<br>
              <b>Шаг 1. Раскладываем знаменатели.</b>
              $$x^2 - 36 = (x-6)(x+6),\\quad x^2 - 12x + 36 = (x-6)^2,\\quad 2x + 12 = 2(x+6).$$
              <b>Шаг 2. Находим ОДЗ.</b><br>
              Знаменатели не должны быть равны нулю: $x \\neq 6,\\; x \\neq -6$.<br>
              <b>Шаг 3. Умножаем обе части уравнения на общий знаменатель $2(x-6)^2(x+6)$.</b><br>
              Получаем (после сокращений):
              $$12(x-6) + 2(x+6) + (x-6)^2 = 0.$$
              <b>Шаг 4. Раскрываем скобки.</b>
              $$12x - 72 + 2x + 12 + x^2 - 12x + 36 = 0,$$
              $$x^2 + 2x - 24 = 0.$$
              <b>Шаг 5. Решаем квадратное уравнение.</b><br>
              Дискриминант: $D = 4 + 96 = 100$, $\\sqrt{D} = 10$.
              $$x = \\dfrac{-2 \\pm 10}{2} \\implies x_1 = 4,\\; x_2 = -6.$$
              <b>Шаг 6. Проверяем по ОДЗ.</b><br>
              $x = -6$ не входит в ОДЗ — отбрасываем. Остаётся $x = 4$.
              <div class="sol-ans">Ответ: $x=4$.</div>`
      },
      {
        text: `Основания трапеции равны $5$ см и $10$ см, диагонали трапеции равны $13$ см и $14$ см.
               Найдите площадь трапеции.`,
        sol: `Пусть в трапеции $ABCD$: $BC=5$, $AD=10$, $AC=13$, $BD=14$.<br>
              <b>Метод параллельного переноса диагонали.</b> Перенесём диагональ $BD$ параллельно на вектор
              $\\overrightarrow{BC}$: точка $B$ перейдёт в $C$, точка $D$ — в новую точку $D'$ на прямой $AD$.
              Тогда $CD'=BD=14$ и $DD'=BC=5$, поэтому
              $$AD'=AD+DD'=10+5=15.$$
              В треугольнике $ACD'$ известны все три стороны: $AC=13$, $CD'=14$, $AD'=15$.<br>
              <b>Площадь трапеции равна площади треугольника $ACD'$</b> (так как $BCDD'$ — параллелограмм,
              и площадь $\\triangle BCD$ равна площади $\\triangle DCD'$).<br>
              По формуле Герона: $p=\\dfrac{13+14+15}{2}=21$,
              $$S=\\sqrt{21\\cdot(21-13)\\cdot(21-14)\\cdot(21-15)}=\\sqrt{21\\cdot 8\\cdot 7\\cdot 6}=\\sqrt{7056}=84.$$
              <svg viewBox="0 0 285 230" xmlns="http://www.w3.org/2000/svg" style="max-width:380px;width:100%;height:auto;display:block;margin:8px auto">
  <!-- Точные пропорции 13-14-15 (масштаб 16px/см). A=(20,200), B=(46,21), C=(126,21), D=(180,200), D'=(260,200) -->
  <!-- Трапеция ABCD -->
  <polygon points="20,200 46,21 126,21 180,200" fill="rgba(37,99,235,0.07)" stroke="#1e3a8a" stroke-width="2"/>
  <!-- Треугольник ACD' (равновелик трапеции, стороны 13-14-15) -->
  <polygon points="20,200 126,21 260,200" fill="rgba(22,163,74,0.10)" stroke="none"/>
  <!-- Диагональ AC (красная) -->
  <line x1="20" y1="200" x2="126" y2="21" stroke="#dc2626" stroke-width="1.8"/>
  <!-- Диагональ BD (зелёная) -->
  <line x1="46" y1="21" x2="180" y2="200" stroke="#16a34a" stroke-width="1.8"/>
  <!-- Перенесённая диагональ CD' = BD (зелёная пунктирная) -->
  <line x1="126" y1="21" x2="260" y2="200" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="5,3"/>
  <!-- Продолжение AD до D' (фиолетовое) -->
  <line x1="180" y1="200" x2="260" y2="200" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="4,3"/>
  <!-- Подписи вершин -->
  <text x="6" y="214" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="38" y="16" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="128" y="16" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="170" y="214" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="262" y="214" font-size="13" font-family="serif" font-style="italic">D'</text>
  <!-- Длины -->
  <text x="80" y="216" font-size="10" fill="#334155">AD=10</text>
  <text x="76" y="14" font-size="10" fill="#334155">BC=5</text>
  <text x="60" y="125" font-size="11" fill="#dc2626">AC=13</text>
  <text x="100" y="125" font-size="11" fill="#16a34a">BD=14</text>
  <text x="180" y="125" font-size="11" fill="#16a34a">CD'=14</text>
  <text x="200" y="216" font-size="10" fill="#7c3aed">DD'=5</text>
  <text x="135" y="170" font-size="11" fill="#15803d" font-weight="bold">△ACD' (13-14-15)</text>
</svg>
              <div class="sol-ans">Ответ: $S=84$ см².</div>`
      },
    ]
};
