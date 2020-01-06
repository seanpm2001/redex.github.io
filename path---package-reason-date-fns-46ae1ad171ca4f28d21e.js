webpackJsonp([0x67c5afbd729e],{1353:function(s,a){s.exports={data:{package:{type:"published",id:"reason-date-fns",name:"reason-date-fns",version:"0.10.4",category:"binding",flags:[],platforms:["browser","node"],description:"This is a project with reason bindings for [date-fns v2](https://date-fns.org/v2.0.0/docs/Getting-Started). These bindings are using `FP` module of date-fns. So please refer the [FP documentation](https://date-fns.org/v2.0.0/docs/fp/closestIndexTo). In sh",keywords:["date/time manipulation"],license:"MIT",updated:"2019-12-18T09:35:28.016Z",stars:17,score:.5613560650372393,quality:.6225440659350806,popularity:.07026527216204356,maintenance:1,readme:'<h1 id="reason-bindings-for-date-fns-v2"><a href="#reason-bindings-for-date-fns-v2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason bindings for date-fns v2</h1>\n<p>This is a project with reason bindings for <a href="https://date-fns.org/v2.0.0/docs/Getting-Started">date-fns v2</a>. These bindings are using <code>FP</code> module of date-fns. So please refer the <a href="https://date-fns.org/v2.0.0/docs/fp/closestIndexTo">FP documentation</a>. In short all methods are curried, and date value is always last argument.</p>\n<p>Simple example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReasonDateFns</span>;\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make<span class="hljs-literal">()</span>\n|&gt; <span class="hljs-type">DateFns</span>.addDays(<span class="hljs-number">2</span>)\n|&gt; <span class="hljs-type">DateFns</span>.addDays(-<span class="hljs-number">2</span>)\n|&gt; <span class="hljs-type">DateFns</span>.closestTo([|\n     <span class="hljs-type">DateFns</span>.parseISO(<span class="hljs-string">"2019-08-21T13:00:03.058Z"</span>),\n     <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make<span class="hljs-literal">()</span>,\n   |])\n|&gt; <span class="hljs-type">DateFns</span>.lightFormat(<span class="hljs-string">"YYYY-MM-DD"</span>);\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make<span class="hljs-literal">()</span>\n|&gt; <span class="hljs-type">DateFns</span>.formatWithOptions(\n     <span class="hljs-type">DateFns</span>.formatOptions(~locale=<span class="hljs-type">DateFns</span>.<span class="hljs-type">Locales</span>.ru, <span class="hljs-literal">()</span>),\n     <span class="hljs-string">"YYYY-MM-DD"</span>,\n   );\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make<span class="hljs-literal">()</span>\n|&gt; <span class="hljs-type">DateFns</span>.addMinutes(<span class="hljs-number">10.</span>)\n|&gt; <span class="hljs-type">DateFns</span>.addSeconds(<span class="hljs-number">10.</span>)\n|&gt; <span class="hljs-type">DateFns</span>.addMilliseconds(<span class="hljs-number">1000</span>)</code></pre></div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Make sure that you need <code>date-fns</code> <strong>v2</strong>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add reason-date-fns</code></pre></div>\n<p>And add <code>reason-date-fns</code> to your <code>bsconfig.json</code> </p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"reason-date-fns"</span>\n  ],\n}</code></pre></div>\n<h2 id="differences-from-bs-date-fns"><a href="#differences-from-bs-date-fns" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Differences from bs-date-fns</h2>\n<p>There are 2:\n1) This project is exporting to <code>date-fns</code> of v2\n2) And using <code>FP</code> submodule. So currying is enabled by default 😎</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>This project is under the terms of MIT license</p>\n',homepageUrl:"https://github.com/dmtrKovalenko/reason-date-fns",repositoryUrl:"https://github.com/dmtrKovalenko/reason-date-fns",npmUrl:"https://www.npmjs.com/package/reason-date-fns",issuesUrl:"https://github.com/dmtrKovalenko/reason-date-fns/issues",slug:"/package/reason-date-fns"}},pathContext:{id:"reason-date-fns"}}}});
//# sourceMappingURL=path---package-reason-date-fns-46ae1ad171ca4f28d21e.js.map