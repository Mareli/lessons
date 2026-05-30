VARIANTS[8] = {
    label: "Вариант 8",
    tasks: [
      {
        text: `Определите, какое из следующих равенств верно:`,
        opts: [
          ["а", "$b^{-3} = -3b$"],
          ["б", "$b^{-3} = -b^3$"],
          ["в", "$b^{-3} = \\dfrac{1}{b^3}$"],
          ["г", "$b^{-3} = -\\dfrac{1}{b^3}$"],
          ["д", "$b^{-3} = -\\dfrac{3}{b}$"],
        ],
        sol: `По определению отрицательного показателя: $b^{-n} = \\dfrac{1}{b^n}$.
$$b^{-3} = \\frac{1}{b^3}$$
<div class="sol-ans">Ответ: в)&ensp;$b^{-3}=\\dfrac{1}{b^3}$</div>`
      },
      {
        text: `Второй член геометрической прогрессии $(b_n)$,
               у которой $q = 4$ и $b_1 = \\dfrac{3}{8}$, равен:`,
        opts: [
          ["а", "$1$"], ["б", "$2$"], ["в", "$\\dfrac{1}{2}$"],
          ["г", "$\\dfrac{2}{3}$"], ["д", "$1\\dfrac{1}{2}$"],
        ],
        sol: `$$b_2 = b_1\\cdot q = \\dfrac{3}{8}\\cdot 4 = \\dfrac{3}{2} = 1\\dfrac{1}{2}$$
<div class="sol-ans">Ответ: д)&ensp;$1\\dfrac{1}{2}$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "соответственные углы при двух параллельных прямых и секущей равны между собой;"],
          ["б", "средняя линия трапеции параллельна основаниям;"],
          ["в", "$\\cos 60^{\\circ} = \\dfrac{1}{2}$;"],
          ["г", "если диагонали параллелограмма перпендикулярны, то это обязательно квадрат?"],
        ],
        sol: `<ul>
<li>а) Соответственные углы при ∥ прямых равны — <b>верно</b></li>
<li>б) Средняя линия трапеции ∥ основаниям — <b>верно</b></li>
<li>в) $\\cos 60^\\circ = \\frac{1}{2}$ — <b>верно</b></li>
<li>г) Перпендикулярные диагонали → квадрат — <b style="color:#dc2626">НЕВЕРНО</b></li>
</ul>
Если диагонали параллелограмма перпендикулярны, он является <b>ромбом</b>, но не обязательно квадратом.
<div class="sol-ans">Ответ: г)</div>`
      },
      {
        text: `Определите наименьшее целое решение двойного неравенства
               $-2 \\lt \\dfrac{2x - 1}{3} \\leq 1$.`,
        sol: `Умножим все части на $3$: $-6 \\lt 2x-1 \\leq 3$. Прибавим $1$: $-5 \\lt 2x \\leq 4$. Разделим на $2$: $-2{,}5 \\lt x \\leq 2$.
<svg viewBox="0 0 250 52" xmlns="http://www.w3.org/2000/svg" style="max-width:250px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a8t4" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="26" x2="238" y2="26" stroke="#bbb" stroke-width="1.2" marker-end="url(#a8t4)"/>
  <line x1="55" y1="22" x2="55" y2="30" stroke="#777" stroke-width="1"/><text x="55" y="44" font-size="10" text-anchor="middle" fill="#555">−3</text>
  <line x1="85" y1="22" x2="85" y2="30" stroke="#777" stroke-width="1"/><text x="85" y="44" font-size="10" text-anchor="middle" fill="#555">−2</text>
  <line x1="115" y1="22" x2="115" y2="30" stroke="#777" stroke-width="1"/><text x="115" y="44" font-size="10" text-anchor="middle" fill="#555">−1</text>
  <line x1="145" y1="22" x2="145" y2="30" stroke="#777" stroke-width="1"/><text x="145" y="44" font-size="10" text-anchor="middle" fill="#555">0</text>
  <line x1="175" y1="22" x2="175" y2="30" stroke="#777" stroke-width="1"/><text x="175" y="44" font-size="10" text-anchor="middle" fill="#555">1</text>
  <line x1="205" y1="22" x2="205" y2="30" stroke="#777" stroke-width="1"/><text x="205" y="44" font-size="10" text-anchor="middle" fill="#555">2</text>
  <line x1="70" y1="26" x2="205" y2="26" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <circle cx="70" cy="26" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="205" cy="26" r="5" fill="#2563eb" stroke="#2563eb" stroke-width="2"/>
  <text x="70" y="15" font-size="9" text-anchor="middle" fill="#2563eb">−2,5</text>
