VARIANTS[7] = {
    label: "Вариант 7",
    tasks: [
      {
        text: `Определите, какое из следующих равенств верно:`,
        opts: [
          ["а", "$a^{-4} = -4a$"],
          ["б", "$a^{-4} = -a^4$"],
          ["в", "$a^{-4} = \\dfrac{1}{a^4}$"],
          ["г", "$a^{-4} = -\\dfrac{4}{a}$"],
          ["д", "$a^{-4} = -\\dfrac{1}{a^4}$"],
        ],
        sol: `По <b>определению отрицательного показателя</b>: $a^{-n} = \\dfrac{1}{a^n}$.
$$a^{-4} = \\frac{1}{a^4}$$
Остальные варианты неверны: знаменатель $a^{-4}$ всегда положителен при $a\\neq 0$.
<div class="sol-ans">Ответ: в)&ensp;$a^{-4}=\\dfrac{1}{a^4}$</div>`
      },
      {
        text: `Второй член геометрической прогрессии $(b_n)$,
               у которой $q = 3$ и $b_1 = \\dfrac{2}{3}$, равен:`,
        opts: [
          ["а", "$1$"], ["б", "$2$"], ["в", "$\\dfrac{2}{9}$"],
          ["г", "$-2\\dfrac{1}{3}$"], ["д", "$3\\dfrac{2}{3}$"],
        ],
        sol: `Каждый следующий член геометрической прогрессии умножается на знаменатель $q$:
$$b_2 = b_1\\cdot q = \\dfrac{2}{3}\\cdot 3 = 2$$
<div class="sol-ans">Ответ: б)&ensp;$2$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "накрест лежащие углы при двух параллельных прямых и секущей равны между собой;"],
          ["б", "средняя линия треугольника параллельна основанию;"],
          ["в", "$\\sin 30^{\\circ} = \\dfrac{1}{2}$;"],
          ["г", "если диагонали параллелограмма равны, то это обязательно квадрат?"],
        ],
        sol: `<ul>
<li>а) Накрест лежащие углы при ∥ прямых равны — <b>верно</b></li>
<li>б) Средняя линия треугольника ∥ основанию — <b>верно</b></li>
<li>в) $\\sin 30^\\circ = \\frac{1}{2}$ — <b>верно</b></li>
<li>г) Равные диагонали → квадрат — <b style="color:#dc2626">НЕВЕРНО</b></li>
</ul>
Если диагонали параллелограмма равны, он является <b>прямоугольником</b>, но не обязательно квадратом. Прямоугольник $3\\times 4$ имеет равные диагонали, но это не квадрат.
<div class="sol-ans">Ответ: г)</div>`
      },
      {
        text: `Определите наименьшее целое решение двойного неравенства
               $-2 < \\dfrac{3x + 1}{2} \\leq 5$.`,
        sol: `Умножим все части на $2$:
$$-4 < 3x+1 \\leq 10$$
Вычтем $1$:
$$-5 < 3x \\leq 9$$
Разделим на $3$:
$$-\\dfrac{5}{3} < x \\leq 3$$
<svg viewBox="0 0 250 52" xmlns="http://www.w3.org/2000/svg" style="max-width:250px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a7t4" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="26" x2="238" y2="26" stroke="#bbb" stroke-width="1.2" marker-end="url(#a7t4)"/>
  <line x1="55" y1="22" x2="55" y2="30" stroke="#777" stroke-width="1"/><text x="55" y="44" font-size="10" text-anchor="middle" fill="#555">−2</text>
  <line x1="85" y1="22" x2="85" y2="30" stroke="#777" stroke-width="1"/><text x="85" y="44" font-size="10" text-anchor="middle" fill="#555">−1</text>
  <line x1="115" y1="22" x2="115" y2="30" stroke="#777" stroke-width="1"/><text x="115" y="44" font-size="10" text-anchor="middle" fill="#555">0</text>
  <line x1="145" y1="22" x2="145" y2="30" stroke="#777" stroke-width="1"/><text x="145" y="44" font-size="10" text-anchor="middle" fill="#555">1</text>
  <line x1="175" y1="22" x2="175" y2="30" stroke="#777" stroke-width="1"/><text x="175" y="44" font-size="10" text-anchor="middle" fill="#555">2</text>
  <line x1="205" y1="22" x2="205" y2="30" stroke="#777" stroke-width="1"/><text x="205" y="44" font-size="10" text-anchor="middle" fill="#555">3</text>
  <line x1="69" y1="26" x2="205" y2="26" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <circle cx="69" cy="26" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="205" cy="26" r="5" fill="#2563eb" stroke="#2563eb" stroke-width="2"/>
  <text x="69" y="15" font-size="9" text-anchor="middle" fill="#2563eb">−5/3</text>
