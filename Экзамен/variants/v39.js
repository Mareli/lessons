VARIANTS[39] = {
    label: "Вариант 39",
    tasks: [
      {
        text: `Определите промежуток, которому принадлежит число $1{,}15$:`,
        opts: [
          ["а", "$(1{,}1;\\; 1{,}145)$"], ["б", "$(1;\\; 1{,}05)$"], ["в", "$(1;\\; 1{,}1)$"],
          ["г", "$(1{,}2;\\; 1{,}3)$"], ["д", "$(1{,}1;\\; 1{,}2)$"],
        ],
        sol: `Проверяем каждый вариант: $1{,}1 < 1{,}15 < 1{,}2$ ✓
<div class="sol-ans">Ответ: д)&ensp;$(1{,}1;\\;1{,}2)$</div>`
      },
      {
        text: `Значение выражения $4{,}5 : 9 - 0{,}4$ равно:`,
        opts: [
          ["а", "$0{,}9$"], ["б", "$4{,}6$"], ["в", "$0{,}1$"], ["г", "$0{,}3$"], ["д", "$0{,}01$"],
        ],
        sol: `$$4{,}5 : 9 - 0{,}4 = 0{,}5 - 0{,}4 = 0{,}1$$
<div class="sol-ans">Ответ: в)&ensp;$0{,}1$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "если все стороны квадрата увеличить в $2$ раза, то его площадь увеличится в $2$ раза;"],
          ["б", "внешний угол треугольника является смежным с его внутренним углом;"],
          ["в", "медианы равностороннего треугольника равны между собой;"],
          ["г", "диагональ квадрата со стороной $a$ равна $a\\sqrt{2}$?"],
        ],
        sol: `<ul>
<li>а) Стороны $\\times2$ ⟹ площадь $\\times 2^2 = 4$, а не в $2$ — <b style="color:#dc2626">НЕВЕРНО</b></li>
<li>б) Внешний угол смежен с внутренним — <b>верно</b></li>
<li>в) В равностороннем треугольнике все медианы равны — <b>верно</b></li>
<li>г) Диагональ квадрата $= a\\sqrt{2}$ — <b>верно</b></li>
</ul>
<div class="sol-ans">Ответ: а)</div>`
      },
      {
        text: `Выполните деление: $\\dfrac{m}{m+1} : \\dfrac{m}{m^2-1}$.`,
        sol: `Деление на дробь — умножаем на обратную. ОДЗ: $m\\neq0$, $m\\neq\\pm1$.
$$\\dfrac{m}{m+1}:\\dfrac{m}{m^2-1} = \\dfrac{m}{m+1}\\cdot\\dfrac{m^2-1}{m} = \\dfrac{\\cancel{m}}{m+1}\\cdot\\dfrac{(m-1)\\cancel{(m+1)}}{\\cancel{m}} = m-1$$
<div class="sol-ans">Ответ: $m-1$</div>`
      },
      {
        text: `Найдите больший корень уравнения $x^4 - 15x^2 - 16 = 0$.`,
        sol: `<b>Метод решения биквадратного уравнения:</b> уравнение вида $ax^4 + bx^2 + c = 0$ решается заменой $t = x^2$, причём $t \\geq 0$ (так как квадрат любого числа неотрицателен).
<br><b>Шаг 1.</b> Делаем замену $t = x^2$, где $t \\geq 0$:
$$t^2 - 15t - 16 = 0$$
<b>Шаг 2.</b> Решаем квадратное уравнение по <b>формуле дискриминанта</b> $D = b^2 - 4ac$:
$$D = (-15)^2 - 4\\cdot 1\\cdot(-16) = 225 + 64 = 289 = 17^2$$
$$t = \\dfrac{15 \\pm 17}{2} \\implies t_1 = \\dfrac{32}{2} = 16, \\quad t_2 = \\dfrac{-2}{2} = -1$$
<b>Шаг 3.</b> Поскольку $t = x^2 \\geq 0$, корень $t_2 = -1$ <em>не подходит</em>. Остаётся $t = 16$.
<br><b>Шаг 4.</b> Возвращаемся к $x$:
$$x^2 = 16 \\implies x = \\pm\\sqrt{16} = \\pm 4$$
<b>Шаг 5.</b> Из корней $x = 4$ и $x = -4$ больший — это $x = 4$.
<div class="sol-ans">Ответ: больший корень $x = 4$</div>`
      },
      {
        text: `В треугольнике $ABC$ $AB = 6$ см, $AC = 5$ см, $CM$ — медиана,
               $\\angle ACM = \\angle BCM$. Найдите синус угла $A$.`,
        sol: `<b>Шаг 1. Определяем тип треугольника.</b>
