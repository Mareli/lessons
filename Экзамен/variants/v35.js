VARIANTS[35] = {
    label: "Вариант 35",
    tasks: [
      {
        text: `При каком значении переменной выражение $\\dfrac{m}{n-2}$ <b>НЕ</b> имеет смысла:`,
        opts: [
          ["а", "$-2$"], ["б", "$-1$"], ["в", "$0$"], ["г", "$1$"], ["д", "$2$"],
        ],
        sol: `Дробь не имеет смысла при нулевом знаменателе:
$$n - 2 = 0 \\implies n = 2$$
<div class="sol-ans">Ответ: д)&ensp;$2$</div>`
      },
      {
        text: `Если к разности чисел $-1{,}2$ и $0{,}6$ прибавить $1{,}8$, то получится число:`,
        opts: [
          ["а", "$-0{,}9$"], ["б", "$-0{,}8$"], ["в", "$0$"], ["г", "$1{,}2$"], ["д", "$3{,}6$"],
        ],
        sol: `$$(-1{,}2 - 0{,}6) + 1{,}8 = -1{,}8 + 1{,}8 = 0$$
<div class="sol-ans">Ответ: в)&ensp;$0$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "около четырёхугольника $ABCD$, где $\\angle A = 40^{\\circ}$, $\\angle C = 140^{\\circ}$, можно описать окружность;"],
          ["б", "$\\sin 30^{\\circ} = \\sin 150^{\\circ}$;"],
          ["в", "вписанный угол, опирающийся на диаметр, — прямой;"],
          ["г", "в любом равнобедренном треугольнике все высоты равны между собой?"],
        ],
        sol: `<ul>
<li>а) $\\angle A + \\angle C = 40°+140°=180°$ ⟹ около него можно описать окружность — <b>верно</b></li>
<li>б) $\\sin30°=\\sin(180°-30°)=\\sin150°=0{,}5$ — <b>верно</b></li>
<li>в) Вписанный угол на диаметре $= 90°$ — <b>верно</b></li>
<li>г) «Все высоты равнобедренного треугольника равны» — <b style="color:#dc2626">НЕВЕРНО</b>. В равнобедренном (но не равностороннем) треугольнике две высоты к боковым сторонам равны, но высота к основанию — другая.</li>
</ul>
<div class="sol-ans">Ответ: г)</div>`
      },
      {
        text: `Из $4$ кг муки получается $3{,}2$ кг печенья.
               Сколько надо муки, чтобы испечь $2{,}4$ кг печенья?`,
        sol: `<b>Метод прямой пропорции:</b> если две величины прямо пропорциональны, то отношение их соответствующих значений равно: $\\dfrac{a_1}{b_1} = \\dfrac{a_2}{b_2}$.
<br><b>Шаг 1.</b> Обозначим $x$ — искомое количество муки (в кг), необходимое для $2{,}4$ кг печенья.
<br><b>Шаг 2.</b> Так как количество печенья прямо пропорционально количеству муки (чем больше муки — тем больше печенья), составим пропорцию:
$$\\dfrac{4\\text{ кг муки}}{3{,}2\\text{ кг печенья}} = \\dfrac{x}{2{,}4\\text{ кг печенья}}$$
<b>Шаг 3.</b> По основному свойству пропорции произведение крайних членов равно произведению средних, откуда:
$$x = \\dfrac{4\\cdot 2{,}4}{3{,}2} = \\dfrac{9{,}6}{3{,}2} = 3\\text{ кг}$$
<div class="sol-ans">Ответ: $3$ кг муки</div>`
      },
      {
        text: `Найдите $\\text{НОК}(14;\\; 42;\\; 336)$.
               В ответ запишите число, обратное полученному.`,
        sol: `Разложим на простые множители:
$$14 = 2\\cdot7, \\quad 42 = 2\\cdot3\\cdot7, \\quad 336 = 2^4\\cdot3\\cdot7$$
НОК берёт <em>наибольшие</em> степени каждого простого:
$$\\text{НОК} = 2^4\\cdot3\\cdot7 = 16\\cdot21 = 336$$
Обратное число: $\\dfrac{1}{336}$.
<div class="sol-ans">Ответ: $\\dfrac{1}{336}$</div>`
      },
      {
        text: `$ABCD$ — параллелограмм, $BK$ — высота, проведённая к стороне $AD$,
               $CD = 10$ см, $KD = 7$ см, $\\angle A = 60^{\\circ}$.
               Найдите периметр параллелограмма.`,
        sol: `<b>Свойство параллелограмма:</b> противоположные стороны параллелограмма равны.
