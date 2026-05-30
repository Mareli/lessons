VARIANTS[9] = {
    label: "Вариант 9",
    tasks: [
      {
        text: `Определите неравенство, множество решений которого изображено на рисунке:`,
        figure: `<svg class="task-fig" viewBox="0 0 250 54" width="250" height="54">
  <line x1="12" y1="26" x2="228" y2="26" stroke="#334155" stroke-width="1.5"/>
  <polygon points="232,26 223,22 223,30" fill="#334155"/>
  <line x1="108" y1="21" x2="108" y2="31" stroke="#334155" stroke-width="1.5"/>
  <line x1="108" y1="26" x2="223" y2="26" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round" opacity="0.65"/>
  <circle cx="108" cy="26" r="5.5" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="108" y="48" text-anchor="middle" font-size="13" font-family="serif" fill="#334155">&#x2212;2</text>
  <text x="237" y="30" font-size="13" font-family="serif" fill="#334155">x</text>
</svg>`,
        opts: [
          ["а", "$x < -2$"], ["б", "$x \\leq -2$"], ["в", "$x > -2$"],
          ["г", "$x \\geq -2$"], ["д", "$x \\in \\mathbb{R}$"],
        ],
        sol: `На рисунке: луч идёт вправо от точки $-2$, точка <b>закрашена</b> (включена).
<br>Закрашенная точка → $\\geq$; луч вправо → $x \\geq -2$.
<div class="sol-ans">Ответ: г)&ensp;$x \\geq -2$</div>`
      },
      {
        text: `$15\\%$ от числа $30$ равны:`,
        opts: [
          ["а", "$0{,}45$"], ["б", "$4{,}5$"], ["в", "$450$"], ["г", "$200$"], ["д", "$2$"],
        ],
        sol: `$$15\\% \\text{ от } 30 = \\frac{15}{100}\\cdot 30 = 0{,}15\\cdot 30 = 4{,}5$$
<div class="sol-ans">Ответ: б)&ensp;$4{,}5$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "площадь квадрата со стороной $a$ равна $a^2$;"],
          ["б", "сумма всех углов параллелограмма равна $360^{\\circ}$;"],
          ["в", "синусом острого угла называется отношение прилежащего катета к гипотенузе;"],
          ["г", "биссектриса равнобедренного треугольника, проведённая к основанию, является и медианой?"],
        ],
        sol: `<ul>
<li>а) Площадь квадрата $= a^2$ — <b>верно</b></li>
<li>б) Сумма углов параллелограмма $= 360°$ — <b>верно</b></li>
<li>в) <b style="color:#dc2626">НЕВЕРНО</b>: $\\sin\\alpha = \\dfrac{\\text{противолежащий катет}}{\\text{гипотенуза}}$</li>
<li>г) Биссектриса к основанию равнобедренного ∆ = медиана — <b>верно</b></li>
</ul>
В утверждении в) описана <em>косинус</em>, а не синус: $\\cos\\alpha = \\dfrac{\\text{прилежащий катет}}{\\text{гипотенуза}}$.
<div class="sol-ans">Ответ: в)</div>`
      },
      {
        text: `Приведите одночлен $4ab^2 \\cdot ab \\cdot b^4a \\cdot (-0{,}5)$ к стандартному виду.`,
        sol: `Числовой коэффициент: $4\\cdot 1\\cdot 1\\cdot(-0{,}5) = -2$.
<br>Степени: $a^{1+1+1}=a^3$;&ensp; $b^{2+1+4}=b^7$.
$$4ab^2\\cdot ab\\cdot b^4a\\cdot(-0{,}5) = -2a^3b^7$$
<div class="sol-ans">Ответ: $-2a^3b^7$</div>`
      },
      {
        text: `Для квадратичной функции $y = -x^2 + 4x$ найдите значения аргумента,
               при которых значение функции равно $3$.`,
        sol: `<b>Чтобы найти аргумент при заданном значении функции</b>, надо приравнять формулу функции к этому значению и решить полученное уравнение относительно $x$.
