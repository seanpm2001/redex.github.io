webpackJsonp([0xa625cac2f865],{124:function(e,n){"use strict";function t(e){return null===e||void 0===e}function o(e){return null===e||void 0===e?0:[e]}function s(e){return void 0===e?0:[e]}function i(e){return null===e?0:[e]}function r(e){return e?e[0]:void 0}function l(e){return e?e[0][1]:void 0}n.is_nil_undef=t,n.null_undefined_to_opt=o,n.undefined_to_opt=s,n.null_to_opt=i,n.option_get=r,n.option_get_unwrap=l},91:function(e,n,t){"use strict";var o=t(92);o.css.insert("html {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}"),o.css.insert("body {\n  margin: 0;\n}"),o.css.insert("article,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}"),o.css.insert("h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}"),o.css.insert("figcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}"),o.css.insert("figure {\n  margin: 1em 40px;\n}"),o.css.insert("hr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}"),o.css.insert("pre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),o.css.insert("a {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}"),o.css.insert("a:active,\na:hover {\n  outline-width: 0;\n}"),o.css.insert("abbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}"),o.css.insert("b,\nstrong {\n  font-weight: inherit;\n}"),o.css.insert("b,\nstrong {\n  font-weight: bolder;\n}"),o.css.insert("code,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),o.css.insert("dfn {\n  font-style: italic;\n}"),o.css.insert("mark {\n  background-color: #ff0;\n  color: #000;\n}"),o.css.insert("small {\n  font-size: 80%;\n}"),o.css.insert("sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}"),o.css.insert("sub {\n  bottom: -0.25em;\n}"),o.css.insert("sup {\n  top: -0.5em;\n}"),o.css.insert("audio,\nvideo {\n  display: inline-block;\n}"),o.css.insert("audio:not([controls]) {\n  display: none;\n  height: 0;\n}"),o.css.insert("img {\n  border-style: none;\n}"),o.css.insert("svg:not(:root) {\n  overflow: hidden;\n}"),o.css.insert("button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}"),o.css.insert("button,\ninput { /* 1 */\n  overflow: visible;\n}"),o.css.insert("button,\nselect { /* 1 */\n  text-transform: none;\n}"),o.css.insert('button,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n}'),o.css.insert('button::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}'),o.css.insert('button:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}'),o.css.insert("fieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}"),o.css.insert("legend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}"),o.css.insert("progress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}"),o.css.insert("textarea {\n  overflow: auto;\n}"),o.css.insert('[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}'),o.css.insert('[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}'),o.css.insert('[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}'),o.css.insert('[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}'),o.css.insert("::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}"),o.css.insert("details, /* 1 */\nmenu {\n  display: block;\n}"),o.css.insert("summary {\n  display: list-item;\n}"),o.css.insert("canvas {\n  display: inline-block;\n}"),o.css.insert("template {\n  display: none;\n}"),o.css.insert("[hidden] {\n  display: none;\n}")},56:function(e,n,t){"use strict";var o=t(11),s=t(4),i=t(85),r=s.css(0,[s.label("width-container"),[s.margin2(s.zero,s.auto),[s.maxWidth(s.px(960)),[s.minWidth(s.px(359)),[s.width(s.pct(100)),0]]]]]),l=s.css(0,[s.select("& h1",[s.fontSize(s.rem(2.25)),[s.fontWeight(s.bold),[s.lineHeight(s.em(1.1)),[s.marginBottom(s.rem(1.45)),0]]]]),[s.select("& h2",[s.fontSize(s.rem(1.62671)),[s.fontWeight(s.bold),[s.lineHeight(s.em(1.1)),[s.marginBottom(s.rem(1.45)),0]]]]),[s.select("& h3",[s.fontSize(s.rem(1.38316)),[s.fontWeight(s.bold),[s.lineHeight(s.em(1.1)),[s.marginBottom(s.rem(1.45)),0]]]]),[s.select("& h1, & h2, & h3, & h4, & h5",[s.select("& > a.anchor",[s.marginLeft(s.px(-20)),[s.paddingRight(s.px(4)),[s.select("& > svg",[s.visibility(s.hidden),0]),0]]]),[s.hover([s.select("& > a.anchor > svg",[s.visibility(s.visible),0]),0]),0]]),[s.select("& p",[s.marginBottom(s.rem(1.45)),[s.select("& *:last-child",[s.marginBottom(s.zero),0]),0]]),[s.select("& b, & strong",[s.fontWeight(s.bold),0]),[s.select("& i, & em",[s.fontStyle(s.italic),0]),[s.select("& ol, & ul",[s.margin(s.zero),[s.marginLeft(s.rem(1.45)),[s.marginBottom(s.rem(1.45)),[s.unsafe("listStylePosition","outside"),[s.unsafe("listStyleImage","none"),0]]]]]),[s.select("& li",[s.marginBottom(s.rem(.725)),[s.select("& > ol, & > ul",[s.marginLeft(s.rem(1.45)),[s.marginBottom(s.rem(.725)),[s.marginTop(s.rem(.725)),0]]]),[s.select("& *:last-child",[s.marginBottom(s.zero),0]),[s.select("& > p",[s.marginBottom(s.rem(.725)),0]),0]]]]),[s.select("& ol",[s.unsafe("listStyleType","decimal"),[s.select("& li",[s.paddingLeft(s.zero),0]),0]]),[s.select("& ul",[s.unsafe("listStyleType","disc"),[s.select("& li",[s.paddingLeft(s.zero),0]),0]]),[s.select("& code",[s.background(s.hsla(s.num(0),0,0,.04)),[s.fontFamilies(["'SFMono-Regular'",["Consolas",["'Roboto Mono'",["'Droid Sans Mono'",["'Liberation Mono'",["Menlo",["Courier",["monospace",0]]]]]]]]),[s.fontSize(s.rem(.85)),[s.lineHeight(s.rem(1.45)),[s.padding2(s.em(.2),s.zero),0]]]]]),[s.select("& pre",[s.marginBottom(s.rem(1.45)),[s.fontSize(s.rem(.85)),[s.lineHeight(s.rem(1.42)),[s.background(s.hsla(s.num(0),0,0,.04)),[s.overflow(s.auto),[s.unsafe("wordWrap","normal"),[s.padding(s.rem(1.45)),[s.select("& code",[s.background(s.none),[s.lineHeight(s.em(1.42)),0]]),0]]]]]]]]),[s.select("& a",[s.color(o.Color[5]),[s.textDecoration(s.none),[s.hover([s.textDecoration(s.underline),0]),0]]]),[s.select("& img",[s.maxWidth(s.pct(100)),0]),[s.select("& .redex-codeblock.m-tabbed",[s.display(s.flex),[s.position(s.relative),[s.select("& > ul",[s.display(s.flex),[s.position(s.absolute),[s.flexDirection(s.column),[s.margin(s.zero),[s.opacity(0),[s.transitions([[s.AnimatableProperty[76],s.ms(400),s.easeInOut,s.ms(200)],0]),[s.transforms([s.translateX(s.pct(-100)),0]),[s.height(s.pct(100)),[s.select("& > li",[s.cursor(s.pointer),[s.margin(s.zero),[s.display(s.inlineBlock),[s.padding2(s.em(.35),s.em(.75)),[s.color(s.white),[s.textTransform(s.lowercase),[s.fontVariant(s.smallCaps),[s.select("&:not(.s-selected)",[s.opacity(.5),[s.boxShadows([s.shadow(s.zero,s.px(-4),[s.px(-2)],[s.px(-2)],[!0],s.rgba(0,0,0,.1)),0]),[s.hover([s.opacity(1),0]),0]]]),[s.select("&.reason",[s.backgroundColor(o.Color[8]),0]),[s.select("&.ml",[s.backgroundColor(o.Color[9]),0]),0]]]]]]]]]]),0]]]]]]]]]),[s.hover([s.select("& > ul",[s.opacity(1),0]),0]),[s.select("& > .codeblock",[s.display(s.none),[s.flex_(s.$$int(1)),[s.maxWidth(s.pct(100)),[s.select("&.s-selected",[s.display(s.block),0]),[s.select("& > pre",[s.marginTop(s.zero),[s.select("&.lang-reason",[s.borderLeft3(s.px(2),s.solid,o.Color[8]),0]),[s.select("&.lang-ml",[s.borderLeft3(s.px(2),s.solid,o.Color[9]),0]),0]]]),0]]]]]),0]]]]]),0]]]]]]]]]]]]]]]]),a=i._reset,c=i._global;n._reset=a,n._global=c,n.widthContainer=r,n.html=l},85:function(e,n,t){"use strict";var o=t(11),s=t(4);t(91),s.$$global("*",[s.unsafe("boxSizing","border-box"),0]),s.$$global("*:focus",[s.outlineStyle(s.none),0]),s.$$global("body",[s.lineHeight(s.inherit_),[s.color(o.Color[4]),0]]),s.$$global("h1, h2, h3",[s.lineHeight(s.em(1.1)),[s.fontWeight(s.normal),0]]),s.$$global("a",[s.color(s.inherit_),0]),s.$$global("button, input, select",[s.background(s.none),[s.border(s.none),[s.font(s.inherit_),0]]]),s.$$global("button::-moz-focus-inner",[s.outline(s.none),0]);var i=s.$$global("ol, ul",[s.unsafe("listStyle","none"),[s.margin(s.zero),[s.padding(s.zero),0]]]);s.$$global("html",[s.fontSize(s.px(15)),[s.lineHeight(s.em(1.25)),[s.fontFamilies(["-apple-system",["BlinkMacSystemFont",["Segoe UI",["Roboto",["Oxygen",["Ubuntu",["Cantarell",["Fira Sans",["Droid Sans",["Helvetica Neue",["sans-serif",0]]]]]]]]]]]),[s.unsafe("boxSizing","border-box"),[s.unsafe("overflowY","scroll"),0]]]]]);var r=s.$$global("html, body, #___gatsby",[s.backgroundColor(o.Color[2]),[s.minHeight(s.pct(100)),0]]);n._reset=i,n._global=r},543:function(e,n,t){"use strict";var o=t(11),s=t(4),i=t(56),r=s.css(0,[s.marginBottom(s.em(1.45)),0]),l=s.css(0,[s.label("header"),[s.backgroundColor(o.Inverted[0][0]),[s.color(o.Inverted[0][1]),[s.padding2(s.em(2),s.em(4)),[s.select("@media (max-width: 900px)",[s.padding2(s.em(1),s.em(2)),0]),0]]]]]),a=s.css(0,[s.display(s.flex),[s.justifyContent(s.flexEnd),[s.alignItems(s.baseline),[s.select("& > *",[s.marginLeft(s.em(1)),0]),0]]]]),c=s.css(0,[s.padding3(s.em(1),s.zero,s.zero),[s.display(s.flex),[s.alignItems(s.baseline),0]]]),m=s.css(0,[s.display(s.block),[s.opacity(.75),[s.fontSize(s.em(.85)),[s.fontVariant(s.smallCaps),0]]]]),d=s.css(0,[s.fontSize(s.rem(1.5)),[s.fontWeight(s.bold),[s.textDecoration(s.none),[s.lineHeight(s.em(1.45)),[s.select("&:hover",[s.textDecoration(s.underline),0]),0]]]]]),u=s.css(0,[s.marginBottom(s.em(.5)),0]),p=s.css(0,[s.unsafe("textOverflow","ellipsis"),[s.overflow(s.hidden),[s.opacity(.75),0]]]),g=s.css(0,[s.select("& span",[s.fontSize(s.em(.85)),[s.backgroundColor(o.Inverted[0][2]),[s.padding2(s.zero,s.ex(1)),[s.opacity(1),[s.hover([s.backgroundColor(o.Inverted[0][3]),[s.cursor(s.pointer),0]]),0]]]]]),0]),f=s.css(0,[s.opacity(.25),0]),b=s.css(0,[s.textAlign(s.right),0]),h=s.css(0,[s.fontSize(s.em(.85)),[s.whiteSpace(s.nowrap),0]]),y=s.css(0,[s.fontSize(s.em(.85)),[s.whiteSpace(s.nowrap),[s.border3(s.px(1),s.solid,o.Inverted[0][1]),[s.padding2(s.zero,s.ex(1)),0]]]]),x=s.css(0,[s.fontSize(s.em(.85)),[s.whiteSpace(s.nowrap),[s.border3(s.px(1),s.solid,s.hex("0008")),[s.color(s.hex("0008")),[s.padding2(s.zero,s.ex(1)),0]]]]]),v=s.css(0,[s.fontSize(s.em(.85)),[s.whiteSpace(s.nowrap),0]]),k=s.css(0,[s.marginLeft(s.em(.25)),[s.transforms([s.translateY(s.px(-1)),0]),[s.opacity(.5),0]]]),S=s.css(0,[s.label("links"),[s.marginTop(s.em(3)),[s.select("& > a",[s.display(s.inlineBlock),[s.textDecoration(s.none),[s.marginRight(s.em(2)),[s.fontVariant(s.smallCaps),[s.select("@media (max-width: 450px)",[s.marginRight(s.em(1)),0]),[s.hover([s.textDecoration(s.underline),0]),[s.select("&:not([href])",[s.textDecoration(s.none),[s.opacity(.25),0]]),0]]]]]]]),0]]]),z=s.css([i.html],[s.backgroundColor(o.Panel[0][0]),[s.padding2(s.em(2),s.em(4)),[s.select("@media (max-width: 900px)",[s.padding2(s.em(1),s.em(2)),0]),0]]]);n.root=r,n.header=l,n.props=a,n.title=c,n.owner=m,n.name=d,n.descLine=u,n.description=p,n.tags=g,n.tagsIcon=f,n.right=b,n.updated=h,n.license=y,n.nolicense=x,n.stars=v,n.starIcon=k,n.links=S,n.readme=z},546:function(e,n,t){"use strict";function o(e,n){return[k[0],k[1],k[2],k[3],function(){return document.querySelectorAll(".redex-codeblock.m-tabbed").forEach(function(e){e.querySelector("li.reason").addEventListener("click",function(){e.querySelectorAll(".reason").forEach(function(e){return e.classList.add("s-selected")}),e.querySelectorAll(".ml").forEach(function(e){return e.classList.remove("s-selected")})}),e.querySelector("li.ml").addEventListener("click",function(){e.querySelectorAll(".reason").forEach(function(e){return e.classList.remove("s-selected")}),e.querySelectorAll(".ml").forEach(function(e){return e.classList.add("s-selected")})})}),0},k[5],k[6],k[7],k[8],function(){var n=e.package,t=n.license,o={},k=x.null_undefined_to_opt(n.homepageUrl);k&&(o.href=k[0]);var S={},z=x.null_undefined_to_opt(n.repositoryUrl);z&&(S.href=z[0]);var _={},w=x.null_undefined_to_opt(n.npmUrl);w&&(_.href=w[0]);var C={},E=x.null_undefined_to_opt(n.issuesUrl);E&&(C.href=E[0]);var $={},L=x.null_undefined_to_opt(n.docsUrl);return L&&($.href=L[0]),m.createElement("div",{className:y.toString(v.root)},h.element(0,0,u.make([d.titleTemplate(n.name)],0,0,0,[])),m.createElement("header",{className:y.toString(v.header)},m.createElement("div",{className:y.toString(v.props)},h.element(0,0,l._2(p.Control[3][1],x.null_undefined_to_opt(n.stars),function(e){return m.createElement("div",{className:y.toString(v.stars)},p.text(e),h.element(0,0,i.Star[0]([y.toString(v.starIcon)],[])))})),h.element(0,0,c.make(n,[])),null==t?m.createElement("div",{className:y.toString(v.nolicense)},p.text("No license")):m.createElement("div",{className:y.toString(v.license)},p.text(t)),m.createElement("div",{className:y.toString(v.updated)},h.element(0,0,g.make(n.updated,[])))),m.createElement("div",{className:y.toString(v.title)},h.element(0,0,r.make(n.slug,[y.toString(v.name)],0,[p.text(n.name)])),h.element(0,0,f.make(n.version,"published"===n.type,[])),h.element(0,0,b.make(n.platforms,[]))),m.createElement("div",{className:y.toString(v.descLine)},h.element(0,0,a.make(n,[!0],[])),m.createElement("span",{className:y.toString(v.description)},p.text(n.description))),m.createElement("div",{className:y.toString(v.tags)},h.element(0,0,i.Tags[0]([v.tagsIcon],[])),h.element(0,0,s.Category[2](n.category,[])),h.element(0,0,l._3(p.Control[0][1],n.keywords,0,function(e){return h.element([e],0,s.Keyword[1](e,[]))}))),m.createElement("div",{className:y.toString(v.links)},m.createElement("a",o,p.text("homepage")),m.createElement("a",S,p.text("repository")),m.createElement("a",_,p.text("npm")),m.createElement("a",C,p.text("issues")),m.createElement("a",$,p.text("documentation")))),m.createElement("div",{className:y.toString(v.readme),dangerouslySetInnerHTML:{__html:n.readme}}))},k[10],k[11],k[12],k[13],k[14]]}n.__esModule=!0;var s=t(472),i=t(53),r=t(55),l=t(6),a=t(223),c=t(225),m=t(1),d=t(76),u=t(77),p=t(14),g=t(148),f=t(473),b=t(224),h=t(7),y=t(4),x=t(124),v=t(543);t(646);var k=h.statelessComponent("Package"),S=h.wrapReasonForJs(k,function(e){return o(e.data,[])}),z=(n.query="** extracted graphql fragment **",0);n.Styles=z,n.component=k,n.make=o,n.$$default=S,n.default=S,n.__esModule=!0},646:function(e,n){}});
//# sourceMappingURL=component---src-templates-package-js-747967dc16d9b590a9d6.js.map