<br>Значит, $AB = CD = 10$ см.
<svg viewBox="0 0 220 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="20,100 70,13 190,13 140,100" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <line x1="70" y1="13" x2="70" y2="100" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="70,100 78,100 78,92 70,92" fill="none" stroke="#334155" stroke-width="1.2"/>
  <path d="M 40 100 A 20 20 0 0 0 30 83" fill="none" stroke="#555" stroke-width="1.2"/>
  <circle cx="70" cy="100" r="2.5" fill="#334155"/>
  <text x="4" y="110" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="63" y="8" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="193" y="8" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="142" y="110" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="63" y="110" font-size="11" font-family="serif" font-style="italic">K</text>
  <text x="32" y="82" font-size="10" fill="#555">60°</text>
  <text x="37" y="62" font-size="11" fill="#334155">10</text>
  <text x="40" y="106" font-size="10" fill="#475569">AK=5</text>
  <text x="95" y="106" font-size="10" fill="#475569">KD=7</text>
  <text x="74" y="60" font-size="11" fill="#16a34a">h</text>
</svg>
<b>Шаг 1.</b> Рассмотрим прямоугольный треугольник $ABK$ ($\\angle BKA = 90°$, $\\angle A = 60°$, $AB = 10$ см).
<br>По <b>определению косинуса</b> острого угла прямоугольного треугольника: $\\cos\\alpha = \\dfrac{\\text{прилежащий катет}}{\\text{гипотенуза}}$.
<br>Здесь прилежащий к углу $A$ катет — $AK$, гипотенуза — $AB$:
$$\\cos 60° = \\dfrac{AK}{AB} \\implies AK = AB\\cdot\\cos 60° = 10\\cdot\\dfrac{1}{2} = 5\\text{ см}$$
<b>Шаг 2.</b> Находим длину стороны $AD$:
$$AD = AK + KD = 5 + 7 = 12\\text{ см}$$
<b>Шаг 3.</b> <b>Формула периметра параллелограмма:</b> $P = 2(a + b)$, где $a$, $b$ — соседние стороны.
$$P = 2(AB + AD) = 2(10 + 12) = 44\\text{ см}$$
<div class="sol-ans">Ответ: $44$ см</div>`
      },
      {
        text: `Сократите дробь $\\dfrac{b^2 + 15b + 56}{b^2 + 3b - 28}$
               и найдите значение полученного выражения при $b = -6$.`,
        sol: `<b>Теорема Виета (для разложения квадратного трёхчлена):</b> $x^2 + px + q = (x - x_1)(x - x_2)$, где $x_1$, $x_2$ — корни уравнения $x^2 + px + q = 0$, причём $x_1 + x_2 = -p$, $x_1\\cdot x_2 = q$.
<br><b>Шаг 1.</b> Разложим числитель $b^2 + 15b + 56$.
<br>Подберём такие два числа, сумма которых $= -15$ (точнее, $= 15$ для $-p$), а произведение $= 56$. Это $7$ и $8$ (так как $7 + 8 = 15$ и $7\\cdot 8 = 56$):
$$b^2 + 15b + 56 = (b + 7)(b + 8)$$
<b>Шаг 2.</b> Разложим знаменатель $b^2 + 3b - 28$.
<br>Подберём числа с суммой $-3$ и произведением $-28$. Это $7$ и $-4$ (так как $7 + (-4) = 3$, а $7\\cdot(-4) = -28$):
$$b^2 + 3b - 28 = (b + 7)(b - 4)$$
<b>Шаг 3.</b> Сокращаем общий множитель $(b + 7)$, считая $b \\neq -7$ и $b \\neq 4$:
$$\\dfrac{(b+7)(b+8)}{(b+7)(b-4)} = \\dfrac{b+8}{b-4}$$
<b>Шаг 4.</b> Подставляем $b = -6$ в полученное выражение:
$$\\dfrac{-6+8}{-6-4} = \\dfrac{2}{-10} = -\\dfrac{1}{5}$$
<div class="sol-ans">Ответ: $\\dfrac{b+8}{b-4}$;&ensp; при $b=-6$ значение равно $-\\dfrac{1}{5}$</div>`
      },
      {
        text: `Найдите сумму всех натуральных чисел, больших $12$ и не превосходящих $121$,
               которые при делении на $6$ дают в остатке $1$.`,
        sol: `<b>Формула суммы $n$ членов арифметической прогрессии:</b> $S_n = \\dfrac{n(a_1 + a_n)}{2}$, где $a_1$ — первый член, $a_n$ — последний, $n$ — число членов.