<br><b>Теорема Виета (обратная):</b> $x^2+px+q=(x-x_1)(x-x_2)$, где $x_1+x_2=-p$, $x_1\\cdot x_2=q$.
<br><br>
<b>Шаг 1.</b> По условию $y=3$. Приравняем формулу функции к $3$:
$$-x^2+4x = 3$$
<b>Шаг 2.</b> Перенесём всё в одну часть, сменив знаки:
$$x^2-4x+3=0$$
<b>Шаг 3.</b> По теореме Виета ищем корни: $x_1+x_2=4$, $x_1\\cdot x_2=3$. Подходят $1$ и $3$:
$$(x-1)(x-3)=0 \\implies x=1 \\text{ или } x=3$$
<svg viewBox="0 0 195 105" xmlns="http://www.w3.org/2000/svg" style="max-width:195px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a9t5" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker></defs>
  <line x1="5" y1="72" x2="182" y2="72" stroke="#bbb" stroke-width="1.2" marker-end="url(#a9t5)"/>
  <line x1="30" y1="98" x2="30" y2="5" stroke="#bbb" stroke-width="1.2" marker-end="url(#a9t5)"/>
  <text x="183" y="76" font-size="10" fill="#777">x</text><text x="32" y="5" font-size="10" fill="#777">y</text>
  <!-- parabola y=-x²+4x: vertex (2,4), zeros (0,0) and (4,0) -->
  <!-- px(x)=30+35x, py(y)=72-12y -->
  <polyline points="30,72 47.5,57 65,36 82.5,25 100,24 117.5,25 135,36 152.5,57 170,72" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- y=3 horizontal line -->
  <line x1="5" y1="36" x2="182" y2="36" stroke="#e11d48" stroke-width="1.4" stroke-dasharray="5,3"/>
  <text x="3" y="34" font-size="9" fill="#e11d48">3</text>
  <!-- intersection points x=1 and x=3 -->
  <circle cx="65" cy="36" r="4.5" fill="#e11d48"/>
  <text x="65" y="54" font-size="11" fill="#e11d48" text-anchor="middle" font-weight="bold">1</text>
  <circle cx="135" cy="36" r="4.5" fill="#e11d48"/>
  <text x="135" y="54" font-size="11" fill="#e11d48" text-anchor="middle" font-weight="bold">3</text>
  <!-- vertex label -->
  <text x="97" y="18" font-size="9" fill="#475569">(2; 4)</text>
</svg>
<div class="sol-ans">Ответ: $x = 1$ и $x = 3$</div>`
      },
      {
        text: `Треугольник $ABC$ — прямоугольный ($\\angle C = 90^{\\circ}$), $AC = 4$ см,
               проекция катета $BC$ на гипотенузу равна $6$ см.
               Найдите длину гипотенузы треугольника $ABC$.`,
        sol: `Опустим высоту $CH$ из прямого угла $C$ на гипотенузу $AB$.
<svg viewBox="0 0 130 115" xmlns="http://www.w3.org/2000/svg" style="max-width:130px;width:100%;height:auto;display:block;margin:10px 0">
  <!-- A=(10,100), B=(100,100), H=(30,100), C=(30,65) -->
  <polygon points="10,100 100,100 30,65" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <!-- altitude CH -->
  <line x1="30" y1="65" x2="30" y2="100" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,2"/>
  <!-- right angle at H -->
  <path d="M23,100 L23,93 L30,93" fill="none" stroke="#555" stroke-width="1.2"/>
  <!-- right angle at C -->
  <path d="M27.5,69.3 L31.8,71.1 L29.5,75.2" fill="none" stroke="#555" stroke-width="1.2"/>
  <!-- labels -->
  <text x="2" y="112" font-size="12" font-family="serif" font-style="italic">A</text>
  <text x="102" y="112" font-size="12" font-family="serif" font-style="italic">B</text>
  <text x="33" y="60" font-size="12" font-family="serif" font-style="italic">C</text>
  <text x="22" y="113" font-size="10" fill="#334155">H</text>
  <!-- AC = 4 label -->
  <text x="12" y="83" font-size="10" fill="#2563eb">AC=4</text>
  <!-- BH = 6 (projection of BC) label -->
  <text x="55" y="112" font-size="10" fill="#e11d48">BH=6</text>
  <!-- AB = ? label -->
  <text x="48" y="96" font-size="10" fill="#334155" text-anchor="middle">AB=?</text>
