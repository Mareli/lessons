VARIANTS[27] = {
    label: "Вариант 27",
    tasks: [
      {
        text: `Какое из приведённых ниже выражений тождественно равно произведению $-x(-x+3)$:`,
        opts: [
          ["а", "$x^2-3x$"], ["б", "$x^2+3x$"], ["в", "$x^2+3$"],
          ["г", "$x^2-3$"], ["д", "$3x-x^2$"],
        ],
        sol: `Раскрываем скобки:
$$-x(-x+3) = (-x)\\cdot(-x) + (-x)\\cdot3 = x^2 - 3x$$
<div class="sol-ans">Ответ: а)&ensp;$x^2-3x$</div>`
      },
      {
        text: `Определите промежуток, которому принадлежит значение выражения
               $\\left(1\\dfrac{4}{5}+1\\right):2$:`,
        opts: [
          ["а", "$(1;\\;2)$"], ["б", "$(2;\\;3)$"], ["в", "$(1;\\;1{,}1)$"],
          ["г", "$(0;\\;1)$"], ["д", "$(0;\\;0{,}5)$"],
        ],
        sol: `Переводим смешанное число: $1\\dfrac{4}{5} = \\dfrac{9}{5}$.
$$\\left(\\dfrac{9}{5}+1\\right):2 = \\dfrac{14}{5}:2 = \\dfrac{14}{10} = \\dfrac{7}{5} = 1{,}4$$
Так как $1 < 1{,}4 < 2$, значение принадлежит промежутку $(1;\\,2)$.
<div class="sol-ans">Ответ: а)&ensp;$(1;\\;2)$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "площадь трапеции равна произведению полусуммы оснований на высоту;"],
          ["б", "медианы треугольника точкой пересечения делятся в отношении $3:1$;"],
          ["в", "касательная к окружности перпендикулярна радиусу, проведённому в точку касания;"],
          ["г", "катет в любом прямоугольном треугольнике всегда меньше гипотенузы?"],
        ],
        sol: `<ul>
<li>а) $S_{\\text{трап}}=\\dfrac{a+b}{2}\\cdot h$ — <b>верно</b></li>
<li>б) Медианы делятся точкой пересечения в отношении $\\mathbf{2:1}$ от вершины, а не $3:1$ — <b style="color:#dc2626">НЕВЕРНО</b></li>
<li>в) Касательная $\\perp$ радиусу в точке касания — <b>верно</b></li>
<li>г) Катет $<$ гипотенузы — <b>верно</b></li>
</ul>
<div class="sol-ans">Ответ: б)</div>`
      },
      {
        text: `Решите неравенство $\\dfrac{(x-3)^2(x+1)}{(x-2)^3} \\leq 0$ и запишите ответ.`,
        sol: `<b>Числитель:</b> $(x-3)^2\\geq0$ всегда, обнуляется при $x=3$. Знак числителя = знак $(x+1)$:
