webpackJsonp([85130425518283],{1419:function(s,a){s.exports={data:{package:{type:"published",id:"@ristostevcev/bs-callbag-store",name:"@ristostevcev/bs-callbag-store",version:"2.1.0",category:"library",flags:[],platforms:["browser","node"],description:"A callbag implementation of a redux-like store",keywords:["callbag","state management"],license:"MIT",updated:"2020-03-30T10:49:12.499Z",stars:1,score:.3878618844684204,quality:.5114983903357233,popularity:.019057864653986047,maintenance:.6506917563965953,readme:'<h1 id="bs-callbag-store"><a href="#bs-callbag-store" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-callbag-store</h1>\n<p>A callbag implementation of a redux-like store</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm i --save @ristostevcev/bs-callbag-store</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">type</span> state = { foobar: <span class="hljs-built_in">int</span> }\n<span class="hljs-keyword">type</span> action = <span class="hljs-type">SetFoobar</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span> | <span class="hljs-type">Default</span>\n\n<span class="hljs-keyword">let</span> { dispatch; store; get_state } = {foobar=<span class="hljs-number">1</span>} |&gt; make @@ <span class="hljs-keyword">fun</span> state action -&gt;\n  <span class="hljs-keyword">match</span> action <span class="hljs-keyword">with</span>\n  | <span class="hljs-type">SetFoobar</span> foobar -&gt; {foobar = state.foobar + foobar}\n  | <span class="hljs-type">Default</span> -&gt; state\n\n<span class="hljs-keyword">let</span> _ =\n  store\n  |&gt; scan (<span class="hljs-keyword">fun</span> prev curr -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Array</span>.concat [|curr|] prev) <span class="hljs-literal">[||]</span>\n  |&gt; skip <span class="hljs-number">2</span>\n  |&gt; for_each <span class="hljs-type">Js</span>.log;\n\n  dispatch (<span class="hljs-type">SetFoobar</span> <span class="hljs-number">3</span>);\n  dispatch (<span class="hljs-type">SetFoobar</span> <span class="hljs-number">7</span>);\n  <span class="hljs-type">Js</span>.log (get_state <span class="hljs-literal">()</span>)</code></pre></div>\n',homepageUrl:"https://github.com/Risto-Stevcev/bs-callbag-store",repositoryUrl:"https://github.com/Risto-Stevcev/bs-callbag-store",npmUrl:"https://www.npmjs.com/package/%40ristostevcev%2Fbs-callbag-store",issuesUrl:"https://github.com/Risto-Stevcev/bs-callbag-store/issues",slug:"/package/@ristostevcev/bs-callbag-store"}},pathContext:{id:"@ristostevcev/bs-callbag-store"}}}});
//# sourceMappingURL=path---package-ristostevcev-bs-callbag-store-b8d1f15e786f01de0656.js.map