<br><b>Шаг 1.</b> По определению деления с остатком число вида «$6k+1$» при делении на $6$ даёт остаток $1$. Значит, нужные числа имеют вид $a = 6k+1$, где $k$ — целое неотрицательное.
<br><b>Шаг 2.</b> Найдём допустимые значения $k$ из условия $12 \\lt a \\leq 121$:
$$12 \\lt 6k+1 \\leq 121 \\implies 11 \\lt 6k \\leq 120 \\implies \\dfrac{11}{6} \\lt k \\leq 20$$
Так как $k$ целое, получаем $k = 2,\\ 3,\\ \\ldots,\\ 20$.
<br><b>Шаг 3.</b> Найдём первый и последний члены последовательности:
$$a_1 = 6\\cdot 2 + 1 = 13, \\quad a_n = 6\\cdot 20 + 1 = 121$$
<b>Шаг 4.</b> Числа $13,\\ 19,\\ 25,\\ \\ldots,\\ 121$ образуют арифметическую прогрессию с разностью $d = 6$ (каждое следующее больше предыдущего на $6$).
<br><b>Шаг 5.</b> Найдём количество членов по формуле $n = \\dfrac{a_n - a_1}{d} + 1$:
$$n = \\dfrac{121 - 13}{6} + 1 = 18 + 1 = 19$$
<b>Шаг 6.</b> Применяем формулу суммы:
$$S = \\dfrac{n(a_1 + a_n)}{2} = \\dfrac{19\\cdot(13 + 121)}{2} = \\dfrac{19\\cdot 134}{2} = 19\\cdot 67 = 1273$$
<div class="sol-ans">Ответ: $1273$</div>`
      },
      {
        text: `Квадратный участок земли разбили на четыре части: газон, цветник, огород и сад.
               Сад и цветник — квадраты. Периметр сада — $84$ м, а цветника — $24$ м.
               Чему равен периметр газона?`,
        sol: `<b>Формула периметра квадрата:</b> $P = 4a$, откуда сторона $a = \\dfrac{P}{4}$.
<br><b>Шаг 1.</b> Находим стороны квадратных частей:
<br>— Сторона сада: $84 \\div 4 = 21$ м.
<br>— Сторона цветника: $24 \\div 4 = 6$ м.
<br><b>Шаг 2.</b> Участок разбит одной горизонтальной и одной вертикальной линией на 4 прямоугольные части. Сад и цветник — квадраты, значит их стороны определяют, как поделён участок:
<svg viewBox="0 0 145 145" xmlns="http://www.w3.org/2000/svg" style="max-width:200px;width:100%;height:auto;display:block;margin:8px 0">
  <rect x="10" y="10" width="120" height="120" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="10" y1="37" x2="130" y2="37" stroke="#334155" stroke-width="1.3"/>
  <line x1="97" y1="10" x2="97" y2="130" stroke="#334155" stroke-width="1.3"/>
  <rect x="10" y="10" width="87" height="27" fill="rgba(37,99,235,0.12)" stroke="none"/>
  <rect x="97" y="10" width="33" height="27" fill="rgba(220,38,38,0.12)" stroke="none"/>
  <rect x="10" y="37" width="87" height="93" fill="rgba(22,163,74,0.12)" stroke="none"/>
  <rect x="97" y="37" width="33" height="93" fill="rgba(234,179,8,0.15)" stroke="none"/>
  <text x="45" y="28" font-size="11" text-anchor="middle" fill="#1d4ed8">Газон</text>
  <text x="112" y="26" font-size="9" text-anchor="middle" fill="#dc2626">Цветник</text>
  <text x="50" y="87" font-size="11" text-anchor="middle" fill="#15803d">Сад</text>
  <text x="112" y="87" font-size="10" text-anchor="middle" fill="#92400e">Огород</text>
  <text x="50" y="140" font-size="10" text-anchor="middle" fill="#334155">21 м</text>
  <text x="112" y="140" font-size="10" text-anchor="middle" fill="#334155">6 м</text>
  <text x="4" y="87" font-size="10" fill="#334155" transform="rotate(-90,4,87)">21 м</text>
  <text x="135" y="87" font-size="10" fill="#334155" transform="rotate(-90,135,87)">21 м</text>
  <text x="4" y="26" font-size="10" fill="#334155" transform="rotate(-90,4,26)">6 м</text>
