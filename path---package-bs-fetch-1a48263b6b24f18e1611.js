webpackJsonp([0xf9196da150e6],{1081:function(e,s){e.exports={data:{package:{id:"bs-fetch",stars:58,name:"bs-fetch",version:"0.2.1",category:"binding",flags:[],platforms:["browser","node"],description:"Fetch bindings for BuckleScript",keywords:["http client"],license:"MIT",updated:"2018-02-20T23:02:06.363Z",type:"published",score:.5469475274666058,quality:.4960229465749089,popularity:.1377896122341825,maintenance:.9997550834633409,readme:'<h1 id="bs-fetch"><a href="#bs-fetch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-fetch</h1>\n<p>Low-level bindings to fetch for <a href="https://github.com/bucklescript/bucklescript">BuckleScript</a>.</p>\n<p><a href="https://npmjs.org/bs-fetch"><img src="https://img.shields.io/npm/v/bs-fetch.svg" alt="npm"></a>\n<a href="https://github.com/reasonml-community/bs-fetch/issues"><img src="https://img.shields.io/github/issues/reasonml-community/bs-fetch.svg" alt="Issues"></a>\n<a href=""><img src="https://img.shields.io/github/last-commit/reasonml-community/bs-fetch.svg" alt="Last Commit"></a>\n<a href=""><img src="https://img.shields.io/github/size/reasonml-community/bs-fetch/lib/js/src/Fetch.js.svg" alt="Size"></a></p>\n<p><code>bs-fetch</code> is intended as a thin layer atop the JS API, upon which more high-level and idiomatic libraries can be made. Once such a library has been established, these bindings will likely be refactored to be even thinner.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Fetch</span>.fetch(<span class="hljs-string">"/api/hellos/1"</span>)\n  |&gt; then_(<span class="hljs-type">Fetch</span>.<span class="hljs-type">Response</span>.text)\n  |&gt; then_(text =&gt; print_endline(text) |&gt; resolve)\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Fetch</span>.fetch <span class="hljs-string">"/api/hellos/1"</span>) |&gt; (then_ <span class="hljs-type">Fetch</span>.<span class="hljs-type">Response</span>.text)) |&gt;\n      (then_ (<span class="hljs-keyword">fun</span> text  -&gt; (print_endline text) |&gt; resolve))</code></pre>\n      </div>\n    </div>\n  \n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-fetch</code></pre></div>\n<p>Then add <code>bs-fetch</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-fetch"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>See usage examples in <a href="https://github.com/reasonml-community/bs-fetch/blob/master/examples/ocaml_examples.ml"><code>ocaml_examples.ml</code></a> and <a href="https://github.com/reasonml-community/bs-fetch/blob/master/examples/reason_examples.re"><code>reason_examples.re</code></a>. The source is a <a href="https://github.com/reasonml-community/bs-fetch/blob/master/src/Fetch.ml">single file</a>!</p>\n<h2 id="nodejs-polyfill"><a href="#nodejs-polyfill" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js polyfill</h2>\n<p><code>fetch</code> is a Web API that isn\'t available out-of-the-box in Node.js, and will therefore need to be polyfilled. <a href="https://github.com/matthew-andrews/isomorphic-fetch">isomorphic-fetch</a> one such polyfill that seems to work well. Just install it via npm and add <code>[%raw "require(\'isomorphic-fetch\')"]</code> to the top of your main file, but be aware that there are some subtle differences and even parts that are missing entirely. </p>\n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="020"><a href="#020" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.2.0</h3>\n<ul>\n<li>Rename <code>Bs_fetch</code> module to <code>Fetch</code>. <code>Bs_fetch</code> is kept around as an alias for backwards compatibility, but should be considered deprecated.</li>\n</ul>\n',homepageUrl:"https://github.com/reasonml-community/bs-fetch#readme",repositoryUrl:"https://github.com/reasonml-community/bs-fetch",npmUrl:"https://www.npmjs.com/package/bs-fetch",issuesUrl:"https://github.com/reasonml-community/bs-fetch/issues",slug:"/package/bs-fetch"}},pathContext:{id:"bs-fetch"}}}});
//# sourceMappingURL=path---package-bs-fetch-1a48263b6b24f18e1611.js.map