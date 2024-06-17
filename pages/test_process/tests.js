const tests = [
  [
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
          iscorrect: false,
        },
        {
          id: "1_2",
          text: `<script src="my.js"></script>`,
          iscorrect: false,
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
  ],
  [
    {
      id: "2",
      quation: "Какие вызовы parseInt возвратят число?",
      code: false,
      variants: [
        {
          id: "1_1",
          text: `parseInt("1px")`,
          iscorrect: false,
        },
        {
          id: "1_2",
          text: `parseInt("-1.2")`,
          iscorrect: false,
        },
        {
          id: "1_3",
          text: `parseInt("0 минут")`,
          iscorrect: false,
        },
        {
          id: "1_4",
          text: `parseInt("$1.2")`,
          iscorrect: false,
        },
      ],
    },
  ],
  [
    {
      id: "1",
      quation: "",
      code: false,
      variants: [
        {
          id: "1_1",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_2",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_3",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_4",
          text: "",
          iscorrect: false,
        },
      ],
    },
  ],
  [
    {
      id: "1",
      quation: "",
      code: false,
      variants: [
        {
          id: "1_1",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_2",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_3",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_4",
          text: "",
          iscorrect: false,
        },
      ],
    },
  ],
  [
    {
      id: "1",
      quation: "",
      code: false,
      variants: [
        {
          id: "1_1",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_2",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_3",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_4",
          text: "",
          iscorrect: false,
        },
      ],
    },
  ],
  [
    {
      id: "1",
      quation: "",
      code: false,
      variants: [
        {
          id: "1_1",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_2",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_3",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_4",
          text: "",
          iscorrect: false,
        },
      ],
    },
  ],
  [
    {
      id: "1",
      quation: "",
      code: false,
      variants: [
        {
          id: "1_1",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_2",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_3",
          text: "",
          iscorrect: false,
        },
        {
          id: "1_4",
          text: "",
          iscorrect: false,
        },
      ],
    },
  ],
];
