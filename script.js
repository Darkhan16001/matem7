
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

// ======================================
// §6. РАЦИОНАЛ ЖӘНЕ ИРРАЦИОНАЛ
// КӨРСЕТКІШТІ ДӘРЕЖЕЛЕР
// ======================================

const lesson = {
  title:
    "Рационал және иррационал көрсеткішті дәрежелер",

  goal:
    "Бөлшек көрсеткішті дәреженің мағынасын түсіну, түбір арқылы өрнектердің мәнін есептеу, рационал және иррационал көрсеткіштерді ажырату, дәреже қасиеттерін қолдану."
};

// ======================================
// 5 ТҮСІНДІРМЕ
// ӘР ТҮСІНДІРМЕДЕН КЕЙІН
// 2 ӨЗІНДІК ЖҰМЫС
// ======================================

const theory = [
  {
    title:
      "Рационал көрсеткішті дәреже дегеніміз не?",

    definition:
      "Рационал көрсеткішті дәреже — көрсеткіші бүтін сан немесе жай бөлшек болатын дәреже. Оң санды бөлшек дәрежеге шығаруды түбір алу арқылы есептеуге болады.",

    explanation:
      "Бөлшек көрсеткіштің бөлімінде екі саны тұрса, квадрат түбір аламыз. Егер бөлімінде үш саны тұрса, куб түбір аламыз. Мысалы, он алты санының бір екінші дәрежесін есептеу үшін он алтының квадрат түбірін табамыз.",

    rule:
      "Оң санның бір бөлінген n көрсеткішті дәрежесі сол санның n-ші дәрежелі түбіріне тең.",

    formula:
      M`a^{\frac1n}=\sqrt[n]{a},\qquad a>0`,

    worked: [
      M`16^{\frac12}`,
      M`=\sqrt{16}`,
      M`=4`
    ],

    warning:
      "Бөлшек көрсеткішті кәдімгі бөлу амалымен шатастырмаңдар. Бір екінші дәреже санды екіге бөлуді білдірмейді.",

    self: [
      {
        question: M`25^{\frac12}`,
        steps: [
          M`25^{\frac12}=\sqrt{25}`,
          M`=5`
        ],
        answer: M`\boxed{5}`
      },

      {
        question: M`64^{\frac13}`,
        steps: [
          M`64^{\frac13}=\sqrt[3]{64}`,
          M`=4`
        ],
        answer: M`\boxed{4}`
      }
    ]
  },

  {
    title:
      "Бөлшек көрсеткіштің алымы мен бөлімі",

    definition:
      "Бөлшек көрсеткіштің бөлімі түбірдің дәрежесін, ал алымы түбірден алынған санды қандай дәрежеге шығару керектігін көрсетеді.",

    explanation:
      "Мысалы, жиырма жеті санының екі үшінші дәрежесін табамыз. Ең алдымен жиырма жетінің куб түбірін аламыз. Куб түбірі үшке тең. Содан кейін үш санын квадраттаймыз. Жауабы тоғыз болады.",

    rule:
      "Алдымен бөлшектің бөліміндегі санға сәйкес түбір аламыз. Содан кейін нәтижені бөлшектің алымындағы дәрежеге шығарамыз.",

    formula:
      M`a^{\frac mn}=\left(\sqrt[n]{a}\right)^m,\quad a>0`,

    worked: [
      M`27^{\frac23}`,
      M`=\left(\sqrt[3]{27}\right)^2`,
      M`=3^2`,
      M`=9`
    ],

    warning:
      "Алым мен бөлімді ауыстырмаңдар. Бөлшектің бөлімі түбірдің дәрежесін анықтайды.",

    self: [
      {
        question: M`8^{\frac23}`,
        steps: [
          M`8^{\frac23}=\left(\sqrt[3]{8}\right)^2`,
          M`=2^2`,
          M`=4`
        ],
        answer: M`\boxed4`
      },

      {
        question: M`16^{\frac34}`,
        steps: [
          M`16^{\frac34}=\left(\sqrt[4]{16}\right)^3`,
          M`=2^3`,
          M`=8`
        ],
        answer: M`\boxed8`
      }
    ]
  },

  {
    title:
      "Рационал дәрежелерді көбейту және бөлу",

    definition:
      "Негіздері бірдей дәрежелерді көбейткенде олардың көрсеткіштері қосылады. Ал негіздері бірдей дәрежелерді бөлгенде көрсеткіштері азайтылады.",

    explanation:
      "Мысалы, төрт санының бір екінші және үш екінші дәрежелерін көбейтеміз. Көрсеткіштердің қосындысы екіге тең болады. Демек, төрттің квадраты шығады. Жауабы он алты.",

    rule:
      "Оң негізді дәрежелердің көрсеткіштері бүтін, бөлшек немесе иррационал болса да, көбейту мен бөлу заңдары сақталады.",

    formula:
      M`a^p\cdot a^q=a^{p+q},\qquad
      \frac{a^p}{a^q}=a^{p-q}`,

    worked: [
      M`4^{\frac12}\cdot4^{\frac32}`,
      M`=4^{\frac12+\frac32}`,
      M`=4^2`,
      M`=16`
    ],

    warning:
      "Көрсеткіштерді қосу ережесі негіздері бірдей дәрежелерге қолданылады.",

    self: [
      {
        question:
          M`9^{\frac12}\cdot9^{\frac12}`,

        steps: [
          M`=9^{\frac12+\frac12}`,
          M`=9^1`,
          M`=9`
        ],

        answer: M`\boxed9`
      },

      {
        question:
          M`\frac{16^{\frac34}}{16^{\frac14}}`,

        steps: [
          M`=16^{\frac34-\frac14}`,
          M`=16^{\frac12}`,
          M`=\sqrt{16}=4`
        ],

        answer: M`\boxed4`
      }
    ]
  },

  {
    title:
      "Теріс рационал көрсеткіш",

    definition:
      "Теріс рационал көрсеткішті дәреже — берілген санның оң көрсеткішті дәрежесіне кері сан. Оң негізді теріс дәрежеге шығарғанда бөлшектің алымына бір жазылады.",

    explanation:
      "Мысалы, тоғыз санының теріс бір екінші дәрежесін есептейік. Алдымен тоғыздың квадрат түбірін табамыз. Ол үшке тең. Содан кейін үштің кері санын аламыз. Нәтиже бір бөлінген үш болады.",

    rule:
      "Оң санды теріс дәрежеге шығарғанда, сол санның оң дәрежесіне кері сан алынады.",

    formula:
      M`\boxed{a^{-r}=\frac1{a^r}},\qquad a>0`,

    worked: [
      M`9^{-\frac12}`,
      M`=\frac1{9^{\frac12}}`,
      M`=\frac1{\sqrt9}`,
      M`=\frac13`
    ],

    warning:
      "Теріс дәреже көрсеткіші жауап теріс болады дегенді білдірмейді. Оң санның нақты дәрежесі де оң болады.",

    self: [
      {
        question: M`16^{-\frac12}`,

        steps: [
          M`=\frac1{16^{\frac12}}`,
          M`=\frac1{\sqrt{16}}`,
          M`=\frac14`
        ],

        answer: M`\boxed{\frac14}`
      },

      {
        question: M`8^{-\frac23}`,

        steps: [
          M`=\frac1{\left(\sqrt[3]{8}\right)^2}`,
          M`=\frac1{2^2}`,
          M`=\frac14`
        ],

        answer: M`\boxed{\frac14}`
      }
    ]
  },

  {
    title:
      "Иррационал көрсеткішті дәреже",

    definition:
      "Иррационал көрсеткішті дәреже — көрсеткіші жай бөлшек түрінде дәл жазылмайтын сан болатын дәреже. Мұндай дәрежелердің негізі оң болса, олардың нақты мәні анықталады.",

    explanation:
      "Мысалы, екі санының квадрат түбір екі көрсеткішті дәрежесін қарастырайық. Квадрат түбір екі — иррационал сан. Оның жуық мәні белгілі болғандықтан, дәреженің сандық мәнін калькулятор арқылы жуықтап есептей аламыз.",

    rule:
      "Оң негізді иррационал көрсеткішті дәрежелерге де көбейту, бөлу және дәрежені дәрежеге шығару қасиеттері қолданылады.",

    formula:
      M`a^r=e^{r\ln a},\qquad a>0`,

    worked: [
      M`2^{\sqrt2}`,
      M`\sqrt2\approx1.4142`,
      M`2^{\sqrt2}\approx2.66514`
    ],

    warning:
      "Иррационал сандардың жуық мәнін жазғанда теңдік емес, жуық теңдік таңбасын қолданамыз.",

    self: [
      {
        question: M`1^{\sqrt3}`,

        steps: [
          M`1^r=1`,
          M`1^{\sqrt3}=1`
        ],

        answer: M`\boxed1`
      },

      {
        question:
          M`4^{\sqrt2}\cdot4^{-\sqrt2}`,

        steps: [
          M`=4^{\sqrt2-\sqrt2}`,
          M`=4^0`,
          M`=1`
        ],

        answer: M`\boxed1`
      }
    ]
  }
];

