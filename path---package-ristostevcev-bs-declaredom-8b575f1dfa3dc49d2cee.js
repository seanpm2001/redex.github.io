webpackJsonp([89384633362956],{1351:function(s,e){s.exports={data:{package:{type:"published",id:"@ristostevcev/bs-declaredom",name:"@ristostevcev/bs-declaredom",version:"1.0.2",category:"binding",flags:[],platforms:["browser","node"],description:"Strongly typed declarative markup for the DOM and CSS",keywords:["dom","css"],license:"BSD-3-Clause",updated:"2019-05-01T16:33:21.739Z",stars:44,score:.6601336939754903,quality:.9285706770557264,popularity:.09027243803172466,maintenance:.9999061072790536,readme:'<h1 id="bs-declaredom"><a href="#bs-declaredom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-declaredom</h1>\n<p><a href="https://travis-ci.org/Risto-Stevcev/bs-declaredom"><img src="https://travis-ci.org/Risto-Stevcev/bs-declaredom.svg?branch=master" alt="Build Status"></a>\n<a href="https://www.npmjs.com/package/@ristostevcev/bs-declaredom"><img src="https://img.shields.io/npm/v/@ristostevcev/bs-declaredom.svg?style=flat" alt="Latest release"></a>\n<a href="https://github.com/Risto-Stevcev/bs-declaredom/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@ristostevcev/bs-declaredom.svg?style=flat" alt="License"></a></p>\n<p>Strongly typed declarative markup for the DOM and CSS</p>\n<ul>\n<li><strong>Complete</strong> - HTML and CSS specifications are fully implemented!</li>\n<li><strong>Strongly typed</strong> - No more markup or styling silently failing without any guidance</li>\n<li><strong>Custom Elements</strong> - Create <a href="https://wiki.whatwg.org/wiki/Custom_Elements">custom</a> components that can leverage strong typing</li>\n<li><strong>CSS Modules</strong> - Builtin support for modular CSS with strong typing</li>\n<li><strong>Tree Shaking</strong> - Remove unused HTML and CSS from the final bundle with tree shaking</li>\n</ul>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @ristostevcev/bs-declaredom</code></pre></div>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>The examples in this README can be found in the <a href="https://github.com/Risto-Stevcev/bs-declaredom/tree/master/example">example/</a> folder.</p>\n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>This library provides sound static typing guarantees for HTML and CSS. It ensures that you\nwrite correct HTML and CSS in your app with good conventions like CSS modules. This library is\nbased off of and fully compliant with the HTML and CSS specs (see docs).</p>\n<p>The HTML that\'s generated are actual DOM nodes that can be converted into <a href="https://github.com/reasonml-community/bs-webapi-incubator">bs-webapi-incubator\'s</a> <code>Dom.element</code> types using <code>Html.Node.to_element</code>, or to a <code>Dom.node</code>\nusing <code>Html.Node.to_node</code> if it\'s a text node or document fragment.</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>See the <a href="https://risto-stevcev.github.io/bs-declaredom/bs-declaredom/Html/index.html">Html</a> and <a href="https://risto-stevcev.github.io/bs-declaredom/bs-declaredom/Css/index.html">Css</a> module <a href="https://risto-stevcev.github.io/bs-declaredom">docs</a></p>\n<h2 id="jsx-reason-or-ocaml"><a href="#jsx-reason-or-ocaml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX (Reason) or Ocaml</h2>\n<p>Use either JSX or vanilla Ocaml depending on which style you prefer. Example JSX:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> foo: <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t([&gt; <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.div]) =\n  &lt;div&gt;\n    &lt;span style=<span class="hljs-type">Css</span>.inline(~color=`green, ())&gt;\n      &lt;text&gt;<span class="hljs-string">"Hello, world!"</span>&lt;/text&gt;\n    &lt;/span&gt;\n    &lt;br/&gt;\n  &lt;/div&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> foo: [&gt; <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.div] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t =\n  ((div\n      ~children:[((span ~style:(<span class="hljs-type">Css</span>.inline ~color:`green <span class="hljs-literal">()</span>)\n                     ~children:[((text ~children:[<span class="hljs-string">"Hello, world!"</span>] <span class="hljs-literal">()</span>)\n                               [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                ((br ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<p>The <code>&#x3C;text></code> markup refers to a <a href="https://dom.spec.whatwg.org/#interface-text">text node</a>.</p>\n<h2 id="strongly-typed-css"><a href="#strongly-typed-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Strongly typed CSS</h2>\n<p>Don\'t worry anymore about CSS silently failing! this library ensures that you only apply CSS styles and attributes that are valid for the element</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> _ =\n  div ~id:<span class="hljs-string">"some_div"</span>\n    <span class="hljs-comment">(* This fails because div elements are block elements - the vertical-align\n     * property applies to inline elements\n    ~style:(Css.inline ~vertical_align:`baseline ())\n     *)</span>\n    ~style:(<span class="hljs-type">Css</span>.block ~color:`red <span class="hljs-literal">()</span>)\n    <span class="hljs-literal">[||]</span></code></pre></div>\n<p>You can override the CSS display styles, but this library intentionally restricts this functionality to the generic flow (<code>&#x3C;div></code>), phrasing (<code>&#x3C;span></code>) and sectioning (<code>&#x3C;section></code>) containers as other use cases are usually a CSS antipattern</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Div</span>.flex ~style:(<span class="hljs-type">Css</span>.flexbox ~justify_content:`center <span class="hljs-literal">()</span>) [|\n    <span class="hljs-type">Span</span>.inline_block ~style:(<span class="hljs-type">Css</span>.inline_block ~color:`blue <span class="hljs-literal">()</span>) [|text <span class="hljs-string">"foo"</span>|];\n    <span class="hljs-type">Section</span>.inline_flex [|text <span class="hljs-string">"bar"</span>|]\n  |]</code></pre></div>\n<h2 id="strongly-typed-html"><a href="#strongly-typed-html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Strongly typed HTML</h2>\n<p>Only valid children are allowed for each element</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> _ =\n  html [|\n    <span class="hljs-comment">(* This fails because the &lt;html&gt; tag only takes a &lt;head&gt; or &lt;body&gt; element \n     * as children\n    span [|text "foo"|]\n     *)</span>\n    head <span class="hljs-literal">[||]</span>\n  |]</code></pre></div>\n<p>Only valid attributes are allowed for each element. The anchor tag accepts a <code>href</code> attribute, and the <code>link</code> aria role is also allowed</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> anchor =\n  a ~id:<span class="hljs-string">"link"</span> ~href:<span class="hljs-string">"#"</span>\n    <span class="hljs-comment">(* Anchor elements can accept the `link` aria role *)</span>\n    ~aria:(<span class="hljs-type">Html</span>.<span class="hljs-type">Attributes</span>.<span class="hljs-type">Aria</span>.link ~aria_hidden:<span class="hljs-literal">()</span> ~aria_label:<span class="hljs-string">"foo"</span> <span class="hljs-literal">()</span>)\n    ~on_click:(<span class="hljs-keyword">fun</span> _ -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"clicked!"</span>)\n    [|text <span class="hljs-string">"some link"</span>|]</code></pre></div>\n<h2 id="target-specific-html-in-functions"><a href="#target-specific-html-in-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Target specific HTML in functions</h2>\n<p>Make functions that only take a specific kind of element or group of elements</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> f (_: <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.span <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t): <span class="hljs-built_in">unit</span> = <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  f (span [|text <span class="hljs-string">"hello"</span>|])</code></pre></div>\n<h2 id="custom-html"><a href="#custom-html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom HTML</h2>\n<p>Add custom types. This creates a custom type called <code>foo</code>. This also works\nvery well with web components</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> custom_foo: [&gt; [&gt; `foo] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.custom] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t = <span class="hljs-type">Obj</span>.magic @@\n  span [|text <span class="hljs-string">"foo"</span>|]</code></pre></div>\n<p>You can even give your custom element the ability to take only specific children! OCaml\'s powerful polymorphic variants will correctly unify the elements you pass into the array.</p>\n<p>This example constructs a custom <code>foo</code> element that only takes other custom <code>foo</code> elements, custom <code>bar</code> elements, and <code>span</code> and <code>br</code> elements:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> make_custom_bar\n  (children: [[`bar | `foo] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.custom | <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.span | <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.br] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t <span class="hljs-built_in">array</span>):\n  [&gt; [&gt; `bar] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.custom] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t =\n  <span class="hljs-comment">(* <span class="hljs-doctag">TODO:</span> stubbed, needs implementation *)</span>\n  <span class="hljs-type">Obj</span>.magic children\n\n<span class="hljs-keyword">let</span> _: [`bar] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.custom <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t =\n  make_custom_bar\n  [|\n    span [|text <span class="hljs-string">"Custom foo:"</span>|];\n    br <span class="hljs-literal">()</span>;\n    custom_foo;\n    <span class="hljs-comment">(* This fails because &lt;p&gt; tags aren\'t allowed\n    p [|text "foobar"|]\n     *)</span>\n  |]</code></pre></div>\n<p>You can also typecheck based on your custom type</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> f\' (_: [`foo] <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.custom <span class="hljs-type">Html</span>.<span class="hljs-type">Node</span>.t): <span class="hljs-built_in">unit</span> = <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ = f\' custom_foo</code></pre></div>\n<p>And since the markup produces real HTML elements, it works very well with <a href="https://wiki.whatwg.org/wiki/Custom_Elements">web components</a>.</p>\n<h2 id="css-modules"><a href="#css-modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS Modules</h2>\n<p>CSS modules deal with a lot of the pitfalls of CSS in a large scale app. Provide one CSS module per component and no longer worry about precedence rules, or enforcing conventions like BEM, or applying silly hacks and refactoring if the dev team painted themselves into a corner. Keep it simple.</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> my_title = <span class="hljs-type">Css</span>.<span class="hljs-type">Module</span>.make @@\n  <span class="hljs-type">Css</span>.block ~color:`coral ~font_size:(`em <span class="hljs-number">24.</span>) <span class="hljs-literal">()</span></code></pre></div>\n<p>Instead of mucking around with inheritance using CSS\'s inheritance model, you can build up\nabstractions using composition instead by merging rulesets, which is more explicit and easier\nto understand and predict.</p>\n<p>You can then apply these to your elements, but make sure you serve the CSS module in a stylesheet (inline or served as a CSS file)</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> _ =\n  h1 ~css_module:my_title [|text <span class="hljs-string">"This is my title"</span>|]</code></pre></div>\n<p>These work much like postcss modules except that you get to use Ocaml\'s type system to ensure that you only reference a module that actually exists, and no preprocessing is required.</p>\n<p>And you can still build these if you aren\'t using Ocaml on the backend by generating the CSS stylesheets as part of your build, and then you can even apply other transformations like autoprefixer if you need to.</p>\n<h2 id="acknowledgments"><a href="#acknowledgments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acknowledgments</h2>\n<p>This library is possible only because of Ocaml\'s powerful type system that is both\nstrong, sound, and flexible. Speficially, it\'s Ocaml\'s module system and polymorphic\nvariants that make this library possible.</p>\n<h2 id="tree-shaking"><a href="#tree-shaking" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tree Shaking</h2>\n<p>This library generates <code>es6</code> output, allowing you to leverage tree-shaking using rollup or webpack.\nThe resulting bundle won\'t include any exports that you aren\'t using, such as HTML nodes or CSS.</p>\n<p>Use rollup + google closure compiler on your final bundle if you want to get the most out of tree\nshaking and dead code elimination.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>See <a href="https://github.com/Risto-Stevcev/bs-declaredom/blob/master/LICENSE">LICENSE</a></p>\n',homepageUrl:"https://github.com/Risto-Stevcev/bs-declaredom",repositoryUrl:"https://github.com/Risto-Stevcev/bs-declaredom",npmUrl:"https://www.npmjs.com/package/%40ristostevcev%2Fbs-declaredom",issuesUrl:"https://github.com/Risto-Stevcev/bs-declaredom/issues",slug:"/package/@ristostevcev/bs-declaredom"}},pathContext:{id:"@ristostevcev/bs-declaredom"}}}});
//# sourceMappingURL=path---package-ristostevcev-bs-declaredom-8b575f1dfa3dc49d2cee.js.map