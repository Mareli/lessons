VARIANTS[28] = {
    label: "Вариант 28",
    tasks: [
      {
        text: `Какое из приведённых ниже выражений тождественно равно произведению $-x(x-4)$:`,
        opts: [
          ["а", "$x^2+4x$"], ["б", "$x^2-4x$"], ["в", "$x^2+4$"],
          ["г", "$x^2-4$"], ["д", "$4x-x^2$"],
        ],
        sol: `Раскрываем скобки:
$$-x(x-4) = (-x)\\cdot x + (-x)\\cdot(-4) = -x^2+4x = 4x-x^2$$
<div class="sol-ans">Ответ: д)&ensp;$4x-x^2$</div>`
      },
      {
        text: `Определите промежуток, которому принадлежит значение выражения
               $\\left(1\\dfrac{1}{4}+1\\right):3$:`,
        opts: [
          ["а", "$(2;\\;3)$"], ["б", "$(3;\\;4)$"], ["в", "$(0;\\;0{,}5)$"],
          ["г", "$(1;\\;2)$"], ["д", "$(0;\\;1)$"],
        ],
        sol: `Переводим: $1\\dfrac{1}{4} = \\dfrac{5}{4}$.
$$\\left(\\dfrac{5}{4}+1\\right):3 = \\dfrac{9}{4}:3 = \\dfrac{3}{4} = 0{,}75$$
Так как $0 \\lt 0{,}75 \\lt 1$, значение принадлежит $(0;\\,1)$.
<div class="sol-ans">Ответ: д)&ensp;$(0;\\;1)$</div>`
      },
      {
        text: `Какое из следующих утверждений <b>НЕ</b> верно:`,
        opts: [
          ["а", "площадь трапеции равна произведению средней линии на высоту;"],
          ["б", "медианы треугольника точкой пересечения делятся в отношении $1:1$;"],
          ["в", "секущая имеет с окружностью ровно две общие точки;"],
          ["г", "гипотенуза прямоугольного треугольника всегда больше любого из катетов?"],
        ],
        sol: `<ul><li>а) верно</li><li>б) Медианы делятся в отношении $\\mathbf{2:1}$, а не $1:1$ — <b style="color:#dc2626">НЕВЕРНО</b></li><li>в) верно</li><li>г) верно</li></ul><div class="sol-ans">Ответ: б)</div>`
      },
      {
        text: `Решите неравенство $\\dfrac{(x-3)^2(x+1)^2}{(x-2)^4} \\leq 0$ и запишите ответ.`,
        sol: `$(x-3)^2(x+1)^2\\geq0$ всегда; $(x-2)^4\\gt0$ при $x\\neq2$. Дробь $\\leq0$ только когда числитель $=0$: $x=3$ или $x=-1$.
<svg viewBox="0 0 290 56" xmlns="http://www.w3.org/2000/svg" style="max-width:290px;width:100%;height:auto;display:block;margin:6px 0">
  <defs><marker id="v28t4" viewBox="0 0 7 6" refX="7" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0.5 L7,3 L0,5.5Z" fill="#555"/></marker></defs>
  <line x1="8" y1="28" x2="282" y2="28" stroke="#bbb" stroke-width="1.2" marker-end="url(#v28t4)"/>
  <line x1="60" y1="24" x2="60" y2="32" stroke="#777" stroke-width="1"/><text x="60" y="44" font-size="10" text-anchor="middle" fill="#555">−1</text>
  <line x1="140" y1="24" x2="140" y2="32" stroke="#777" stroke-width="1"/><text x="140" y="44" font-size="10" text-anchor="middle" fill="#555">2</text>
  <line x1="210" y1="24" x2="210" y2="32" stroke="#777" stroke-width="1"/><text x="210" y="44" font-size="10" text-anchor="middle" fill="#555">3</text>
  <circle cx="60" cy="28" r="5" fill="#2563eb"/>
  <circle cx="140" cy="28" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="210" cy="28" r="5" fill="#2563eb"/>
  <text x="135" y="16" font-size="9" text-anchor="middle" fill="#2563eb">= 0</text>
</svg>
<div class="sol-ans">Ответ: $x=-1$ или $x=3$</div>`
      },
      {
        text: `В банк заданий для подготовки к экзамену включено $180$ задач.
               Из них задач по алгебре на $50$ больше, чем по геометрии.
               Сколько задач по алгебре включено в банк?`,
        sol: `<b>Метод введения переменной:</b> обозначим за $x$ количество того, чего меньше, и составим уравнение по сумме.
<br><b>Шаг 1.</b> Пусть в банке $x$ задач по геометрии. Тогда задач по алгебре на $50$ больше, то есть $x+50$.
<br><b>Шаг 2.</b> Всего задач $180$, значит:
$$x + (x+50) = 180.$$
<b>Шаг 3.</b> Решаем уравнение, приведя подобные слагаемые:
$$2x + 50 = 180 \\;\\implies\\; 2x = 130 \\;\\implies\\; x = 65.$$
<b>Шаг 4.</b> Это количество задач по геометрии. По алгебре их на $50$ больше:
$$x + 50 = 65 + 50 = 115.$$
<b>Проверка:</b> $65+115 = 180$ — совпадает с условием.
<div class="sol-ans">Ответ: $115$ задач по алгебре</div>`
      },
      {
        text: `Дан треугольник $ABC$, биссектрисы его углов $A$ и $C$ пересекаются в точке $O$.
               Докажите, что биссектриса угла $B$ проходит через точку $O$.`,
        sol: `<b>Доказательство.</b>
<svg viewBox="0 0 280 250" xmlns="http://www.w3.org/2000/svg" style="max-width:380px;width:100%;height:auto;display:block;margin:8px 0">
  <polygon points="40,185 226,185 115,40" fill="rgba(37,99,235,0.06)" stroke="#334155" stroke-width="2"/>
  <line x1="40" y1="185" x2="170" y2="113" stroke="#dc2626" stroke-width="2" stroke-dasharray="7,4"/>
  <line x1="226" y1="185" x2="95" y2="113" stroke="#9333ea" stroke-width="2" stroke-dasharray="7,4"/>
  <line x1="115" y1="40" x2="133" y2="185" stroke="#16a34a" stroke-width="2" stroke-dasharray="7,4"/>
  <line x1="133" y1="143" x2="133" y2="185" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="133" y1="143" x2="90" y2="113" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="133" y1="143" x2="176" y2="113" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="133,185 141,185 141,177 133,177" fill="none" stroke="#2563eb" stroke-width="1.2"/>
  <polygon points="90,113 96,107 102,113 96,119" fill="none" stroke="#2563eb" stroke-width="1.2"/>
  <polygon points="176,113 170,107 164,113 170,119" fill="none" stroke="#2563eb" stroke-width="1.2"/>
  <circle cx="133" cy="143" r="5" fill="#1e293b"/>
  <text x="22" y="200" font-size="16" font-family="serif" font-style="italic" fill="#1e293b">A</text>
  <text x="231" y="200" font-size="16" font-family="serif" font-style="italic" fill="#1e293b">B</text>
  <text x="110" y="30" font-size="16" font-family="serif" font-style="italic" fill="#1e293b">C</text>
  <text x="138" y="140" font-size="14" font-family="serif" font-style="italic" fill="#1e293b">O</text>
  <text x="50" y="118" font-size="11" fill="#dc2626">бисс. A</text>
  <text x="173" y="118" font-size="11" fill="#9333ea">бисс. C</text>
  <text x="137" y="65" font-size="11" fill="#16a34a">бисс. B</text>
  <text x="140" y="240" font-size="12" text-anchor="middle" fill="#2563eb" font-weight="bold">d(O,AB)=d(O,BC)=d(O,AC)</text>
</svg>
Точка $O$ на биссектрисе угла $A$ — $d(O,AB)=d(O,AC)$. Точка $O$ на биссектрисе угла $C$ — $d(O,BC)=d(O,AC)$. Следовательно $d(O,AB)=d(O,BC)$ — $O$ на биссектрисе угла $B$. &#8718;<div class="sol-ans">Доказано: $O$ равноудалена от сторон $AB$ и $BC$, значит лежит на биссектрисе угла $B$</div>`
      },
      {
        text: `Решите уравнение $(x+2) \\cdot 0{,}5 = \\dfrac{2}{3} \\cdot 2$
               и запишите число, противоположное корню уравнения.`,
        sol: `<b>Свойство противоположного числа:</b> число, противоположное $a$, равно $-a$.
<br><b>Шаг 1.</b> Вычислим правую часть уравнения:
$$\\dfrac{2}{3}\\cdot 2 = \\dfrac{4}{3}$$
Получаем уравнение:
$$(x+2)\\cdot 0{,}5 = \\dfrac{4}{3}$$
<b>Шаг 2.</b> Чтобы найти $x+2$, разделим обе части на $0{,}5$ (то есть умножим на $2$):
$$x+2 = \\dfrac{4}{3}\\cdot 2 = \\dfrac{8}{3}$$
<b>Шаг 3.</b> Вычтем $2$ из обеих частей:
$$x = \\dfrac{8}{3} - 2 = \\dfrac{8}{3} - \\dfrac{6}{3} = \\dfrac{2}{3}$$
<b>Шаг 4.</b> Число, противоположное корню $x=\\dfrac{2}{3}$, равно $-\\dfrac{2}{3}$.
<div class="sol-ans">Ответ: $-\\dfrac{2}{3}$</div>`
      },
      {
        text: `К задуманному числу $x$, умноженному на $2$, прибавили число, в $3$ раза большее задуманного.
               Полученную сумму умножили на $7$ и от полученного произведения вычли число,
               в $7$ раз большее $x$. В результате получили число $y$.
               Определите вид зависимости числа $y$ от числа $x$.`,
        sol: `<b>Прямая пропорциональность:</b> зависимость вида $y=kx$, где $k$ — постоянное число, отличное от нуля.
<br><b>Шаг 1.</b> Запишем по условию: задуманное число $x$, умноженное на $2$, — это $2x$. Число, в $3$ раза большее задуманного, — это $3x$.
<br><b>Шаг 2.</b> Найдём их сумму:
$$2x + 3x = 5x.$$
<b>Шаг 3.</b> Полученную сумму умножили на $7$:
$$7\\cdot 5x = 35x.$$
<b>Шаг 4.</b> Из произведения вычли число, в $7$ раз большее $x$ (то есть $7x$):
$$y = 35x - 7x = 28x.$$
<b>Шаг 5.</b> Получили зависимость $y=28x$. Это запись вида $y=kx$ с $k=28\\neq 0$, значит перед нами прямая пропорциональность.
<div class="sol-ans">Ответ: прямая пропорциональность $y=28x$</div>`
      },
      {
        text: `Сколько решений имеет система уравнений
               $$\\begin{cases} x^2 - xy = 9, \\\\[4pt] y^2 - xy = 16? \\end{cases}$$
               Ответ обоснуйте.`,
        sol: `<b>Формула квадрата разности:</b> $(x-y)^2 = x^2-2xy+y^2$.
<br><b>Формула разности квадратов:</b> $y^2-x^2 = (y-x)(y+x)$.
<br><b>Метод решения:</b> комбинируя уравнения (сложение и вычитание), сводим систему к более простой.
<br><b>Шаг 1.</b> Сложим уравнения почленно:
$$x^2-xy+y^2-xy = 9+16$$
$$x^2-2xy+y^2 = 25 \\;\\implies\\; (x-y)^2 = 25$$
Отсюда $x-y = 5$ или $x-y = -5$.
<br><b>Шаг 2.</b> Вычтем первое уравнение из второго:
$$y^2-xy - (x^2-xy) = 16 - 9$$
$$y^2 - x^2 = 7 \\;\\implies\\; (y-x)(y+x) = 7$$
<b>Шаг 3. Случай 1:</b> $x-y = 5$, значит $y-x = -5$. Подставляем:
$$-5\\cdot(y+x) = 7 \\;\\implies\\; y+x = -\\dfrac{7}{5}$$
Решаем систему $x-y=5$ и $x+y=-\\dfrac{7}{5}$. Складывая: $2x = 5-\\dfrac{7}{5} = \\dfrac{18}{5}$, откуда $x=\\dfrac{9}{5}$, а $y = x-5 = -\\dfrac{16}{5}$.
<br><b>Шаг 4. Случай 2:</b> $x-y = -5$, значит $y-x = 5$:
$$5\\cdot(y+x) = 7 \\;\\implies\\; y+x = \\dfrac{7}{5}$$
Решаем $x-y=-5$ и $x+y=\\dfrac{7}{5}$. Складывая: $2x = -5+\\dfrac{7}{5} = -\\dfrac{18}{5}$, поэтому $x=-\\dfrac{9}{5}$, $y=\\dfrac{16}{5}$.
<br><b>Шаг 5.</b> Получили ровно $2$ решения: $\\bigl(\\dfrac{9}{5};\\,-\\dfrac{16}{5}\\bigr)$ и $\\bigl(-\\dfrac{9}{5};\\,\\dfrac{16}{5}\\bigr)$.
<div class="sol-ans">Ответ: $2$ решения — $(9/5;\\,-16/5)$ и $(-9/5;\\,16/5)$</div>`
      },
      {
        text: `В параллелограмме $ABCD$ диагонали взаимно перпендикулярны.
               Высота $BK$, проведённая к стороне $AD$, пересекает диагональ $AC$ в точке $H$;
               $HK = 9$ см, $BH = 15$ см. Найдите площадь параллелограмма.`,
        sol: `<svg viewBox="0 0 225 140" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;width:100%;height:auto;display:block;margin:8px 0">
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
  <text x="73" y="123" font-size="12" font-family="serif" font-style="italic">K</text>
  <text x="83" y="83" font-size="12" font-family="serif" font-style="italic" fill="#f97316">H</text>
  <text x="103" y="72" font-size="11" font-family="serif" font-style="italic">O</text>
  <text x="85" y="62" font-size="10" fill="#f97316">15</text>
  <text x="85" y="102" font-size="10" fill="#f97316">9</text>
</svg>
<b>Свойство параллелограмма с перпендикулярными диагоналями:</b> такой параллелограмм является ромбом (то есть все стороны равны).
<br><b>Свойство диагонали ромба:</b> диагональ ромба делит угол ромба пополам, то есть является биссектрисой.
<br><b>Основное тригонометрическое тождество:</b> $\\sin^2\\beta + \\cos^2\\beta = 1$.
<br><b>Формула площади параллелограмма:</b> $S = AD\\cdot BK$, где $BK$ — высота к стороне $AD$.
<br><b>Шаг 1.</b> Из условия диагонали параллелограмма перпендикулярны, значит $ABCD$ — ромб со стороной $a$. Обозначим $\\angle DAB = \\beta$.
<br><b>Шаг 2.</b> Диагональ $AC$ — биссектриса угла $A$, значит $\\angle BAC = \\angle DAC = \\dfrac{\\beta}{2}$. В прямоугольном треугольнике $ABK$ (прямой угол при $K$) точка $H$ лежит на биссектрисе $AH$ угла $A$.
<br><b>Шаг 3.</b> По теореме о биссектрисе треугольника $ABK$:
$$\\dfrac{BH}{HK} = \\dfrac{AB}{AK}$$
В $\\triangle ABK$ имеем $AK = AB\\cos\\beta$. Поэтому:
$$\\dfrac{BH}{HK} = \\dfrac{1}{\\cos\\beta} \\;\\implies\\; \\cos\\beta = \\dfrac{HK}{BH} = \\dfrac{9}{15} = \\dfrac{3}{5}$$
<b>Шаг 4.</b> По основному тригонометрическому тождеству:
$$\\sin\\beta = \\sqrt{1-\\cos^2\\beta} = \\sqrt{1-\\dfrac{9}{25}} = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}$$
<b>Шаг 5.</b> Находим $BK$: это вся высота, $BK = BH + HK = 15 + 9 = 24$ см.
<br><b>Шаг 6.</b> Из прямоугольного $\\triangle ABK$: $BK = AB\\cdot\\sin\\beta$, значит:
$$a = AB = \\dfrac{BK}{\\sin\\beta} = \\dfrac{24}{\\tfrac{4}{5}} = 24\\cdot\\dfrac{5}{4} = 30\\text{ см}$$
<b>Шаг 7.</b> Применяем формулу площади параллелограмма:
$$S = AD\\cdot BK = 30\\cdot 24 = 720\\text{ см}^2$$
<div class="sol-ans">Ответ: $720$ см²</div>`
      },
    ]
};
