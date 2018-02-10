// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css         = require("bs-css/src/Css.js");
var Link        = require("../bindings/gatsby/link.js");
var Vrroom      = require("vrroom/src/Vrroom.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var style = Css.style(/* :: */[
      Css.display(/* InlineBlock */11),
      /* :: */[
        Css.opacity(0.75),
        /* :: */[
          Css.fontSize(Css.em(0.75)),
          /* :: */[
            Css.lineHeight(Css.em(1.6)),
            /* :: */[
              Css.marginLeft(Css.em(0.5)),
              /* :: */[
                Css.unsafe("whiteSpace", "nowrap"),
                /* :: */[
                  Css.backgroundColor(Css.hex("fff3")),
                  /* :: */[
                    Css.unsafe("padding", "0 1ex"),
                    /* :: */[
                      Css.textDecorationLine(/* None */0),
                      /* :: */[
                        Css.borderRadius(Css.ex(0.5)),
                        /* :: */[
                          Css.hover(/* :: */[
                                Css.opacity(1),
                                /* :: */[
                                  Css.textDecorationLine(/* Values */[/* :: */[
                                          /* Underline */0,
                                          /* [] */0
                                        ]]),
                                  /* [] */0
                                ]
                              ]),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var component = ReasonReact.statelessComponent("Tag");

function make(name, url, $staropt$star, _) {
  var customStyle = $staropt$star ? $staropt$star[0] : "";
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Link.make(url, /* Some */[style + (" " + customStyle)], /* None */0, /* array */[Vrroom.Helpers[/* text */1](name)]));
    });
  return newrecord;
}

var Tag = /* module */[
  /* style */style,
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.statelessComponent("Tag");

function make$1(name, _) {
  var newrecord = component$1.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, make(name, "/keyword/" + name, /* None */0, /* array */[]));
    });
  return newrecord;
}

var Keyword = /* module */[
  /* component */component$1,
  /* make */make$1
];

var customStyle = Css.style(/* :: */[
      Css.border(Css.px(1), /* Solid */2, Css.currentColor),
      /* [] */0
    ]);

var component$2 = ReasonReact.statelessComponent("Tag");

function make$2(name, _) {
  var newrecord = component$2.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, make(name, "/category/" + name, /* Some */[customStyle], /* array */[]));
    });
  return newrecord;
}

var Category = /* module */[
  /* customStyle */customStyle,
  /* component */component$2,
  /* make */make$2
];

exports.Tag      = Tag;
exports.Keyword  = Keyword;
exports.Category = Category;
/* style Not a pure module */
