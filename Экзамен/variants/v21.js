VARIANTS[21] = {
    label: "Вариант 21",
    tasks: [
      {
        text: `Значение выражения $\\dfrac{3}{4} : \\dfrac{7}{3}$ равно:`,
        opts: [
          ["а", "$\\dfrac{28}{9}$"], ["б", "$\\dfrac{21}{12}$"], ["в", "$\\dfrac{9}{28}$"],
          ["г", "$\\dfrac{7}{4}$"], ["д", "$\\dfrac{4}{7}$"],
        ],
        sol: `Деление дробей — умножаем первую на обратную второй:
$$\\dfrac{3}{4} : \\dfrac{7}{3} = \\dfrac{3}{4} \\cdot \\dfrac{3}{7} = \\dfrac{9}{28}$$
<div class="sol-ans">Ответ: в)&ensp;$\\dfrac{9}{28}$</div>`
      },
      {
        text: `Определите, какое из чисел является решением уравнения $3 = -6x$:`,
        opts: [
          ["а", "$-2$"], ["б", "$2$"], ["в", "$\\dfrac{1}{2}$"],
          ["г", "$-\\dfrac{1}{2}$"], ["д", "$-3$"],
        ],
        sol: `$$3 = -6x \\implies x = \\dfrac{3}{-6} = -\\dfrac{1}{2}$$
<b>Проверка:</b> $-6\\cdot\\bigl(-\\tfrac{1}{2}\\bigr)=3$ ✓
<div class="sol-ans">Ответ: г)&ensp;$-\\dfrac{1}{2}$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "сумма смежных углов равна $180^{\\circ}$;"],
          ["б", "на плоскости две прямые, параллельные третьей, параллельны между собой;"],
          ["в", "в любом параллелограмме противоположные углы равны между собой;"],
          ["г", "существует треугольник со сторонами, равными $3$ см, $5$ см и $8$ см?"],
        ],
        sol: `<ul>
<li>а) Сумма смежных углов $=180°$ — <b>верно</b></li>
<li>б) Транзитивность параллельности — <b>верно</b></li>
<li>в) Противоположные углы параллелограмма равны — <b>верно</b></li>
<li>г) Стороны $3$, $5$, $8$: $3+5=8$, но для треугольника нужно <em>строгое</em> неравенство $a+b>c$ — <b style="color:#dc2626">НЕВЕРНО</b> (вырожденный «треугольник»)</li>
</ul>
<div class="sol-ans">Ответ: г)</div>`
      },
      {
        text: `Упростите выражение $2(a - 3b) - 3(2a + b)$.`,
        sol: `Раскрываем скобки и собираем подобные:
$$2(a-3b)-3(2a+b) = 2a-6b-6a-3b = -4a-9b$$
<div class="sol-ans">Ответ: $-4a-9b$</div>`
      },
      {
        text: `Таня затратила на выполнение домашнего задания $2$ ч.
               На выполнение домашнего задания по алгебре она затратила $\\dfrac{1}{3}$ всего времени.
               Сколько минут Таня выполняла оставшуюся часть домашнего задания?`,
        sol: `<b>Правило нахождения части от числа:</b> чтобы найти $\\dfrac{m}{n}$ от числа $A$, умножают $A$ на $\\dfrac{m}{n}$.
<br><b>Шаг 1.</b> Переведём общее время в минуты, так как ответ нужен именно в минутах:
$$2\\text{ ч} = 2\\cdot 60 = 120\\text{ мин}.$$
<b>Шаг 2.</b> Найдём время, затраченное на алгебру. По условию это $\\dfrac{1}{3}$ всего времени:
$$\\dfrac{1}{3}\\cdot 120 = 40\\text{ мин}.$$
<b>Шаг 3.</b> Оставшаяся часть задания — это разность общего времени и времени на алгебру:
$$120 - 40 = 80\\text{ мин}.$$
<div class="sol-ans">Ответ: $80$ мин</div>`
      },
      {
        text: `Сумма длин гипотенузы и катета, лежащего в данном треугольнике против угла в $30^{\\circ}$,
               равна $24$ см. Найдите площадь круга, описанного около треугольника.`,
        sol: `<b>Свойство прямоугольного треугольника с углом $30°$:</b> катет, лежащий против угла $30°$, равен половине гипотенузы.
