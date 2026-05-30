VARIANTS[10] = {
    label: "Вариант 10",
    tasks: [
      {
        text: `Определите неравенство, множество решений которого изображено на рисунке:`,
        figure: `<svg class="task-fig" viewBox="0 0 250 54" width="250" height="54">
  <line x1="12" y1="26" x2="228" y2="26" stroke="#334155" stroke-width="1.5"/>
  <polygon points="232,26 223,22 223,30" fill="#334155"/>
  <line x1="80" y1="21" x2="80" y2="31" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="26" x2="223" y2="26" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round" opacity="0.65"/>
  <circle cx="80" cy="26" r="5.5" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="80" y="48" text-anchor="middle" font-size="13" font-family="serif" fill="#334155">&#x2212;4</text>
  <text x="237" y="30" font-size="13" font-family="serif" fill="#334155">x</text>
</svg>`,
        opts: [
          ["а", "$x < -4$"], ["б", "$x \\leq -4$"], ["в", "$x > -4$"],
          ["г", "$x \\geq -4$"], ["д", "$x \\in \\mathbb{R}$"],
        ],
        sol: `На рисунке: луч идёт вправо от точки $-4$, точка <b>закрашена</b> (включена).
<br>Закрашенная точка → $\\geq$; луч вправо → $x \\geq -4$.
<div class="sol-ans">Ответ: г)&ensp;$x \\geq -4$</div>`
      },
      {
        text: `$25\\%$ от числа $40$ равны:`,
        opts: [
          ["а", "$1$"], ["б", "$10$"], ["в", "$1000$"], ["г", "$160$"], ["д", "$1{,}6$"],
        ],
        sol: `$$25\\% \\text{ от } 40 = \\frac{25}{100}\\cdot 40 = 0{,}25\\cdot 40 = 10$$
<div class="sol-ans">Ответ: б)&ensp;$10$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "площадь прямоугольника со сторонами $a$ и $b$ равна $ab$;"],
          ["б", "сумма всех углов трапеции равна $360^{\\circ}$;"],
          ["в", "косинусом острого угла называется отношение противолежащего катета к гипотенузе;"],
          ["г", "биссектриса равнобедренного треугольника, проведённая к основанию, является и высотой?"],
        ],
        sol: `<ul>
<li>а) Площадь прямоугольника $= ab$ — <b>верно</b></li>
<li>б) Сумма углов трапеции $= 360°$ — <b>верно</b></li>
<li>в) <b style="color:#dc2626">НЕВЕРНО</b>: $\\cos\\alpha = \\dfrac{\\text{прилежащий катет}}{\\text{гипотенуза}}$, а не <em>противолежащий</em></li>
<li>г) Биссектриса к основанию равнобедренного $\\triangle$ — также высота — <b>верно</b></li>
</ul>
В утверждении в) описан <em>синус</em>: $\\sin\\alpha = \\dfrac{\\text{противолежащий катет}}{\\text{гипотенуза}}$.
<div class="sol-ans">Ответ: в)</div>`
      },
      {
        text: `Приведите одночлен $8nm^3 \\cdot nm \\cdot n^5 \\cdot (-0{,}5)$ к стандартному виду.`,
        sol: `Числовой коэффициент: $8\\cdot 1\\cdot 1\\cdot(-0{,}5) = -4$.
<br>Степени: $n^{1+1+5}=n^7$;&ensp; $m^{3+1}=m^4$.
$$8nm^3\\cdot nm\\cdot n^5\\cdot(-0{,}5) = -4n^7m^4$$
<div class="sol-ans">Ответ: $-4n^7m^4$</div>`
      },
      {
        text: `Для квадратичной функции $y = -x^2 + 2x$ найдите значения аргумента,
               при которых значение функции равно $-3$.`,
        sol: `<b>Чтобы найти аргумент по значению функции</b>, приравниваем формулу функции к этому значению и решаем уравнение.