</svg>
<b>Свойство высоты в прямоугольном треугольнике:</b>
$$AC^2 = AH \\cdot AB \\quad \\text{и} \\quad BC^2 = BH \\cdot AB$$
Из второго соотношения: $BH = \\dfrac{BC^2}{AB}$ — это и есть <em>проекция</em> $BC$ на гипотенузу $= 6$.
<br>Из первого: $AH = \\dfrac{AC^2}{AB} = \\dfrac{16}{AB}$.
<br>Так как $AH + BH = AB$:
$$\\dfrac{16}{AB} + 6 = AB$$
$$AB^2 - 6\\cdot AB - 16 = 0$$
$$(AB-8)(AB+2)=0 \\implies AB = 8\\text{ см}$$
<div class="sol-ans">Ответ: $8$ см</div>`
      },
      {
        text: `Решите систему уравнений
               $$\\begin{cases} x - 4y = 2, \\\\[4pt] xy + 2y = 8. \\end{cases}$$`,
        sol: `<b>Метод подстановки</b> для решения системы: из одного уравнения выражаем одну переменную через другую, подставляем в другое и решаем относительно одной переменной.
<br><b>Теорема Виета (обратная):</b> $y^2+py+q=(y-y_1)(y-y_2)$, где $y_1+y_2=-p$, $y_1\\cdot y_2=q$.
<br><br>
<b>Шаг 1.</b> Из первого уравнения выразим $x$ через $y$:
$$x = 2 + 4y$$
<b>Шаг 2.</b> Подставим $x$ во второе уравнение:
$$(2+4y)y + 2y = 8$$
$$2y + 4y^2 + 2y = 8$$
$$4y^2 + 4y - 8 = 0$$
<b>Шаг 3.</b> Разделим обе части на $4$, чтобы упростить:
$$y^2 + y - 2 = 0$$
<b>Шаг 4.</b> По теореме Виета: $y_1+y_2=-1$, $y_1\\cdot y_2=-2$. Подходят $-2$ и $1$:
$$(y+2)(y-1)=0 \\implies y=-2 \\text{ или } y=1$$
<b>Шаг 5.</b> По формуле $x=2+4y$ находим $x$ для каждого $y$:
<table style="border-collapse:collapse;margin:8px 0"><tr><td style="padding:2px 14px 2px 0"><b>$y=-2$:</b></td><td>$x=2+4(-2)=-6$ &rarr; $(-6;\\,-2)$</td></tr><tr><td style="padding:2px 14px 2px 0"><b>$y=1$:</b></td><td>$x=2+4(1)=6$ &rarr; $(6;\\,1)$</td></tr></table>
<b>Шаг 6.</b> Проверка $(-6;-2)$: $-6-4(-2)=-6+8=2$ ✓; $(-6)(-2)+2(-2)=12-4=8$ ✓
<div class="sol-ans">Ответ: $(-6;\\,-2)$ и $(6;\\,1)$</div>`
      },
      {
        text: `Для перевозки $105$ т груза фирма рассматривала модели грузовых автомобилей МАЗ-4371СО.
               Чтобы выполнить работы в срок, было решено использовать грузовой автомобиль
               грузоподъёмностью на $2$ т больше. В результате для перевозки груза было сделано
               на $6$ рейсов меньше, чем планировалось.
               Найдите грузоподъёмность машины, на которой перевезли груз.`,
        sol: `Пусть первоначальная грузоподъёмность $= p$ т. Число плановых рейсов $= \\dfrac{105}{p}$.