</svg>
Наименьшее целое число, большее $-2{,}5$: это $-2$.
<div class="sol-ans">Ответ: $-2$</div>`
      },
      {
        text: `В трапеции $ABCD$ с основаниями $AD$ и $BC$ точка $O$ — пересечение диагоналей,
               $BC = 8$ см, $BO = 4$ см, $OD = 6$ см. Найдите среднюю линию трапеции.`,
        sol: `<b>Свойство диагоналей трапеции:</b> точка пересечения диагоналей делит каждую диагональ в отношении, равном отношению оснований.
<br><b>Формула средней линии трапеции:</b> $m = \\dfrac{a+b}{2}$ — полусумма оснований.
<br><br>
<b>Шаг 1.</b> По свойству диагоналей:
$$\\dfrac{BO}{OD} = \\dfrac{BC}{AD}$$
<b>Шаг 2.</b> Подставляем $BO=4$, $OD=6$, $BC=8$:
$$\\dfrac{4}{6} = \\dfrac{8}{AD}$$
$$AD = \\dfrac{8\\cdot 6}{4} = 12\\text{ см}$$
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
  <text x="80" y="112" font-size="10" fill="#334155" text-anchor="middle">AD = 12</text>
  <text x="85" y="18" font-size="10" fill="#334155" text-anchor="middle">BC = 8</text>
  <text x="55" y="42" font-size="10" fill="#2563eb">BO=4</text>
  <text x="97" y="72" font-size="10" fill="#e11d48">OD=6</text>
</svg>
<b>Шаг 3.</b> По формуле средней линии трапеции:
$$m = \\dfrac{BC+AD}{2} = \\dfrac{8+12}{2} = 10\\text{ см}$$
<div class="sol-ans">Ответ: $10$ см</div>`
      },
      {
        text: `Упростите выражение
               $$\\dfrac{x + 2\\sqrt{xy} + y}{\\sqrt{x} + \\sqrt{y}} - \\dfrac{4x - y}{2\\sqrt{x} - \\sqrt{y}}.$$`,
        sol: `<b>Формула квадрата суммы:</b> $(a+b)^2 = a^2+2ab+b^2$.
<br><b>Формула разности квадратов:</b> $a^2-b^2 = (a-b)(a+b)$.
<br><b>Идея:</b> представляем $x$ как $(\\sqrt{x})^2$, чтобы использовать формулы сокращённого умножения и сократить дроби.
<br><br>
<b>Шаг 1.</b> Преобразуем <em>первую дробь</em>. Числитель — полный квадрат:
$$x + 2\\sqrt{xy} + y = (\\sqrt{x})^2 + 2\\cdot\\sqrt{x}\\cdot\\sqrt{y} + (\\sqrt{y})^2 = (\\sqrt{x}+\\sqrt{y})^2$$
Сокращаем на $(\\sqrt{x}+\\sqrt{y})$:
$$\\dfrac{(\\sqrt{x}+\\sqrt{y})^2}{\\sqrt{x}+\\sqrt{y}} = \\sqrt{x}+\\sqrt{y}$$
<b>Шаг 2.</b> Преобразуем <em>вторую дробь</em>. Числитель — разность квадратов:
$$4x - y = (2\\sqrt{x})^2 - (\\sqrt{y})^2 = (2\\sqrt{x}-\\sqrt{y})(2\\sqrt{x}+\\sqrt{y})$$
Сокращаем на $(2\\sqrt{x}-\\sqrt{y})$:
$$\\dfrac{(2\\sqrt{x}-\\sqrt{y})(2\\sqrt{x}+\\sqrt{y})}{2\\sqrt{x}-\\sqrt{y}} = 2\\sqrt{x}+\\sqrt{y}$$
<b>Шаг 3.</b> Вычисляем разность:
$$(\\sqrt{x}+\\sqrt{y}) - (2\\sqrt{x}+\\sqrt{y}) = \\sqrt{x} + \\sqrt{y} - 2\\sqrt{x} - \\sqrt{y} = -\\sqrt{x}$$
<div class="sol-ans">Ответ: $-\\sqrt{x}$</div>`
      },
      {
        text: `График функции $y = g(x)$ получен из графика функции $f(x) = x^2$
               сдвигом на $2$ единицы вправо вдоль оси абсцисс и на $4$ единицы вниз
               вдоль оси ординат. Найдите нули функции $y = g(x)$.`,
        sol: `<b>Правило сдвига графика функции:</b>