<br><b>Свойство описанной окружности прямоугольного треугольника:</b> центр окружности лежит в середине гипотенузы, поэтому $R = \\dfrac{c}{2}$, где $c$ — гипотенуза.
<br><b>Формула площади круга:</b> $S = \\pi R^2$.
<br><b>Шаг 1.</b> Обозначим гипотенузу через $c$. Тогда катет, лежащий против угла $30°$, равен $\\dfrac{c}{2}$.
<br><b>Шаг 2.</b> Составим уравнение из условия «сумма равна $24$»:
$$c + \\dfrac{c}{2} = 24 \\;\\implies\\; \\dfrac{3c}{2} = 24 \\;\\implies\\; c = 16\\text{ см}$$
<svg viewBox="0 0 230 185" xmlns="http://www.w3.org/2000/svg" style="max-width:230px;width:100%;height:auto;display:block;margin:8px 0">
  <circle cx="110" cy="150" r="66" fill="rgba(37,99,235,0.05)" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5,3"/>
  <polygon points="44,150 176,150 143,93" fill="rgba(37,99,235,0.09)" stroke="#334155" stroke-width="1.8"/>
  <polygon points="143,93 137,96 141,102 147,99" fill="none" stroke="#15803d" stroke-width="1.3"/>
  <path d="M 64 150 A 20 20 0 0 0 61 140" fill="none" stroke="#555" stroke-width="1.2"/>
  <line x1="110" y1="150" x2="143" y2="93" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="4,3"/>
  <circle cx="110" cy="150" r="3" fill="#334155"/>
  <text x="30" y="164" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">A</text>
  <text x="178" y="164" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">B</text>
  <text x="145" y="88" font-size="13" font-family="serif" font-style="italic" fill="#1e293b">C</text>
  <text x="105" y="144" font-size="11" font-family="serif" font-style="italic" fill="#334155">O</text>
  <text x="131" y="115" font-size="11" fill="#2563eb" font-style="italic">R</text>
  <text x="66" y="137" font-size="10" fill="#555">30°</text>
  <text x="96" y="170" font-size="10" fill="#334155">AB = 16 см</text>
  <text x="152" y="130" font-size="10" fill="#64748b">BC=8</text>
</svg>
<b>Шаг 3.</b> Так как гипотенуза — диаметр описанной окружности, радиус:
$$R = \\dfrac{c}{2} = \\dfrac{16}{2} = 8\\text{ см}$$
<b>Шаг 4.</b> Применяем формулу площади круга:
$$S = \\pi R^2 = \\pi\\cdot 8^2 = 64\\pi\\text{ см}^2$$
<div class="sol-ans">Ответ: $64\\pi$ см²</div>`
      },
      {
        text: `Найдите наибольшее целое решение неравенства
               $\\dfrac{(x-9)^2}{x^2+x-12} \\leq 0$.`,
        sol: `<b>Метод интервалов для дробного неравенства:</b> сначала находим ОДЗ (знаменатель $\\neq 0$), затем определяем знаки числителя и знаменателя.