<br>Новая грузоподъёмность $= p+2$ т. Число фактических рейсов $= \\dfrac{105}{p+2}$.
<br>Условие — на $6$ рейсов меньше:
$$\\frac{105}{p} - \\frac{105}{p+2} = 6$$
$$105\\cdot\\frac{(p+2)-p}{p(p+2)} = 6 \\implies \\frac{210}{p(p+2)}=6$$
$$p(p+2) = 35 \\implies p^2+2p-35=0 \\implies (p+7)(p-5)=0$$
$p=5$ (т.к. $p>0$). Грузоподъёмность использованной машины: $p+2 = 7$ т.
<div class="sol-ans">Ответ: $7$ т</div>`
      },
      {
        text: `Определите количество целых решений неравенства
               $$\\dfrac{(-x^2 - x + 6)\\,x^2}{x^2 - x - 2} \\geq 0.$$`,
        sol: `<b>Шаг 1 — разложим на множители.</b>
$$-x^2-x+6 = -(x^2+x-6) = -(x+3)(x-2)$$
$$x^2-x-2 = (x-2)(x+1)$$
Выражение: $\\dfrac{-x^2(x+3)(x-2)}{(x-2)(x+1)}$. <b>ОДЗ:</b> $x\\neq 2$, $x\\neq -1$.
<br><b>Шаг 2 — сократим</b> $(x-2)$ при $x\\neq 2$:
$$\\frac{-x^2(x+3)}{x+1} \\geq 0 \\iff \\frac{x^2(x+3)}{x+1} \\leq 0$$
<b>Шаг 3 — знаковый анализ.</b>
$x^2 \\geq 0$ всегда. При $x=0$: выражение $=0$ ✓. При $x\\neq 0$: $x^2>0$, нужно $\\dfrac{x+3}{x+1}\\leq 0$.
<br>Критические точки: $x=-3$ (числитель $=0$), $x=-1$ (знаменатель $=0$, исключён).
<br>$\\dfrac{x+3}{x+1}\\leq 0$ выполняется при $-3\\leq x < -1$.
<svg viewBox="0 0 265 52" xmlns="http://www.w3.org/2000/svg" style="max-width:265px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a9t9" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="26" x2="255" y2="26" stroke="#bbb" stroke-width="1.2" marker-end="url(#a9t9)"/>
  <line x1="50" y1="22" x2="50" y2="30" stroke="#777" stroke-width="1"/><text x="50" y="44" font-size="10" text-anchor="middle" fill="#555">−4</text>
  <line x1="80" y1="22" x2="80" y2="30" stroke="#777" stroke-width="1"/><text x="80" y="44" font-size="10" text-anchor="middle" fill="#555">−3</text>
  <line x1="110" y1="22" x2="110" y2="30" stroke="#777" stroke-width="1"/><text x="110" y="44" font-size="10" text-anchor="middle" fill="#555">−2</text>
  <line x1="140" y1="22" x2="140" y2="30" stroke="#777" stroke-width="1"/><text x="140" y="44" font-size="10" text-anchor="middle" fill="#555">−1</text>
  <line x1="170" y1="22" x2="170" y2="30" stroke="#777" stroke-width="1"/><text x="170" y="44" font-size="10" text-anchor="middle" fill="#555">0</text>
  <line x1="200" y1="22" x2="200" y2="30" stroke="#777" stroke-width="1"/><text x="200" y="44" font-size="10" text-anchor="middle" fill="#555">1</text>
  <!-- solution [-3,-1) highlighted -->
  <line x1="80" y1="26" x2="140" y2="26" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <circle cx="80" cy="26" r="5" fill="#2563eb"/>
  <circle cx="140" cy="26" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <!-- isolated point x=0 -->
  <circle cx="170" cy="26" r="5" fill="#2563eb"/>
