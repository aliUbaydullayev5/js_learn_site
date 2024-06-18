const tests = [
  {
    id: "1",
    quation:
      "Какие варианты подключения скрипта являются корректными с точки зрения современного стандарта HTML?",
    code: false,
    type: "checkbox",
    variants: [
      {
        id: "1_1",
        text: `<script type="text/javascript" src="my.js"></script>`,
        iscorrect: true,
      },
      {
        id: "1_2",
        text: `<script src="my.js"></script>`,
        iscorrect: true,
      },
      {
        id: "1_3",
        text: `<script src="my.js"/>`,
        iscorrect: false,
      },
      {
        id: "1_4",
        text: `<хачу-javascript отсюда="my.js">`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "2",
    quation: "Какие вызовы parseInt возвратят число?",
    code: false,
    type: "checkbox",
    variants: [
      {
        id: "2_1",
        text: `parseInt("1px")`,
        iscorrect: true,
      },
      {
        id: "2_2",
        text: `parseInt("-1.2")`,
        iscorrect: true,
      },
      {
        id: "2_3",
        text: `parseInt("0 минут")`,
        iscorrect: true,
      },
      {
        id: "2_4",
        text: `parseInt("$1.2")`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "3",
    quation:
      "Какой код корректно найдёт максимальное значение в непустом массиве arr?",
    code: false,
    type: "checkbox",
    variants: [
      {
        id: "3_1",
        text: `arr.reduce(function(prev, item) { return Math.max(prev, item) })`,
        iscorrect: true,
      },
      {
        id: "3_2",
        text: `Math.max.apply(null, arr)`,
        iscorrect: true,
      },
      {
        id: "3_3",
        text: `Math.max(arr)`,
        iscorrect: true,
      },
      {
        id: "3_4",
        text: `arr.findMax()`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "4",
    quation: "Язык JavaScript является подвидом языка Java – верно?",
    code: false,
    type: "radio",
    variants: [
      {
        id: "4_1",
        text: `Да.`,
        iscorrect: false,
      },
      {
        id: "4_2",
        text: `Нет.`,
        iscorrect: true,
      },
      {
        id: "4_3",
        text: `Наоборот, Java – подвид JavaScript.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "5",
    quation: "Чему равна переменная name?",
    code: 'let name = "пупкин".replace("п", "д")',
    type: "radio",
    variants: [
      {
        id: "5_1",
        text: `дудкин.`,
        iscorrect: false,
      },
      {
        id: "5_2",
        text: `дупкин.`,
        iscorrect: true,
      },
      {
        id: "5_3",
        text: `пупкин.`,
        iscorrect: false,
      },
      {
        id: "5_4",
        text: `ляпкин-тяпкин.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "6",
    quation: "Объявлена функция: &nbsp;&nbsp; Чем является F.prototype?",
    code: "function F() {}",
    type: "radio",
    variants: [
      {
        id: "6_1",
        text: `Обычным объектом.`,
        iscorrect: true,
      },
      {
        id: "6_2",
        text: `Функцией.`,
        iscorrect: false,
      },
      {
        id: "6_3",
        text: `Равен undefined.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "7",
    quation: "Что выведет этот код?",
    code: 'alert( "1"[0] );',
    type: "radio",
    variants: [
      {
        id: "7_1",
        text: `0`,
        iscorrect: false,
      },
      {
        id: "7_2",
        text: `1`,
        iscorrect: true,
      },
      {
        id: "7_3",
        text: `2`,
        iscorrect: false,
      },
      {
        id: "7_4",
        text: `undefined`,
        iscorrect: false,
      },
      {
        id: "7_5",
        text: `В коде ошибка.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "8",
    quation: "Верно ли сравнение: 'ёжи' > 'яблоко'?",
    code: false,
    type: "radio",
    variants: [
      {
        id: "8_1",
        text: `Да.`,
        iscorrect: true,
      },
      {
        id: "8_2",
        text: `Нет.`,
        iscorrect: false,
      },
      {
        id: "8_3",
        text: `Зависит от локальных настроек браузера.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "9",
    quation: "Объявлена функция:",
    code: "function F() {} Верно ли, что F instanceof Function?",
    type: "radio",
    variants: [
      {
        id: "9_1",
        text: `Да.`,
        iscorrect: true,
      },
      {
        id: "9_2",
        text: `Нет.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "10",
    quation: "Что выведет этот скрипт?",
    code: '"use strict";a = null + undefined;alert(a);',
    type: "radio",
    variants: [
      {
        id: "10_1",
        text: `null`,
        iscorrect: false,
      },
      {
        id: "10_2",
        text: `undefined`,
        iscorrect: false,
      },
      {
        id: "10_3",
        text: `NaN`,
        iscorrect: false,
      },
      {
        id: "10_4",
        text: `В коде ошибка.`,
        iscorrect: true,
      },
    ],
  },
  {
    id: "11",
    quation: "Какое будет выведено значение?",
    code: "let x = 5;alert( x++ );",
    type: "radio",
    variants: [
      {
        id: "11_1",
        text: `5`,
        iscorrect: false,
      },
      {
        id: "11_2",
        text: `6`,
        iscorrect: true,
      },
      {
        id: "11_3",
        text: `Другое.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "12",
    quation: "Чему равна длина arr.length массива arr?",
    code: "let arr = [];arr[1] = 1;arr[3] = 33;",
    type: "radio",
    variants: [
      {
        id: "12_1",
        text: `0`,
        iscorrect: false,
      },
      {
        id: "12_2",
        text: `1`,
        iscorrect: false,
      },
      {
        id: "12_3",
        text: `2`,
        iscorrect: false,
      },
      {
        id: "12_4",
        text: `3`,
        iscorrect: false,
      },
      {
        id: "12_5",
        text: `4`,
        iscorrect: true,
      },
      {
        id: "12_6",
        text: `Больше.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "13",
    quation: "Есть ли разница между вызовами i++ и ++i?",
    code: 'alert( "1"[0] );',
    type: "radio",
    variants: [
      {
        id: "13_1",
        text: `Разница в значении, которое возвращает такой вызов.`,
        iscorrect: true,
      },
      {
        id: "13_2",
        text: `Разница в значении i после вызова.`,
        iscorrect: false,
      },
      {
        id: "13_3",
        text: `Нет никакой разницы.`,
        iscorrect: false,
      },
    ],
  },
  {
    id: "14",
    quation: "Что выведет выражение ниже?",
    code: "let a = new Array(1,2), b = new Array(3);alert(a[0] + b[0]);",
    type: "radio",
    variants: [
      {
        id: "14_1",
        text: `1`,
        iscorrect: false,
      },
      {
        id: "14_2",
        text: `4`,
        iscorrect: false,
      },
      {
        id: "14_3",
        text: `undefined`,
        iscorrect: false,
      },
      {
        id: "14_4",
        text: `NaN`,
        iscorrect: true,
      },
    ],
  },
  {
    id: "15",
    quation: "Что такое ECMAScript?",
    code: false,
    type: "radio",
    variants: [
      {
        id: "15_1",
        text: `Новый язык программирования.`,
        iscorrect: false,
      },
      {
        id: "15_2",
        text: `Переработанная реализация Javascript.`,
        iscorrect: false,
      },
      {
        id: "15_3",
        text: `Спецификация языка Javascript.`,
        iscorrect: true,
      },
    ],
  },
];

// .split("")
// .map((mp) => `<span>${mp}</span>`)
// .join("")}
