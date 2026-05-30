VARIANTS[56] = {
    label: "Вариант 56",
    tasks: [
      {
        text: `Определите, какое из данных выражений <b>НЕ</b> имеет смысла при $n = 0$:`,
        opts: [
          ["а", "$\\dfrac{n}{n+7}$"], ["б", "$19n-4\\sqrt{n}$"], ["в", "$\\dfrac{n-6}{n^2+36}$"],
          ["г", "$\\dfrac{n+1}{3n}$"], ["д", "$\\dfrac{n}{\\sqrt{n}-1}$"],
        ],
        sol: `Подставим $n=0$ в каждое выражение и проверим, определено ли оно:<ul>
              <li>а) $\\dfrac{0}{0+7}=\\dfrac{0}{7}=0$ — <b>имеет смысл</b>;</li>
              <li>б) $19\\cdot 0-4\\sqrt{0}=0$ — <b>имеет смысл</b>;</li>
              <li>в) $\\dfrac{0-6}{0^2+36}=\\dfrac{-6}{36}=-\\dfrac{1}{6}$ — <b>имеет смысл</b>;</li>
              <li>г) $\\dfrac{0+1}{3\\cdot 0}=\\dfrac{1}{0}$ — <b>деление на ноль</b>, выражение не определено;</li>
              <li>д) $\\dfrac{0}{\\sqrt{0}-1}=\\dfrac{0}{-1}=0$ — имеет смысл.</li>
              </ul>
              <div class="sol-ans">Ответ: г) $\\dfrac{n+1}{3n}$.</div>`
      },
      {
        text: `Запись числового выражения $\\dfrac{5^{16} \\cdot 5^4}{5^{18}}$ в виде степени с основанием $5$ имеет вид:`,
        opts: [
          ["а", "$5^1$"], ["б", "$5^2$"], ["в", "$5^{38}$"], ["г", "$5^4$"], ["д", "$5^3$"],
        ],
        sol: `Применяем свойства степеней:
              $$\\dfrac{5^{16}\\cdot 5^4}{5^{18}}=\\dfrac{5^{16+4}}{5^{18}}=\\dfrac{5^{20}}{5^{18}}=5^{20-18}=5^2.$$
              <div class="sol-ans">Ответ: б) $5^2$.</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "развёрнутый угол равен $180^{\\circ}$;"],
          ["б", "если из одной точки к прямой проведены перпендикуляр и наклонная, то перпендикуляр меньше наклонной;"],
          ["в", "у любого ромба диагонали равны;"],
          ["г", "диагонали равнобедренной трапеции равны между собой?"],
        ],
        sol: `Проверим каждое утверждение:<ul>
              <li>а) Развёрнутый угол равен $180^{\\circ}$ — <b>верно</b>.</li>
              <li>б) Перпендикуляр — кратчайшее расстояние от точки до прямой, поэтому он меньше любой наклонной — <b>верно</b>.</li>
              <li>в) У ромба диагонали вообще говоря <b>не равны</b> между собой (они равны лишь у квадрата — частного случая ромба). Это утверждение <b>НЕВЕРНО</b>.</li>
              <li>г) У равнобедренной трапеции диагонали равны — <b>верно</b>.</li>
              </ul>
              <div class="sol-ans">Ответ: в).</div>`
      },
      {
        text: `На республиканском субботнике учащиеся высадили кустарники, среди которых — $10$ кустов сирени.
               Какое количество кустарников было высажено, если число кустов сирени составило $8\\%$
               всех высаженных кустарников?`,
        sol: `Пусть всего кустарников $N$. По условию $8\\%$ от $N$ равно $10$:
              $$0{,}08\\cdot N=10\\;\\implies\\; N=\\dfrac{10}{0{,}08}=\\dfrac{10\\cdot 100}{8}=\\dfrac{1000}{8}=125.$$
              <div class="sol-ans">Ответ: $125$ кустарников.</div>`
      },
      {
        text: `Постройте график функции $y = \\dfrac{4}{x} - 1$.
               Определите целое число, которое не принадлежит области значений функции.`,
        sol: `График функции $y=\\dfrac{4}{x}-1$ — гипербола, полученная из $y=\\dfrac{4}{x}$
              сдвигом вниз на $1$. Асимптоты: $x=0$ (вертикальная) и $y=-1$ (горизонтальная).<br>
              <br>
              Из равенства $y=-1+\\dfrac{4}{x}$ выразим $\\dfrac{4}{x}=y+1$.
              Так как $\\dfrac{4}{x}\\neq 0$, то $y+1\\neq 0$, то есть $y\\neq -1$.<br>
              Значит, $E(y)=(-\\infty;-1)\\cup(-1;+\\infty)$.
              Целое число, которое <b>не</b> принадлежит области значений, — это $y=-1$.
              <svg viewBox="0 0 285 245" xmlns="http://www.w3.org/2000/svg" style="max-width:340px;width:100%;height:auto;display:block;margin:8px auto">
  <defs>
    <marker id="v56a5x" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
      <path d="M0,0.5 L7,3 L0,5.5z" fill="#94a3b8"/>
    </marker>
  </defs>
  <line x1="8" y1="120" x2="278" y2="120" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v56a5x)"/>
  <line x1="140" y1="237" x2="140" y2="10" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v56a5x)"/>
  <line x1="8" y1="144" x2="270" y2="144" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="212" y="139" font-size="12" fill="#dc2626" font-style="italic">y = -1</text>
  <polyline points="152,38 154,50 156,62 160,78 164,90 170,100 176,107 182,112 200,118 212,120 224,122 240,123 260,124 270,125" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <polyline points="129,236 130,214 130,200 128,180 124,164 118,152 116,149 110,142 104,138 99,136 92,134 80,132 68,131 56,130 44,130 32,129 20,129" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <line x1="164" y1="116" x2="164" y2="124" stroke="#94a3b8" stroke-width="1"/>
  <text x="161" y="136" font-size="10" fill="#64748b">1</text>
  <line x1="136" y1="144" x2="144" y2="144" stroke="#94a3b8" stroke-width="1"/>
  <text x="120" y="148" font-size="10" fill="#64748b">-1</text>
  <line x1="136" y1="96" x2="144" y2="96" stroke="#94a3b8" stroke-width="1"/>
  <text x="125" y="100" font-size="10" fill="#64748b">1</text>
  <line x1="136" y1="72" x2="144" y2="72" stroke="#94a3b8" stroke-width="1"/>
  <text x="125" y="76" font-size="10" fill="#64748b">2</text>
  <text x="266" y="115" font-size="12" fill="#475569" font-style="italic">x</text>
  <text x="146" y="14" font-size="12" fill="#475569" font-style="italic">y</text>
  <circle cx="164" cy="96" r="3.5" fill="#16a34a"/>
  <text x="168" y="92" font-size="9" fill="#15803d">(1; 3)</text>
  <circle cx="188" cy="108" r="3.5" fill="#16a34a"/>
  <text x="192" y="104" font-size="9" fill="#15803d">(2; 1)</text>