<ul>
<li>$x < -1$: числитель $< 0$</li>
<li>$x = -1$: числитель $= 0$</li>
<li>$x > -1$, $x\\neq3$: числитель $> 0$</li>
<li>$x = 3$: числитель $= 0$</li>
</ul>
<b>Знаменатель:</b> $(x-2)^3$ имеет знак $(x-2)$: отрицателен при $x<2$, равен $0$ при $x=2$ (ОДЗ: $x\\neq2$), положителен при $x>2$.
<br><b>Дробь $\\leq0$:</b>
<table style="border-collapse:collapse;font-size:13px;margin:6px 0">
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">Случай</td><td style="padding:3px 8px;border:1px solid #cbd5e1">Числитель</td><td style="padding:3px 8px;border:1px solid #cbd5e1">Знаменатель</td><td style="padding:3px 8px;border:1px solid #cbd5e1">Дробь</td></tr>
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">$x<-1$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$-$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$-$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$ ✗</td></tr>
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">$x=-1$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$0$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$-$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$0$ ✓</td></tr>
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">$-1\\lt x\\lt 2$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$-$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$-$ ✓</td></tr>
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">$x=2$</td><td colspan="3" style="padding:3px 8px;border:1px solid #cbd5e1">не определена ✗</td></tr>
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">$2\\lt x\\lt 3$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$ ✗</td></tr>
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">$x=3$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$0$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$0$ ✓</td></tr>
<tr><td style="padding:3px 8px;border:1px solid #cbd5e1">$x>3$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$</td><td style="padding:3px 8px;border:1px solid #cbd5e1">$+$ ✗</td></tr>
</table>
<svg viewBox="0 0 290 56" xmlns="http://www.w3.org/2000/svg" style="max-width:290px;width:100%;height:auto;display:block;margin:6px 0">
  <defs><marker id="v27t4" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="28" x2="282" y2="28" stroke="#bbb" stroke-width="1.2" marker-end="url(#v27t4)"/>
  <line x1="60" y1="24" x2="60" y2="32" stroke="#777" stroke-width="1"/><text x="60" y="44" font-size="10" text-anchor="middle" fill="#555">−1</text>
  <line x1="140" y1="24" x2="140" y2="32" stroke="#777" stroke-width="1"/><text x="140" y="44" font-size="10" text-anchor="middle" fill="#555">2</text>
  <line x1="210" y1="24" x2="210" y2="32" stroke="#777" stroke-width="1"/><text x="210" y="44" font-size="10" text-anchor="middle" fill="#555">3</text>
  <line x1="60" y1="28" x2="140" y2="28" stroke="#2563eb" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <circle cx="60" cy="28" r="5" fill="#2563eb"/>
  <circle cx="140" cy="28" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="210" cy="28" r="5" fill="#2563eb"/>
  <text x="95" y="16" font-size="9" text-anchor="middle" fill="#2563eb">≤ 0</text>
</svg>
<div class="sol-ans">Ответ: $x\\in[-1;\\;2)\\cup\\{3\\}$</div>`
      },
      {
        text: `Для украшения двух этажей поместья Деда Мороза было использовано $150$ лампочек.
               Для украшения первого этажа потребовалось вдвое больше лампочек, чем для второго.
               Сколько лампочек было использовано для украшения второго этажа?`,
        sol: `<b>Метод введения переменной:</b> то, о чём спрашивают, обозначим переменной и составим уравнение по условию задачи.
<br><b>Шаг 1.</b> Пусть для украшения второго этажа использовали $x$ лампочек. По условию для первого этажа потребовалось вдвое больше, значит $2x$ лампочек.
<br><b>Шаг 2.</b> Всего на оба этажа израсходовано $150$ лампочек, значит:
$$x + 2x = 150.$$
<b>Шаг 3.</b> Решаем уравнение, приводя подобные слагаемые:
$$3x = 150 \\;\\implies\\; x = \\dfrac{150}{3} = 50.$$
<b>Шаг 4.</b> Значит, для второго этажа использовали $50$ лампочек (а для первого — $2\\cdot 50=100$, сумма $100+50=150$ — сходится с условием).
<div class="sol-ans">Ответ: $50$ лампочек</div>`
      },
      {
        text: `Дан треугольник $ABC$, серединные перпендикуляры к его сторонам $AC$ и $BC$
               пересекаются в точке $O$. Докажите, что серединный перпендикуляр к стороне $AB$
               проходит через точку $O$.`,
        sol: `<b>Доказательство.</b>