<br><b>Шаг 1.</b> Разложим знаменатель на множители. Ищем числа с произведением $-12$ и суммой $1$ — это $4$ и $-3$:
$$x^2+x-12=(x+4)(x-3)$$
<b>ОДЗ:</b> $x\\neq -4$ и $x\\neq 3$, иначе знаменатель равен нулю.
<br><b>Шаг 2.</b> Числитель $(x-9)^2$ — квадрат, значит он всегда неотрицателен. Дробь будет $\\leq 0$ в двух случаях:
<ul>
<li>числитель равен нулю, то есть $x=9$ (тогда вся дробь $=0$; знаменатель при $x=9$ равен $9^2+9-12=78\\neq 0$, ОДЗ соблюдено);</li>
<li>числитель строго больше нуля, а знаменатель отрицателен (дробь отрицательна).</li>
</ul>
<b>Шаг 3.</b> Решаем неравенство $(x+4)(x-3)\\lt 0$. Произведение двух множителей отрицательно, когда они разных знаков, поэтому $-4\\lt x\\lt 3$.
<br><b>Шаг 4.</b> Объединяем оба случая: $x\\in(-4;\\,3)\\cup\\{9\\}$.
<br><b>Шаг 5.</b> Целые числа в $(-4;\\;3)$: $-3,-2,-1,0,1,2$. И ещё $x=9$.
<br>Наибольшее из всех целых решений — $x=9$.
<div class="sol-ans">Ответ: наибольшее целое решение $x = 9$</div>`
      },
      {
        text: `Постройте графики уравнений системы
               $$\\begin{cases} x + y = 5, \\\\[4pt] y - x^2 = 3 \\end{cases}$$
               и найдите сумму ординат точек пересечения.`,
        sol: `<b>Метод решения:</b> точки пересечения графиков — это решения системы. Решаем методом подстановки.
<br><b>Шаг 1.</b> Из первого уравнения выразим $y$: $y = 5 - x$.
<br><b>Шаг 2.</b> Подставим во второе уравнение $y - x^2 = 3$:
$$(5-x)-x^2 = 3 \\;\\implies\\; -x^2 - x + 2 = 0 \\;\\implies\\; x^2+x-2=0$$
<b>Шаг 3.</b> Раскладываем на множители (по теореме Виета: сумма корней $-1$, произведение $-2$, значит корни $-2$ и $1$):
$$(x+2)(x-1)=0 \\;\\implies\\; x_1 = -2,\\; x_2 = 1$$
<b>Шаг 4.</b> Находим $y$ по формуле $y = 5 - x$:
<br>при $x = -2$:&ensp;$y = 5 - (-2) = 7$;
<br>при $x = 1$:&ensp;$y = 5 - 1 = 4$.
<svg viewBox="0 0 220 212" xmlns="http://www.w3.org/2000/svg" style="max-width:220px;width:100%;height:auto;display:block;margin:8px 0">
  <defs>
    <marker id="v21ax" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
    <marker id="v21ay" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#94a3b8"/></marker>
  </defs>
  <line x1="8" y1="200" x2="216" y2="200" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v21ax)"/>
  <line x1="80" y1="208" x2="80" y2="8" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#v21ay)"/>
  <line x1="40" y1="196" x2="40" y2="204" stroke="#cbd5e1" stroke-width="1"/><text x="40" y="212" font-size="9" text-anchor="middle" fill="#64748b">−2</text>
  <line x1="60" y1="196" x2="60" y2="204" stroke="#cbd5e1" stroke-width="1"/><text x="60" y="212" font-size="9" text-anchor="middle" fill="#64748b">−1</text>
  <line x1="100" y1="196" x2="100" y2="204" stroke="#cbd5e1" stroke-width="1"/><text x="100" y="212" font-size="9" text-anchor="middle" fill="#64748b">1</text>
  <line x1="120" y1="196" x2="120" y2="204" stroke="#cbd5e1" stroke-width="1"/><text x="120" y="212" font-size="9" text-anchor="middle" fill="#64748b">2</text>
  <line x1="140" y1="196" x2="140" y2="204" stroke="#cbd5e1" stroke-width="1"/><text x="140" y="212" font-size="9" text-anchor="middle" fill="#64748b">3</text>
  <line x1="76" y1="60" x2="84" y2="60" stroke="#cbd5e1" stroke-width="1"/><text x="72" y="64" font-size="9" text-anchor="end" fill="#64748b">7</text>
  <line x1="76" y1="120" x2="84" y2="120" stroke="#cbd5e1" stroke-width="1"/><text x="72" y="124" font-size="9" text-anchor="end" fill="#64748b">4</text>
  <line x1="76" y1="140" x2="84" y2="140" stroke="#cbd5e1" stroke-width="1"/><text x="72" y="144" font-size="9" text-anchor="end" fill="#64748b">3</text>
  <polyline points="36,43 40,60 50,95 60,120 70,135 80,140 90,135 100,120 110,95 120,60 124,43" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="28" y1="50" x2="180" y2="200" stroke="#dc2626" stroke-width="2"/>
  <circle cx="40" cy="60" r="4.5" fill="#16a34a" stroke="white" stroke-width="1.5"/>
  <circle cx="100" cy="120" r="4.5" fill="#16a34a" stroke="white" stroke-width="1.5"/>
  <text x="43" y="55" font-size="9" fill="#15803d">(−2; 7)</text>
  <text x="103" y="115" font-size="9" fill="#15803d">(1; 4)</text>
  <text x="148" y="82" font-size="10" fill="#dc2626" font-style="italic">y=5−x</text>
  <text x="122" y="52" font-size="10" fill="#2563eb" font-style="italic">y=x²+3</text>
  <text x="207" y="204" font-size="11" fill="#555" font-style="italic">x</text>
  <text x="83" y="14" font-size="11" fill="#555" font-style="italic">y</text>