// ======================================
// 10 КОНСПЕКТ
// ӘРҚАЙСЫСЫНДА МЫСАЛ ЖӘНЕ
// 2 ӨЗІНДІК ЕСЕП
// ======================================

const notes = [
  {
    title: "Рационал көрсеткішті дәреже",

    text:
      "Көрсеткіші жай бөлшек немесе бүтін сан болатын дәреже рационал көрсеткішті дәреже деп аталады. Бөлшек көрсеткішті дәреже түбір арқылы есептеледі.",

    formula:
      M`a^{\frac mn}=\sqrt[n]{a^m},\qquad a>0`,

    example: [
      M`25^{\frac12}`,
      M`=\sqrt{25}`,
      M`=5`
    ],

    self: [
      {
        question: M`36^{\frac12}`,
        steps: [M`=\sqrt{36}`,M`=6`],
        answer: M`\boxed6`
      },
      {
        question: M`125^{\frac13}`,
        steps: [M`=\sqrt[3]{125}`,M`=5`],
        answer: M`\boxed5`
      }
    ]
  },

  {
    title: "Квадрат түбір және бөлшек көрсеткіш",

    text:
      "Оң санның бір екінші дәрежесі сол санның квадрат түбіріне тең. Бұл дәреже көрсеткішіндегі екі саны түбір дәрежесін көрсетеді.",

    formula:
      M`a^{\frac12}=\sqrt a`,

    example: [
      M`81^{\frac12}`,
      M`=\sqrt{81}`,
      M`=9`
    ],

    self: [
      {
        question: M`144^{\frac12}`,
        steps: [M`=\sqrt{144}`,M`=12`],
        answer: M`\boxed{12}`
      },
      {
        question: M`49^{\frac12}`,
        steps: [M`=\sqrt{49}`,M`=7`],
        answer: M`\boxed7`
      }
    ]
  },

  {
    title: "Куб түбір және бөлшек көрсеткіш",

    text:
      "Оң санның бір үшінші дәрежесі сол санның куб түбіріне тең. Куб түбірден алынған санды үшінші дәрежеге шығарғанда бастапқы сан шығады.",

    formula:
      M`a^{\frac13}=\sqrt[3]{a},\qquad a>0`,

    example: [
      M`216^{\frac13}`,
      M`=\sqrt[3]{216}`,
      M`=6`
    ],

    self: [
      {
        question: M`343^{\frac13}`,
        steps: [M`=\sqrt[3]{343}`,M`=7`],
        answer: M`\boxed7`
      },
      {
        question: M`64^{\frac13}`,
        steps: [M`=\sqrt[3]{64}`,M`=4`],
        answer: M`\boxed4`
      }
    ]
  },

  {
    title: "Бөлшек көрсеткіштің алымы",

    text:
      "Бөлшек көрсеткіштің алымы түбірден шыққан санды қандай дәрежеге шығару керектігін білдіреді. Мысалы, екі үшінші көрсеткішінде куб түбірден кейін квадраттау орындалады.",

    formula:
      M`a^{\frac23}=\left(\sqrt[3]{a}\right)^2`,

    example: [
      M`64^{\frac23}`,
      M`=\left(\sqrt[3]{64}\right)^2`,
      M`=4^2=16`
    ],

    self: [
      {
        question: M`27^{\frac23}`,
        steps: [
          M`=\left(\sqrt[3]{27}\right)^2`,
          M`=3^2=9`
        ],
        answer: M`\boxed9`
      },
      {
        question: M`125^{\frac23}`,
        steps: [
          M`=\left(\sqrt[3]{125}\right)^2`,
          M`=5^2=25`
        ],
        answer: M`\boxed{25}`
      }
    ]
  },

  {
    title: "Бөлшек көрсеткіштің бөлімі",

    text:
      "Бөлшек көрсеткіштің бөлімі түбірдің дәрежесін көрсетеді. Егер бөлімде төрт саны болса, төртінші дәрежелі түбір аламыз.",

    formula:
      M`a^{\frac34}=\left(\sqrt[4]{a}\right)^3`,

    example: [
      M`16^{\frac34}`,
      M`=\left(\sqrt[4]{16}\right)^3`,
      M`=2^3=8`
    ],

    self: [
      {
        question: M`81^{\frac34}`,
        steps: [
          M`=\left(\sqrt[4]{81}\right)^3`,
          M`=3^3=27`
        ],
        answer: M`\boxed{27}`
      },
      {
        question: M`256^{\frac34}`,
        steps: [
          M`=\left(\sqrt[4]{256}\right)^3`,
          M`=4^3=64`
        ],
        answer: M`\boxed{64}`
      }
    ]
  },

  {
    title: "Негіздері бірдей дәрежелерді көбейту",

    text:
      "Негіздері бірдей дәрежелерді көбейткен кезде дәреже көрсеткіштері қосылады. Негіз өзгермейді. Бұл ереже бөлшек көрсеткішті дәрежелер үшін де дұрыс.",

    formula:
      M`a^p\cdot a^q=a^{p+q},\qquad a>0`,

    example: [
      M`9^{\frac12}\cdot9^{\frac12}`,
      M`=9^{\frac12+\frac12}`,
      M`=9^1=9`
    ],

    self: [
      {
        question:
          M`16^{\frac14}\cdot16^{\frac34}`,

        steps: [
          M`=16^{\frac14+\frac34}`,
          M`=16^1=16`
        ],

        answer: M`\boxed{16}`
      },
      {
        question:
          M`8^{\frac13}\cdot8^{\frac23}`,

        steps: [
          M`=8^{\frac13+\frac23}`,
          M`=8^1=8`
        ],

        answer: M`\boxed8`
      }
    ]
  },

  {
    title: "Негіздері бірдей дәрежелерді бөлу",

    text:
      "Негіздері бірдей дәрежелерді бөлгенде алымдағы дәреже көрсеткішінен бөлімдегі дәреже көрсеткіші азайтылады.",

    formula:
      M`\frac{a^p}{a^q}=a^{p-q},\qquad a>0`,

    example: [
      M`\frac{25^{\frac32}}{25^{\frac12}}`,
      M`=25^{\frac32-\frac12}`,
      M`=25`
    ],

    self: [
      {
        question:
          M`\frac{16^{\frac34}}{16^{\frac14}}`,

        steps: [
          M`=16^{\frac12}`,
          M`=4`
        ],

        answer: M`\boxed4`
      },
      {
        question:
          M`\frac{27^{\frac43}}{27^{\frac13}}`,

        steps: [
          M`=27^{\frac43-\frac13}`,
          M`=27^1=27`
        ],

        answer: M`\boxed{27}`
      }
    ]
  },

  {
    title: "Дәрежені дәрежеге шығару",

    text:
      "Бір дәрежені тағы бір дәрежеге шығарғанда көрсеткіштер көбейтіледі. Оң негіз болғанда бұл қасиет барлық нақты көрсеткіштер үшін қолданылады.",

    formula:
      M`\left(a^p\right)^q=a^{pq},\qquad a>0`,

    example: [
      M`\left(16^{\frac12}\right)^2`,
      M`=16^{\frac12\cdot2}`,
      M`=16`
    ],

    self: [
      {
        question:
          M`\left(8^{\frac13}\right)^2`,

        steps: [
          M`=\left(\sqrt[3]{8}\right)^2`,
          M`=2^2=4`
        ],

        answer: M`\boxed4`
      },
      {
        question:
          M`\left(81^{\frac14}\right)^2`,

        steps: [
          M`=\left(\sqrt[4]{81}\right)^2`,
          M`=3^2=9`
        ],

        answer: M`\boxed9`
      }
    ]
  },

  {
    title: "Теріс рационал көрсеткіш",

    text:
      "Теріс көрсеткішті дәрежені есептеу үшін сол санның оң көрсеткішті дәрежесінің кері санын аламыз. Дәреженің негізі оң болуы керек.",

    formula:
      M`a^{-r}=\frac1{a^r},\qquad a>0`,

    example: [
      M`25^{-\frac12}`,
      M`=\frac1{\sqrt{25}}`,
      M`=\frac15`
    ],

    self: [
      {
        question: M`9^{-\frac12}`,
        steps: [
          M`=\frac1{\sqrt9}`,
          M`=\frac13`
        ],
        answer: M`\boxed{\frac13}`
      },
      {
        question: M`27^{-\frac13}`,
        steps: [
          M`=\frac1{\sqrt[3]{27}}`,
          M`=\frac13`
        ],
        answer: M`\boxed{\frac13}`
      }
    ]
  },

  {
    title: "Иррационал көрсеткішті дәреже",

    text:
      "Иррационал көрсеткішті дәреже — көрсеткіші иррационал сан болатын дәреже. Оң негіз үшін мұндай дәреженің мәні анықталады. Оның жуық мәнін ғылыми калькулятормен табуға болады.",

    formula:
      M`a^r=e^{r\ln a},\qquad a>0`,

    example: [
      M`2^{\sqrt2}`,
      M`\sqrt2\approx1.4142`,
      M`2^{\sqrt2}\approx2.66514`
    ],

    self: [
      {
        question: M`1^{\sqrt5}`,
        steps: [
          M`1^r=1`,
          M`1^{\sqrt5}=1`
        ],
        answer: M`\boxed1`
      },
      {
        question:
          M`9^{\sqrt2}\cdot9^{-\sqrt2}`,

        steps: [
          M`=9^{\sqrt2-\sqrt2}`,
          M`=9^0=1`
        ],

        answer: M`\boxed1`
      }
    ]
  }
];