<svg viewBox="0 0 280 250" xmlns="http://www.w3.org/2000/svg" style="max-width:380px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="40,185 226,185 115,40" fill="rgba(37,99,235,0.06)" stroke="#334155" stroke-width="2"/>
  <line x1="133" y1="36" x2="133" y2="195" stroke="#16a34a" stroke-width="2" stroke-dasharray="7,4"/>
  <line x1="44" y1="95" x2="160" y2="156" stroke="#dc2626" stroke-width="2" stroke-dasharray="7,4"/>
  <line x1="200" y1="92" x2="108" y2="160" stroke="#9333ea" stroke-width="2" stroke-dasharray="7,4"/>
  <polygon points="133,185 143,185 143,175 133,175" fill="rgba(22,163,74,0.12)" stroke="#16a34a" stroke-width="1.5"/>
  <polygon points="78,113 83,104 92,109 87,118" fill="rgba(220,38,38,0.1)" stroke="#dc2626" stroke-width="1.5"/>
  <polygon points="171,113 165,105 157,111 163,119" fill="rgba(147,51,234,0.1)" stroke="#9333ea" stroke-width="1.5"/>
  <line x1="133" y1="141" x2="40" y2="185" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="133" y1="141" x2="226" y2="185" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="133" y1="141" x2="115" y2="40" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="86" y1="160" x2="89" y2="166" stroke="#2563eb" stroke-width="2.2"/>
  <line x1="82" y1="162" x2="85" y2="168" stroke="#2563eb" stroke-width="2.2"/>
  <line x1="181" y1="160" x2="178" y2="166" stroke="#2563eb" stroke-width="2.2"/>
  <line x1="185" y1="162" x2="182" y2="168" stroke="#2563eb" stroke-width="2.2"/>
  <line x1="121" y1="92" x2="127" y2="90" stroke="#2563eb" stroke-width="2.2"/>
  <line x1="121" y1="88" x2="127" y2="86" stroke="#2563eb" stroke-width="2.2"/>
  <circle cx="133" cy="141" r="5" fill="#1e293b"/>
  <text x="22" y="200" font-size="16" font-family="serif" font-style="italic" fill="#1e293b">A</text>
  <text x="231" y="200" font-size="16" font-family="serif" font-style="italic" fill="#1e293b">B</text>
  <text x="110" y="30" font-size="16" font-family="serif" font-style="italic" fill="#1e293b">C</text>
  <text x="138" y="138" font-size="14" font-family="serif" font-style="italic" fill="#1e293b">O</text>
  <text x="52" y="168" font-size="12" fill="#2563eb" font-style="italic">OA</text>
  <text x="188" y="168" font-size="12" fill="#2563eb" font-style="italic">OB</text>
  <text x="118" y="78" font-size="12" fill="#2563eb" font-style="italic">OC</text>
  <text x="16" y="118" font-size="11" fill="#dc2626">⊥ к AC</text>
  <text x="193" y="118" font-size="11" fill="#9333ea">⊥ к BC</text>
  <text x="137" y="210" font-size="11" fill="#16a34a" text-anchor="middle">⊥ к AB</text>
  <text x="140" y="240" font-size="12" text-anchor="middle" fill="#2563eb" font-weight="bold">OA = OB = OC</text>
</svg>
На рисунке: три серединных перпендикуляра (<span style="color:#dc2626">к $AC$</span>, <span style="color:#9333ea">к $BC$</span>, <span style="color:#16a34a">к $AB$</span>) сходятся в одной точке $O$. Двойные засечки показывают $OA=OB=OC$.
<br><br>
Точка $O$ лежит на серединном перпендикуляре к $AC$:
$$OA = OC \\quad \\text{(все точки серединного перпендикуляра равноудалены от концов отрезка)}$$
Точка $O$ лежит на серединном перпендикуляре к $BC$:
$$OB = OC$$
Из двух равенств:
$$OA = OC = OB \\implies OA = OB$$
Значит, $O$ равноудалена от $A$ и $B$, то есть лежит на серединном перпендикуляре к $AB$. ∎
<div class="sol-ans">Доказано: $OA=OC=OB$, поэтому $O$ лежит на серединном перпендикуляре к $AB$</div>`
      },
      {
        text: `Решите уравнение $0{,}2(x-2) = 2{,}5 : 0{,}5$
               и запишите число, обратное корню уравнения.`,
        sol: `<b>Свойство обратного числа:</b> число, обратное $a$ (при $a\\neq 0$), равно $\\dfrac{1}{a}$.
