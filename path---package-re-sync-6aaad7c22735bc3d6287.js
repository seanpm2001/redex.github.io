webpackJsonp([0x7e4087db8ea4],{1350:function(s,e){s.exports={data:{package:{type:"published",id:"re-sync",name:"re-sync",version:"0.4.2",category:"library",flags:["neglected","deprecated"],platforms:["browser","node"],description:"Async support library for Reason/Bucklescript",keywords:["async"],license:"MIT",updated:"2020-01-14T09:30:04.044Z",stars:16,score:.2760905929538598,quality:.6147443399141445,popularity:.06130005345376314,maintenance:.20060649220228385,readme:'<h1 id="reason-module-for-async"><a href="#reason-module-for-async" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason module for Async</h1>\n<p><a href="https://travis-ci.org/PeteProgrammer/resync"><img src="https://travis-ci.org/PeteProgrammer/resync.svg?branch=master" alt="Build Status"></a></p>\n<p><strong>Attention</strong> - <em>The NPM package has moved to <code>@stroiman/async</code>. Remember to\nupdate both _package.json</em> AND <code>bsconfig.json</code>._</p>\n<p>This module started its life because I was connecting to the js mongo driver\nfrom reason code. The driver is asynchronous, and can be used with either\ncallbacks or promises. But using promises in the heart of my reason code just\nfelt wrong, so slowly work for this library began.</p>\n<p>This library has been published as \'re-sync\' to npm</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save re-sync</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add re-sync</code></pre></div>\n<h2 id="v-04-breaking-change"><a href="#v-04-breaking-change" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>v. 0.4 breaking change</h2>\n<p>In previous versions, functions took labeled arguments, e.g.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-type">DbConnection</span>.<span class="hljs-keyword">open</span>(url)\n|&gt; <span class="hljs-type">Async</span>.bind(~f=con =&gt; con |&gt; <span class="hljs-type">Query</span>.execute(\n|&gt; processResult(queryResult =&gt; ...)</code></pre></div>\n<p>I disliked the usage of labeled arguments for this kind of programming, and most\nsimilar code I have seen also supports an implicit piping syntax, so this now\nbecomes</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-type">DbConnection</span>.<span class="hljs-keyword">open</span>(url)\n|&gt; <span class="hljs-type">Async</span>.bind(con =&gt; <span class="hljs-type">Query</span>.execute(query, con)\n|&gt; processResult(queryResult =&gt; ...)</code></pre></div>\n<p>Or, because the <code>Query.execute</code> supports piping in this hypothetical example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-type">DbConnection</span>.<span class="hljs-type">Open</span>(url)\n|&gt; <span class="hljs-type">Async</span>.bind(<span class="hljs-type">Query</span>.execute(query))\n|&gt; processResult(queryResult =&gt; ...)</code></pre></div>\n<h2 id="v-03-breaking-change"><a href="#v-03-breaking-change" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>v. 0.3 breaking change</h2>\n<p>In version 0.1 there were two functions to execute the async workflow, <code>run</code> and\n<code>runExn</code>. The first would only be able to handle positive outcomes, where the\nlatter would take two callbacks, one for handling the successful outcome, and\none for handling the failing outcome.</p>\n<p>This has been merged into one function, <code>run</code> that takes an optional exception\ncallback. If no exception callback is specified, exceptions will be ignored.</p>\n<h2 id="description"><a href="#description" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Description</h2>\n<p>The heart of the module is the type:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">type</span> t(<span class="hljs-symbol">\'a</span>) = ((<span class="hljs-symbol">\'a</span> =&gt; <span class="hljs-built_in">unit</span>, <span class="hljs-built_in">exn</span> =&gt; <span class="hljs-built_in">unit</span>)) =&gt; <span class="hljs-built_in">unit</span>;</code></pre></div>\n<p>So, it\'s a function that takes two callbacks, one that will be executed when\nthings succeed, and one that is executed when an exception is thrown.</p>\n<p>So if you have such a function, you can use this library to glue functions\ntogether that operate asynchronously.</p>\n<p>Useful funcitons.</p>\n<ul>\n<li><code>bind</code> Takes a function that returns an async result and use it in an existing\nasync context.</li>\n<li><code>map</code> Takes a function that returns a sync result, and use it in an async\ncontext.</li>\n<li><code>return</code> Takes a value, and returns an async context resolving that value. In\na promise context, this would correspond to <code>Promise.resolve</code></li>\n<li><code>tryCatch</code> Takes a function that might handle an exception. Return <code>Some</code> if the\nexception was handled, and <code>None</code> if it wasn\'t.</li>\n<li><code>timeout</code> Helps handling handling functions that take too long to execute</li>\n<li><code>run(~fe=?,f)</code> Takes a callback to be called with the final value, and an\noptional callback to be called with any exceptions caught during execution.</li>\n<li><code>from_js</code> Helps creating an <code>Async.t</code> from an async javascript function. See\nexmaple later</li>\n<li><code>once</code> Takes something that resolves asynchronously, and allow it to be\ncalled multiple times, each time yielding the same result. A database\nconnection pool factory is a good candidate.</li>\n</ul>\n<p>Be aware that this library does not evaluate any values in advance. Nothing is\nevaluated until you call the <code>run</code> function.</p>\n<p>Look at the example tests for a hint as to their usage.</p>\n<h2 id="only-use-the-exception-path-for-truly-exceptional-cases"><a href="#only-use-the-exception-path-for-truly-exceptional-cases" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Only use the exception path for truly exceptional cases.</h2>\n<p>It is a common pattern to use a result type, like this (defined in Js.Result).</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">type</span> result(<span class="hljs-symbol">\'a</span>,<span class="hljs-symbol">\'b</span>) =\n  | <span class="hljs-type">Ok</span>(<span class="hljs-symbol">\'a</span>)\n  | <span class="hljs-type">Error</span>(<span class="hljs-symbol">\'b</span>)</code></pre></div>\n<p>This library does not attempt to replace this pattern,\nThis type can still be used with the async module:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">type</span> asyncResult(<span class="hljs-symbol">\'a</span>,<span class="hljs-symbol">\'b</span>) = async(result(<span class="hljs-symbol">\'a</span>,<span class="hljs-symbol">\'b</span>));</code></pre></div>\n<p>This is used a lot in my own code, and exceptions are only used to handle truly\nexceptional cases, that will result in HTTP 500 errors - e.g. broken database\nconnections, etc. Any error that can be handled in the application layer is\nrepresented with the <code>Error()</code> constructor.</p>\n<h2 id="using-with-async-javascript-modules"><a href="#using-with-async-javascript-modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using with async JavaScript modules</h2>\n<p>A common pattern in JavaScript is to have a function accept a callback that\naccepts two arguments, an error and a result. The error argument will receive\n<code>null</code> if the operation succeeded.</p>\n<p><code>Resync</code> supports handling this case easily. This small adaption of the\n<code>bsyncjs</code> module shows how:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Bcrypt</span> = {\n  <span class="hljs-keyword">type</span> error = <span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.t;\n  [@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"bcryptjs"</span>]\n  <span class="hljs-keyword">external</span> hash : (<span class="hljs-built_in">string</span>, <span class="hljs-built_in">int</span>, (<span class="hljs-type">Js</span>.null(error), <span class="hljs-built_in">string</span>) =&gt; <span class="hljs-built_in">unit</span>) =&gt; <span class="hljs-built_in">unit</span> = <span class="hljs-string">""</span>;\n  [@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"bcryptjs"</span>]\n  <span class="hljs-keyword">external</span> compare : (<span class="hljs-built_in">string</span>, <span class="hljs-built_in">string</span>, (<span class="hljs-type">Js</span>.null(error), <span class="hljs-type">Js</span>.boolean) =&gt; <span class="hljs-built_in">unit</span>) =&gt; <span class="hljs-built_in">unit</span> = <span class="hljs-string">""</span>;\n\n  <span class="hljs-keyword">let</span> hash = (password, gen) =&gt; hash(password,gen)\n    |&gt; <span class="hljs-type">Async</span>.from_js;\n  <span class="hljs-keyword">let</span> compare = (password, hash) =&gt; compare(password, hash)\n    |&gt; <span class="hljs-type">Async</span>.from_js |&gt; <span class="hljs-type">Async</span>.map(<span class="hljs-type">Js</span>.to_bool);\n}</code></pre></div>\n',homepageUrl:"https://github.com/stroiman/resync#readme",repositoryUrl:"https://github.com/stroiman/resync",npmUrl:"https://www.npmjs.com/package/re-sync",issuesUrl:"https://github.com/stroiman/resync/issues",slug:"/package/re-sync"}},pathContext:{id:"re-sync"}}}});
//# sourceMappingURL=path---package-re-sync-6aaad7c22735bc3d6287.js.map