<br><b>Теорема Виета (обратная):</b> $x^2+px+q=(x-x_1)(x-x_2)$, где $x_1+x_2=-p$, $x_1\\cdot x_2=q$.
<br><br>
<b>Шаг 1.</b> По условию $y=-3$. Приравняем формулу функции к $-3$:
$$-x^2+2x = -3$$
<b>Шаг 2.</b> Перенесём всё в одну часть, поменяв знаки:
$$x^2-2x-3 = 0$$
<b>Шаг 3.</b> По теореме Виета: $x_1+x_2=2$, $x_1\\cdot x_2=-3$. Подходят $3$ и $-1$:
$$(x-3)(x+1)=0 \\implies x=3 \\text{ или } x=-1$$
<svg viewBox="0 0 195 110" xmlns="http://www.w3.org/2000/svg" style="max-width:195px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a10t5" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker></defs>
  <line x1="5" y1="62" x2="182" y2="62" stroke="#bbb" stroke-width="1.2" marker-end="url(#a10t5)"/>
  <line x1="40" y1="100" x2="40" y2="5" stroke="#bbb" stroke-width="1.2" marker-end="url(#a10t5)"/>
  <text x="183" y="66" font-size="10" fill="#777">x</text><text x="42" y="5" font-size="10" fill="#777">y</text>
  <polyline points="10,104 40,62 70,48 100,62 130,104" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5" y1="104" x2="182" y2="104" stroke="#e11d48" stroke-width="1.4" stroke-dasharray="5,3"/>
  <text x="3" y="102" font-size="9" fill="#e11d48">&#x2212;3</text>
  <circle cx="10" cy="104" r="4.5" fill="#e11d48"/>
  <text x="10" y="92" font-size="11" fill="#e11d48" text-anchor="middle" font-weight="bold">&#x2212;1</text>
  <circle cx="130" cy="104" r="4.5" fill="#e11d48"/>
  <text x="130" y="92" font-size="11" fill="#e11d48" text-anchor="middle" font-weight="bold">3</text>
  <text x="68" y="42" font-size="9" fill="#475569">(1; 1)</text>
</svg>
<div class="sol-ans">Ответ: $x = -1$ и $x = 3$</div>`
      },
      {
        text: `Треугольник $ABC$ — прямоугольный ($\\angle C = 90^{\\circ}$), $BC = 6$ см,
               проекция катета $AC$ на гипотенузу равна $5$ см.
               Найдите длину гипотенузы треугольника $ABC$.`,
        sol: `<b>Свойство проекций катетов на гипотенузу</b> (метрические соотношения в прямоугольном треугольнике): если $CH$ — высота, проведённая из прямого угла $C$ на гипотенузу $AB$, то
$$AC^2 = AH\\cdot AB,\\qquad BC^2 = BH\\cdot AB$$
где $AH$ и $BH$ — проекции катетов $AC$ и $BC$ на гипотенузу.
<br><br>
Опустим высоту $CH$ из прямого угла $C$ на гипотенузу $AB$.
<svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg" style="max-width:140px;width:100%;height:auto;display:block;margin:10px 0">
  <polygon points="10,108 120,108 65,50" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <line x1="65" y1="50" x2="65" y2="108" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,2"/>
  <path d="M58,108 L58,101 L65,101" fill="none" stroke="#555" stroke-width="1.2"/>
  <path d="M62,55 L67,58 L64,63" fill="none" stroke="#555" stroke-width="1.2"/>
  <text x="2" y="118" font-size="12" font-family="serif" font-style="italic">A</text>
  <text x="122" y="118" font-size="12" font-family="serif" font-style="italic">B</text>
  <text x="68" y="45" font-size="12" font-family="serif" font-style="italic">C</text>
  <text x="57" y="118" font-size="10" fill="#334155">H</text>
  <text x="10" y="82" font-size="10" fill="#2563eb">AH=5</text>
  <text x="80" y="116" font-size="10" fill="#e11d48">BC=6</text>
</svg>
<b>Шаг 1.</b> Проекция катета $AC$ на гипотенузу — это $AH$, по условию $AH=5$ см.
<br><b>Шаг 2.</b> Из соотношения $BC^2 = BH\\cdot AB$ выразим $BH$ через $AB$:
$$BH = \\dfrac{BC^2}{AB} = \\dfrac{36}{AB}$$
<b>Шаг 3.</b> Так как $H$ лежит между $A$ и $B$, то $AH + BH = AB$:
$$5 + \\dfrac{36}{AB} = AB$$
<b>Шаг 4.</b> Умножим обе части на $AB$ (так как $AB\\gt 0$):
$$AB^2 - 5\\cdot AB - 36 = 0$$
<b>Шаг 5.</b> По теореме Виета: сумма корней $=5$, произведение $=-36$. Подходят $9$ и $-4$:
$$(AB-9)(AB+4) = 0$$
Так как $AB\\gt 0$, выбираем $AB=9$ см.
<div class="sol-ans">Ответ: $9$ см</div>`
      },
      {
        text: `Решите систему уравнений
               $$\\begin{cases} x - 3y = 4, \\\\[4pt] xy - 7y = 6. \\end{cases}$$`,
        sol: `<b>Метод подстановки:</b> выражаем одну переменную из одного уравнения и подставляем в другое.