</svg>
$x\\in\\left(-\\dfrac{5}{3};\\,3\\right]$. Наименьшее <em>целое</em> число, большее $-\\dfrac{5}{3}\\approx-1{,}67$: это $-1$.
<div class="sol-ans">Ответ: $-1$</div>`
      },
      {
        text: `В трапеции $ABCD$ с основаниями $AD$ и $BC$ точка $O$ — пересечение диагоналей,
               $AD = 10$ см, $AO = 6$ см, $OC = 3$ см. Найдите среднюю линию трапеции.`,
        sol: `<b>Свойство диагоналей трапеции:</b> точка пересечения диагоналей делит каждую диагональ в одном и том же отношении, равном отношению оснований.
<br><b>Формула средней линии трапеции:</b> $m = \\dfrac{AD+BC}{2}$ — полусумма оснований.
<br><br>
<b>Шаг 1.</b> Точка $O$ — пересечение диагоналей трапеции. По свойству:
$$\\dfrac{AO}{OC} = \\dfrac{AD}{BC}$$
(основания $AD$ и $BC$, точка $O$ ближе к меньшему основанию).
<br><b>Шаг 2.</b> Подставляем известные значения $AO=6$, $OC=3$, $AD=10$:
$$\\dfrac{6}{3} = \\dfrac{10}{BC}$$
$$BC = \\dfrac{10\\cdot 3}{6} = 5\\text{ см}$$
<svg viewBox="0 0 195 118" xmlns="http://www.w3.org/2000/svg" style="max-width:195px;width:100%;height:auto;display:block;margin:10px 0">
  <polygon points="20,100 160,100 130,25 50,25" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <line x1="20" y1="100" x2="130" y2="25" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,2"/>
  <line x1="160" y1="100" x2="50" y2="25" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,2"/>
  <circle cx="87" cy="50" r="3" fill="#1e293b"/>
  <text x="5" y="113" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="162" y="113" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="132" y="20" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="38" y="20" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="92" y="48" font-size="12" font-family="serif" font-style="italic">O</text>
  <text x="80" y="112" font-size="10" fill="#334155" text-anchor="middle">AD = 10</text>
  <text x="85" y="18" font-size="10" fill="#334155" text-anchor="middle">BC = 5</text>
  <text x="42" y="72" font-size="10" fill="#2563eb">AO=6</text>
  <text x="97" y="40" font-size="10" fill="#e11d48">OC=3</text>
</svg>
<b>Шаг 3.</b> Находим среднюю линию трапеции по формуле:
$$m = \\dfrac{AD + BC}{2} = \\dfrac{10+5}{2} = 7{,}5\\text{ см}$$
<div class="sol-ans">Ответ: $7{,}5$ см</div>`
      },
      {
        text: `Упростите выражение
               $$\\dfrac{x - y}{\\sqrt{x} + \\sqrt{y}} - \\dfrac{x + 4\\sqrt{xy} + 4y}{\\sqrt{x} + 2\\sqrt{y}}.$$`,
        sol: `<b>Формула разности квадратов:</b> $a^2-b^2 = (a-b)(a+b)$.
