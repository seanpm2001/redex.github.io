webpackJsonp([24425292183294],{1418:function(e,s){e.exports={data:{package:{type:"published",id:"@ristostevcev/bs-callbag-events",name:"@ristostevcev/bs-callbag-events",version:"0.2.0",category:"library",flags:[],platforms:["browser","node"],description:"Callbag event streams for declaredom",keywords:["callbag","dom"],license:"BSD-3-Clause",updated:"2020-05-09T22:12:56.057Z",stars:0,score:.3437638243898852,quality:.49722149136631066,popularity:.010618428803647224,maintenance:.5453740768534727,readme:'<h1 id="bs-callbag-events"><a href="#bs-callbag-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-callbag-events</h1>\n<p><a href="https://www.npmjs.com/package/@ristostevcev/bs-callbag-events"><img src="https://img.shields.io/npm/v/@ristostevcev/bs-callbag-events.svg?style=flat" alt="Latest release"></a>\n<a href="https://github.com/Risto-Stevcev/bs-callbag-events/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@ristostevcev/bs-callbag-events.svg?style=flat" alt="License"></a></p>\n<p>Callbag event streams for declaredom</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm i --save @ristostevcev/bs-callbag-events</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>This library provides callbag event streams from declaredom elements for a\ndeclarative approach to event-driven code:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Html</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">CallbagEvents</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">CallbagForEach</span>\n\n<span class="hljs-keyword">let</span> my_button = button [|text <span class="hljs-string">"Click me"</span>|]\n\n<span class="hljs-keyword">let</span> _ =\n  click my_button\n  |&gt; for_each (<span class="hljs-keyword">fun</span> e -&gt; <span class="hljs-type">Js</span>.log e)</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>See <code>example.html</code></p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>See LICENSE</p>\n',homepageUrl:"https://github.com/Risto-Stevcev/bs-callbag-events",repositoryUrl:"https://github.com/Risto-Stevcev/bs-callbag-events",npmUrl:"https://www.npmjs.com/package/%40ristostevcev%2Fbs-callbag-events",issuesUrl:"https://github.com/Risto-Stevcev/bs-callbag-events/issues",slug:"/package/@ristostevcev/bs-callbag-events"}},pathContext:{id:"@ristostevcev/bs-callbag-events"}}}});
//# sourceMappingURL=path---package-ristostevcev-bs-callbag-events-c9eaabb6aae3bd8323e0.js.map