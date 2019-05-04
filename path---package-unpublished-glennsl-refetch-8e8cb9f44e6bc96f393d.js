webpackJsonp([0xd180b4cd91f],{1387:function(s,a){s.exports={data:{package:{type:"unpublished",id:"unpublished/glennsl/refetch",name:"glennsl/refetch",version:"0.1.1",category:"library",flags:[],platforms:["browser","node"],description:"A strongly typed and immutable API built on top of the `fetch` standard ",keywords:["http client"],license:"MIT",updated:"2019-05-04T14:14:55.016Z",stars:19,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="refetch"><a href="#refetch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>re:fetch</h1>\n<p>Refetch is a strongly typed and immutable API built on top of the <code>fetch</code> standard. It is also incomplete, highly experimental and prone to change.</p>\n<p><a href=""><img src="https://img.shields.io/david/glennsl/refetch.svg" alt="Dependencies"></a>\n<a href="https://github.com/glennsl/refetch/issues"><img src="https://img.shields.io/github/issues/glennsl/refetch.svg" alt="Issues"></a>\n<a href=""><img src="https://img.shields.io/github/last-commit/glennsl/refetch.svg" alt="Last Commit"></a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Run <code>npm install --save glennsl/refetch</code> and add <code>refetch</code> to the <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Simple GET */</span>\n<span class="hljs-type">Resync</span>.(<span class="hljs-type">Refetch</span>.(\n  <span class="hljs-keyword">get</span>(<span class="hljs-string">"http://httpbin.org/get"</span>)\n  |&gt; <span class="hljs-type">Future</span>.flatMap(\n     <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> |<span class="hljs-params"> Response.Ok(<span class="hljs-number">_</span>,<span class="hljs-params"> response)<span class="hljs-params"> </span></span></span></span></span>=&gt; <span class="hljs-type">Response</span>.text(response)\n         | <span class="hljs-number">_</span> =&gt; <span class="hljs-string">"oops!"</span> |&gt; <span class="hljs-type">Future</span>.from)\n  |&gt; <span class="hljs-type">Future</span>.whenResolved(<span class="hljs-type">Js</span>.log)\n));\n\n<span class="hljs-comment">/* builder functions */</span>\n<span class="hljs-type">Resync</span>.(<span class="hljs-type">Refetch</span>.(\n  request(`<span class="hljs-type">POST</span>, <span class="hljs-string">"https://httpbin.org/post"</span>)\n    |&gt; <span class="hljs-type">Request</span>.header(`<span class="hljs-type">ContentType</span>(<span class="hljs-string">"application/x-www-form-urlencoded; charset=UTF-8"</span>))\n    |&gt; <span class="hljs-type">Request</span>.payload(`<span class="hljs-type">String</span>(<span class="hljs-string">"title=foobar&amp;body=bar&amp;userId=1"</span>))\n  |&gt; fetch\n    |&gt; <span class="hljs-type">Future</span>.flatMap(\n        <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> |<span class="hljs-params"> Response.Ok(<span class="hljs-number">_</span>,<span class="hljs-params"> response)<span class="hljs-params"> </span></span></span></span></span>=&gt; <span class="hljs-type">Response</span>.text(response)\n            | <span class="hljs-type">Response</span>.<span class="hljs-type">Error</span>({ reason }, <span class="hljs-number">_</span>) =&gt; <span class="hljs-type">Future</span>.from(reason))\n    |&gt; <span class="hljs-type">Future</span>.whenResolved(<span class="hljs-type">Js</span>.log)\n));\n\n<span class="hljs-comment">/* labeled arguments */</span>\n<span class="hljs-type">Resync</span>.(<span class="hljs-type">Refetch</span>.(\n  request(`<span class="hljs-type">POST</span>, <span class="hljs-string">"https://httpbin.org/post"</span>,\n    ~headers=[`<span class="hljs-type">ContentType</span>(<span class="hljs-string">"application/x-www-form-urlencoded; charset=UTF-8"</span>)],\n    ~body=`<span class="hljs-type">String</span>(<span class="hljs-string">"title=foobar&amp;body=bar&amp;userId=1"</span>))\n  |&gt; fetch\n    |&gt; <span class="hljs-type">Future</span>.flatMap(\n        <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> |<span class="hljs-params"> Response.Ok(<span class="hljs-number">_</span>,<span class="hljs-params"> response)<span class="hljs-params"> </span></span></span></span></span>=&gt; <span class="hljs-type">Response</span>.text(response)\n            | <span class="hljs-type">Response</span>.<span class="hljs-type">Error</span>({ reason }, <span class="hljs-number">_</span>) =&gt; <span class="hljs-type">Future</span>.from(reason))\n    |&gt; <span class="hljs-type">Future</span>.whenResolved(<span class="hljs-type">Js</span>.log)\n));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Resync</span> <span class="hljs-keyword">in</span>\n    <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Refetch</span> <span class="hljs-keyword">in</span>\n      ((get <span class="hljs-string">"http://httpbin.org/get"</span>) |&gt;\n         (<span class="hljs-type">Future</span>.flatMap\n            (<span class="hljs-keyword">function</span>\n             | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Ok</span> (_,response))[@explicit_arity ]) -&gt;\n                 <span class="hljs-type">Response</span>.text response\n             | _ -&gt; <span class="hljs-string">"oops!"</span> |&gt; <span class="hljs-type">Future</span>.from)))\n        |&gt; (<span class="hljs-type">Future</span>.whenResolved <span class="hljs-type">Js</span>.log)\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Resync</span> <span class="hljs-keyword">in</span>\n    <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Refetch</span> <span class="hljs-keyword">in</span>\n      (((((request <span class="hljs-tag">`POST</span> <span class="hljs-string">"https://httpbin.org/post"</span>) |&gt;\n            (<span class="hljs-type">Request</span>.header\n               (<span class="hljs-tag">`ContentType</span>\n                  <span class="hljs-string">"application/x-www-form-urlencoded; charset=UTF-8"</span>)))\n           |&gt; (<span class="hljs-type">Request</span>.payload (<span class="hljs-tag">`String</span> <span class="hljs-string">"title=foobar&amp;body=bar&amp;userId=1"</span>)))\n          |&gt; fetch)\n         |&gt;\n         (<span class="hljs-type">Future</span>.flatMap\n            (<span class="hljs-keyword">function</span>\n             | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Ok</span> (_,response))[@explicit_arity ]) -&gt;\n                 <span class="hljs-type">Response</span>.text response\n             | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Error</span> ({ reason },_))[@explicit_arity ]) -&gt;\n                 <span class="hljs-type">Future</span>.from reason)))\n        |&gt; (<span class="hljs-type">Future</span>.whenResolved <span class="hljs-type">Js</span>.log)\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Resync</span> <span class="hljs-keyword">in</span>\n    <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Refetch</span> <span class="hljs-keyword">in</span>\n      (((request <span class="hljs-tag">`POST</span> <span class="hljs-string">"https://httpbin.org/post"</span>\n           ~headers:[<span class="hljs-tag">`ContentType</span>\n                       <span class="hljs-string">"application/x-www-form-urlencoded; charset=UTF-8"</span>]\n           ~body:(<span class="hljs-tag">`String</span> <span class="hljs-string">"title=foobar&amp;body=bar&amp;userId=1"</span>))\n          |&gt; fetch)\n         |&gt;\n         (<span class="hljs-type">Future</span>.flatMap\n            (<span class="hljs-keyword">function</span>\n             | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Ok</span> (_,response))[@explicit_arity ]) -&gt;\n                 <span class="hljs-type">Response</span>.text response\n             | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Error</span> ({ reason },_))[@explicit_arity ]) -&gt;\n                 <span class="hljs-type">Future</span>.from reason)))\n        |&gt; (<span class="hljs-type">Future</span>.whenResolved <span class="hljs-type">Js</span>.log)</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/glennsl/refetch#readme",repositoryUrl:"https://github.com/glennsl/refetch",npmUrl:null,issuesUrl:"https://github.com/glennsl/refetch/issues",slug:"/package/unpublished/glennsl/refetch"}},pathContext:{id:"unpublished/glennsl/refetch"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-refetch-8e8cb9f44e6bc96f393d.js.map