<br><b>Формула квадрата суммы:</b> $(a+b)^2 = a^2+2ab+b^2$.
<br><b>Идея:</b> представляем $x$ как $(\\sqrt{x})^2$, чтобы использовать формулы сокращённого умножения и сократить дроби.
<br><br>
<b>Шаг 1.</b> Преобразуем <em>первую дробь</em>. Числитель $x-y$ — разность квадратов:
$$x - y = (\\sqrt{x})^2 - (\\sqrt{y})^2 = (\\sqrt{x}-\\sqrt{y})(\\sqrt{x}+\\sqrt{y})$$
Сокращаем общий множитель $(\\sqrt{x}+\\sqrt{y})$:
$$\\dfrac{x-y}{\\sqrt{x}+\\sqrt{y}} = \\dfrac{(\\sqrt{x}-\\sqrt{y})(\\sqrt{x}+\\sqrt{y})}{\\sqrt{x}+\\sqrt{y}} = \\sqrt{x}-\\sqrt{y}$$
<b>Шаг 2.</b> Преобразуем <em>вторую дробь</em>. Числитель — квадрат суммы:
$$x + 4\\sqrt{xy} + 4y = (\\sqrt{x})^2 + 2\\cdot\\sqrt{x}\\cdot 2\\sqrt{y} + (2\\sqrt{y})^2 = (\\sqrt{x}+2\\sqrt{y})^2$$
Сокращаем общий множитель $(\\sqrt{x}+2\\sqrt{y})$:
$$\\dfrac{(\\sqrt{x}+2\\sqrt{y})^2}{\\sqrt{x}+2\\sqrt{y}} = \\sqrt{x}+2\\sqrt{y}$$
<b>Шаг 3.</b> Вычисляем разность преобразованных выражений:
$$(\\sqrt{x}-\\sqrt{y}) - (\\sqrt{x}+2\\sqrt{y}) = \\sqrt{x} - \\sqrt{y} - \\sqrt{x} - 2\\sqrt{y} = -3\\sqrt{y}$$
<div class="sol-ans">Ответ: $-3\\sqrt{y}$</div>`
      },
      {
        text: `График функции $y = g(x)$ получен из графика функции $f(x) = x^2$
               сдвигом на $1$ единицу вправо вдоль оси абсцисс и на $9$ единиц вниз
               вдоль оси ординат. Найдите нули функции $y = g(x)$.`,
        sol: `<b>Правило сдвига графика функции:</b>
<br>• сдвиг на $a$ единиц <em>вправо</em> по оси $Ox$: $f(x) \\to f(x-a)$;
<br>• сдвиг на $b$ единиц <em>вниз</em> по оси $Oy$: $f(x) \\to f(x)-b$.
<br><b>Нули функции:</b> это значения $x$, при которых $f(x)=0$ (точки пересечения графика с осью $Ox$).
<br><b>Формула разности квадратов:</b> $a^2-b^2=(a-b)(a+b)$.
<br><br>
<b>Шаг 1.</b> Применим первый сдвиг: $f(x)=x^2$ сдвигаем на $1$ единицу вправо. По правилу получим:
$$f_1(x) = (x-1)^2$$
<b>Шаг 2.</b> Применим второй сдвиг: $f_1(x)$ сдвигаем на $9$ единиц вниз:
$$g(x) = (x-1)^2 - 9$$
<b>Шаг 3.</b> Чтобы найти нули, решаем уравнение $g(x)=0$:
$$(x-1)^2 - 9 = 0$$
$$(x-1)^2 = 9$$
<b>Шаг 4.</b> Извлекаем квадратный корень из обеих частей:
$$x-1 = \\pm 3$$
Значит, $x-1=3$ (тогда $x=4$) или $x-1=-3$ (тогда $x=-2$).
<svg viewBox="0 0 240 128" xmlns="http://www.w3.org/2000/svg" style="max-width:240px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a7t7" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker></defs>
  <line x1="5" y1="40" x2="228" y2="40" stroke="#bbb" stroke-width="1.2" marker-end="url(#a7t7)"/>
  <line x1="100" y1="122" x2="100" y2="5" stroke="#bbb" stroke-width="1.2" marker-end="url(#a7t7)"/>
  <text x="230" y="44" font-size="10" fill="#777">x</text><text x="102" y="6" font-size="10" fill="#777">y</text>
  <polyline points="34,2 56,40 78,70 100,88 122,94 144,82 166,58 188,40 210,2" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="56" cy="40" r="4.5" fill="#2563eb"/>
  <text x="56" y="57" font-size="11" fill="#2563eb" text-anchor="middle" font-weight="bold">−2</text>
  <circle cx="188" cy="40" r="4.5" fill="#2563eb"/>
  <text x="188" y="57" font-size="11" fill="#2563eb" text-anchor="middle" font-weight="bold">4</text>
  <circle cx="122" cy="94" r="3.5" fill="#e11d48"/>
  <text x="128" y="108" font-size="10" fill="#e11d48">(1; −9)</text>
  <text x="94" y="54" font-size="10" fill="#555">0</text>
  <line x1="122" y1="38" x2="122" y2="42" stroke="#777" stroke-width="1"/>
  <text x="122" y="57" font-size="10" fill="#555" text-anchor="middle">1</text>
