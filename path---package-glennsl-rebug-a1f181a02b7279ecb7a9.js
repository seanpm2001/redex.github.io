webpackJsonp([0x6da77fc1df5b],{1189:function(e,s){e.exports={data:{package:{id:"@glennsl/rebug",stars:4,name:"@glennsl/rebug",version:"0.2.2",category:"library",flags:[],platforms:["browser","node"],description:"Reason/BuckleScript port of debug, with some extras",keywords:["development tools"],license:"MIT",updated:"2018-05-25T00:07:51.814Z",type:"published",score:.5081565512442909,quality:.5076603359158964,popularity:.023144571957668992,maintenance:.9935938579552509,readme:'<h1 id="rebug"><a href="#rebug" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>rebug</h1>\n<p>Originally a port of <a href="https://github.com/visionmedia/debug">debug</a> to BuckleScript, but has since expanded a bit.</p>\n<p><a href="https://npmjs.org/@glennsl/rebug"><img src="https://img.shields.io/npm/v/@glennsl/rebug.svg" alt="npm"></a>\n<a href="https://github.com/glennsl/rebug/issues"><img src="https://img.shields.io/github/issues/glennsl/rebug.svg" alt="Issues"></a>\n<a href="https://github.com/glennsl/rebug/commits/master"><img src="https://img.shields.io/github/last-commit/glennsl/rebug.svg" alt="Last Commit"></a>\n<a href=""><img src="https://img.shields.io/github/size/glennsl/rebug/lib/js/src/Debug.js.svg" alt="Size"></a></p>\n<p><em><strong>NOTE:</strong> NPM package has moved to <code>@glennsl/rebug</code>. Remember to update both <code>package.json</code> AND <code>bsconfig.json</code>.</em></p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<ul>\n<li>Browser back-end has been implemented, Node.js back-end has not</li>\n<li>Formatting isn\'t properly supported yet</li>\n<li>Colors are always on</li>\n<li>Isn\'t quite as customizable (yet)</li>\n</ul>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Reason */</span>\n\n<span class="hljs-comment">/* creates a logger with the given namespace */</span>\n<span class="hljs-keyword">let</span> debug = <span class="hljs-type">Debug</span>.make(<span class="hljs-string">"my:namespace"</span>);\n\n<span class="hljs-comment">/* debug.log* logs the message only if the namespace of the logger is enabled */</span>\ndebug.log1(<span class="hljs-string">"The red cow jumps over the lazy giraffe"</span>);\n\n<span class="hljs-comment">/* debug.error* will log the message regardless of whether the namespace is\n   enabled, format it as an error and include a stack trace */</span>\ntry (...) {\n| error =&gt; a.error2(<span class="hljs-string">"Error occurred while doing stuff: "</span>, error)\n};\n\n<span class="hljs-comment">/* debug.fn* groups any log output during its execution, and logs the arguments\n   passed to and the value returned from the function */</span>\n<span class="hljs-keyword">let</span> loggedParse = debug.fn1(<span class="hljs-string">"JSON.parse"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.parseExn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">31</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>See <a href="https://github.com/glennsl/rebug/blob/master/examples/">examples</a> for more.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @glennsl/rebug</code></pre></div>\n<p>Then add <code>@glennsl/rebug</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@glennsl/rebug"</span>]\n}</code></pre></div>\n',homepageUrl:"https://github.com/glennsl/rebug#readme",repositoryUrl:"https://github.com/glennsl/rebug",npmUrl:"https://www.npmjs.com/package/%40glennsl%2Frebug",issuesUrl:"https://github.com/glennsl/rebug/issues",slug:"/package/@glennsl/rebug"}},pathContext:{id:"@glennsl/rebug"}}}});
//# sourceMappingURL=path---package-glennsl-rebug-a1f181a02b7279ecb7a9.js.map