</svg>
Решение: $-3\\leq x < -1$ или $x=0$.
<br>Целые числа: $x=-3,\\,-2,\\,0$ — итого <b>3</b>.
<div class="sol-ans">Ответ: $3$</div>`
      },
      {
        text: `В прямоугольную трапецию с основаниями $4$ и $8$ вписана окружность.
               Найдите площадь трапеции.`,
        sol: `Пусть $a=8$ (большее основание), $b=4$ (меньшее), $h$ — высота, $r$ — радиус окружности.
<svg viewBox="0 0 185 120" xmlns="http://www.w3.org/2000/svg" style="max-width:185px;width:100%;height:auto;display:block;margin:10px 0">
  <!-- A=(15,96), B=(87,96), C=(87,48), D=(51,48) -->
  <!-- Circle: center (63,72), r=24 -->
  <polygon points="15,96 87,96 87,48 51,48" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <circle cx="63" cy="72" r="24" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>
  <!-- right angle at B -->
  <path d="M80,96 L80,89 L87,89" fill="none" stroke="#555" stroke-width="1.2"/>
  <!-- right angle at C -->
  <path d="M80,48 L80,55 L87,55" fill="none" stroke="#555" stroke-width="1.2"/>
  <!-- labels -->
  <text x="5" y="110" font-size="12" font-family="serif" font-style="italic">A</text>
  <text x="89" y="110" font-size="12" font-family="serif" font-style="italic">B</text>
  <text x="89" y="44" font-size="12" font-family="serif" font-style="italic">C</text>
  <text x="38" y="44" font-size="12" font-family="serif" font-style="italic">D</text>
  <!-- a=8 label on AB -->
  <text x="48" y="110" font-size="11" fill="#334155" text-anchor="middle">a = 8</text>
  <!-- b=4 label on DC -->
  <text x="67" y="43" font-size="11" fill="#334155" text-anchor="middle">b = 4</text>
  <!-- h label on BC -->
  <text x="95" y="75" font-size="11" fill="#334155">h</text>
  <!-- r label -->
  <line x1="63" y1="72" x2="87" y2="72" stroke="#2563eb" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="72" y="68" font-size="10" fill="#2563eb" font-style="italic">r</text>
  <!-- center dot -->
  <circle cx="63" cy="72" r="2.5" fill="#2563eb"/>
</svg>
<b>Шаг 1.</b> Высота трапеции равна диаметру вписанной окружности:
$$h = 2r$$
(окружность касается обоих оснований снизу и сверху, поэтому её диаметр = расстояние между ними).
<br><br>
<b>Шаг 2.</b> Найдём наклонную боковую сторону $AD$.
<br>Из свойства вписанной окружности в трапецию: <em>сумма оснований = сумма боковых сторон</em>:
$$AB + CD = BC + AD$$
$$8 + 4 = h + AD$$
$$AD = 12 - h = 12 - 2r$$
<br>
<b>Шаг 3.</b> Применим теорему Пифагора к наклонной стороне $AD$.
<br>В прямоугольной трапеции $AD$ — гипотенуза прямоугольного треугольника с катетами $h$ и $(a-b)$:
$$AD^2 = h^2 + (a-b)^2$$
Подставим $AD = 12-2r$ и $h=2r$, $a-b=8-4=4$:
$$(12-2r)^2 = (2r)^2 + 4^2$$
$$144 - 48r + 4r^2 = 4r^2 + 16$$
$$144 - 48r = 16$$
$$48r = 128$$
$$r = \\frac{128}{48} = \\frac{8}{3}\\text{ см}$$
<br>
<b>Шаг 4.</b> Высота трапеции:
$$h = 2r = 2\\cdot\\frac{8}{3} = \\frac{16}{3}\\text{ см}$$
<br>
<b>Шаг 5.</b> Площадь трапеции:
$$S = \\frac{a+b}{2}\\cdot h = \\frac{8+4}{2}\\cdot\\frac{16}{3} = \\frac{12}{2}\\cdot\\frac{16}{3} = 6\\cdot\\frac{16}{3} = \\frac{96}{3} = 32\\text{ см}^2$$
<div class="sol-ans">Ответ: $32$ см²</div>`
      },
    ]
};
