webpackJsonp([0xfe5b6d4269e1],{1315:function(e,s){e.exports={data:{package:{type:"published",id:"@gladimdim/bs-semver",name:"@gladimdim/bs-semver",version:"0.3.0",category:"binding",flags:[],platforms:["browser","node"],description:"The Bucklescript bindings for the npm semver package",keywords:["utilities"],license:"MIT",updated:"2020-01-09T07:39:23.053Z",stars:4,score:.4350997760999593,quality:.7405613444118979,popularity:.027281579247568105,maintenance:.5810937715421175,readme:'<h1 id="bs-semver"><a href="#bs-semver" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-semver</h1>\n<p>Bindings to the official <a href="https://www.npmjs.com/package/semver">NPM semver package</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @gladimdim/bs-semver\nyarn add @gladimdim/bs-semver --save</code></pre></div>\n<p>Then add <code>@gladimdim/bs-semver</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@gladimdim/bs-semver"</span>]\n}</code></pre></div>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<p>Exposed function can be accessed in the same way, as in JavaScript:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> minor = <span class="hljs-type">Semver</span>.minor(<span class="hljs-string">"3.5.0"</span>); <span class="hljs-comment">/* 5 */</span></code></pre></div>\n<p>You can construct Semver object:\nJavaScript version:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>const semver = <span class="hljs-keyword">new</span> <span class="hljs-type">Semver</span>(<span class="hljs-string">"3.5.0"</span>);\nconst minor = semver.minor;\nconst patch = semver.patch;</code></pre></div>\n<p>ReasonML:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">let</span> semver = Semver.createSemver(<span class="hljs-string">"3.5.0"</span>);\n<span class="hljs-built_in">let</span> minor = semver<span class="hljs-comment">##minor;</span>\n<span class="hljs-built_in">let</span> patch = semver<span class="hljs-comment">##patch;</span></code></pre></div>\n<p>You can reference <a href="%22./blob/master/__tests__/semver_spec.re"><strong>tests</strong>/semver_spec.re</a> tests for more examples.</p>\n<h1 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h1 id="watch"><a href="#watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Watch</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run watch</code></pre></div>\n<h1 id="what-is-covered"><a href="#what-is-covered" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is covered</h1>\n<p>The following functions are covered:</p>\n<ul>\n<li>gt</li>\n<li>gte</li>\n<li>lt</li>\n<li>lte</li>\n<li>eq</li>\n<li>neq</li>\n<li>clean</li>\n<li>valid</li>\n<li>satisfies</li>\n<li>cmp</li>\n<li>compare</li>\n<li>rcompare</li>\n<li>diff</li>\n<li>inc</li>\n<li>patch</li>\n<li>major</li>\n<li>minor</li>\n<li>new Semver("3.5.0")</li>\n</ul>\n<h1 id="notes-on-nullable-return-type"><a href="#notes-on-nullable-return-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notes on nullable return type</h1>\n<p>Some functions in semver might return null as a valid result. Documentation for semver does not state, which functions return null as a valid value.\nSo I had to check all of these bindings manually.</p>\n<p>For example, in JS following code returns null: </p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>semver.valid(<span class="hljs-string">"1.5.1a"</span>) ; <span class="hljs-comment">// null</span></code></pre></div>\n<p>In these bindings, this nullable return type is converted to Option via Js.Nullable.toOption.</p>\n<p>So, in Reason you can do like this:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>semver.valid(<span class="hljs-string">"1.5.1a"</span>) |&gt; result =&gt;\n    switch result {\n        | <span class="hljs-type">Some</span>(v) =&gt; v /*<span class="hljs-built_in">string</span> <span class="hljs-keyword">with</span> valid semver version*/\n\t| <span class="hljs-type">None</span> =&gt; /* handle case, <span class="hljs-keyword">when</span> input into valid call contained invalid semver <span class="hljs-keyword">function</span> */\n    }</code></pre></div>\n',homepageUrl:"https://github.com/gladimdim/bs-semver#readme",repositoryUrl:"https://github.com/gladimdim/bs-semver",npmUrl:"https://www.npmjs.com/package/%40gladimdim%2Fbs-semver",issuesUrl:"https://github.com/gladimdim/bs-semver/issues",slug:"/package/@gladimdim/bs-semver"}},pathContext:{id:"@gladimdim/bs-semver"}}}});
//# sourceMappingURL=path---package-gladimdim-bs-semver-c2c4767efb642407a090.js.map