</svg>
<b>Шаг 3.</b> Сторона всего квадратного участка $= 21 + 6 = 27$ м.
<br><b>Шаг 4.</b> Газон — прямоугольник со сторонами $21$ м и $6$ м (по рисунку).
<br>По <b>формуле периметра прямоугольника</b> $P = 2(a + b)$:
$$P_{\\text{газон}} = 2(21 + 6) = 2\\cdot 27 = 54\\text{ м}$$
<div class="sol-ans">Ответ: $54$ м</div>`
      },
      {
        text: `Дан треугольник $ABC$ со сторонами $AC = 6$, $BC = 8$, $AB = 10$.
               Найдите расстояние между центрами описанной и вписанной окружностей треугольника.`,
        sol: `<svg viewBox="0 0 295 260" xmlns="http://www.w3.org/2000/svg" style="max-width:440px;width:100%;height:auto;display:block;margin:10px 0">
  <!-- Масштаб 17px/cm. C=(85,215), A=(187,215), B=(85,79). O=(136,147), R=85. I=(119,181), r=34 -->
  <!-- Описанная окружность -->
  <circle cx="136" cy="147" r="85" fill="rgba(37,99,235,0.05)" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="7,4"/>
  <!-- Вписанная окружность -->
  <circle cx="119" cy="181" r="34" fill="rgba(22,163,74,0.09)" stroke="#16a34a" stroke-width="2"/>
  <!-- Треугольник -->
  <polygon points="85,215 187,215 85,79" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="2.2"/>
  <!-- Прямой угол при C -->
  <polygon points="85,215 98,215 98,202 85,202" fill="none" stroke="#334155" stroke-width="1.5"/>
  <!-- Пунктиры от O до катетов (синий) -->
  <line x1="85" y1="147" x2="136" y2="147" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="5,3"/>
  <line x1="136" y1="147" x2="136" y2="215" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="5,3"/>
  <!-- Пунктиры от I до катетов (зелёный) -->
  <line x1="85" y1="181" x2="119" y2="181" stroke="#16a34a" stroke-width="1.4" stroke-dasharray="5,3"/>
  <line x1="119" y1="181" x2="119" y2="215" stroke="#16a34a" stroke-width="1.4" stroke-dasharray="5,3"/>
  <!-- Маленький прямоугольный треугольник O-M-I -->
  <polygon points="119,181 136,181 136,147" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="1.8"/>
  <!-- Прямой угол у M=(136,181) -->
  <polygon points="136,181 136,173 128,173 128,181" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <!-- Отрезок OI -->
  <line x1="136" y1="147" x2="119" y2="181" stroke="#dc2626" stroke-width="2.8"/>
  <!-- Точки O и I -->
  <circle cx="136" cy="147" r="5.5" fill="#2563eb"/>
  <circle cx="119" cy="181" r="5.5" fill="#16a34a"/>
  <!-- Вершины треугольника -->
  <text x="67" y="229" font-size="18" font-family="serif" font-style="italic" fill="#1e293b">C</text>
  <text x="191" y="229" font-size="18" font-family="serif" font-style="italic" fill="#1e293b">A</text>
  <text x="67" y="73" font-size="18" font-family="serif" font-style="italic" fill="#1e293b">B</text>
  <!-- Центры O и I -->
  <text x="141" y="143" font-size="15" font-family="serif" font-style="italic" fill="#2563eb">O</text>
  <text x="100" y="180" font-size="15" font-family="serif" font-style="italic" fill="#16a34a">I</text>
  <!-- Расстояния O от катетов -->
  <text x="104" y="141" font-size="14" fill="#2563eb" font-weight="bold">3</text>
  <text x="140" y="186" font-size="14" fill="#2563eb" font-weight="bold">4</text>
  <!-- Расстояния I от катетов -->
  <text x="96" y="176" font-size="14" fill="#16a34a" font-weight="bold">2</text>
  <text x="122" y="202" font-size="14" fill="#16a34a" font-weight="bold">2</text>
  <!-- Катеты маленького треугольника -->
  <text x="122" y="176" font-size="13" fill="#dc2626" font-weight="bold">1</text>
  <text x="140" y="167" font-size="13" fill="#dc2626" font-weight="bold">2</text>
  <!-- OI -->
  <text x="106" y="158" font-size="15" fill="#dc2626" font-weight="bold">√5</text>
  <!-- Стороны треугольника -->
  <text x="130" y="229" font-size="13" fill="#64748b">6</text>
  <text x="68" y="152" font-size="13" fill="#64748b">8</text>
  <text x="150" y="138" font-size="12" fill="#64748b">10</text>
  <!-- R и r -->
  <text x="226" y="120" font-size="13" fill="#2563eb">R = 5</text>
  <text x="121" y="196" font-size="12" fill="#16a34a">r = 2</text>