<br>• сдвиг на $a$ единиц <em>вправо</em>: $f(x) \\to f(x-a)$;
<br>• сдвиг на $b$ единиц <em>вниз</em>: $f(x) \\to f(x)-b$.
<br><b>Нули функции:</b> значения $x$, при которых $g(x)=0$.
<br><br>
<b>Шаг 1.</b> Сдвинем график $f(x)=x^2$ на $2$ единицы вправо. По правилу:
$$f_1(x) = (x-2)^2$$
<b>Шаг 2.</b> Затем сдвинем график вниз на $4$ единицы:
$$g(x) = (x-2)^2 - 4$$
<b>Шаг 3.</b> Найдём нули, решая уравнение $g(x)=0$:
$$(x-2)^2 - 4 = 0 \\implies (x-2)^2 = 4$$
<b>Шаг 4.</b> Извлекаем квадратный корень:
$$x - 2 = \\pm 2$$
Значит, $x = 4$ или $x = 0$.
<svg viewBox="0 0 240 128" xmlns="http://www.w3.org/2000/svg" style="max-width:240px;width:100%;height:auto;display:block;margin:10px 0">
  <defs><marker id="a8t7" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker></defs>
  <line x1="5" y1="40" x2="228" y2="40" stroke="#bbb" stroke-width="1.2" marker-end="url(#a8t7)"/>
  <line x1="100" y1="122" x2="100" y2="5" stroke="#bbb" stroke-width="1.2" marker-end="url(#a8t7)"/>
  <text x="230" y="44" font-size="10" fill="#777">x</text><text x="102" y="6" font-size="10" fill="#777">y</text>
  <polyline points="78,2 100,40 122,64 144,72 166,64 188,40 210,2" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="100" cy="40" r="4.5" fill="#2563eb"/>
  <text x="100" y="57" font-size="11" fill="#2563eb" text-anchor="middle" font-weight="bold">0</text>
  <circle cx="188" cy="40" r="4.5" fill="#2563eb"/>
  <text x="188" y="57" font-size="11" fill="#2563eb" text-anchor="middle" font-weight="bold">4</text>
  <circle cx="144" cy="72" r="3.5" fill="#e11d48"/>
  <text x="150" y="86" font-size="10" fill="#e11d48">(2; −4)</text>
  <line x1="144" y1="38" x2="144" y2="42" stroke="#777" stroke-width="1"/>
  <text x="144" y="35" font-size="10" fill="#555" text-anchor="middle">2</text>
</svg>
<div class="sol-ans">Ответ: $x = 0$ и $x = 4$</div>`
      },
      {
        text: `Решите уравнение $\\dfrac{7}{x^2 - x - 12} + \\dfrac{1}{x + 3} = -1$.`,
        sol: `<b>Решение дробно-рациональных уравнений:</b> ищем ОДЗ, умножаем на общий знаменатель, проверяем корни.
<br><b>Теорема Виета (обратная):</b> $x^2+px+q=(x-x_1)(x-x_2)$, где $x_1+x_2=-p$, $x_1\\cdot x_2=q$.
<br><br>
<b>Шаг 1.</b> Разложим знаменатель первой дроби. Сумма корней $1$, произведение $-12$. Подходят $4$ и $-3$:
$$x^2-x-12 = (x-4)(x+3)$$
<b>Шаг 2.</b> ОДЗ: знаменатели не должны быть нулём:
$$x\\neq 4,\\quad x\\neq -3$$
<b>Шаг 3.</b> Умножим обе части уравнения на общий знаменатель $(x-4)(x+3)$:
$$7 + (x-4) = -(x-4)(x+3)$$
<b>Шаг 4.</b> Упрощаем:
$$x+3 = -(x^2-x-12) = -x^2+x+12$$
$$x^2 - 9 = 0$$
<b>Шаг 5.</b> По формуле разности квадратов: $(x-3)(x+3)=0 \\Rightarrow x=3$ или $x=-3$.
<br><b>Шаг 6.</b> Проверка ОДЗ: $x=-3$ исключён. Проверяем $x=3$:
$$\\dfrac{7}{9-3-12}+\\dfrac{1}{6} = \\dfrac{7}{-6}+\\dfrac{1}{6} = -1 \\checkmark$$
<div class="sol-ans">Ответ: $x = 3$</div>`
      },
      {
        text: `Если двузначное число разделить на сумму его цифр, то в частном получится $4$
               и в остатке $3$. Если это же двузначное число разделить на произведение его цифр,
               то в частном получится $3$ и в остатке $5$. Найдите это двузначное число.`,
        sol: `<b>Запись двузначного числа:</b> $10a+b$, где $a$ — цифра десятков ($1\\leq a\\leq 9$), $b$ — цифра единиц ($0\\leq b\\leq 9$).
