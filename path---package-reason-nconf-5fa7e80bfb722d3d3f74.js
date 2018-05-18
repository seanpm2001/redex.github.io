webpackJsonp([0xd54be8887743],{1212:function(s,a){s.exports={data:{package:{id:"reason-nconf",stars:0,name:"reason-nconf",version:"0.5.0",category:"binding",flags:[],platforms:["node"],description:"Reason/BuckleScript bindings to the nconf library.",keywords:["configuration"],license:"MIT",updated:"2018-05-16T13:24:23.095Z",type:"published",score:.6222571193327882,quality:.8597167199461193,popularity:.04098904973938859,maintenance:.9999883884004752,readme:'<p><a href="https://nodei.co/npm/reason-nconf/"><img src="https://nodei.co/npm/reason-nconf.png?downloads=true&#x26;downloadRank=true&#x26;stars=true" alt="NPM"></a>\n<a href="https://www.travis-ci.org/scull7/reason-nconf"><img src="https://www.travis-ci.org/scull7/reason-nconf.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/reason-nconf?branch=master"><img src="https://coveralls.io/repos/github/scull7/reason-nconf/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h1 id="reason-nconf"><a href="#reason-nconf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-nconf</h1>\n<p>ReasonML bindings to the <a href="https://www.npmjs.com/package/nconf">nconf</a> library.</p>\n<p>This is a very rough implementation that will enable very simple use cases.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> config = {\n  ..\n  <span class="hljs-string">"THING1"</span>: string,\n  <span class="hljs-string">"THING2"</span>: int\n};\n\n<span class="hljs-keyword">let</span> baseDir = <span class="hljs-string">"/path/to/somewhere"</span>\n<span class="hljs-keyword">let</span> appConfig: config =\n  <span class="hljs-type">Nconf</span>.(\n    make()\n    |&gt; argv()\n    |&gt; env()\n    |&gt; filePathNamed(<span class="hljs-string">"locals"</span>, {j|$baseDir/config/locals.json|j})\n    |&gt; filePathNamed(<span class="hljs-string">"defaults"</span>, {j|$baseDir/config/defaults.json|j})\n    |&gt; <span class="hljs-keyword">get</span>()\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="load-a-javascript-file"><a href="#load-a-javascript-file" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Load a JavaScript file</h3>\n<p>This is accomplished from an internal module written in ReasonML.  The internal\nmodule is a near 1-to-1 copy of <a href="https://github.com/yoneal/nconf-js">nconf-js</a></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-type">Nconf</span>.(\n    make()\n    |&gt; jsFilePathNamed(<span class="hljs-string">"example"</span>, {j|/path/<span class="hljs-keyword">to</span>/file.js|j})\n    |&gt; <span class="hljs-keyword">get</span>()\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Nconf</span> <span class="hljs-keyword">in</span>\n    ((make <span class="hljs-literal">()</span>) |&gt; (jsFilePathNamed <span class="hljs-string">"example"</span> {j|/path/<span class="hljs-keyword">to</span>/file.js|j})) |&gt;\n      (get <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="set-a-value"><a href="#set-a-value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set a value</h3>\n<h4 id="string-literal"><a href="#string-literal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String Literal</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-type">Nconf</span>.(\n    make()\n    |&gt; setLiteral(<span class="hljs-string">"some:key:path"</span>, `<span class="hljs-type">Str</span>(<span class="hljs-string">"foo"</span>))\n    |&gt; <span class="hljs-keyword">get</span>()\n  )</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Nconf</span> <span class="hljs-keyword">in</span>\n    ((make <span class="hljs-literal">()</span>) |&gt; (setLiteral <span class="hljs-string">"some:key:path"</span> (<span class="hljs-tag">`Str</span> <span class="hljs-string">"foo"</span>))) |&gt; (get <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<h4 id="integer-literal"><a href="#integer-literal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Integer Literal</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-type">Nconf</span>.(\n    make()\n    |&gt; setLiteral(<span class="hljs-string">"some:key:path"</span>, `<span class="hljs-type">Int</span>(<span class="hljs-number">42</span>))\n    |&gt; <span class="hljs-keyword">get</span>()\n  )</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Nconf</span> <span class="hljs-keyword">in</span>\n    ((make <span class="hljs-literal">()</span>) |&gt; (setLiteral <span class="hljs-string">"some:key:path"</span> (<span class="hljs-tag">`Int</span> <span class="hljs-number">42</span>))) |&gt; (get <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<h4 id="object-literal"><a href="#object-literal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Object Literal</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-type">Nconf</span>.(\n    make()\n    |&gt; setObject(<span class="hljs-string">"some:key:path"</span>, { <span class="hljs-string">"foo"</span>: <span class="hljs-string">"bar"</span> })\n    |&gt; <span class="hljs-keyword">get</span>()\n  )</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Nconf</span> <span class="hljs-keyword">in</span>\n    ((make <span class="hljs-literal">()</span>) |&gt; (setObject <span class="hljs-string">"some:key:path"</span> ([%bs.obj { foo = <span class="hljs-string">"bar"</span> }]))) |&gt;\n      (get <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="get-a-value"><a href="#get-a-value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Get a value</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> appConfig =\n  <span class="hljs-type">Nconf</span>.(\n    make()\n    |&gt; jsFilePathNamed(<span class="hljs-string">"example"</span>, {j|./__tests__/assets/data.js|j})\n  )\n<span class="hljs-keyword">let</span> username =\n  <span class="hljs-keyword">switch</span>(<span class="hljs-type">Nconf</span>.getKey(appConfig, <span class="hljs-string">"obj:auth:username"</span>) |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt) {\n  | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.raiseError(<span class="hljs-string">"Could not retrieve username"</span>)\n  | <span class="hljs-type">Some</span>(x) =&gt; x\n  };</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn install --save reason-nconf</code></pre></div>\n<p>Then add <code>reason-nconf</code> to your <code>bs-dependencies</code> in <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"reason-nconf"</span>\n  ]\n}</code></pre></div>\n<h2 id="how-do-i-use-it"><a href="#how-do-i-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use it?</h2>\n<p>See the <a href="#usage">Usage</a> section above...</p>\n<h2 id="whats-missing"><a href="#whats-missing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s missing?</h2>\n<p>Mostly everything...</p>\n',homepageUrl:"https://github.com/scull7/reason-nconf",repositoryUrl:"https://github.com/scull7/reason-nconf",npmUrl:"https://www.npmjs.com/package/reason-nconf",issuesUrl:"https://github.com/scull7/reason-nconf/issues",slug:"/package/reason-nconf"}},pathContext:{id:"reason-nconf"}}}});
//# sourceMappingURL=path---package-reason-nconf-5fa7e80bfb722d3d3f74.js.map