</svg>
<b>Шаг 1. Тип треугольника.</b>
$$6^2+8^2 = 36+64 = 100 = 10^2 \\checkmark$$
Треугольник <b>прямоугольный</b> — прямой угол при $C$.
<br><b>Шаг 2. Центр и радиус описанной окружности $O$.</b>
<br>В прямоугольном треугольнике гипотенуза — диаметр описанной окружности.
Значит, центр $O$ — это просто <b>середина гипотенузы</b> $AB$:
$$R = \\dfrac{AB}{2} = \\dfrac{10}{2} = 5\\text{ см}$$
<b>Шаг 3. Центр и радиус вписанной окружности $I$.</b>
<br>Вписанная окружность касается всех трёх сторон. Её радиус:
$$r = \\dfrac{AC + BC - AB}{2} = \\dfrac{6+8-10}{2} = 2\\text{ см}$$
Центр $I$ стоит на расстоянии $r=2$ от каждой стороны треугольника.
<br><b>Шаг 4. Как далеко $O$ и $I$ от катетов?</b>
<br>Смотрим на рисунок — пунктирные линии от $O$ и $I$ до катетов.
<br><br>
<b>Центр $O$</b> — середина $AB$. Смотрим, как далеко вершины от катета $BC$:
<ul>
<li>Вершина $A$ — на расстоянии $AC = 6$ от $BC$.</li>
<li>Вершина $B$ — прямо на $BC$, расстояние $= 0$.</li>
<li>Середина $O$ — посередине: $(6 + 0) : 2 =$ <b>3</b> от $BC$.</li>
</ul>
Теперь смотрим, как далеко от катета $AC$:
<ul>
<li>Вершина $A$ — прямо на $AC$, расстояние $= 0$.</li>
<li>Вершина $B$ — на расстоянии $BC = 8$ от $AC$.</li>
<li>Середина $O$ — посередине: $(0 + 8) : 2 =$ <b>4</b> от $AC$.</li>
</ul>
<b>Центр $I$</b> — по определению на расстоянии $r=2$ от каждой стороны:
расстояние до $BC$ = <b>2</b>, до $AC$ = <b>2</b>.
<br><br>
<b>Итог таблицей:</b>
<table style="border-collapse:collapse;font-size:13px;margin:6px 0">
<tr style="background:#f1f5f9"><td style="padding:4px 12px;border:1px solid #cbd5e1"></td><td style="padding:4px 12px;border:1px solid #cbd5e1;color:#2563eb;font-weight:bold">до катета BC</td><td style="padding:4px 12px;border:1px solid #cbd5e1;color:#2563eb;font-weight:bold">до катета AC</td></tr>
<tr><td style="padding:4px 12px;border:1px solid #cbd5e1;font-weight:bold;color:#2563eb">O</td><td style="padding:4px 12px;border:1px solid #cbd5e1;text-align:center">3</td><td style="padding:4px 12px;border:1px solid #cbd5e1;text-align:center">4</td></tr>
<tr><td style="padding:4px 12px;border:1px solid #cbd5e1;font-weight:bold;color:#16a34a">I</td><td style="padding:4px 12px;border:1px solid #cbd5e1;text-align:center">2</td><td style="padding:4px 12px;border:1px solid #cbd5e1;text-align:center">2</td></tr>
<tr style="background:#fff7ed"><td style="padding:4px 12px;border:1px solid #cbd5e1;font-weight:bold;color:#dc2626">разность</td><td style="padding:4px 12px;border:1px solid #cbd5e1;text-align:center;font-weight:bold;color:#dc2626">3−2 = 1</td><td style="padding:4px 12px;border:1px solid #cbd5e1;text-align:center;font-weight:bold;color:#dc2626">4−2 = 2</td></tr>
</table>
<b>Шаг 5. Находим $OI$.</b>
<br>Разности — это катеты прямоугольного треугольника (красный на рисунке) между $O$ и $I$.
<br>По теореме Пифагора:
$$OI = \\sqrt{1^2 + 2^2} = \\sqrt{1+4} = \\sqrt{5}\\text{ см}$$
<div class="sol-ans">Ответ: $\\sqrt{5}$ см</div>`
      },
    ]
};