<br>$CM$ — медиана, значит $M$ — середина $AB$. Равенство $\\angle ACM=\\angle BCM$ означает, что $CM$ — <em>также</em> биссектриса угла $C$.
<br>По теореме о биссектрисе: $\\dfrac{AM}{MB} = \\dfrac{AC}{BC}$. Так как $AM=MB$ (медиана), то $AC = BC$.
$$BC = AC = 5\\text{ см}$$
Треугольник <b>равнобедренный</b> с основанием $AB=6$ и боковыми сторонами $=5$.
<svg viewBox="0 0 150 105" xmlns="http://www.w3.org/2000/svg" style="max-width:220px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="20,88 110,88 65,28" fill="rgba(37,99,235,0.07)" stroke="#334155" stroke-width="1.8"/>
  <line x1="65" y1="28" x2="65" y2="88" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="65" cy="88" r="3" fill="#dc2626"/>
  <path d="M 38 88 A 18 18 0 0 0 32 72" fill="none" stroke="#555" stroke-width="1.2"/>
  <text x="6" y="100" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="113" y="100" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="61" y="22" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="60" y="100" font-size="11" font-family="serif" font-style="italic" fill="#dc2626">M</text>
  <text x="37" y="56" font-size="11" fill="#334155">5</text>
  <text x="82" y="56" font-size="11" fill="#334155">5</text>
  <text x="60" y="83" font-size="11" fill="#334155">6</text>
  <text x="27" y="80" font-size="10" fill="#555">A</text>
  <text x="66" y="61" font-size="11" fill="#dc2626">h</text>
