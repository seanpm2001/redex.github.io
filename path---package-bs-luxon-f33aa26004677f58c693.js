webpackJsonp([0xff52c1203669],{1146:function(s,e){s.exports={data:{package:{type:"published",id:"bs-luxon",name:"bs-luxon",version:"0.3.0",category:"binding",flags:[],platforms:["browser","node"],description:"Bucklescript bindings for Luxon, written in Reason.",keywords:["date/time manipulation"],license:"MIT",updated:"2018-10-11T21:53:51.305Z",stars:5,score:.5578501872172958,quality:.702110614026997,popularity:.045739127009823244,maintenance:.9463094530164531,readme:'<h1 id="luxon-bindings-for-reasonmlbucklescript"><a href="#luxon-bindings-for-reasonmlbucklescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Luxon Bindings for ReasonML/Bucklescript</h1>\n<p>This repository contains in-progress Reason/Bucklescript bindings for <a href="https://github.com/moment/luxon">Luxon</a>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>This is an example from <a href="https://github.com/moment/luxon">Luxon\'s GitHub page</a> written in Reason using bs-luxon:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>const { <span class="hljs-type">DateTime</span> } = require(<span class="hljs-string">"luxon"</span>);\n<span class="hljs-type">DateTime</span>.local<span class="hljs-literal">()</span>.setZone(<span class="hljs-symbol">\'America</span>/<span class="hljs-type">New_York\'</span>).minus({ weeks: <span class="hljs-number">1</span> }).endOf(<span class="hljs-symbol">\'day\'</span>).toISO<span class="hljs-literal">()</span></code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-type">DateTime</span>.(\n  local<span class="hljs-literal">()</span>\n  |&gt; setZone(<span class="hljs-string">"America/New_York"</span>)\n  |&gt; minus(<span class="hljs-tag">`Duration</span>(<span class="hljs-type">Duration</span>.from(~weeks=<span class="hljs-number">1</span>, <span class="hljs-literal">()</span>)))\n  |&gt; endOf(`day)\n  |&gt; toISO<span class="hljs-literal">()</span>\n);</code></pre></div>\n<p>Look in the <code>example/</code> directory for an example of how to use the bindings. The tests contain a lot more examples.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>Install the bindings using <code>npm install --save bs-luxon</code></li>\n<li>Add the bindings to <code>bsconfig.json</code>:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n      <span class="hljs-string">"bs-luxon"</span>\n  ]\n}</code></pre></div>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h2 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run start</code></pre></div>\n<h2 id="current-state--todo"><a href="#current-state--todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Current State &#x26; Todo</h2>\n<p>The API is still very complete and the bindings are not very "OCamly" yet. Use at your own risk.</p>\n',homepageUrl:"https://github.com/davidgomes/bs-luxon",repositoryUrl:"https://github.com/davidgomes/bs-luxon",npmUrl:"https://www.npmjs.com/package/bs-luxon",issuesUrl:"https://github.com/davidgomes/bs-luxon/issues",slug:"/package/bs-luxon"}},pathContext:{id:"bs-luxon"}}}});
//# sourceMappingURL=path---package-bs-luxon-f33aa26004677f58c693.js.map