</svg>
<b>Шаг 5.</b> Точки пересечения: $(-2;\\,7)$ и $(1;\\,4)$. Сумма ординат:
$$7 + 4 = 11$$
<div class="sol-ans">Ответ: $11$</div>`
      },
      {
        text: `Три числа, дающие в сумме $36$, являются последовательными членами арифметической прогрессии.
               Если от первого числа вычесть $5$, от второго вычесть $6$, а третье число увеличить вдвое,
               то полученные числа будут последовательными членами геометрической прогрессии.
               Найдите эти числа.`,
        sol: `Пусть три члена АП: $12-d$, $12$, $12+d$ (сумма $=3\\cdot12=36$).
<br>После преобразований получаем три члена ГП: $(7-d)$,&ensp;$6$,&ensp;$(24+2d)$.
<br>Условие ГП ($b^2=ac$):
$$6^2=(7-d)(24+2d) \\implies 36=168-10d-2d^2$$
$$2d^2+10d-132=0 \\implies d^2+5d-66=0$$
$$D=25+264=289=17^2 \\implies d=\\dfrac{-5\\pm17}{2}$$
<b>$d=6$:</b> АП: $6,12,18$.&ensp;ГП: $1,6,36$ (знаменатель $6$) ✓
<br><b>$d=-11$:</b> АП: $23,12,1$.&ensp;ГП: $18,6,2$ (знаменатель $\\tfrac{1}{3}$) ✓
<div class="sol-ans">Ответ: $6,\\ 12,\\ 18$ или $1,\\ 12,\\ 23$</div>`
      },
      {
        text: `$AM$ — медиана треугольника $ABC$, площадь которого $120$ см².
               Точка $E$ — середина медианы $AM$.
               Луч $BE$ пересекает сторону $AC$ в точке $K$.
               Найдите площадь четырёхугольника $МЕКС$.`,
        sol: `<svg viewBox="0 0 258 215" xmlns="http://www.w3.org/2000/svg" style="max-width:258px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="125,185 113,105 142,78 225,185" fill="rgba(22,163,74,0.18)" stroke="none"/>
  <polygon points="100,25 25,185 225,185" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="100" y1="25" x2="125" y2="185" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="25" y1="185" x2="155" y2="63" stroke="#f97316" stroke-width="1.5"/>
  <polygon points="125,185 113,105 142,78 225,185" fill="none" stroke="#16a34a" stroke-width="1.8"/>
  <circle cx="125" cy="185" r="3.5" fill="#334155"/>
  <circle cx="113" cy="105" r="3.5" fill="#2563eb"/>
  <circle cx="142" cy="78" r="3.5" fill="#f97316"/>
  <text x="96" y="18" font-size="13" font-family="serif" font-style="italic">A</text>
  <text x="10" y="198" font-size="13" font-family="serif" font-style="italic">B</text>
  <text x="227" y="198" font-size="13" font-family="serif" font-style="italic">C</text>
  <text x="121" y="200" font-size="12" font-family="serif" font-style="italic">M</text>
  <text x="96" y="103" font-size="12" font-family="serif" font-style="italic" fill="#2563eb">E</text>
  <text x="145" y="73" font-size="12" font-family="serif" font-style="italic" fill="#f97316">K</text>
  <text x="158" y="158" font-size="12" fill="#16a34a" font-weight="bold">МЕКС</text>