</svg>
<div class="sol-ans">Ответ: $x = -2$ и $x = 4$</div>`
      },
      {
        text: `Решите уравнение $\\dfrac{5}{x^2 - x - 6} + \\dfrac{1}{x + 2} = -1$.`,
        sol: `<b>Решение дробно-рациональных уравнений</b> состоит из трёх шагов:
<br>1) найти ОДЗ — все значения переменной, при которых знаменатели не равны нулю;
<br>2) привести к общему знаменателю и упростить;
<br>3) проверить, входят ли найденные корни в ОДЗ.
<br><b>Теорема Виета (обратная):</b> $x^2+px+q=(x-x_1)(x-x_2)$, где $x_1+x_2=-p$, $x_1\\cdot x_2=q$.
<br><br>
<b>Шаг 1.</b> Разложим знаменатель первой дроби. Ищем числа с суммой $1$ и произведением $-6$. Это $3$ и $-2$:
$$x^2-x-6 = (x-3)(x+2)$$
<b>Шаг 2.</b> Запишем ОДЗ: знаменатели не должны быть равны нулю, поэтому
$$x\\neq 3,\\quad x\\neq -2$$
<b>Шаг 3.</b> Умножим обе части уравнения на $(x-3)(x+2)$, чтобы избавиться от дробей:
$$5 + (x-3) = -(x-3)(x+2)$$
<b>Шаг 4.</b> Упрощаем:
$$x+2 = -(x^2-x-6)$$
$$x+2 = -x^2+x+6$$
$$x^2 - 4 = 0$$
<b>Шаг 5.</b> Решаем как разность квадратов: $(x-2)(x+2)=0 \\Rightarrow x=2$ или $x=-2$.
<br><b>Шаг 6.</b> Проверяем ОДЗ: $x=-2$ не подходит (исключён). Проверяем $x=2$ подстановкой:
$$\\dfrac{5}{4-2-6}+\\dfrac{1}{4} = \\dfrac{5}{-4}+\\dfrac{1}{4} = -1 \\checkmark$$
<div class="sol-ans">Ответ: $x = 2$</div>`
      },
      {
        text: `Если двузначное число разделить на сумму его цифр, то в частном получится $7$
               и в остатке $6$. Если это же двузначное число разделить на произведение его цифр,
               то в частном получится $3$ и в остатке $11$. Найдите это двузначное число.`,
        sol: `<b>Запись двузначного числа:</b> любое двузначное число можно представить как $10a+b$, где $a$ — цифра десятков ($1\\leq a\\leq 9$), $b$ — цифра единиц ($0\\leq b\\leq 9$).