<br><b>Теорема Виета (обратная):</b> $y^2+py+q=(y-y_1)(y-y_2)$, где $y_1+y_2=-p$, $y_1\\cdot y_2=q$.
<br><br>
<b>Шаг 1.</b> Из первого уравнения выразим $x$ через $y$:
$$x = 4 + 3y$$
<b>Шаг 2.</b> Подставим $x$ во второе уравнение:
$$(4+3y)y - 7y = 6$$
$$4y + 3y^2 - 7y = 6$$
$$3y^2 - 3y - 6 = 0$$
<b>Шаг 3.</b> Разделим обе части на $3$:
$$y^2 - y - 2 = 0$$
<b>Шаг 4.</b> По теореме Виета: $y_1+y_2=1$, $y_1\\cdot y_2=-2$. Подходят $2$ и $-1$:
$$(y-2)(y+1)=0 \\implies y=2 \\text{ или } y=-1$$
<b>Шаг 5.</b> Для каждого $y$ находим $x$ по формуле $x=4+3y$:
<table style="border-collapse:collapse;margin:8px 0"><tr><td style="padding:2px 14px 2px 0"><b>$y=2$:</b></td><td>$x=4+6=10$ &rarr; $(10;\\,2)$</td></tr><tr><td style="padding:2px 14px 2px 0"><b>$y=-1$:</b></td><td>$x=4-3=1$ &rarr; $(1;\\,-1)$</td></tr></table>
<b>Шаг 6.</b> Проверка $(10;\\,2)$: $10-3\\cdot 2=4$ ✓; $10\\cdot 2-7\\cdot 2=20-14=6$ ✓
<div class="sol-ans">Ответ: $(10;\\,2)$ и $(1;\\,-1)$</div>`
      },
      {
        text: `Для перевозки $140$ т груза фирма рассматривала модели грузовых автомобилей МАЗ-5551.
               После изучения условий аренды было решено использовать грузовой автомобиль
               грузоподъёмностью на $3$ т меньше. В результате для перевозки груза
               понадобилось сделать на $6$ рейсов больше, чем планировалось.
               Найдите грузоподъёмность машины, на которой перевезли груз.`,
        sol: `Пусть первоначальная грузоподъёмность $= p$ т. Число плановых рейсов $= \\dfrac{140}{p}$.
<br>Новая грузоподъёмность $= p-3$ т. Число фактических рейсов $= \\dfrac{140}{p-3}$.
<br>Условие — на $6$ рейсов больше:
$$\\frac{140}{p-3} - \\frac{140}{p} = 6$$
$$140\\cdot\\frac{p-(p-3)}{p(p-3)} = 6 \\implies \\frac{420}{p(p-3)} = 6$$
$$p(p-3) = 70 \\implies p^2-3p-70 = 0 \\implies (p-10)(p+7) = 0$$
$p=10$ (т.к. $p \\gt 3$). Грузоподъёмность использованной машины: $p-3 = 7$ т.
<div class="sol-ans">Ответ: $7$ т</div>`
      },
      {
        text: `Определите количество целых решений неравенства
               $$\\dfrac{(-x^2 - 4x + 5)\\,x^2}{x^2 - 2x - 3} \\geq 0.$$`,
        sol: `<b>Шаг 1 — разложим на множители.</b>
