webpackJsonp([47043915041989],{1231:function(a,s){a.exports={data:{package:{type:"published",id:"bs-marky-markdown",name:"bs-marky-markdown",version:"2.1.7",category:"binding",flags:[],platforms:["browser","node"],description:"marky-markdown bindings for BuckleScript in Reason",keywords:["ui","parsing"],license:"ISC",updated:"2020-01-27T23:20:03.483Z",stars:2,score:.6070253389848681,quality:.8056073292600414,popularity:.0439364385458162,maintenance:.9999011049023427,readme:'<h1 id="bs-marky-markdown"><a href="#bs-marky-markdown" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-marky-markdown</h1>\n<p><a href="http://npm.im/marky-markdown">marky-markdown</a> bindings for <a href="https://bucklescript.github.io">BuckleScript</a> in <a href="https://reasonml.github.io">Reason</a>.</p>\n<p>Has only been tested in the browser.</p>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i bs-marky-markdown <span class="hljs-operator">-s</span></code></pre></div>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<h2 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic usage</h2>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-built_in">let</span> htmlStr = MarkyMarkdown.make(<span class="hljs-string">"# My Markdown String"</span>)</code></pre></div>\n<h2 id="with-options"><a href="#with-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With Options</h2>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">let</span> htmlStr = <span class="hljs-type">MarkyMarkdown</span>.(\n  make(~options=options(~highlightSyntax=<span class="hljs-literal">false</span>, <span class="hljs-literal">()</span>), <span class="hljs-string">"# My Markdown String"</span>)\n)</code></pre></div>\n<h1 id="available-options"><a href="#available-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Available Options</h1>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> sanitize: bool</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> nofollow: bool</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> linkify: bool</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> highlightSyntax: bool</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> prefixHeadingIds: bool</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> enableHeadingLinkIcons: bool</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> serveImagesWithCDN: bool</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> debug: bool</li>\n<li class="task-list-item"><input type="checkbox" disabled> package (what even is this??)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> headingAnchorClass: string</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> headingSvgClass: array(string)</li>\n</ul>\n',homepageUrl:"https://github.com/anisjonischkeit/bs-marky-markdown",repositoryUrl:"https://github.com/anisjonischkeit/bs-marky-markdown",npmUrl:"https://www.npmjs.com/package/bs-marky-markdown",issuesUrl:"https://github.com/anisjonischkeit/bs-marky-markdown/issues",slug:"/package/bs-marky-markdown"}},pathContext:{id:"bs-marky-markdown"}}}});
//# sourceMappingURL=path---package-bs-marky-markdown-7629cb2b7eba63a5cb7c.js.map