<br><b>Теорема о делении с остатком:</b> если число $N$ при делении на $d$ даёт частное $q$ и остаток $r$, то $N = d\\cdot q + r$, причём $0\\leq r\\lt d$.
<br><b>Формула корней квадратного уравнения:</b> $x=\\dfrac{-b\\pm\\sqrt{D}}{2a}$, где $D=b^2-4ac$.
<br><br>
<b>Шаг 1.</b> Обозначим за $10a+b$ искомое двузначное число (где $a$ — цифра десятков, $b$ — цифра единиц).
<br><b>Шаг 2.</b> Запишем <em>первое условие</em>. Сумма цифр — это $a+b$. При делении $10a+b$ на $a+b$ получили частное $7$ и остаток $6$:
$$10a + b = 7(a+b) + 6$$
$$10a + b = 7a + 7b + 6$$
$$3a - 6b = 6$$
$$a = 2b + 2 \\quad (*)$$
<b>Шаг 3.</b> Запишем <em>второе условие</em>. Произведение цифр — $ab$. При делении на $ab$ получили частное $3$ и остаток $11$:
$$10a + b = 3ab + 11$$
<b>Шаг 4.</b> Подставим выражение $(*)$ для $a$ во второе условие:
$$10(2b+2) + b = 3(2b+2)b + 11$$
$$20b + 20 + b = 6b^2 + 6b + 11$$
$$21b + 20 = 6b^2 + 6b + 11$$
$$6b^2 - 15b - 9 = 0$$
Делим на $3$:
$$2b^2 - 5b - 3 = 0$$
<b>Шаг 5.</b> Решаем квадратное уравнение. Дискриминант: $D = 25 + 24 = 49 = 7^2$.
$$b = \\dfrac{5\\pm 7}{4} \\implies b = 3 \\text{ или } b = -\\dfrac{1}{2}$$
Цифра должна быть целым числом от $0$ до $9$, поэтому подходит только $b=3$.
<br><b>Шаг 6.</b> Из формулы $(*)$ находим $a$:
$$a = 2\\cdot 3 + 2 = 8$$
Искомое число: $\\boldsymbol{10\\cdot 8 + 3 = 83}$.
<br><b>Проверка:</b>
<br>• сумма цифр $= 8+3 = 11$; $83:11 = 7$ (ост. $6$): $7\\cdot 11+6 = 77+6=83$ ✓;
<br>• произведение цифр $= 8\\cdot 3 = 24$; $83:24 = 3$ (ост. $11$): $3\\cdot 24+11 = 72+11=83$ ✓.
<div class="sol-ans">Ответ: $83$</div>`
      },
      {
        text: `Внутри параллелограмма $ABCD$ взята точка $M$, такая, что
               $S_{BMC} = 6$ см², $S_{AMD} = 10$ см².
               Найдите площадь параллелограмма $ABCD$.`,
        figure: `<svg class="task-fig" viewBox="0 0 265 168" width="265" height="168">
  <polygon points="35,143 200,143 220,35 55,35" fill="none" stroke="#334155" stroke-width="2.2"/>
  <polygon points="35,143 118,94 55,35" fill="rgba(251,146,60,0.2)"/>
  <polygon points="200,143 118,94 220,35" fill="rgba(37,99,235,0.16)"/>
  <line x1="118" y1="94" x2="35" y2="143" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5,3"/>
  <line x1="118" y1="94" x2="200" y2="143" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5,3"/>
  <line x1="118" y1="94" x2="220" y2="35" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5,3"/>
  <line x1="118" y1="94" x2="55" y2="35" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5,3"/>
  <circle cx="118" cy="94" r="3.5" fill="#1e293b"/>
  <text x="21" y="156" font-size="14" font-family="serif" font-style="italic" fill="#1e293b">A</text>
  <text x="203" y="156" font-size="14" font-family="serif" font-style="italic" fill="#1e293b">B</text>
  <text x="223" y="30" font-size="14" font-family="serif" font-style="italic" fill="#1e293b">C</text>
  <text x="41" y="30" font-size="14" font-family="serif" font-style="italic" fill="#1e293b">D</text>
  <text x="124" y="90" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">M</text>
  <text x="65" y="98" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#c2410c">10 см²</text>
  <text x="177" y="98" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1d4ed8">6 см²</text>
</svg>`,
        sol: `<b>Доказательство ключевого свойства:</b>