<br><b>Теорема о делении с остатком:</b> если $N$ при делении на $d$ даёт частное $q$ и остаток $r$, то $N = d\\cdot q + r$, $0\\leq r\\lt d$.
<br><b>Формула корней квадратного уравнения:</b> $x=\\dfrac{-b\\pm\\sqrt{D}}{2a}$, $D=b^2-4ac$.
<br><br>
<b>Шаг 1.</b> Обозначим за $10a+b$ искомое двузначное число.
<br><b>Шаг 2.</b> <em>Первое условие:</em> при делении на $a+b$ получили частное $4$ и остаток $3$:
$$10a + b = 4(a+b) + 3$$
$$10a + b = 4a + 4b + 3$$
$$6a - 3b = 3$$
$$b = 2a - 1 \\quad (*)$$
<b>Шаг 3.</b> <em>Второе условие:</em> при делении на $ab$ получили частное $3$ и остаток $5$:
$$10a + b = 3ab + 5$$
<b>Шаг 4.</b> Подставим $(*)$ во второе условие:
$$10a + (2a-1) = 3a(2a-1) + 5$$
$$12a - 1 = 6a^2 - 3a + 5$$
$$6a^2 - 15a + 6 = 0$$
Делим на $3$:
$$2a^2 - 5a + 2 = 0$$
<b>Шаг 5.</b> Решаем квадратное уравнение. Дискриминант: $D = 25 - 16 = 9 = 3^2$.
$$a = \\dfrac{5\\pm 3}{4} \\implies a = 2 \\text{ или } a = \\dfrac{1}{2}$$
Цифра должна быть целой, значит $a = 2$.
<br><b>Шаг 6.</b> Из $(*)$: $b = 2\\cdot 2 - 1 = 3$. Число $= 23$.
<br><b>Проверка:</b>
<br>• сумма цифр $= 5$; $23:5 = 4$ (ост. $3$): $4\\cdot 5+3=23$ ✓;
<br>• произведение цифр $= 6$; $23:6 = 3$ (ост. $5$): $3\\cdot 6+5=23$ ✓.
<div class="sol-ans">Ответ: $23$</div>`
      },
      {
        text: `Внутри параллелограмма $ABCD$ взята точка $K$, такая, что
               $S_{BKC} = 12$ см², $S_{AKD} = 20$ см².
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
  <text x="124" y="90" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">K</text>
  <text x="65" y="98" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#c2410c">20 см²</text>
  <text x="177" y="98" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1d4ed8">12 см²</text>
</svg>`,
        sol: `<b>Свойство точки внутри параллелограмма:</b> для любой точки $K$ внутри параллелограмма $ABCD$ сумма площадей двух треугольников, опирающихся на противоположные стороны, равна половине площади параллелограмма:
$$S_{\\triangle BKC} + S_{\\triangle AKD} = \\dfrac{S_{ABCD}}{2}$$
<br>(Доказательство: $BC$ и $AD$ — противоположные стороны параллелограмма, $BC=AD=a$. Расстояния от $K$ до этих параллельных сторон $h_1$ и $h_2$ в сумме дают высоту параллелограмма $H$. Поэтому $S_{\\triangle BKC}+S_{\\triangle AKD}=\\tfrac{1}{2}a(h_1+h_2)=\\tfrac{1}{2}aH=\\tfrac{1}{2}S_{ABCD}$.)
<br><br>
<b>Шаг 1.</b> По свойству, доказанному выше:
$$\\dfrac{S_{ABCD}}{2} = S_{\\triangle BKC}+S_{\\triangle AKD}$$
<b>Шаг 2.</b> Подставляем известные площади:
$$\\dfrac{S_{ABCD}}{2} = 12 + 20 = 32$$
<b>Шаг 3.</b> Умножаем обе части на 2:
$$S_{ABCD} = 64\\text{ см}^2$$
<div class="sol-ans">Ответ: $64$ см²</div>`
      },
    ]
};