</svg>
              <div class="sol-ans">Ответ: $y=-1$.</div>`
      },
      {
        text: `В правильный треугольник со стороной $a$ вписана окружность. Найдите радиус окружности.`,
        sol: `<b>Формула радиуса вписанной окружности:</b>
              $$r = \\dfrac{S}{s},$$
              где $S$ — площадь треугольника, $s$ — полупериметр.<br>
              <b>Шаг 1.</b> В равностороннем треугольнике со стороной $a$ все углы равны $60^{\\circ}$.<br>
              <b>Шаг 2. Находим площадь.</b><br>
              По формуле площади равностороннего треугольника:
              $$S = \\dfrac{\\sqrt{3}}{4}a^2.$$
              <b>Шаг 3. Находим полупериметр.</b><br>
              Все три стороны равны $a$, поэтому
              $$s = \\dfrac{3a}{2}.$$
              <b>Шаг 4. Подставляем в формулу радиуса.</b>
              $$r = \\dfrac{S}{s} = \\dfrac{\\dfrac{\\sqrt{3}}{4}a^2}{\\dfrac{3a}{2}} = \\dfrac{\\sqrt{3}\\,a^2}{4} \\cdot \\dfrac{2}{3a} = \\dfrac{a\\sqrt{3}}{6}.$$
              <div style="text-align:center;margin:8px 0">
              <svg width="200" height="200" viewBox="-100 -85 200 200" style="background:#fff;border:1px solid #cbd5e1">
                <polygon points="0,-80 69.28,40 -69.28,40" fill="none" stroke="#0f172a" stroke-width="2"/>
                <circle cx="0" cy="13.33" r="26.67" fill="none" stroke="#2563eb" stroke-width="1.5"/>
                <circle cx="0" cy="13.33" r="2" fill="#0f172a"/>
                <line x1="0" y1="13.33" x2="0" y2="40" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4,3"/>
                <text x="4" y="35" font-size="11" fill="#dc2626">r</text>
                <text x="-8" y="-86" font-size="13" fill="#0f172a">A</text>
                <text x="73" y="50" font-size="13" fill="#0f172a">B</text>
                <text x="-88" y="50" font-size="13" fill="#0f172a">C</text>
                <text x="4" y="20" font-size="11" fill="#334155">O</text>
                <text x="-45" y="-15" font-size="11" fill="#334155">a</text>
              </svg>
              </div>
              <div class="sol-ans">Ответ: $r=\\dfrac{a\\sqrt{3}}{6}$.</div>`
      },
      {
        text: `Решите систему неравенств
               $$\\begin{cases} 2 - x > 0, \\\\[4pt] 5x - 2x^2 + 7 \\geq 0 \\end{cases}$$
               и определите количество натуральных решений системы.`,
        sol: `<b>Первое неравенство:</b> $2-x>0\\;\\implies\\; x<2$.<br>
              <b>Второе неравенство:</b> $5x-2x^2+7\\geq 0\\;\\Leftrightarrow\\; 2x^2-5x-7\\leq 0$.<br>
              Корни уравнения $2x^2-5x-7=0$: $D=25+56=81=9^2$,
              $$x=\\dfrac{5\\pm 9}{4}\\;\\implies\\; x_1=\\dfrac{5-9}{4}=-1,\\quad x_2=\\dfrac{5+9}{4}=\\dfrac{14}{4}=\\dfrac{7}{2}.$$
              Парабола ветвями вверх, поэтому $2x^2-5x-7\\leq 0$ при $-1\\leq x\\leq \\dfrac{7}{2}$.<br>
              <br>
              <b>Пересечение:</b> $\\left[-1;\\dfrac{7}{2}\\right)\\cap(-\\infty;2)=\\left[-1;2\\right)$.<br>
              Натуральные решения (целые $\\geq 1$): $x=1$. Их <b>1</b>.
              <div class="sol-ans">Ответ: $x\\in[-1;2)$; натуральных решений $1$ (число $1$).</div>`
      },
      {
        text: `Строительный подрядчик планирует купить $3$ т $600$ кг клинкерного кирпича.
               Масса одного кирпича — $3{,}6$ кг. Во сколько рублей обойдётся наиболее дешёвый вариант
               покупки у одного из трёх поставщиков:<br>
               <br>
               <table style="border-collapse:collapse;font-size:.9rem;width:100%">
               <tr style="background:#f1f5f9"><th style="border:1px solid #cbd5e1;padding:4px 8px">Поставщик</th><th style="border:1px solid #cbd5e1;padding:4px 8px">Цена, р./шт.</th><th style="border:1px solid #cbd5e1;padding:4px 8px">Доставка, р.</th><th style="border:1px solid #cbd5e1;padding:4px 8px">Условие</th></tr>
               <tr><td style="border:1px solid #cbd5e1;padding:4px 8px">А</td><td style="border:1px solid #cbd5e1;padding:4px 8px">2,7</td><td style="border:1px solid #cbd5e1;padding:4px 8px">700</td><td style="border:1px solid #cbd5e1;padding:4px 8px">—</td></tr>
               <tr><td style="border:1px solid #cbd5e1;padding:4px 8px">Б</td><td style="border:1px solid #cbd5e1;padding:4px 8px">2,8</td><td style="border:1px solid #cbd5e1;padding:4px 8px">600</td><td style="border:1px solid #cbd5e1;padding:4px 8px">При заказе свыше 3500 р. — доставка бесплатно</td></tr>
               <tr><td style="border:1px solid #cbd5e1;padding:4px 8px">В</td><td style="border:1px solid #cbd5e1;padding:4px 8px">2,9</td><td style="border:1px solid #cbd5e1;padding:4px 8px">500</td><td style="border:1px solid #cbd5e1;padding:4px 8px">При заказе свыше 3600 р. — доставка со скидкой 50%</td></tr>
               </table>`,
        sol: `<b>Количество кирпичей:</b> $3$ т $600$ кг $=3600$ кг.
              $$N=\\dfrac{3600}{3{,}6}=1000\\text{ штук}.$$
              <b>Поставщик А:</b> $1000\\cdot 2{,}7+700=2700+700=\\mathbf{3400}$ р.<br>
              <b>Поставщик Б:</b> стоимость кирпича $1000\\cdot 2{,}8=2800$ р. Так как $2800<3500$,
              условие бесплатной доставки не выполнено. Итого $2800+600=\\mathbf{3400}$ р.<br>
              <b>Поставщик В:</b> $1000\\cdot 2{,}9=2900$ р. Так как $2900<3600$,
              скидка на доставку не действует. Итого $2900+500=\\mathbf{3400}$ р.<br>
              <br>
              Все три поставщика дают одинаковую стоимость $3400$ р. Наиболее дешёвый вариант — $3400$ р. (любой из поставщиков).
              <div class="sol-ans">Ответ: $3400$ р. (все три поставщика равноценны).</div>`
      },
      {
        text: `Решите уравнение
               $\\dfrac{1}{x^2-9} + \\dfrac{1}{x^2-6x+9} = \\dfrac{1}{2x^2+6x}$.`,
        sol: `<b>Формулы:</b> разность квадратов $a^2 - b^2 = (a-b)(a+b)$; квадрат разности $a^2 - 2ab + b^2 = (a-b)^2$.<br>
              <b>Шаг 1. Раскладываем знаменатели.</b>
              $$x^2 - 9 = (x-3)(x+3),\\quad x^2 - 6x + 9 = (x-3)^2,\\quad 2x^2 + 6x = 2x(x+3).$$
              <b>Шаг 2. Находим ОДЗ.</b><br>
              Знаменатели не равны нулю: $x \\neq 3,\\; x \\neq -3,\\; x \\neq 0$.<br>
              <b>Шаг 3. Умножаем обе части уравнения на общий знаменатель $2x(x-3)^2(x+3)$.</b><br>
              Получаем:
              $$2x(x-3) + 2x(x+3) = (x-3)(x+3).$$
              <b>Шаг 4. Раскрываем скобки.</b>
              $$2x^2 - 6x + 2x^2 + 6x = x^2 - 9,$$
              $$4x^2 = x^2 - 9,$$
              $$3x^2 = -9, \\quad x^2 = -3.$$
              <b>Шаг 5. Анализируем результат.</b><br>
              Квадрат любого действительного числа $\\geq 0$, поэтому равенство $x^2 = -3$ невозможно.
              <div class="sol-ans">Ответ: уравнение не имеет решений.</div>`
      },
      {
        text: `Основания трапеции равны $7$ см и $14$ см, диагонали трапеции равны $13$ см и $20$ см.
               Найдите площадь трапеции.`,
        sol: `Пусть в трапеции $ABCD$: $BC=7$, $AD=14$, $AC=13$, $BD=20$.<br>
              <b>Метод параллельного переноса диагонали.</b> Перенесём диагональ $BD$ параллельно на вектор
              $\\overrightarrow{BC}$: точка $B$ перейдёт в $C$, точка $D$ — в новую точку $D'$ на прямой $AD$.
              Тогда $CD'=BD=20$ и $DD'=BC=7$, поэтому
              $$AD'=AD+DD'=14+7=21.$$
              В треугольнике $ACD'$ известны все три стороны: $AC=13$, $CD'=20$, $AD'=21$.<br>
              <b>Площадь трапеции равна площади треугольника $ACD'$.</b><br>
              По формуле Герона: $p=\\dfrac{13+20+21}{2}=27$,
              $$S=\\sqrt{27\\cdot(27-13)\\cdot(27-20)\\cdot(27-21)}=\\sqrt{27\\cdot 14\\cdot 7\\cdot 6}=\\sqrt{15876}=126.$$
              <svg viewBox="0 0 285 230" xmlns="http://www.w3.org/2000/svg" style="max-width:380px;width:100%;height:auto;display:block;margin:8px auto">
  <polygon points="20,200 50,40 120,40 190,200" fill="rgba(37,99,235,0.07)" stroke="#1e3a8a" stroke-width="2"/>
  <polygon points="20,200 120,40 280,200" fill="rgba(22,163,74,0.10)" stroke="none"/>
  <line x1="20" y1="200" x2="120" y2="40" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="50" y1="40" x2="190" y2="200" stroke="#16a34a" stroke-width="1.8"/>
  <line x1="120" y1="40" x2="280" y2="200" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="5,3"/>
  <line x1="190" y1="200" x2="280" y2="200" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="4,3"/>
  <text x="6" y="214" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="42" y="35" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="122" y="35" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="180" y="214" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="272" y="214" font-size="13" font-family="serif" font-style="italic">D'</text>
  <text x="85" y="216" font-size="10" fill="#334155">AD=14</text>
  <text x="74" y="34" font-size="10" fill="#334155">BC=7</text>
  <text x="42" y="130" font-size="11" fill="#dc2626">AC=13</text>
  <text x="108" y="130" font-size="11" fill="#16a34a">BD=20</text>
  <text x="192" y="130" font-size="11" fill="#16a34a">CD'=20</text>
  <text x="200" y="216" font-size="10" fill="#7c3aed">DD'=7</text>
  <text x="130" y="170" font-size="11" fill="#15803d" font-weight="bold">△ACD'(13-20-21)</text>
</svg>
              <div class="sol-ans">Ответ: $S=126$ см².</div>`
      },
    ]
};
