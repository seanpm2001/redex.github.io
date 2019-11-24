webpackJsonp([0xc1cb06d6de08],{1314:function(e,a){e.exports={data:{package:{type:"published",id:"immutable-re",name:"immutable-re",version:"0.0.15",category:"library",flags:[],platforms:["any"],description:"Persistent immutable collections for Reason",keywords:["collections"],license:"BSD-3-Clause",updated:"2019-11-17T05:44:59.299Z",stars:215,score:.29441306934673284,quality:.6500925586930641,popularity:.10605251240791394,maintenance:.177905492560125,readme:'<h1 id="immutable-collections-for-reason"><a href="#immutable-collections-for-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><img src="https://github.com/facebookincubator/immutable-re/raw/master/docs/images/logo-800x215.png?raw=true" alt="Immutable Collections For Reason"></h1>\n<p>Pure <a href="https://facebook.github.io/reason">Reason</a> implementation of persistent immutable data structures.</p>\n<h1 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h1>\n<p>Immutable-re provides a complete set of efficient persistent immutable data\nstructures for <a href="https://facebook.github.io/reason">Reason</a> and <a href="http://www.ocaml.org/">OCaml</a>,\ntargeting both OCaml native and byte code compilation modes, as well JavaScript using\n<a href="https://github.com/bloomberg/bucklescript">BuckleScript</a>.</p>\n<p>The api includes concrete implementations of vectors, sets, and maps. Many\nimplementations support <a href="http://clojure.org/reference/transients">transient mutability</a>\nfor efficient batch mutations. Additionally Immutable-re provides lazy\nfunctional iterators and sequences, along with type definitions for basic operators\nsuch as equality, comparison, and hashing.</p>\n<p>For more details see the <a href="http://facebookincubator.github.io/immutable-re/api.html">API docs</a>.</p>\n<h1 id="installing"><a href="#installing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h1>\n<h2 id="installing-via-npm-js-workflow"><a href="#installing-via-npm-js-workflow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing via NPM (JS Workflow)</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install --save immutable-re</code></pre></div>\n<h2 id="installing-immutable-via-opam-native-workflow"><a href="#installing-immutable-via-opam-native-workflow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing <code>immutable</code> via OPAM (native workflow)</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code><span class="hljs-comment"># On macOS, install opam via Homebrew:</span>\nbrew update\nbrew install opam\n<span class="hljs-comment"># On Linux, see here (you will need opam &gt;= 1.2.2): http://opam.ocaml.org/doc/Install.html</span>\n\nopam init\n<span class="hljs-comment"># Add this to your ~/.bashrc (or ~/.zshrc):</span>\n<span class="hljs-comment">#   eval $(opam config env)</span>\n\nopam update\nopam switch <span class="hljs-number">4.02</span>.<span class="hljs-number">3</span>\n<span class="hljs-built_in">eval</span> $(opam config env)\nopam install immutable</code></pre></div>\n<h2 id="contributing-to-development"><a href="#contributing-to-development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing to development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code><span class="hljs-comment"># On macOS, install opam via Homebrew:</span>\nbrew update\nbrew install opam\n<span class="hljs-comment"># On Linux, see here (you will need opam &gt;= 1.2.2): http://opam.ocaml.org/doc/Install.html</span>\n\nopam init\n<span class="hljs-comment"># Add this to your ~/.bashrc (or ~/.zshrc):</span>\n<span class="hljs-comment">#   eval $(opam config env)</span>\n\nopam update\nopam switch <span class="hljs-number">4.02</span>.<span class="hljs-number">3</span>\n<span class="hljs-built_in">eval</span> $(opam config env)\ngit <span class="hljs-built_in">clone</span> git@github.com:facebookincubator/immutable-re.git\n<span class="hljs-built_in">cd</span> immutable-re\nopam pin add -y immutable .</code></pre></div>\n<h1 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h1>\n<p>Immutable-re is under active development and is not yet production ready. We are\nreleasing this early alpha to get community input and contributions. If you are\ninterested in contributing please follow the directions <a href="https://github.com/facebookincubator/immutable-re/blob/master/CONTRIBUTING.md">here</a>.</p>\n<p>For JavaScript developers needing production ready immutable collections,\nwe recommend using the <a href="https://github.com/BuckleTypes/bs-immutablejs.git">Reason BuckleScript bindings to Immutable.js</a>.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>Immutable-re is <a href="https://github.com/facebookincubator/immutable-re/blob/master/LICENSE.txt">BSD-licensed</a>. We also provide an additional <a href="https://github.com/facebookincubator/immutable-re/blob/master/PATENTS.txt">patent grant</a>.</p>\n',homepageUrl:"https://github.com/facebookincubator/immutable-re#readme",repositoryUrl:"https://github.com/facebookincubator/immutable-re",npmUrl:"https://www.npmjs.com/package/immutable-re",issuesUrl:"https://github.com/facebookincubator/immutable-re/issues",slug:"/package/immutable-re"}},pathContext:{id:"immutable-re"}}}});
//# sourceMappingURL=path---package-immutable-re-e07fe20440ed321c9f1d.js.map