<br><b>Шаг 1.</b> Сначала упростим правую часть. По правилу деления: $2{,}5 : 0{,}5 = \\dfrac{2{,}5}{0{,}5} = 5$. Получаем уравнение:
$$0{,}2(x-2) = 5$$
<b>Шаг 2.</b> Чтобы найти $x-2$, разделим обе части на $0{,}2$:
$$x-2 = \\dfrac{5}{0{,}2} = 25$$
<b>Шаг 3.</b> Прибавим $2$ к обеим частям:
$$x = 25 + 2 = 27$$
<b>Шаг 4.</b> Число, обратное корню $x=27$, равно:
$$\\dfrac{1}{27}$$
<div class="sol-ans">Ответ: $\\dfrac{1}{27}$</div>`
      },
      {
        text: `К задуманному числу $x$, умноженному на $4$, прибавили число, в $2$ раза большее задуманного.
               Полученную сумму умножили на $5$ и от полученного произведения вычли число,
               в $8$ раз большее $x$. В результате получили число $y$.
               Определите вид зависимости числа $y$ от числа $x$.`,
        sol: `<b>Прямая пропорциональность:</b> это зависимость вида $y=kx$, где $k$ — постоянное число, отличное от нуля. График такой функции — прямая, проходящая через начало координат.
<br><b>Шаг 1.</b> Запишем по условию, что значит «задуманное число $x$, умноженное на $4$»: это $4x$. Число, в $2$ раза большее задуманного, — это $2x$.
<br><b>Шаг 2.</b> Найдём сумму этих чисел:
$$4x + 2x = 6x.$$
<b>Шаг 3.</b> По условию полученную сумму умножили на $5$:
$$5\\cdot 6x = 30x.$$
<b>Шаг 4.</b> Из этого произведения вычли число, в $8$ раз большее $x$ (то есть $8x$):
$$y = 30x - 8x = 22x.$$
<b>Шаг 5.</b> Получили зависимость $y=22x$. Так как это запись вида $y=kx$ с $k=22\\neq 0$, перед нами прямая пропорциональность.
<div class="sol-ans">Ответ: прямая пропорциональность $y=22x$</div>`
      },
      {
        text: `Сколько решений имеет система уравнений
               $$\\begin{cases} x^2 + xy = 15, \\\\[4pt] y^2 + xy = 10? \\end{cases}$$
               Ответ обоснуйте.`,
        sol: `<b>Формула квадрата суммы:</b> $(x+y)^2 = x^2+2xy+y^2$.
<br><b>Формула разности квадратов:</b> $x^2-y^2 = (x-y)(x+y)$.
<br><b>Метод решения:</b> комбинируя уравнения (сложение и вычитание), сводим систему к простой.
<br><b>Шаг 1.</b> Сложим уравнения почленно:
$$x^2+xy+y^2+xy = 15+10$$
$$x^2+2xy+y^2 = 25 \\;\\implies\\; (x+y)^2 = 25$$
Отсюда $x+y = 5$ или $x+y = -5$.
<br><b>Шаг 2.</b> Вычтем второе уравнение из первого:
$$x^2+xy - (y^2+xy) = 15 - 10$$
$$x^2 - y^2 = 5 \\;\\implies\\; (x-y)(x+y) = 5$$
<b>Шаг 3. Случай 1:</b> $x+y = 5$. Подставим в $(x-y)(x+y) = 5$:
$$(x-y)\\cdot 5 = 5 \\;\\implies\\; x-y = 1$$
Решаем систему $x+y=5$ и $x-y=1$: $x=3$, $y=2$.
<br><b>Шаг 4. Случай 2:</b> $x+y = -5$. Подставим:
$$(x-y)\\cdot (-5) = 5 \\;\\implies\\; x-y = -1$$
Решаем систему $x+y=-5$ и $x-y=-1$: $x=-3$, $y=-2$.
<br><b>Шаг 5. Проверка.</b>
<br>Для $(3;\\,2)$:&ensp;$3^2+3\\cdot 2 = 9+6 = 15$ ✓,&ensp;$2^2+3\\cdot 2 = 4+6 = 10$ ✓.
<br>Для $(-3;\\,-2)$:&ensp;$(-3)^2+(-3)\\cdot(-2) = 9+6 = 15$ ✓,&ensp;$(-2)^2+(-3)\\cdot(-2) = 4+6 = 10$ ✓.
<br>Получили ровно $2$ решения.
<div class="sol-ans">Ответ: $2$ решения — $(3;\\,2)$ и $(-3;\\,-2)$</div>`
      },
      {
        text: `В параллелограмме $ABCD$ диагонали взаимно перпендикулярны.
               Высота $BH$, проведённая к стороне $AD$, пересекает диагональ $AC$ в точке $K$;
               $BK = 10$ см, $KH = 6$ см. Найдите площадь параллелограмма.`,
        sol: `<b>Шаг 1. Параллелограмм с перпендикулярными диагоналями — ромб.</b>