</svg>
<b>Шаг 2. Находим высоту $CM$.</b>
<br>В равнобедренном треугольнике медиана из $C$ на $AB$ является одновременно <b>высотой</b>. Из прямоугольного $\\triangle CAM$:
$$h = CM = \\sqrt{AC^2 - AM^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4\\text{ см}$$
<b>Шаг 3. Синус угла $A$.</b>
$$\\sin A = \\dfrac{h}{AC} = \\dfrac{4}{5}$$
<div class="sol-ans">Ответ: $\\sin A = \\dfrac{4}{5}$</div>`
      },
      {
        text: `Найдите число целых решений неравенства
               $\\dfrac{(x-3)(-x^2+5x+6)}{x-5} \\geq 0$.`,
        sol: `<b>Раскладываем числитель:</b>
$$-x^2+5x+6 = -(x^2-5x-6) = -(x-6)(x+1)$$
Неравенство принимает вид:
$$\\dfrac{-(x-3)(x-6)(x+1)}{x-5}\\geq0 \\iff \\dfrac{(x-3)(x-6)(x+1)}{x-5}\\leq0$$
<b>Метод интервалов.</b> Корни: $x=-1,\\,3,\\,5,\\,6$ (при $x=5$ — ОДЗ).
<table style="border-collapse:collapse;font-size:12px;margin:6px 0">
<tr style="background:#f1f5f9"><td style="padding:3px 6px;border:1px solid #cbd5e1">Интервал</td><td style="padding:3px 6px;border:1px solid #cbd5e1">Знак</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$\\leq0$?</td></tr>
<tr><td style="padding:3px 6px;border:1px solid #cbd5e1">$x<-1$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✗</td></tr>
<tr style="background:#dbeafe"><td style="padding:3px 6px;border:1px solid #cbd5e1">$x=-1$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$0$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✓</td></tr>
<tr style="background:#dbeafe"><td style="padding:3px 6px;border:1px solid #cbd5e1">$-1\\lt x\\lt 3$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$-$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✓</td></tr>
<tr style="background:#dbeafe"><td style="padding:3px 6px;border:1px solid #cbd5e1">$x=3$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$0$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✓</td></tr>
<tr><td style="padding:3px 6px;border:1px solid #cbd5e1">$3\\lt x\\lt 5$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✗</td></tr>
<tr><td style="padding:3px 6px;border:1px solid #cbd5e1">$x=5$</td><td colspan="2" style="padding:3px 6px;border:1px solid #cbd5e1">не определено</td></tr>
<tr style="background:#dbeafe"><td style="padding:3px 6px;border:1px solid #cbd5e1">$5\\lt x\\lt 6$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$-$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✓</td></tr>
<tr style="background:#dbeafe"><td style="padding:3px 6px;border:1px solid #cbd5e1">$x=6$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$0$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✓</td></tr>
<tr><td style="padding:3px 6px;border:1px solid #cbd5e1">$x>6$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 6px;border:1px solid #cbd5e1">✗</td></tr>
</table>
<b>Решение:</b> $x\\in[-1;\\,3]\\cup(5;\\,6]$.
<svg viewBox="0 0 310 52" xmlns="http://www.w3.org/2000/svg" style="max-width:310px;width:100%;height:auto;display:block;margin:6px 0">
  <defs><marker id="v39t7" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="26" x2="302" y2="26" stroke="#bbb" stroke-width="1.2" marker-end="url(#v39t7)"/>
  <line x1="45" y1="22" x2="45" y2="30" stroke="#777" stroke-width="1"/><text x="45" y="43" font-size="10" text-anchor="middle" fill="#555">−1</text>
  <line x1="125" y1="22" x2="125" y2="30" stroke="#777" stroke-width="1"/><text x="125" y="43" font-size="10" text-anchor="middle" fill="#555">3</text>
  <line x1="185" y1="22" x2="185" y2="30" stroke="#777" stroke-width="1"/><text x="185" y="43" font-size="10" text-anchor="middle" fill="#555">5</text>
  <line x1="225" y1="22" x2="225" y2="30" stroke="#777" stroke-width="1"/><text x="225" y="43" font-size="10" text-anchor="middle" fill="#555">6</text>
  <line x1="45" y1="26" x2="125" y2="26" stroke="#2563eb" stroke-width="4" opacity="0.55"/>
  <circle cx="45" cy="26" r="5" fill="#2563eb"/>
  <circle cx="125" cy="26" r="5" fill="#2563eb"/>
  <line x1="185" y1="26" x2="225" y2="26" stroke="#2563eb" stroke-width="4" opacity="0.55"/>
  <circle cx="185" cy="26" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="225" cy="26" r="5" fill="#2563eb"/>
</svg>
Целые из $[-1;3]$: $-1,0,1,2,3$ — $5$ чисел. Из $(5;6]$: $6$ — $1$ число.
<div class="sol-ans">Ответ: $6$ целых решений</div>`
      },
      {
        text: `График линейной функции проходит через точки $A(-2;\\; 11)$ и $B(4;\\; -10)$.
               Запишите формулу, задающую эту функцию.
               Найдите, при каких значениях переменной функция принимает неположительные значения.`,
        sol: `<b>Линейная функция:</b> график $y = kx + b$ — прямая. Чтобы найти $k$ и $b$, подставляем координаты двух точек графика.
<br><b>Шаг 1.</b> По условию график проходит через $A(-2;\\,11)$ и $B(4;\\,-10)$. Угловой коэффициент по формуле $k = \\dfrac{y_2 - y_1}{x_2 - x_1}$:
$$k = \\dfrac{-10 - 11}{4 - (-2)} = \\dfrac{-21}{6} = -\\dfrac{7}{2}$$
<b>Шаг 2.</b> Найдём $b$, подставив координаты точки $A(-2;\\,11)$ в уравнение $y = kx + b$:
$$11 = -\\dfrac{7}{2}\\cdot(-2) + b \\implies 11 = 7 + b \\implies b = 4$$
Значит, формула функции: $f(x) = -\\dfrac{7}{2}x + 4$.
<br><b>Шаг 3. Проверка:</b> подставим $x = 4$:
$$f(4) = -\\dfrac{7}{2}\\cdot 4 + 4 = -14 + 4 = -10 \\quad \\checkmark$$
<b>Шаг 4.</b> «Функция принимает неположительные значения» означает $f(x) \\leq 0$. Решаем неравенство:
$$-\\dfrac{7}{2}x + 4 \\leq 0$$
Переносим $4$ в правую часть со сменой знака:
$$-\\dfrac{7}{2}x \\leq -4$$
Делим на $-\\dfrac{7}{2}$ (отрицательное число — знак неравенства меняется на противоположный):
$$x \\geq \\dfrac{-4}{-7/2} = \\dfrac{8}{7}$$
<div class="sol-ans">Ответ: $f(x)=-\\dfrac{7}{2}x+4$;&ensp;функция неположительна при $x\\geq\\dfrac{8}{7}$</div>`
      },
      {
        text: `Найдите площадь треугольника, если две его стороны равны $6$ см и $8$ см,
               а медиана, проведённая к третьей стороне, равна $5$ см.`,
        sol: `<b>Шаг 1. Строим параллелограмм.</b>
<br>Пусть $M$ — середина третьей стороны $AB$, а $CM=5$ — медиана. Отметим точку $D$ так, чтобы $M$ стала серединой отрезка $CD$ (то есть $MD=CM=5$, $CD=10$).
<br>Тогда $ACBD$ — <b>параллелограмм</b>, ведь его диагонали $AB$ и $CD$ делятся точкой $M$ пополам.
<svg viewBox="0 0 155 130" xmlns="http://www.w3.org/2000/svg" style="max-width:240px;width:100%;height:auto;display:block;margin:8px 0">
  <!-- Параллелограмм ACBD (прямоугольник) -->
  <polygon points="107,110 35,110 35,14 107,14" fill="rgba(234,179,8,0.10)" stroke="#ca8a04" stroke-width="1.3" stroke-dasharray="5,3"/>
  <!-- Треугольник ABC (синий) -->
  <polygon points="35,110 107,110 35,14" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2"/>
  <!-- Треугольник ACD (зелёный) -->
  <polygon points="107,110 35,110 107,14" fill="rgba(22,163,74,0.12)" stroke="#16a34a" stroke-width="1.3"/>
  <!-- Медиана CM продолжена до D -->
  <line x1="35" y1="110" x2="107" y2="14" stroke="#dc2626" stroke-width="1.8"/>
  <!-- M — середина CD -->
  <circle cx="71" cy="62" r="3.5" fill="#dc2626"/>
  <!-- Прямой угол при C -->
  <polygon points="35,110 43,110 43,102 35,102" fill="none" stroke="#2563eb" stroke-width="1.2"/>
  <!-- Прямой угол при A в треугольнике ACD -->
  <polygon points="107,110 107,102 99,102 99,110" fill="none" stroke="#16a34a" stroke-width="1.2"/>
  <!-- Метки вершин -->
  <text x="20" y="122" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="110" y="122" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="20" y="10" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="110" y="10" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="67" y="57" font-size="11" font-family="serif" font-style="italic" fill="#dc2626">M</text>
  <!-- Длины -->
  <text x="66" y="122" font-size="11" fill="#334155">6</text>
  <text x="22" y="65" font-size="11" fill="#334155">8</text>
  <text x="112" y="65" font-size="11" fill="#16a34a">8</text>
  <text x="66" y="9" font-size="11" fill="#334155">6</text>
  <text x="38" y="84" font-size="10" fill="#dc2626">5</text>
  <text x="86" y="42" font-size="10" fill="#dc2626">5</text>
  <text x="75" y="75" font-size="11" fill="#dc2626">10</text>
</svg>
<b>Шаг 2. Стороны параллелограмма.</b>
<br>В параллелограмме $ACBD$: $AC = BD = 6$ и $BC = AD = 8$ (противоположные стороны). Диагональ $CD = 2\\cdot CM = 10$.
<br><b>Шаг 3. Треугольник $ACD$ — прямоугольный.</b>
<br>Рассмотрим $\\triangle ACD$ со сторонами $AC=6$, $AD=8$, $CD=10$:
$$6^2 + 8^2 = 36 + 64 = 100 = 10^2 \\checkmark$$
По обратной теореме Пифагора: $\\angle A = 90°$ (зелёный прямой угол на рисунке).
$$S_{\\triangle ACD} = \\dfrac{1}{2}\\cdot AC\\cdot AD = \\dfrac{1}{2}\\cdot6\\cdot8 = 24\\text{ см}^2$$
<b>Шаг 4. Площадь исходного треугольника.</b>
<br>Диагональ $CD$ делит параллелограмм на два равных треугольника: $\\triangle ACD$ и $\\triangle ABC$.
$$S_{\\triangle ABC} = S_{\\triangle ACD} = 24\\text{ см}^2$$
<div class="sol-ans">Ответ: $24$ см²</div>`
      },
      {
        text: `Из двух домов, расстояние между которыми $180$ м, вышли и одновременно пошли
               в одном направлении в школу мальчик и девочка. Девочка идёт впереди мальчика.
               Скорость мальчика $6$ км/ч, скорость девочки $60$ м/мин.
               Догонит ли мальчик девочку до прихода в школу, если путь девочки занимает $4$ мин?
               Ответ обоснуйте.`,
        sol: `<b>Переводим скорость мальчика:</b>
$$6\\text{ км/ч} = \\dfrac{6000\\text{ м}}{60\\text{ мин}} = 100\\text{ м/мин}$$
<b>Расстояние до школы</b> (от девочки): $60\\times4=240$ м. Мальчик стартует на $180$ м позади, значит ему до школы $240+180=420$ м.
<br><b>Скорость сближения:</b> мальчик быстрее на $100-60=40$ м/мин. Начальный разрыв $=180$ м.
<br><b>Время до нагона:</b>
$$t = \\dfrac{180}{40} = 4{,}5\\text{ мин}$$
Но девочка добирается до школы за $4$ мин, а мальчику нужно $4{,}5>4$ мин, чтобы её нагнать.
<br>Проверим по позициям (отсчёт от старта девочки):
<table style="border-collapse:collapse;font-size:12px;margin:6px 0">
<tr style="background:#f1f5f9"><td style="padding:3px 10px;border:1px solid #cbd5e1">Момент</td><td style="padding:3px 10px;border:1px solid #cbd5e1">Девочка</td><td style="padding:3px 10px;border:1px solid #cbd5e1">Мальчик</td></tr>
<tr><td style="padding:3px 10px;border:1px solid #cbd5e1">$t=0$</td><td style="padding:3px 10px;border:1px solid #cbd5e1">$0$ м</td><td style="padding:3px 10px;border:1px solid #cbd5e1">$-180$ м</td></tr>
<tr><td style="padding:3px 10px;border:1px solid #cbd5e1">$t=4$ мин</td><td style="padding:3px 10px;border:1px solid #cbd5e1">$240$ м (школа) ✓</td><td style="padding:3px 10px;border:1px solid #cbd5e1">$-180+400=220$ м</td></tr>
</table>
В момент, когда девочка прибыла в школу ($240$ м), мальчик находится на расстоянии $240-220=20$ м позади.
<div class="sol-ans">Ответ: нет, мальчик <b>не догонит</b> — время нагона $4{,}5$ мин, а путь девочки $4$ мин</div>`
      },
    ]
};
