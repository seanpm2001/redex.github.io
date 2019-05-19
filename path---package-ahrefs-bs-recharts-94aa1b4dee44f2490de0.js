webpackJsonp([0xe307f8b2f9ce],{1140:function(s,a){s.exports={data:{package:{type:"published",id:"@ahrefs/bs-recharts",name:"@ahrefs/bs-recharts",version:"0.2.13",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for Recharts",keywords:["react","ui"],license:"MIT",updated:"2019-05-11T11:10:39.004Z",stars:24,score:.5000609597846545,quality:.429372646377014,popularity:.06108883286490873,maintenance:.9996230696252351,readme:'<h1 id="bs-recharts"><a href="#bs-recharts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-recharts</h1>\n<p>This is <a href="https://bucklescript.github.io/">Bucklescript</a> bindings for <a href="http://recharts.org/">Recharts</a>.\n🚧 It is not completed, we are adding bindings as we go. Doesn\'t follow semver at this point. 🚧</p>\n<h1 id="install-npm"><a href="#install-npm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install, <a href="https://www.npmjs.com/package/@ahrefs/bs-recharts">npm</a></h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add @ahrefs/bs-recharts</code></pre></div>\n<h1 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h1>\n<p>Add bs-recharts to <code>bs-depenencies</code> in your <code>bsconfig.json</code>!</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"@ahrefs/bs-recharts"</span>\n  ],\n  <span class="hljs-comment">/* ... */</span>\n}</code></pre></div>\n<h1 id="usage-example"><a href="#usage-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage Example</h1>\n<div class="redex-codeblock"><pre class="hljs lang-re"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsRecharts</span>;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"SomeComponent"</span>);\n\n<span class="hljs-keyword">let</span> make = (~data, _children) =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">ResponsiveContainer</span> height=(<span class="hljs-type">Px</span>(<span class="hljs-number">200</span>)) width=(<span class="hljs-type">Px</span>(<span class="hljs-number">300</span>))&gt;\n      &lt;<span class="hljs-type">BarChart</span>\n        barCategoryGap=(<span class="hljs-type">Px</span>(<span class="hljs-number">1</span>))\n        margin={<span class="hljs-string">"top"</span>: <span class="hljs-number">0</span>, <span class="hljs-string">"right"</span>: <span class="hljs-number">0</span>, <span class="hljs-string">"bottom"</span>: <span class="hljs-number">0</span>, <span class="hljs-string">"left"</span>: <span class="hljs-number">0</span>}\n        data&gt;\n        &lt;<span class="hljs-type">Bar</span> name=<span class="hljs-string">"Some bar"</span> dataKey=<span class="hljs-string">"pv"</span> fill=<span class="hljs-string">"#2078b4"</span> stackId=<span class="hljs-string">"a"</span> /&gt;\n        &lt;<span class="hljs-type">Bar</span> name=<span class="hljs-string">"Other bar"</span> dataKey=<span class="hljs-string">"uv"</span> fill=<span class="hljs-string">"#ff7f02"</span> stackId=<span class="hljs-string">"a"</span> /&gt;\n        &lt;<span class="hljs-type">Tooltip</span> /&gt;\n        &lt;<span class="hljs-type">Legend</span> align=`left iconType=`circle /&gt;\n      &lt;/<span class="hljs-type">BarChart</span>&gt;\n    &lt;/<span class="hljs-type">ResponsiveContainer</span>&gt;,\n};</code></pre></div>\n<h1 id="helpers"><a href="#helpers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Helpers</h1>\n<p>Some of polymorphic params are represented as a variant, list below:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">module</span> <span class="hljs-type">AxisInterval</span> = {\n  ...\n  <span class="hljs-keyword">type</span> arg =\n    | <span class="hljs-type">PreserveStart</span>\n    | <span class="hljs-type">PreserveEnd</span>\n    | <span class="hljs-type">PreserveStartEnd</span>\n    | <span class="hljs-type">Num</span>(<span class="hljs-built_in">int</span>);\n  ...\n};\n\n<span class="hljs-keyword">module</span> <span class="hljs-type">PxOrPrc</span> = {\n  ...\n  <span class="hljs-keyword">type</span> arg =\n    | <span class="hljs-type">Px</span>(<span class="hljs-built_in">int</span>)\n    | <span class="hljs-type">Prc</span>(<span class="hljs-built_in">int</span>);\n  ...\n};\n\n<span class="hljs-keyword">module</span> <span class="hljs-type">StrOrNode</span> = {\n  ...\n  <span class="hljs-keyword">type</span> arg =\n    | <span class="hljs-type">Str</span>(<span class="hljs-built_in">string</span>)\n    | <span class="hljs-type">Node</span>(<span class="hljs-type">ReasonReact</span>.reactElement);\n  ...\n};</code></pre></div>\n<p>you will use it like this:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>&lt;XAxis\n  interval=PreserveStart\n  label=Str(<span class="hljs-string">"text"</span>)\n/&gt;\n&lt;XAxis\n  interval=Num(<span class="hljs-number">12</span>)\n  label=Node(\n    &lt;span&gt;\n      (ReasonReact.stringToElement(<span class="hljs-string">"text"</span>))\n    &lt;/span&gt;\n  )\n/&gt;</code></pre></div>\n<p>Check <a href="http://recharts.org/en-US/api">Reacharts documentation</a> for available props.</p>\n',homepageUrl:"https://github.com/ahrefs/bs-recharts#readme",repositoryUrl:"https://github.com/ahrefs/bs-recharts",npmUrl:"https://www.npmjs.com/package/%40ahrefs%2Fbs-recharts",issuesUrl:"https://github.com/ahrefs/bs-recharts/issues",slug:"/package/@ahrefs/bs-recharts"}},pathContext:{id:"@ahrefs/bs-recharts"}}}});
//# sourceMappingURL=path---package-ahrefs-bs-recharts-94aa1b4dee44f2490de0.js.map