$$-x^2-4x+5 = -(x^2+4x-5) = -(x+5)(x-1)$$
$$x^2-2x-3 = (x-3)(x+1)$$
Выражение: $\\dfrac{-x^2(x+5)(x-1)}{(x-3)(x+1)}$. <b>ОДЗ:</b> $x\\neq 3$, $x\\neq -1$.
<br><b>Шаг 2 — перепишем условие.</b>
$$\\frac{-x^2(x+5)(x-1)}{(x-3)(x+1)} \\geq 0 \\iff \\frac{x^2(x+5)(x-1)}{(x-3)(x+1)} \\leq 0$$
<b>Шаг 3 — знаковый анализ.</b>
При $x=0$ или $x=1$: выражение $=0$ ✓.
При $x\\neq 0,\\,1$: $x^2 \\gt 0$, нужно $\\dfrac{(x+5)(x-1)}{(x-3)(x+1)} \\leq 0$.
<br>Критические точки: $x=-5$, $x=-1$ (искл.), $x=1$, $x=3$ (искл.).
<br>Методом интервалов (числитель меняет знак в $-5$ и $1$; знаменатель в $-1$ и $3$):
<svg viewBox="0 0 295 52" xmlns="http://www.w3.org/2000/svg" style="max-width:295px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a10t9" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="26" x2="285" y2="26" stroke="#bbb" stroke-width="1.2" marker-end="url(#a10t9)"/>
  <line x1="35" y1="22" x2="35" y2="30" stroke="#777" stroke-width="1"/><text x="35" y="44" font-size="10" text-anchor="middle" fill="#555">&#x2212;5</text>
  <line x1="88" y1="22" x2="88" y2="30" stroke="#777" stroke-width="1"/><text x="88" y="44" font-size="10" text-anchor="middle" fill="#555">&#x2212;1</text>
  <line x1="140" y1="22" x2="140" y2="30" stroke="#777" stroke-width="1"/><text x="140" y="44" font-size="10" text-anchor="middle" fill="#555">0</text>
  <line x1="185" y1="22" x2="185" y2="30" stroke="#777" stroke-width="1"/><text x="185" y="44" font-size="10" text-anchor="middle" fill="#555">1</text>
  <line x1="240" y1="22" x2="240" y2="30" stroke="#777" stroke-width="1"/><text x="240" y="44" font-size="10" text-anchor="middle" fill="#555">3</text>
  <line x1="35" y1="26" x2="88" y2="26" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <circle cx="35" cy="26" r="5" fill="#2563eb"/>
  <circle cx="88" cy="26" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="140" cy="26" r="5" fill="#2563eb"/>
  <line x1="185" y1="26" x2="240" y2="26" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <circle cx="185" cy="26" r="5" fill="#2563eb"/>
  <circle cx="240" cy="26" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
</svg>
Решение: $-5 \\leq x \\lt -1$, или $x=0$, или $1 \\leq x \\lt 3$.
<br>Целые числа: $x=-5,\\,-4,\\,-3,\\,-2$ и $x=0$ и $x=1,\\,2$ — итого <b>7</b>.
<div class="sol-ans">Ответ: $7$</div>`
      },
      {
        text: `В прямоугольную трапецию с основаниями $6$ и $12$ вписана окружность.
               Найдите площадь трапеции.`,
        sol: `Пусть $a=12$ (большее основание), $b=6$ (меньшее), $h$ — высота, $r$ — радиус вписанной окружности.
<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style="max-width:200px;width:100%;height:auto;display:block;margin:10px 0">
  <polygon points="15,106 103,106 103,42 67,42" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <circle cx="77" cy="74" r="32" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>
  <path d="M96,106 L96,99 L103,99" fill="none" stroke="#555" stroke-width="1.2"/>
  <path d="M96,42 L96,49 L103,49" fill="none" stroke="#555" stroke-width="1.2"/>
  <text x="5" y="118" font-size="12" font-family="serif" font-style="italic">A</text>
  <text x="105" y="118" font-size="12" font-family="serif" font-style="italic">B</text>
  <text x="105" y="38" font-size="12" font-family="serif" font-style="italic">C</text>
  <text x="52" y="38" font-size="12" font-family="serif" font-style="italic">D</text>
  <text x="55" y="120" font-size="11" fill="#334155" text-anchor="middle">a = 12</text>
  <text x="83" y="37" font-size="11" fill="#334155" text-anchor="middle">b = 6</text>
  <text x="110" y="80" font-size="11" fill="#334155">h</text>
  <line x1="77" y1="74" x2="103" y2="74" stroke="#2563eb" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="86" y="70" font-size="10" fill="#2563eb" font-style="italic">r</text>
  <circle cx="77" cy="74" r="2.5" fill="#2563eb"/>
</svg>
<b>Шаг 1.</b> Высота равна диаметру вписанной окружности: $h = 2r$.
<br><b>Шаг 2.</b> Из свойства вписанной окружности в трапецию ($a+b = h+AD$):
$$12+6 = 2r+AD \\implies AD = 18-2r$$
<b>Шаг 3.</b> Теорема Пифагора (наклонная боковая $AD$, разность оснований $a-b=6$):
$$(18-2r)^2 = (2r)^2+6^2$$
$$324-72r+4r^2 = 4r^2+36$$
$$72r = 288 \\implies r = 4\\text{ см}$$
<b>Шаг 4.</b> Высота: $h = 2r = 8$ см.
<br><b>Шаг 5.</b> Площадь:
$$S = \\dfrac{a+b}{2}\\cdot h = \\dfrac{12+6}{2}\\cdot 8 = 9\\cdot 8 = 72\\text{ см}^2$$
<div class="sol-ans">Ответ: $72$ см²</div>`
      },
    ]
};
