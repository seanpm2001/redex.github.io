webpackJsonp([0xba8563cbccb0],{1350:function(e,s){e.exports={data:{package:{type:"published",id:"reason-elm",name:"reason-elm",version:"0.0.5",category:"library",flags:["neglected"],platforms:["browser"],description:"This project has been moved to [`bs-elm`](https://github.com/jaredramirez/bs-elm)",keywords:["development tools"],license:"MIT",updated:"2019-12-12T23:11:59.921Z",stars:37,score:.3592433545725072,quality:.41189116307890933,popularity:.049539204095508084,maintenance:.623820812044019,readme:'<h2 id="moved"><a href="#moved" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MOVED</h2>\n<p>This project has been moved to <a href="https://github.com/jaredramirez/bs-elm"><code>bs-elm</code></a></p>\n<h2 id="reason-elm"><a href="#reason-elm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason-Elm</h2>\n<blockquote>\n<p>Bindings for mounting and interacting with Elm applications in Reason.</p>\n</blockquote>\n<h3 id="motivation"><a href="#motivation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Motivation</h3>\n<p>Writing web applications in Elm is nice. It\'s type system and enforced architecture\nare just a couple of the really cool things that it offers. The Elm ecosystem is\npretty small compared to the Javascript(JS) ecosystem, and this is a draw back\nwhen coming from the world of JS. Interop with JS is possible, but it requires\nwriting regular JS code, which has none of Elm\'s safety. This is where Reason\nenters the picture. Reason can communicate more direclty with JS with much more\ntype safety than vanilla JS. The possibility of writing an Elm app and handling\nJS interop with Reason is pretty powerful. Having access to the entire JS\necosytem in a (more) typesafe way is pretty exciting, so Reason-Elm was created.</p>\n<h3 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h3>\n<ul>\n<li>\n<p>Install</p>\n<ul>\n<li>With yarn: <code>yarn add reason-elm</code></li>\n<li>With npm: <code>npm install --save reason-elm</code></li>\n</ul>\n</li>\n<li>Add <code>reason-elm</code> as a dependency in <code>bsconfig.json</code></li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason-elm"</span>]\n}</code></pre></div>\n<ul>\n<li>Use <code>ReasonElm</code> (To import Elm directly in Reason take a look at <a href="https://github.com/jaredramirez/reason-elm-example/blob/master/webpack.config.js">this webpack config</a>):</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">module</span> <span class="hljs-type">R</span> = <span class="hljs-type">Js</span>.<span class="hljs-type">Result</span>;\n\n[@bs.<span class="hljs-keyword">module</span>]\n<span class="hljs-keyword">external</span> elmProgram : <span class="hljs-type">ReasonElm</span>.elmProgram = <span class="hljs-string">"path/to/App.elm"</span>;\n\n<span class="hljs-keyword">let</span> instance = <span class="hljs-type">ReasonElm</span>.mount(\n  ~moduleName=<span class="hljs-string">"App"</span>, /* <span class="hljs-type">Defaults</span> <span class="hljs-keyword">to</span> <span class="hljs-string">"Main"</span> */\n  elmProgram /* <span class="hljs-type">Must</span> be last arguement */\n);\n\nswitch instance {\n| <span class="hljs-type">R</span>.<span class="hljs-type">Ok</span>(i) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Elm is running."</span>)\n| <span class="hljs-type">R</span>.<span class="hljs-type">Error</span>(errorMessage) =&gt; <span class="hljs-type">Js</span>.log(errorMessage)\n};</code></pre></div>\n<p>Checkout <a href="https://github.com/jaredramirez/reason-elm-example">this example</a> that uses flags and ports!</p>\n<h3 id="docs"><a href="#docs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Docs</h3>\n<ul>\n<li><a href="DOCS.md#elmProgramBase"><code>elmProgramBase : type</code></a></li>\n<li><a href="DOCS.md#elmProgram"><code>elmProgram : type</code></a></li>\n<li><a href="DOCS.md#elmProgramWithPorts"><code>elmProgramWithPorts : type</code></a></li>\n<li><a href="DOCS.md#elmInPort"><code>elmInPort : type</code></a></li>\n<li><a href="DOCS.md#elmOutPort"><code>elmOutPort : type</code></a></li>\n<li><a href="DOCS.md#elmInstance"><code>elmInstance : type</code></a></li>\n<li><a href="DOCS.md#elmInstanceWithPorts"><code>elmInstanceWithPorts : type</code></a></li>\n<li><a href="DOCS.md#mount"><code>mount : func</code></a></li>\n</ul>\n<h3 id="roadmap"><a href="#roadmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Roadmap</h3>\n<ul>\n<li>\n<p>Make interacting with ports nicer</p>\n<ul>\n<li>Convert <code>Js.t</code> objects to OCaml records?</li>\n<li>Subscribe to ports in a pipeline style?</li>\n</ul>\n</li>\n</ul>\n<p>If you have any suggestions or run into any bugs, please open an issue!</p>\n',homepageUrl:"https://github.com/jaredramirez/bs-elm#readme",repositoryUrl:"https://github.com/jaredramirez/bs-elm",npmUrl:"https://www.npmjs.com/package/reason-elm",issuesUrl:"https://github.com/jaredramirez/bs-elm/issues",slug:"/package/reason-elm"}},pathContext:{id:"reason-elm"}}}});
//# sourceMappingURL=path---package-reason-elm-1bf66872a4838ffbb9af.js.map