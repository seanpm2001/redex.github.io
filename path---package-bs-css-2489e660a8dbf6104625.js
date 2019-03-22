webpackJsonp([0xa9ac3a6d947c],{1143:function(s,n){s.exports={data:{package:{type:"published",id:"bs-css",name:"bs-css",version:"8.0.3",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for emotion",keywords:["css"],license:"ISC",updated:"2019-03-20T16:02:59.628Z",stars:306,score:.6572843272080416,quality:.8318702103527692,popularity:.1649258158516479,maintenance:.9999977958689548,readme:'<h1 id="bs-css"><a href="#bs-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-css</h1>\n<p>Statically typed DSL for writing css in reason.</p>\n<p>Bs-css is a statically typed interface to <a href="https://github.com/emotion-js/emotion">Emotion</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-css</code></pre></div>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-css"</code> in the <code>bs-dependencies</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Styles</span> = </span>{\n  <span class="hljs-comment">/* Open the Css module, so we can access the style properties below without prefixing them with Css. */</span>\n  open <span class="hljs-type">Css</span>;\n\n  <span class="hljs-keyword">let</span> card = style([\n    display(flexBox),\n    flexDirection(column),\n    alignItems(stretch),\n    backgroundColor(white),\n    boxShadow(~y=px(<span class="hljs-number">3</span>), ~blur=px(<span class="hljs-number">5</span>), rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>)),\n    <span class="hljs-comment">/* You can add non-standard and other unsafe style declarations using the `unsafe` function, with strings as the two arguments. */</span>\n    <span class="hljs-keyword">unsafe</span>(<span class="hljs-string">"-webkit-overflow-scrolling"</span>, <span class="hljs-string">"touch"</span>),\n    <span class="hljs-comment">/* You can place all your theme styles in Theme.re and access as normal Reason module */</span>\n    padding(<span class="hljs-type">Theme</span>.basePadding)\n  ]);\n\n  <span class="hljs-keyword">let</span> title = style([\n    fontSize(rem(<span class="hljs-number">1.5</span>)),\n    color(<span class="hljs-type">Theme</span>.textColor),\n    marginBottom(<span class="hljs-type">Theme</span>.basePadding)\n  ]);\n\n  <span class="hljs-keyword">let</span> actionButton = disabled =&gt;\n    style([\n      background(disabled ? darkgray : white),\n      color(black),\n      border(px(<span class="hljs-number">1</span>), solid, black),\n      borderRadius(px(<span class="hljs-number">3</span>)),\n    ])\n};\n\n&lt;div className=<span class="hljs-type">Styles</span>.card&gt;\n  &lt;h1 className=<span class="hljs-type">Styles</span>.title&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Hello"</span>)) &lt;/h1&gt;\n  &lt;button className=<span class="hljs-type">Styles</span>.actionButton(<span class="hljs-literal">false</span>)&gt;\n&lt;/div&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-type">Start</span> tag &lt;button&gt; does not <span class="hljs-keyword">match</span> <span class="hljs-keyword">end</span> tag &lt;/div&gt;</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Global css</strong></p>\n<p>You can define global css rules with <code>global</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Css</span>.(\n  global(<span class="hljs-string">"body"</span>, [margin(px(<span class="hljs-number">0</span>))])\n);\n\n<span class="hljs-type">Css</span>.(\n  global(<span class="hljs-string">"h1, h2, h3"</span>, [color(rgb(<span class="hljs-number">33</span>, <span class="hljs-number">33</span>, <span class="hljs-number">33</span>))])\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span> global <span class="hljs-string">"body"</span> [margin (px <span class="hljs-number">0</span>)]\n<span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span> global <span class="hljs-string">"h1, h2, h3"</span> [color (rgb <span class="hljs-number">33</span> <span class="hljs-number">33</span> <span class="hljs-number">33</span>)]</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Keyframes</strong></p>\n<p>Define animation keyframes;</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> bounce = <span class="hljs-type">Css</span>.(keyframes([\n  (<span class="hljs-number">0</span>, [ transform( scale(<span class="hljs-number">0.1</span>, <span class="hljs-number">0.1</span>) ),  opacity(<span class="hljs-number">0.0</span>) ]),\n  (<span class="hljs-number">60</span>, [ transform( scale(<span class="hljs-number">1.2</span>, <span class="hljs-number">1.2</span>) ),  opacity(<span class="hljs-number">1.0</span>) ]),\n  (<span class="hljs-number">100</span>, [ transform( scale(<span class="hljs-number">1.0</span>,<span class="hljs-number">1.0</span>) ), opacity(<span class="hljs-number">1.0</span>) ])\n]));\n\n<span class="hljs-keyword">let</span> styles = <span class="hljs-type">Css</span>.(style([\n  animationName(bounce),\n  animationDuration(<span class="hljs-number">2000</span>),\n  width(px(<span class="hljs-number">50</span>)),\n  height(px(<span class="hljs-number">50</span>)),\n  backgroundColor(rgb(<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>))\n]));\n\n<span class="hljs-comment">// ...</span>\n&lt;div className=styles&gt;\n  (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"bounce!"</span>))\n&lt;/div&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="merging-styles"><a href="#merging-styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Merging styles</h3>\n<p>You should avoid trying to merge styles in the same list of rules or by concatinating lists. A list of rules is converted into a JS object before being passed to Emotion where every property becomes a key in the object. This means you lose any earlier rule if you have another rule with the same property later in the list. This is especially noticable <a href="https://github.com/SentiaAnalytics/bs-css/issues/86">when writing sub-selectors and media queries</a></p>\n<p>Trying to merge styles by just using <code>List.concat</code> can result in unexpected results.</p>\n<p>This example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> base = <span class="hljs-type">Css</span>.[\n  padding(px(<span class="hljs-number">0</span>)),\n  fontSize(px(<span class="hljs-number">1</span>))\n];\n<span class="hljs-keyword">let</span> overrides = <span class="hljs-type">Css</span>.[\n  padding(px(<span class="hljs-number">20</span>)),\n  fontSize(px(<span class="hljs-number">24</span>)),\n  color(blue)\n];\n<span class="hljs-keyword">let</span> media1 = <span class="hljs-type">Css</span>.[\n  media(<span class="hljs-string">"(max-width: 768px)"</span>, [\n    padding(px(<span class="hljs-number">10</span>))\n  ])\n];\n<span class="hljs-keyword">let</span> media2 = <span class="hljs-type">Css</span>.[\n  media(<span class="hljs-string">"(max-width: 768px)"</span>, [\n    fontSize(px(<span class="hljs-number">16</span>)),\n    color(red)\n  ])\n];\n<span class="hljs-keyword">let</span> mergedStyles = [base, overrides, media1, media2]-&gt;<span class="hljs-type">List</span>.concat-&gt;<span class="hljs-type">Css</span>.style;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>generates the following:</p>\n<div class="redex-codeblock"><pre class="hljs lang-css"><code>.css-<span class="hljs-number">1</span>nuk4<span class="hljs-built_in">bg</span> {\n  padding: <span class="hljs-number">20</span>px;\n  font-size: <span class="hljs-number">24</span>px;\n  color: <span class="hljs-comment">#0000ff;</span>\n}\n@media (max-width: <span class="hljs-number">768</span>px) {\n  .css-<span class="hljs-number">1</span>nuk4<span class="hljs-built_in">bg</span> {\n    font-size: <span class="hljs-number">16</span>px;\n    color: <span class="hljs-comment">#ff0000;</span>\n  }\n}</code></pre></div>\n<p>As you can see both properties from <code>base</code> are overwritten (as opposed to overridden in css) and the media query in <code>media1</code> is also lost because the media query from <code>media2</code> overwrites it.</p>\n<h4 id="the-merge-method"><a href="#the-merge-method" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The <code>merge</code> method</h4>\n<p><code>merge</code> safely merges styles by name. Uses <a href="https://emotion.sh/docs/cx">Emotion’s <code>cx</code> method</a>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> mergedStyles =\n  <span class="hljs-type">Css</span>.(\n    merge([\n      style([\n        padding(px(<span class="hljs-number">0</span>)),\n        fontSize(px(<span class="hljs-number">1</span>))\n      ]),\n      style([\n        padding(px(<span class="hljs-number">20</span>)),\n        fontSize(px(<span class="hljs-number">24</span>)),\n        color(blue)\n      ]),\n      style([\n        media(<span class="hljs-string">"(max-width: 768px)"</span>, [\n          padding(px(<span class="hljs-number">10</span>))\n        ])\n      ]),\n      style([\n        media(<span class="hljs-string">"(max-width: 768px)"</span>, [\n          fontSize(px(<span class="hljs-number">16</span>)),\n          color(red)\n        ]),\n      ]),\n    ])\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> mergedStyles =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span>\n    merge\n      [style [padding (px <span class="hljs-number">0</span>); fontSize (px <span class="hljs-number">1</span>)];\n      style [padding (px <span class="hljs-number">20</span>); fontSize (px <span class="hljs-number">24</span>); color blue];\n      style [media <span class="hljs-string">"(max-width: 768px)"</span> [padding (px <span class="hljs-number">10</span>)]];\n      style [media <span class="hljs-string">"(max-width: 768px)"</span> [fontSize (px <span class="hljs-number">16</span>); color red]]]</code></pre>\n      </div>\n    </div>\n  \n<p>Generates the following:</p>\n<div class="redex-codeblock"><pre class="hljs lang-css"><code>.css-q0lkhz {\n  padding: <span class="hljs-number">0</span>px;\n  font-size: <span class="hljs-number">1</span>px;\n  padding: <span class="hljs-number">20</span>px;\n  font-size: <span class="hljs-number">24</span>px;\n  color: <span class="hljs-comment">#0000ff;</span>\n}\n@media (max-width: <span class="hljs-number">768</span>px) {\n  .css-q0lkhz {\n    padding: <span class="hljs-number">10</span>px;\n  }\n}\n@media (max-width: <span class="hljs-number">768</span>px) {\n  .css-q0lkhz {\n    font-size: <span class="hljs-number">16</span>px;\n    color: <span class="hljs-comment">#ff0000;</span>\n  }\n}</code></pre></div>\n<p>Nothing is lost and everything ends up in the final stylesheet where normal overrides apply.</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run start</code></pre></div>\n<h2 id="where-is-the-documentation"><a href="#where-is-the-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where is the documentation?</h2>\n<p>You can check out <a href="./src/Css.rei">css.rei</a>.</p>\n<h2 id="thanks"><a href="#thanks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks</h2>\n<p>Thanks to <a href="https://github.com/emotion-js/emotion">emotion</a> which is doing all the heavy lifting.</p>\n<p>Thanks to <a href="https://github.com/poeschko/bs-glamor">bs-glamor</a> which this repo was forked from.</p>\n<p>Thanks to <a href="https://github.com/rtfeldman/elm-css">elm-css</a> for dsl design inspiration.</p>\n',homepageUrl:"https://github.com/SentiaAnalytics/bs-css#readme",repositoryUrl:"https://github.com/SentiaAnalytics/bs-css",npmUrl:"https://www.npmjs.com/package/bs-css",issuesUrl:"https://github.com/SentiaAnalytics/bs-css/issues",slug:"/package/bs-css"}},pathContext:{id:"bs-css"}}}});
//# sourceMappingURL=path---package-bs-css-2489e660a8dbf6104625.js.map