$$S_{\\triangle BMC} + S_{\\triangle AMD} = \\dfrac{S_{ABCD}}{2}$$
Стороны $BC \\parallel DA$ и $|BC| = |DA| = a$ (как противоположные стороны параллелограмма).
<br>Пусть $h_1$ — расстояние от $M$ до стороны $BC$, $h_2$ — расстояние от $M$ до стороны $DA$.
<svg viewBox="0 0 215 132" xmlns="http://www.w3.org/2000/svg" style="max-width:215px;width:100%;height:auto;display:block;margin:12px 0">
  <!-- треугольники -->
  <polygon points="20,108 90,72 40,28" fill="rgba(251,146,60,0.25)" stroke="none"/>
  <polygon points="160,108 90,72 180,28" fill="rgba(37,99,235,0.18)" stroke="none"/>
  <!-- параллелограмм -->
  <polygon points="20,108 160,108 180,28 40,28" fill="none" stroke="#334155" stroke-width="1.8"/>
  <!-- метки сторон a -->
  <text x="170" y="74" font-size="11" fill="#334155" font-style="italic">a</text>
  <text x="18" y="74" font-size="11" fill="#334155" font-style="italic">a</text>
  <!-- точка M -->
  <circle cx="90" cy="72" r="3.5" fill="#1e293b"/>
  <text x="94" y="70" font-size="12" font-family="serif" font-style="italic">M</text>
  <!-- h₁: перпендикуляр от M к BC -->
  <!-- M=(90,72), foot≈(164,91) на BC -->
  <line x1="90" y1="72" x2="164" y2="91" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="4,2"/>
  <!-- прямой угол при (164,91) -->
  <path d="M165.5,85.2 L160.7,84 L159.2,89.8" fill="none" stroke="#555" stroke-width="1.2"/>
  <!-- метка h₁ -->
  <text x="132" y="76" font-size="11" fill="#2563eb" font-style="italic" font-weight="bold">h₁</text>
  <!-- h₂: перпендикуляр от M к DA -->
  <!-- M=(90,72), foot≈(33,58) на DA -->
  <line x1="90" y1="72" x2="33" y2="58" stroke="#c2410c" stroke-width="1.6" stroke-dasharray="4,2"/>
  <!-- прямой угол при (33,58) -->
  <path d="M34.5,52.2 L39.4,53.4 L37.9,59.2" fill="none" stroke="#555" stroke-width="1.2"/>
  <!-- метка h₂ -->
  <text x="52" y="58" font-size="11" fill="#c2410c" font-style="italic" font-weight="bold">h₂</text>
  <!-- Скобка H справа с надписью -->
  <line x1="197" y1="28" x2="197" y2="108" stroke="#475569" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="194" y1="28" x2="200" y2="28" stroke="#475569" stroke-width="1.2"/>
  <line x1="194" y1="108" x2="200" y2="108" stroke="#475569" stroke-width="1.2"/>
  <text x="201" y="73" font-size="11" fill="#475569" font-style="italic">H</text>
  <!-- метки вершин -->
  <text x="4" y="120" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="162" y="120" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="182" y="23" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="28" y="23" font-size="13" font-family="serif" font-style="italic">D</text>
  <!-- метки площадей -->
  <text x="46" y="82" font-size="10" fill="#c2410c" text-anchor="middle">$S_1$</text>
  <text x="142" y="82" font-size="10" fill="#1d4ed8" text-anchor="middle">$S_2$</text>
</svg>
Так как $BC \\parallel DA$, то $h_1 + h_2 = H$ (полное расстояние между параллельными сторонами).
$$S_{\\triangle BMC} = \\tfrac{1}{2}\\cdot a\\cdot h_1 \\qquad S_{\\triangle AMD} = \\tfrac{1}{2}\\cdot a\\cdot h_2$$
$$S_{\\triangle BMC}+S_{\\triangle AMD} = \\tfrac{1}{2}\\cdot a\\cdot(h_1+h_2) = \\tfrac{1}{2}\\cdot a\\cdot H = \\boxed{\\dfrac{S_{ABCD}}{2}}$$
<b>Вычисление:</b>
$$\\dfrac{S_{ABCD}}{2} = S_{\\triangle BMC}+S_{\\triangle AMD} = 6+10 = 16 \\implies S_{ABCD} = 32\\text{ см}^2$$
<div class="sol-ans">Ответ: $32$ см²</div>`
      },
    ]
};
