webpackJsonp([47852471078712],{1341:function(s,a){s.exports={data:{package:{type:"published",id:"re-classnames",name:"re-classnames",version:"4.1.0",category:"library",flags:[],platforms:["any"],description:"Simple reimplementation of classnames in ReasonML",keywords:["utilities"],license:"MIT",updated:"2019-12-29T13:18:43.403Z",stars:55,score:.6850177240024298,quality:.9616020736731951,popularity:.1330267183380107,maintenance:.9999364299490501,readme:'<h1 id="re-classnames"><a href="#re-classnames" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>re-classnames</h1>\n<p><a href="https://www.npmjs.com/package/re-classnames"><img src="https://img.shields.io/npm/v/re-classnames.svg?style=flat-square" alt="npm version"></a>\n<a href="https://travis-ci.org/alexfedoseev/re-classnames"><img src="https://img.shields.io/travis/alexfedoseev/re-classnames/master.svg?style=flat-square" alt="build status"></a>\n<a href="https://www.npmjs.com/package/re-classnames"><img src="https://img.shields.io/npm/l/re-classnames.svg?style=flat-square" alt="license"></a></p>\n<p>Reimplementation of <a href="https://github.com/JedWatson/classnames">classnames</a> in <a href="https://reasonml.github.io">ReasonML</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code><span class="hljs-comment"># yarn</span>\nyarn add re-classnames\n\n<span class="hljs-comment"># or npm</span>\nnpm install --save re-classnames</code></pre></div>\n<p>Then add it to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"re-classnames"</span>\n]</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="cnmake"><a href="#cnmake" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.make</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span>]) <span class="hljs-comment">// =&gt; "one two"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2282</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="cniftrue"><a href="#cniftrue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.ifTrue</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span>-&gt;<span class="hljs-type">Cn</span>.<span class="hljs-forDocGrammarHighlighting">ifTrue</span>(<span class="hljs-literal">true</span>)]) <span class="hljs-comment">// =&gt; "one two"</span>\n<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span>-&gt;<span class="hljs-type">Cn</span>.<span class="hljs-forDocGrammarHighlighting">ifTrue</span>(<span class="hljs-literal">false</span>)]) <span class="hljs-comment">// =&gt; "one"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">964</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="cnifsome"><a href="#cnifsome" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.ifSome</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span>-&gt;<span class="hljs-type">Cn</span>.ifSome(<span class="hljs-type">Some</span>(<span class="hljs-string">"thing"</span>))]) <span class="hljs-comment">// =&gt; "one two"</span>\n<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-string">"two"</span>-&gt;<span class="hljs-type">Cn</span>.ifSome(<span class="hljs-type">None</span>)]) <span class="hljs-comment">// =&gt; "one"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">964</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="cnmapsome"><a href="#cnmapsome" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.mapSome</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> t =\n  | <span class="hljs-type">One</span>\n  | <span class="hljs-type">Two</span>\n  | <span class="hljs-type">Tree</span>;\n\n<span class="hljs-type">Cn</span>.make([\n  <span class="hljs-string">"one"</span>,\n  <span class="hljs-type">Cn</span>.mapSome(\n    <span class="hljs-type">Some</span>(<span class="hljs-type">Two</span>),\n    <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params">\n<span class="hljs-params"> <span class="hljs-params"> <span class="hljs-params"> <span class="hljs-params"> |<span class="hljs-params"> One<span class="hljs-params"> </span></span></span></span></span></span></span></span>=&gt; <span class="hljs-string">"one"</span>\n    | <span class="hljs-type">Two</span> =&gt; <span class="hljs-string">"two"</span>\n    | <span class="hljs-type">Tree</span> =&gt; <span class="hljs-string">"three"</span>,\n  )\n]) <span class="hljs-comment">// =&gt; "one two"</span>\n\n<span class="hljs-type">Cn</span>.make([\n  <span class="hljs-string">"one"</span>,\n  <span class="hljs-type">Cn</span>.mapSome(\n    <span class="hljs-type">None</span>,\n    <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params">\n<span class="hljs-params"> <span class="hljs-params"> <span class="hljs-params"> <span class="hljs-params"> |<span class="hljs-params"> One<span class="hljs-params"> </span></span></span></span></span></span></span></span>=&gt; <span class="hljs-string">"one"</span>\n    | <span class="hljs-type">Two</span> =&gt; <span class="hljs-string">"two"</span>\n    | <span class="hljs-type">Tree</span> =&gt; <span class="hljs-string">"three"</span>,\n  )\n]) <span class="hljs-comment">// =&gt; "one"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2282</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="cnunpack"><a href="#cnunpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Cn.unpack</code></h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-type">Some</span>(<span class="hljs-string">"two"</span>)-&gt;<span class="hljs-type">Cn</span>.unpack]) <span class="hljs-comment">// =&gt; "one two"</span>\n<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"one"</span>, <span class="hljs-type">None</span>-&gt;<span class="hljs-type">Cn</span>.unpack]) <span class="hljs-comment">// =&gt; "one"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">964</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT.</p>\n',homepageUrl:"https://github.com/alexfedoseev/re-classnames#readme",repositoryUrl:"https://github.com/alexfedoseev/re-classnames",npmUrl:"https://www.npmjs.com/package/re-classnames",issuesUrl:"https://github.com/alexfedoseev/re-classnames/issues",slug:"/package/re-classnames"}},pathContext:{id:"re-classnames"}}}});
//# sourceMappingURL=path---package-re-classnames-546cf4dd553bf05ce813.js.map