<br>В параллелограмме диагонали делятся точкой пересечения пополам. Если они ещё и перпендикулярны, то по теореме Пифагора все стороны равны (ромб). Обозначим сторону $a$, угол $\\angle DAB = \\beta$.
<svg viewBox="0 0 225 140" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="20,115 80,35 180,35 120,115" fill="rgba(37,99,235,0.06)" stroke="#334155" stroke-width="1.8"/>
  <line x1="80" y1="35" x2="80" y2="115" stroke="#f97316" stroke-width="1.8"/>
  <line x1="20" y1="115" x2="180" y2="35" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="5,3"/>
  <line x1="80" y1="35" x2="120" y2="115" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
  <polygon points="80,115 88,115 88,107 80,107" fill="none" stroke="#334155" stroke-width="1.2"/>
  <circle cx="100" cy="75" r="3" fill="#334155"/>
  <circle cx="80" cy="85" r="3.5" fill="#f97316"/>
  <text x="6" y="123" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="73" y="28" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="183" y="30" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="122" y="128" font-size="13" font-family="serif" font-style="italic">D</text>
  <text x="73" y="123" font-size="12" font-family="serif" font-style="italic">H</text>
  <text x="83" y="83" font-size="12" font-family="serif" font-style="italic" fill="#f97316">K</text>
  <text x="103" y="72" font-size="11" font-family="serif" font-style="italic">O</text>
  <text x="85" y="62" font-size="10" fill="#f97316">10</text>
  <text x="85" y="102" font-size="10" fill="#f97316">6</text>
</svg>
<b>Шаг 2. Диагональ $AC$ — биссектриса угла $A$ в ромбе.</b>
<br>В ромбе диагональ делит угол пополам: $\\angle DAC = \\angle BAC = \\dfrac{\\beta}{2}$.
<br><b>Шаг 3. Применяем теорему о биссектрисе к $\\triangle ABH$.</b>
<br>В прямоугольном $\\triangle ABH$ ($\\angle H = 90°$) отрезок $AK$ является <b>биссектрисой</b> угла $A$ (т.к. $AK$ лежит на диагонали ромба $AC$, которая делит $\\angle BAH = \\beta$ пополам).
<br>По теореме о биссектрисе треугольника биссектриса делит противолежащую сторону в отношении прилежащих сторон:
$$\\dfrac{BK}{KH} = \\dfrac{AB}{AH}$$
В прямоугольном $\\triangle ABH$: $AH = AB\\cos\\beta$, поэтому:
$$\\dfrac{BK}{KH} = \\dfrac{AB}{AB\\cos\\beta} = \\dfrac{1}{\\cos\\beta}$$
$$\\cos\\beta = \\dfrac{KH}{BK} = \\dfrac{6}{10} = \\dfrac{3}{5}$$
<b>Шаг 4. Находим $\\sin\\beta$.</b>
$$\\sin\\beta = \\sqrt{1 - \\cos^2\\beta} = \\sqrt{1 - \\dfrac{9}{25}} = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}$$
<b>Шаг 5. Находим сторону ромба $a$.</b>
<br>В прямоугольном $\\triangle ABH$: $BH = AB\\cdot\\sin\\beta$:
$$BH = BK + KH = 10 + 6 = 16\\text{ см}$$
$$a = AB = \\dfrac{BH}{\\sin\\beta} = \\dfrac{16}{\\tfrac{4}{5}} = 20\\text{ см}$$
<b>Шаг 6. Площадь параллелограмма.</b>
$$S = AD\\cdot BH = a\\cdot BH = 20\\cdot16 = 320\\text{ см}^2$$
<div class="sol-ans">Ответ: $320$ см²</div>`
      },
    ]
};