// ======================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// ӘР ЕСЕПТІҢ ШЕШУ ЖОЛЫ БАР
// ======================================

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,

    items: [
      {
        question: M`36^{\frac12}`,
        answer: 6,
        latex: M`\boxed6`,
        steps: [M`=\sqrt{36}`,M`=6`]
      },
      {
        question: M`125^{\frac13}`,
        answer: 5,
        latex: M`\boxed5`,
        steps: [M`=\sqrt[3]{125}`,M`=5`]
      },
      {
        question: M`16^{\frac14}`,
        answer: 2,
        latex: M`\boxed2`,
        steps: [M`=\sqrt[4]{16}`,M`=2`]
      },
      {
        question: M`49^{\frac12}`,
        answer: 7,
        latex: M`\boxed7`,
        steps: [M`=\sqrt{49}`,M`=7`]
      },
      {
        question: M`81^{\frac14}`,
        answer: 3,
        latex: M`\boxed3`,
        steps: [M`=\sqrt[4]{81}`,M`=3`]
      }
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,

    items: [
      {
        question: M`8^{\frac23}`,
        answer: 4,
        latex: M`\boxed4`,
        steps: [
          M`=\left(\sqrt[3]{8}\right)^2`,
          M`=2^2=4`
        ]
      },
      {
        question: M`16^{\frac34}`,
        answer: 8,
        latex: M`\boxed8`,
        steps: [
          M`=\left(\sqrt[4]{16}\right)^3`,
          M`=2^3=8`
        ]
      },
      {
        question: M`27^{\frac23}`,
        answer: 9,
        latex: M`\boxed9`,
        steps: [
          M`=\left(\sqrt[3]{27}\right)^2`,
          M`=3^2=9`
        ]
      },
      {
        question: M`32^{\frac25}`,
        answer: 4,
        latex: M`\boxed4`,
        steps: [
          M`=\left(\sqrt[5]{32}\right)^2`,
          M`=2^2=4`
        ]
      },
      {
        question: M`81^{\frac34}`,
        answer: 27,
        latex: M`\boxed{27}`,
        steps: [
          M`=\left(\sqrt[4]{81}\right)^3`,
          M`=3^3=27`
        ]
      }
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,

    items: [
      {
        question: M`16^{-\frac12}`,
        answer: 0.25,
        latex: M`\boxed{\frac14}`,
        steps: [
          M`=\frac1{\sqrt{16}}`,
          M`=\frac14`
        ]
      },
      {
        question: M`27^{-\frac23}`,
        answer: 1/9,
        latex: M`\boxed{\frac19}`,
        steps: [
          M`=\frac1{\left(\sqrt[3]{27}\right)^2}`,
          M`=\frac1{3^2}`,
          M`=\frac19`
        ]
      },
      {
        question:
          M`4^{\frac12}\cdot4^{\frac32}`,

        answer: 16,
        latex: M`\boxed{16}`,
        steps: [
          M`=4^{\frac12+\frac32}`,
          M`=4^2=16`
        ]
      },
      {
        question:
          M`\frac{81^{\frac34}}{81^{\frac14}}`,

        answer: 9,
        latex: M`\boxed9`,
        steps: [
          M`=81^{\frac12}`,
          M`=\sqrt{81}=9`
        ]
      },
      {
        question:
          M`\left(32^{\frac15}\right)^3`,

        answer: 8,
        latex: M`\boxed8`,
        steps: [
          M`=\left(\sqrt[5]{32}\right)^3`,
          M`=2^3=8`
        ]
      }
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,

    items: [
      {
        question:
          M`\frac{16^{\frac34}\cdot8^{\frac23}}4`,

        answer: 8,
        latex: M`\boxed8`,
        steps: [
          M`=\frac{8\cdot4}{4}`,
          M`=8`
        ]
      },
      {
        question:
          M`125^{-\frac23}\cdot25^{\frac12}`,

        answer: 1/5,
        latex: M`\boxed{\frac15}`,
        steps: [
          M`=\frac1{25}\cdot5`,
          M`=\frac15`
        ]
      },
      {
        question:
          M`\left(81^{\frac14}+16^{\frac12}\right)^2`,

        answer: 49,
        latex: M`\boxed{49}`,
        steps: [
          M`=(3+4)^2`,
          M`=7^2=49`
        ]
      },
      {
        question:
          M`32^{\frac35}-27^{\frac23}`,

        answer: -1,
        latex: M`\boxed{-1}`,
        steps: [
          M`=2^3-3^2`,
          M`=8-9=-1`
        ]
      },
      {
        question:
          M`4^{\sqrt2}\cdot4^{-\sqrt2}+9^{\frac12}`,

        answer: 4,
        latex: M`\boxed4`,
        steps: [
          M`=4^0+3`,
          M`=1+3=4`
        ]
      }
    ]
  }
];

// ======================================
// 3 ТОПҚА АРНАЛҒАН 15 СҰРАҚ
// ======================================

const quiz = [
  {
    q: "Рационал көрсеткіш қандай сан болуы мүмкін?",
    options: [
      "Тек натурал сан",
      "Жай бөлшек",
      "Тек иррационал сан",
      "Тек теріс сан"
    ],
    correct: 1
  },
  {
    q: "Тоғыз санының бір екінші дәрежесі?",
    options: ["9","81","3","4,5"],
    correct: 2
  },
  {
    q: "Сегіз санының бір үшінші дәрежесі?",
    options: ["2","4","8","3"],
    correct: 0
  },
  {
    q: "Жиырма жеті санының екі үшінші дәрежесі?",
    options: ["3","6","27","9"],
    correct: 3
  },
  {
    q: "Он алты санының үш төртінші дәрежесі?",
    options: ["4","8","12","16"],
    correct: 1
  },
  {
    q: "Отыз екі санының екі бесінші дәрежесі?",
    options: ["8","2","4","16"],
    correct: 2
  },
  {
    q: "Негіздері бірдей дәрежелерді көбейткенде?",
    options: [
      "Көрсеткіштері қосылады",
      "Негіздері қосылады",
      "Көрсеткіштері бөлінеді",
      "Дәрежесі жойылады"
    ],
    correct: 0
  },
  {
    q: "Жиырма бес санының теріс бір екінші дәрежесі?",
    options: ["−5","5","−1/5","1/5"],
    correct: 3
  },
  {
    q: "Бөлшек көрсеткіштің бөлімі нені көрсетеді?",
    options: [
      "Коэффициентті",
      "Түбір дәрежесін",
      "Таңбаны",
      "Дәреже негізін"
    ],
    correct: 1
  },
  {
    q: "Алпыс төрт санының екі үшінші дәрежесі?",
    options: ["4","8","16","32"],
    correct: 2
  },
  {
    q: "Оң санның нөлінші дәрежесі?",
    options: ["1","0","Өзгермейді","−1"],
    correct: 0
  },
  {
    q: "Көрсеткіші квадрат түбір екі болса, оның түрі?",
    options: [
      "Бүтін",
      "Натурал",
      "Рационал",
      "Иррационал"
    ],
    correct: 3
  },
  {
    q: "Сексен бір санының үш төртінші дәрежесі?",
    options: ["9","27","3","81"],
    correct: 1
  },
  {
    q: "Дәрежені дәрежеге шығарғанда не істейміз?",
    options: [
      "Көрсеткіштерді қосамыз",
      "Көрсеткіштерді азайтамыз",
      "Көрсеткіштерді көбейтеміз",
      "Көрсеткіштерді бөлеміз"
    ],
    correct: 2
  },
  {
    q: "Негіздері бірдей, көрсеткіштері қарама-қарсы екі дәреженің көбейтіндісі?",
    options: ["1","0","4","8"],
    correct: 0
  }
];

// ======================================
// ҮЙ ТАПСЫРМАСЫ
// ======================================

const homework = [
  {
    title: "1-тапсырма. Бөлшек көрсеткішті дәрежелер",

    text:
      "Төмендегі өрнектерді түбір арқылы жазып, мәндерін есептеңдер. Шешу жолының барлық қадамдарын дәптерге түсіріңдер.",

    formulas: [
      M`256^{\frac34}`,
      M`125^{-\frac23}`,
      M`81^{\frac34}\cdot9^{-\frac12}`
    ]
  },

  {
    title: "2-тапсырма. Дәрежелердің қасиеттері",

    text:
      "Негіздері бірдей дәрежелердің көбейту, бөлу және дәрежеге шығару қасиеттерін пайдаланып, өрнектерді ықшамдаңдар.",

    formulas: [
      M`\frac{a^{\frac52}\cdot a^{\frac12}}{a},\quad a>0`,
      M`\left(x^{\frac23}\right)^{\frac32},\quad x>0`
    ]
  },

  {
    title: "3-тапсырма. Теориялық түсіндіру",

    text:
      "Рационал және иррационал көрсеткіштердің айырмашылығын сегіз–он сөйлеммен түсіндіріңдер. Әр түрге бір математикалық мысал келтіріңдер.",

    formulas: [
      M`a^{\frac mn}`,
      M`a^{\sqrt2},\quad a>0`
    ]
  }
];

// ======================================
// СЛАЙДТАРДЫҢ РЕТІ
// ======================================

const slides = [
  {type:"intro",name:"Кіріспе"}
];

theory.forEach((_,index)=>{
  slides.push({
    type:"theory",
    index:index,
    name:"Түсіндірме "+(index+1)
  });
});

notes.forEach((_,index)=>{
  slides.push({
    type:"note",
    index:index,
    name:"Конспект "+(index+1)
  });
});

levels.forEach((_,index)=>{
  slides.push({
    type:"level",
    index:index,
    name:"Деңгей "+(index+1)
  });
});

quiz.forEach((_,index)=>{
  slides.push({
    type:"game",
    index:index,
    name:(index%3+1)+"-топ • "+(index+1)+"-сұрақ"
  });
});

slides.push({
  type:"homework",
  name:"Үй жұмысы"
});

slides.push({
  type:"finish",
  name:"Қорытынды"
});

// ======================================
// САЙТТЫҢ АЙНЫМАЛЫЛАРЫ
// ======================================

let currentPage = 0;

let individualScore = 0;
let teamScores = [0,0,0];

const completedTasks = new Set();
const savedAnswers = new Map();

let remainingSeconds = 80*60;
let timerID = null;
let timerEndAt = 0;

// ======================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ======================================

function safe(value) {
  return String(value).replace(/[&<>"']/g,char=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[char]));
}

function math(tex) {
  return `<div class="math-box">\\[${tex}\\]</div>`;
}

function card(color,title,body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(items) {
  return items.map((item,index)=>`
    <div class="step">
      <strong>${index+1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

function selfWorkHTML(items,prefix) {
  return items.map((item,index)=>{
    const id=prefix+"_"+index;

    return `
      <div class="self-task">

        <h3>✏️ Өзіндік жұмыс — ${index+1}-есеп</h3>

        ${math(item.question)}

        <p>
          Есептің шығару жолын дәптерге жазып,
          жауабын өз беттеріңмен табыңдар.
        </p>

        <button
          class="action"
          data-toggle="${id}">
          Жауапты және шешу жолын көрсету
        </button>

        <div id="${id}"
             class="solution"
             hidden>

          <h3>Шығару жолы</h3>

          ${stepsHTML(item.steps)}

          <p class="green-text">
            Дұрыс жауап:
          </p>

          ${math(item.answer)}

        </div>

      </div>
    `;
  }).join("");
}

// ======================================
// КІРІСПЕ
// ======================================

function renderIntro() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §6. Рационал және иррационал
        көрсеткішті дәрежелер
      </h1>

      ${card("blue","Сабақтың мақсаты",`
        <p>${safe(lesson.goal)}</p>
      `)}

      ${card("yellow","Бүгінгі негізгі формула",`
        ${math(M`a^{\frac mn}=\sqrt[n]{a^m},\qquad a>0`)}
      `)}

      ${card("green","Сабақтың бөлімдері",`
        <p>5 теориялық түсіндірме</p>
        <p>Әр түсіндірмеден кейін екі өзіндік есеп</p>
        <p>10 толық конспект</p>
        <p>4 деңгей — барлығы 20 есеп</p>
        <p>3 командаға арналған 15 ойын сұрағы</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("purple","Сабақтың уақыт жоспары",`
        <p>Кіріспе — 5 минут</p>
        <p>Түсіндірме және өзіндік жұмыс — 20 минут</p>
        <p>Конспект — 15 минут</p>
        <p>4 деңгейлік тапсырма — 20 минут</p>
        <p>Командалық ойын — 15 минут</p>
        <p>Үй жұмысы мен қорытынды — 5 минут</p>
      `)}

    </div>
  `;
}

// ======================================
// 5 ТЕОРИЯНЫ КӨРСЕТУ
// ======================================

function renderTheory(index) {
  const t=theory[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТЕОРИЯ ${index+1} / ${theory.length}
      </div>

      <h2>${safe(t.title)}</h2>

      ${card("blue","Анықтама",`
        <p>${safe(t.definition)}</p>
      `)}

      ${card("purple","Қарапайым түсіндірме",`
        <p>${safe(t.explanation)}</p>
      `)}

      ${card("green","Ереже",`
        <p>${safe(t.rule)}</p>
      `)}

      ${card("yellow","Негізгі формула",
        math(t.formula)
      )}

      ${card("red","Назар аударыңдар!",`
        <p>${safe(t.warning)}</p>
      `)}

      ${card("green","Шығарылған мысал",`
        ${stepsHTML(t.worked)}
      `)}

      <div class="eyebrow">
        ӨЗІНДІК ЖҰМЫС
      </div>

      <h2>✏️ Тақырыпты бекіту</h2>

      ${selfWorkHTML(
        t.self,
        "theory_"+index
      )}

    </div>
  `;
}

// ======================================
// 10 КОНСПЕКТ
// ======================================

function renderNote(index) {
  const n=notes[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${index+1} / ${notes.length}
      </div>

      <h2>${safe(n.title)}</h2>

      <div class="notebook">
        ✍ ДӘПТЕРГЕ ЖАЗЫП АЛЫҢДАР
      </div>

      ${card("blue","Анықтама және ереже",`
        <p>${safe(n.text)}</p>
      `)}

      ${card("yellow","Негізгі формула",
        math(n.formula)
      )}

      ${card("green","Шығарылған мысал",`
        ${stepsHTML(n.example)}
      `)}

      <h2>✏️ Өзіндік тапсырмалар</h2>

      ${selfWorkHTML(
        n.self,
        "note_"+index
      )}

    </div>
  `;
}

// ======================================
// 4 ДЕҢГЕЙДІ КӨРСЕТУ
// ======================================

function renderLevel(index) {
  const level=levels[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМАЛАР ${index+1} / 4
      </div>

      <h2>📐 ${safe(level.name)}</h2>

      <div class="level-header">
        <strong>5 есеп</strong>
        <span>
          Әр дұрыс жауап: +${level.points} ұпай
        </span>
      </div>

      <p>
        Алдымен есепті дәптерге шығарыңдар.
        Содан кейін сандық жауабын енгізіп,
        «Тексеру» батырмасын басыңдар.
      </p>

      <div class="level-grid">

        ${level.items.map((task,i)=>{
          const key=index+"_"+i;
          const done=completedTasks.has(key);

          return `
            <div class="level-task">

              <h3>${i+1}-есеп</h3>

              ${math(task.question)}

              <div class="answer-row">

                <input
                  type="text"
                  id="input_${key}"
                  placeholder="Жауап, мысалы 1/4"
                  ${done?"disabled":""}
                >

                <button
                  data-check="${key}"
                  ${done?"disabled":""}>
                  ${done?"✓ Дұрыс":"Тексеру"}
                </button>

              </div>

              <div
                class="feedback ${done?"success":""}"
                id="feedback_${key}">

                ${done
                  ?`✓ Дұрыс! +${level.points} ұпай`
                  :"Жауапты енгізіңдер."}

              </div>

              <button
                class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div class="solution"
                   id="solution_${key}"
                   hidden>

                ${stepsHTML(task.steps)}

                <p class="green-text">
                  Дұрыс жауап:
                </p>

                ${math(task.latex)}

              </div>

            </div>
          `;
        }).join("")}

      </div>
    </div>
  `;
}

// ======================================
// КОМАНДАЛЫҚ ОЙЫН
// ======================================

function renderGame(index) {
  const q=quiz[index];
  const team=index%3;
  const selected=savedAnswers.get(index);

  return `
    <div class="slide">

      <div class="eyebrow">
        ТОПТЫҚ ОЙЫН • ${index+1} / 15
      </div>

      <h2>
        🏆 ${team+1}-топ жауап береді
      </h2>

      <div class="scores">

        ${teamScores.map((points,i)=>`
          <div class="team
            ${i===team?"current":""}">

            ${i+1}-топ

            <strong>${points}</strong>

          </div>
        `).join("")}

      </div>

      ${card("yellow",`${index+1}-сұрақ`,`

        <p>${safe(q.q)}</p>

        <div class="answers">

          ${q.options.map((option,i)=>{
            let cls="";

            if(selected!==undefined) {
              if(i===q.correct)cls="correct";
              else if(i===selected)cls="wrong";
            }

            return `
              <button
                data-choice="${i}"
                class="${cls}"
                ${selected!==undefined?"disabled":""}>

                ${"ABCD"[i]}. ${safe(option)}

              </button>
            `;
          }).join("")}

        </div>

        <p>
          ${selected===undefined
            ?"Төрт жауаптың біреуін таңдаңдар."
            :selected===q.correct
              ?"✓ Дұрыс жауап! +10 ұпай."
              :"Дұрыс жауап: "+safe(q.options[q.correct])}
        </p>

      `)}

      ${card("blue","Ойын ережесі",`
        <p>
          Командалар 1 → 2 → 3 ретімен
          автоматты ауысады.
        </p>

        <p>Дұрыс жауап — 10 ұпай.</p>

        <p>
          Жауап бергеннен кейін сол жақтағы
          «Келесі» батырмасын басыңдар.
        </p>
      `)}

    </div>
  `;
}

// ======================================
// ҮЙ ЖҰМЫСЫ
// ======================================

function renderHomework() {
  return `
    <div class="slide">

      <div class="eyebrow">
        ҮЙ ТАПСЫРМАСЫ
      </div>

      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item,index)=>card(
        ["blue","yellow","green"][index],
        item.title,
        `
          <p>${safe(item.text)}</p>

          ${item.formulas.map(math).join("")}
        `
      )).join("")}

      ${card("red","Маңызды ескерту",`
        <p>
          Бөлшек көрсеткіштердің алымы мен
          бөлімін шатастырмаңдар.
          Барлық есепті толық шығару жолымен
          дәптерге жазыңдар.
        </p>
      `)}

    </div>
  `;
}

// ======================================
// ҚОРЫТЫНДЫ
// ======================================

function renderFinish() {
  const maximum=Math.max(...teamScores);

  const winners=teamScores
    .map((points,index)=>
      points===maximum
        ?(index+1)+"-топ"
        :null
    )
    .filter(Boolean);

  return `
    <div class="slide">

      <div class="eyebrow">
        САБАҚ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="gradient">
        Сабақ аяқталды!
      </h1>

      <div class="scores">

        ${teamScores.map((points,index)=>`
          <div class="team">
            ${index+1}-топ
            <strong>${points}</strong>
          </div>
        `).join("")}

      </div>

      ${card("green","Ойын нәтижесі",`
        <p>
          ${winners.join(", ")}
          ${winners.length===1
            ?" — жеңімпаз!"
            :" — бірдей ұпай жинады!"}
        </p>
      `)}

      ${card("blue","Деңгейлік есептердің нәтижесі",`
        <p>
          Дұрыс шығарылған есептер:
          ${completedTasks.size} / 20
        </p>

        <p>
          Жиналған жеке ұпай:
          ${individualScore}
        </p>
      `)}

      ${card("yellow","Бүгін не үйрендік?",`
        <p>Рационал көрсеткішті дәрежені түсіндік.</p>
        <p>Бөлшек көрсеткіштерді түбірге айналдырдық.</p>
        <p>Иррационал көрсеткішті дәрежелерді таныдық.</p>
        <p>Дәреже қасиеттерімен есептер шығардық.</p>
      `)}

      <h2>Сау болыңыздар!</h2>

      <p>
        Сабаққа қатысқандарыңызға рақмет!
      </p>

    </div>
  `;
}

// ======================================
// MATHJAX ЖӘНЕ НЕГІЗГІ RENDER
// ======================================

let mathQueue = Promise.resolve();

function typesetMath() {
  if(!window.MathJax)return;

  mathQueue=mathQueue.then(async()=>{
    await MathJax.startup.promise;

    if(typeof MathJax.typesetPromise==="function") {
      await MathJax.typesetPromise([
        $("content")
      ]);
    }
  }).catch(error=>{
    console.warn("MathJax қатесі:",error);
  });
}

function render() {
  const slide=slides[currentPage];
  let html="";

  if(window.MathJax?.typesetClear) {
    MathJax.typesetClear([$("content")]);
  }

  switch(slide.type) {
    case "intro":
      html=renderIntro();
      break;

    case "theory":
      html=renderTheory(slide.index);
      break;

    case "note":
      html=renderNote(slide.index);
      break;

    case "level":
      html=renderLevel(slide.index);
      break;

    case "game":
      html=renderGame(slide.index);
      break;

    case "homework":
      html=renderHomework();
      break;

    case "finish":
      html=renderFinish();
      break;
  }

  $("content").innerHTML=html;
  $("content").scrollTop=0;

  $("pageCounter").textContent=
    (currentPage+1)+" / "+slides.length;

  $("pageTitle").textContent=slide.name;

  $("pageProgress").style.width=
    ((currentPage+1)/slides.length*100)+"%";

  updateScores();

  $("prevPage").disabled=currentPage===0;

  $("nextPage").disabled=
    currentPage===slides.length-1;

  document.querySelectorAll(
    "[data-section]"
  ).forEach(button=>{
    button.classList.toggle(
      "active",
      button.dataset.section===slide.type
    );
  });

  typesetMath();
}

// ======================================
// ҰПАЙДЫ ЖАҢАРТУ
// ======================================

function updateScores() {
  const gameTotal=teamScores.reduce(
    (sum,n)=>sum+n,0
  );

  $("totalScore").textContent=
    individualScore+gameTotal;
}

// ======================================
// НАВИГАЦИЯ
// ======================================

function nextPage() {
  if(currentPage<slides.length-1) {
    currentPage++;
    render();
  }
}

function previousPage() {
  if(currentPage>0) {
    currentPage--;
    render();
  }
}

function jumpTo(section) {
  const index=slides.findIndex(
    slide=>slide.type===section
  );

  if(index!==-1) {
    currentPage=index;
    render();
  }
}

$("nextPage").addEventListener(
  "click",
  nextPage
);

$("prevPage").addEventListener(
  "click",
  previousPage
);

document.querySelectorAll(
  "[data-section]"
).forEach(button=>{
  button.addEventListener("click",()=>{
    jumpTo(button.dataset.section);
  });
});

// ======================================
// ШЕШУ ЖОЛЫН КӨРСЕТУ
// ======================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest(
    "[data-toggle]"
  );

  if(toggle) {
    const target=$(toggle.dataset.toggle);

    if(target) {
      target.hidden=!target.hidden;

      if(!target.hidden) {
        typesetMath();
      }
    }

    return;
  }

  const check=event.target.closest(
    "[data-check]"
  );

  if(check) {
    checkLevelAnswer(check.dataset.check);
    return;
  }

  const choice=event.target.closest(
    "[data-choice]"
  );

  if(choice) {
    answerGame(Number(choice.dataset.choice));
  }
});

// ======================================
// 4 ДЕҢГЕЙДІҢ ЖАУАБЫН ТЕКСЕРУ
// ======================================

function checkLevelAnswer(key) {
  if(completedTasks.has(key))return;

  const parts=key.split("_").map(Number);

  const levelIndex=parts[0];
  const taskIndex=parts[1];

  const level=levels[levelIndex];
  const task=level.items[taskIndex];

  const input=$("input_"+key);
  const feedback=$("feedback_"+key);

  const value=input.value.trim();

  if(!value) {
    feedback.textContent=
      "Алдымен жауапты енгізіңдер.";
    return;
  }

  let answer;

  try {
    answer=calculate(value);
  } catch(error) {
    feedback.textContent=
      "Жауапты сан немесе бөлшек түрінде жазыңдар.";
    return;
  }

  const expected=task.answer;

  const tolerance=
    0.00001*Math.max(1,Math.abs(expected));

  if(Math.abs(answer-expected)<=tolerance) {
    completedTasks.add(key);

    individualScore+=level.points;

    input.disabled=true;

    feedback.textContent=
      "✓ Дұрыс! +"+level.points+" ұпай";

    feedback.classList.add("success");

    const button=document.querySelector(
      `[data-check="${key}"]`
    );

    if(button) {
      button.disabled=true;
      button.textContent="✓ Дұрыс";
    }

    updateScores();
  } else {
    feedback.textContent=
      "Қате жауап. Қайта есептеп көріңдер.";
  }
}

// ======================================
// ТОПТЫҚ ОЙЫН
// ======================================

function answerGame(choice) {
  const slide=slides[currentPage];

  if(slide.type!=="game")return;

  if(savedAnswers.has(slide.index))return;

  const question=quiz[slide.index];

  savedAnswers.set(slide.index,choice);

  if(choice===question.correct) {
    const team=slide.index%3;
    teamScores[team]+=10;
  }

  render();
}

function resetGame() {
  teamScores=[0,0,0];
  savedAnswers.clear();

  render();
}

$("resetGame").addEventListener(
  "click",
  resetGame
);

// ======================================
// ТОЛЫҚ ЭКРАН
// ======================================

$("fullscreenBtn").addEventListener(
  "click",
  async()=>{
    try {
      if(!document.fullscreenElement) {
        await document.documentElement
          .requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch(error) {
      console.warn(error);
    }
  }
);

// ======================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ======================================

function formatTime(seconds) {
  const m=Math.floor(seconds/60);
  const s=seconds%60;

  return (
    String(m).padStart(2,"0")+
    ":"+
    String(s).padStart(2,"0")
  );
}

function updateTimer() {
  $("remaining").textContent=
    formatTime(remainingSeconds);

  $("elapsed").textContent=
    formatTime(4800-remainingSeconds);

  $("timeProgress").style.width=
    ((4800-remainingSeconds)/4800*100)+"%";
}

function startTimer() {
  if(timerID!==null)return;
  if(remainingSeconds<=0)return;

  timerEndAt=Date.now()+remainingSeconds*1000;

  timerID=setInterval(()=>{
    remainingSeconds=Math.max(
      0,
      Math.ceil(
        (timerEndAt-Date.now())/1000
      )
    );

    updateTimer();

    if(remainingSeconds===0) {
      pauseTimer();
    }
  },250);
}

function pauseTimer() {
  if(timerID!==null) {
    clearInterval(timerID);
    timerID=null;
  }
}

function resetTimer() {
  pauseTimer();

  remainingSeconds=4800;
  updateTimer();
}

$("timerStart").addEventListener(
  "click",
  startTimer
);

$("timerPause").addEventListener(
  "click",
  pauseTimer
);

$("timerReset").addEventListener(
  "click",
  resetTimer
);

// ======================================
// АЛМАТЫНЫҢ НАҚТЫ УАҚЫТЫ
// ======================================

function updateClock() {
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();

setInterval(
  updateClock,
  1000
);

// ======================================
// ҚАРАПАЙЫМ ЖӘНЕ ҒЫЛЫМИ
// КАЛЬКУЛЯТОРЛАР
// ======================================

const calculatorValues = {
  basic: "",
  science: ""
};

const calculatorKeys = {
  basic: [
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],

  science: [
    "C","⌫","(",")",
    "sin","cos","tg","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ]
};

const calculatorMap = {
  "×": "*",
  "÷": "/",
  "−": "-",

  "√": "sqrt(",
  "∛": "cbrt(",

  "sin": "sin(",
  "cos": "cos(",
  "tg": "tan(",
  "ctg": "ctg(",

  "log": "log(",
  "ln": "ln(",

  "π": "pi",

  "x²": "^2",
  "xʸ": "^"
};

// ======================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫН ЖАСАУ
// ======================================

function createCalculator(type) {
  const grid=$("keys-"+type);

  calculatorKeys[type].forEach(key=>{
    const button=document.createElement("button");

    button.type="button";
    button.textContent=key;

    if(key==="C") {
      button.classList.add("clear");
    }

    if(key==="=") {
      button.classList.add("equal");
    }

    if([
      "sin","cos","tg","ctg",
      "log","ln"
    ].includes(key)) {
      button.classList.add("trig");
    }

    if([
      "+","−","×","÷","√","∛",
      "x²","xʸ","%"
    ].includes(key)) {
      button.classList.add("operator");
    }

    button.addEventListener("click",()=>{
      pressCalculator(type,key);
    });

    grid.appendChild(button);
  });
}

// ======================================
// КАЛЬКУЛЯТОРҒА САН ЕНГІЗУ
// ======================================

function pressCalculator(type,key) {
  let value=calculatorValues[type];

  if(key==="C") {
    value="";
  }

  else if(key==="⌫") {
    value=value.slice(0,-1);
  }

  else if(key==="=") {
    try {
      const result=calculate(value);

      value=String(
        Number(result.toPrecision(12))
      );
    } catch(error) {
      value="Қате";
    }
  }

  else {
    if(value==="Қате") {
      value="";
    }

    value+=calculatorMap[key]??key;
  }

  calculatorValues[type]=value;

  const display=$("display-"+type);

  display.textContent=value||"0";

  display.scrollLeft=display.scrollWidth;
}

// ======================================
// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ ПАРСЕРІ
// ======================================

// eval() қолданылмайды.
// Тригонометриялық бұрыштар: градуспен.

function calculate(input) {
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".");

  let pos=0;

  const radians=x=>x*Math.PI/180;

  const functions={
    sin:x=>Math.sin(radians(x)),

    cos:x=>Math.cos(radians(x)),

    tan:x=>{
      const cosine=Math.cos(radians(x));

      if(Math.abs(cosine)<1e-12) {
        throw new Error(
          "Тангенс анықталмаған"
        );
      }

      return Math.tan(radians(x));
    },

    ctg:x=>{
      const sine=Math.sin(radians(x));

      if(Math.abs(sine)<1e-12) {
        throw new Error(
          "Котангенс анықталмаған"
        );
      }

      return Math.cos(radians(x))/sine;
    },

    sqrt:x=>Math.sqrt(x),

    cbrt:x=>Math.cbrt(x),

    log:x=>Math.log10(x),

    ln:x=>Math.log(x)
  };

  function take(char) {
    if(source[pos]===char) {
      pos++;
      return true;
    }

    return false;
  }

  function atom() {
    if(take("(")) {
      const value=expression();

      if(!take(")")) {
        throw new Error(
          "Жақша жабылмаған"
        );
      }

      return value;
    }

    const remaining=source.slice(pos);

    const match=remaining.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if(match) {
      pos+=match[0].length;
      return Number(match[0]);
    }

    if(remaining.startsWith("pi")) {
      pos+=2;
      return Math.PI;
    }

    if(remaining.startsWith("e")) {
      pos++;
      return Math.E;
    }

    for(const name of Object.keys(functions)) {
      if(remaining.startsWith(name+"(")) {
        pos+=name.length+1;

        const argument=expression();

        if(!take(")")) {
          throw new Error(
            "Жақша жабылмаған"
          );
        }

        return functions[name](argument);
      }
    }

    throw new Error("Белгісіз өрнек");
  }

  function postfix() {
    let value=atom();

    while(take("%")) {
      value/=100;
    }

    return value;
  }

  function power() {
    let value=postfix();

    if(take("^")) {
      value=Math.pow(
        value,
        unary()
      );
    }

    return value;
  }

  function unary() {
    if(take("+")) {
      return unary();
    }

    if(take("-")) {
      return -unary();
    }

    return power();
  }

  function term() {
    let value=unary();

    while(true) {
      if(take("*")) {
        value*=unary();
      }

      else if(take("/")) {
        const divisor=unary();

        if(divisor===0) {
          throw new Error(
            "Нөлге бөлуге болмайды"
          );
        }

        value/=divisor;
      }

      else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value=term();

    while(true) {
      if(take("+")) {
        value+=term();
      }

      else if(take("-")) {
        value-=term();
      }

      else {
        break;
      }
    }

    return value;
  }

  if(!source) {
    throw new Error("Бос өрнек");
  }

  const result=expression();

  if(
    pos!==source.length ||
    !Number.isFinite(result)
  ) {
    throw new Error(
      "Есептеу қатесі"
    );
  }

  if(Math.abs(result)<1e-12) {
    return 0;
  }

  return result;
}

// ======================================
// КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// ======================================

function toggleCalculator(type) {
  const element=$("calc-"+type);

  const opening=
    !element.classList.contains("visible");

  const other=type==="basic"
    ?"science"
    :"basic";

  $("calc-"+other).classList.remove(
    "visible"
  );

  element.classList.toggle(
    "visible",
    opening
  );

  if(opening) {
    const rect=element.getBoundingClientRect();

    const maxX=Math.max(
      0,
      window.innerWidth-element.offsetWidth
    );

    const maxY=Math.max(
      0,
      window.innerHeight-element.offsetHeight
    );

    element.style.left=
      Math.min(maxX,Math.max(0,rect.left))+"px";

    element.style.top=
      Math.min(maxY,Math.max(0,rect.top))+"px";
  }
}

$("basicLaunch").addEventListener(
  "click",
  ()=>toggleCalculator("basic")
);

$("scienceLaunch").addEventListener(
  "click",
  ()=>toggleCalculator("science")
);

document.querySelectorAll(
  "[data-close]"
).forEach(button=>{
  button.addEventListener("click",()=>{
    const type=button.dataset.close;

    $("calc-"+type).classList.remove(
      "visible"
    );
  });
});

// ======================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ======================================

function enableCalculatorDrag(element) {
  let drag=null;
  let blockClickUntil=0;

  element.addEventListener(
    "pointerdown",
    event=>{
      if(event.target.closest(".calc-close")) {
        return;
      }

      if(
        event.pointerType==="mouse" &&
        event.button!==0
      ) {
        return;
      }

      const rect=element.getBoundingClientRect();

      drag={
        id:event.pointerId,

        startX:event.clientX,
        startY:event.clientY,

        originalX:rect.left,
        originalY:rect.top,

        moved:false
      };
    }
  );

  window.addEventListener(
    "pointermove",
    event=>{
      if(!drag)return;
      if(event.pointerId!==drag.id)return;

      const dx=event.clientX-drag.startX;
      const dy=event.clientY-drag.startY;

      if(Math.hypot(dx,dy)>6) {
        drag.moved=true;
      }

      if(!drag.moved)return;

      element.classList.add("dragging");

      const maxX=Math.max(
        0,
        window.innerWidth-element.offsetWidth
      );

      const maxY=Math.max(
        0,
        window.innerHeight-element.offsetHeight
      );

      const x=Math.max(
        0,
        Math.min(
          maxX,
          drag.originalX+dx
        )
      );

      const y=Math.max(
        0,
        Math.min(
          maxY,
          drag.originalY+dy
        )
      );

      element.style.left=x+"px";
      element.style.top=y+"px";
    }
  );

  window.addEventListener(
    "pointerup",
    event=>{
      if(!drag)return;
      if(event.pointerId!==drag.id)return;

      if(drag.moved) {
        blockClickUntil=Date.now()+350;
      }

      element.classList.remove("dragging");

      drag=null;
    }
  );

  window.addEventListener(
    "pointercancel",
    event=>{
      if(!drag)return;
      if(event.pointerId!==drag.id)return;

      drag=null;
      element.classList.remove("dragging");
    }
  );

  // Жылжытқанда кездейсоқ сан енгізілмейді.
  element.addEventListener(
    "click",
    event=>{
      if(Date.now()>blockClickUntil)return;

      event.preventDefault();
      event.stopImmediatePropagation();

      blockClickUntil=0;
    },
    true
  );
}

// ======================================
// БАРЛЫҒЫН ІСКЕ ҚОСУ
// ======================================

createCalculator("basic");
createCalculator("science");

enableCalculatorDrag(
  $("calc-basic")
);

enableCalculatorDrag(
  $("calc-science")
);

updateTimer();
render();
