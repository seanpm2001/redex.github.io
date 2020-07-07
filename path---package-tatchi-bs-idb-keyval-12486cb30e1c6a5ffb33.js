webpackJsonp([0xa40e658dfda3],{1441:function(s,e){s.exports={data:{package:{type:"published",id:"@tatchi/bs-idb-keyval",name:"@tatchi/bs-idb-keyval",version:"0.2.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for idb-keyval",keywords:["database"],license:"MIT",updated:"2020-07-07T07:56:45.661Z",stars:3,score:.4856159193635562,quality:.42981359026656235,popularity:.022958109629392185,maintenance:.9961042968951436,readme:'<h1 id="bs-idb-keyval"><a href="#bs-idb-keyval" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-idb-keyval</h1>\n<p><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/jakearchibald/idb-keyval">idb-keyval</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @tatchi/bs-idb-keyval</code></pre></div>\n<p>Then add <code>@tatchi/bs-idb-keyval</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@tatchi/bs-idb-keyval"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="create-store"><a href="#create-store" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create store:</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-built_in">let</span> store = IdbKeyVal.createStore(<span class="hljs-string">"custom-db-name"</span>, <span class="hljs-string">"custom-store-name"</span>);</code></pre></div>\n<h3 id="set"><a href="#set" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>set:</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-type">IdbKeyVal</span>.set(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>, store)\n  |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(<span class="hljs-literal">()</span> =&gt; {\n       <span class="hljs-type">Js</span>.log(<span class="hljs-string">"It worked!"</span>);\n       <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve<span class="hljs-literal">()</span>;\n     })\n  |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch(err =&gt; {\n       <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"It failed!!"</span>, err);\n       <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve<span class="hljs-literal">()</span>;\n     });</code></pre></div>\n<h3 id="get"><a href="#get" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>get:</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-type">IdbKeyVal</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"key"</span>, store)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(value =&gt; {\n     <span class="hljs-comment">// logs: "value"</span>\n     <span class="hljs-type">Js</span>.log(value);\n     <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve();\n   });</code></pre></div>\n<h3 id="keys"><a href="#keys" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>keys:</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>IdbKeyVal.keys(store)\n|&gt; Js.Promise.then_(keys =&gt; {\n     // logs: [<span class="hljs-string">"key"</span>]\n     Js.log(keys);\n     Js.Promise.resolve();\n   });</code></pre></div>\n<h3 id="delete"><a href="#delete" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>delete:</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-type">IdbKeyVal</span>.delete(<span class="hljs-string">"key"</span>, store)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(keys =&gt; {\n     <span class="hljs-type">Js</span>.log(<span class="hljs-string">"deleted"</span>);\n     <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve<span class="hljs-literal">()</span>;\n   });</code></pre></div>\n<h3 id="clear"><a href="#clear" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>clear:</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-type">IdbKeyVal</span>.clear(store)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(keys =&gt; {\n     <span class="hljs-type">Js</span>.log(<span class="hljs-string">"cleared"</span>);\n     <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve<span class="hljs-literal">()</span>;\n   });</code></pre></div>\n',homepageUrl:"https://github.com/tatchi/bs-idb-keyval#readme",repositoryUrl:"https://github.com/tatchi/bs-idb-keyval",npmUrl:"https://www.npmjs.com/package/%40tatchi%2Fbs-idb-keyval",issuesUrl:"https://github.com/tatchi/bs-idb-keyval/issues",slug:"/package/@tatchi/bs-idb-keyval"}},pathContext:{id:"@tatchi/bs-idb-keyval"}}}});
//# sourceMappingURL=path---package-tatchi-bs-idb-keyval-12486cb30e1c6a5ffb33.js.map