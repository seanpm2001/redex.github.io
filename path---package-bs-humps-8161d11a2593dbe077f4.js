webpackJsonp([0x9af1a8cf71c8],{1116:function(s,a){s.exports={data:{package:{id:"bs-humps",stars:0,name:"bs-humps",version:"0.0.1",category:"binding",flags:[],platforms:["browser","node"],description:"humps bindings in Reason",keywords:["utilities","string manipulation"],license:"MIT",updated:"2018-05-04T05:45:03.125Z",type:"published",score:.48660908887763255,quality:.7020985596967457,popularity:.016968726016801647,maintenance:.7715441910363665,readme:'<h1 id="bs-humps"><a href="#bs-humps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-humps</h1>\n<p>humps bindings for <a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> in <a href="https://github.com/facebook/reason">Reason</a>.</p>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>\n<ol>\n<li>install bs-humps</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ yarn add bs-humps\n\n<span class="hljs-comment"># or</span>\n$ npm install --save bs-humps</code></pre></div>\n<ol start="2">\n<li>Add \'bs-humps\' to \'bs-dependencies\' section of <code>bsconfig.json</code> .</li>\n</ol>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<p>Converting strings</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Humps</span>.camelize(\n  <span class="hljs-string">"hello_world"</span>,\n  <span class="hljs-comment">/* =&gt; helloWorld */</span>\n  <span class="hljs-type">Humps</span>.decamelize,\n  <span class="hljs-string">"fooBar"</span>,\n  <span class="hljs-comment">/* =&gt; foo_bar */</span>\n  <span class="hljs-type">Humps</span>.decamelizeWithOptions,\n  <span class="hljs-string">"hooBarBaz"</span>\n) @@\n[<span class="hljs-type">Humps</span>.makeOptions(separator), ...<span class="hljs-string">"-"</span>()];\n<span class="hljs-comment">/* =&gt; foo-bar-baz */</span>\n</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-type">Humps</span>.camelize <span class="hljs-string">"hello_world"</span>\n<span class="hljs-comment">(* =&gt; helloWorld *)</span>\n\n<span class="hljs-type">Humps</span>.decamelize <span class="hljs-string">"fooBar"</span>\n<span class="hljs-comment">(* =&gt; foo_bar *)</span>\n\n<span class="hljs-type">Humps</span>.decamelizeWithOptions <span class="hljs-string">"hooBarBaz"</span> @@ <span class="hljs-type">Humps</span>.makeOptions separator::<span class="hljs-string">"-"</span> <span class="hljs-literal">()</span>\n<span class="hljs-comment">(* =&gt; foo-bar-baz *)</span></code></pre>\n      </div>\n    </div>\n  \n<h1 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h1>\n<p>Build this project.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yarn build</code></pre></div>\n<p>Build this project with incremental build.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yarn watch</code></pre></div>\n<p>Run test.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yarn <span class="hljs-built_in">test</span></code></pre></div>\n<h1 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Todo</h1>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> Implement external function definitions for <code>**Keys(object, options)</code> API.</li>\n</ul>\n',homepageUrl:"https://github.com/yamadayuki/bs-humps#readme",repositoryUrl:"https://github.com/yamadayuki/bs-humps",npmUrl:"https://www.npmjs.com/package/bs-humps",issuesUrl:"https://github.com/yamadayuki/bs-humps/issues",slug:"/package/bs-humps"}},pathContext:{id:"bs-humps"}}}});
//# sourceMappingURL=path---package-bs-humps-8161d11a2593dbe077f4.js.map