</svg>
<b>Шаг 1.</b> Медиана $AM$ делит $\\triangle ABC$ пополам:
$$S_{ABM} = S_{ACM} = 60\\text{ см}^2$$
<b>Шаг 2. Ключевой факт: $S_{ABK} = S_{MBK}$.</b>
<br>Треугольники $ABK$ и $MBK$ имеют общее основание $BK$. Точка $E$ — середина $AM$ — лежит на луче $BK$ (по условию). Значит, прямая $BK$ пересекает отрезок $AM$ ровно в его середине, то есть $A$ и $M$ находятся по разные стороны от прямой $BK$ на <em>одинаковом</em> расстоянии. Следовательно, высоты из $A$ и $M$ на $BK$ равны, и:
$$S_{ABK} = S_{MBK}$$
<b>Шаг 3.</b> $M$ — середина $BC$ ⟹ треугольники $MBK$ и $CBK$ имеют основания $MB$ и $CB$ при одинаковой высоте из $K$:
$$\\dfrac{S_{MBK}}{S_{CBK}} = \\dfrac{MB}{CB} = \\dfrac{1}{2} \\implies S_{CBK} = 2\\cdot S_{ABK}$$
<b>Шаг 4.</b> Обозначим $S_{ABK} = p$. Тогда $S_{CBK} = 2p$. Точка $K$ на $AC$ делит $\\triangle ABC$ на два треугольника:
$$p + 2p = 120 \\implies p = 40$$
Итак, $S_{ABK}=40$ см², $S_{CBK}=80$ см².
<br><b>Шаг 5.</b> $M$ — середина $BC$ ⟹
$$S_{MKC} = \\dfrac{1}{2}\\cdot S_{CBK} = 40\\text{ см}^2$$
<b>Шаг 6.</b> Из $S_{ABK}=40$ находим $AK:KC$. Треугольники $ABK$ и $ABC$ — общая вершина $B$, основания $AK$ и $AC$:
$$\\dfrac{AK}{AC} = \\dfrac{S_{ABK}}{S_{ABC}} = \\dfrac{40}{120} = \\dfrac{1}{3}$$
<b>Шаг 7.</b> Треугольники $AMK$ и $AMC$ — общая вершина $M$, основания на $AC$:
$$S_{AMK} = \\dfrac{AK}{AC}\\cdot S_{AMC} = \\dfrac{1}{3}\\cdot 60 = 20\\text{ см}^2$$
<b>Шаг 8.</b> $E$ — середина $AM$ ⟹ треугольники $AEK$ и $AMK$ имеют основания $AE$ и $AM$:
$$S_{AEK} = \\dfrac{AE}{AM}\\cdot S_{AMK} = \\dfrac{1}{2}\\cdot 20 = 10\\text{ см}^2$$
<b>Шаг 9.</b> $S_{MEK} = S_{AMK} - S_{AEK} = 20 - 10 = 10$ см².
<br><b>Итог:</b>
$$S_{МЕКС} = S_{MEK} + S_{MKC} = 10 + 40 = 50\\text{ см}^2$$
<div class="sol-ans">Ответ: $50$ см²</div>`
      },
    ]
};
