webpackJsonp([0xfa4fb2bb0988],{1127:function(s,a){s.exports={data:{package:{id:"bs-sql-common",stars:2,name:"bs-sql-common",version:"0.7.2",category:"library",flags:[],platforms:["node"],description:"A common interface common for SQL drivers.",keywords:["database","sql"],license:"MIT",updated:"2018-03-03T05:57:53.130Z",type:"published",score:.6288614073881085,quality:.84856502459706,popularity:.06940542859711613,maintenance:.9999999999999999,readme:'<p><a href="https://nodei.co/npm/bs-sql-common/"><img src="https://nodei.co/npm/bs-sql-common.png" alt="NPM"></a>\n<a href="https://www.travis-ci.org/scull7/bs-sql-common"><img src="https://www.travis-ci.org/scull7/bs-sql-common.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/bs-sql-common?branch=master"><img src="https://coveralls.io/repos/github/scull7/bs-sql-common/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h1 id="bs-sql-common"><a href="#bs-sql-common" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-sql-common</h1>\n<p>A common interface for SQL-based Node.js drivers.</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why?</h2>\n<p>To provide a common interface for MySQL, PostgreSQL and sqlite\nimplementations.  </p>\n<p>Hopefully the interface presented feels conventional for ReasonML / OCaml.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>The standard things are there and this library is being used live within\nseveral production projects.</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Query parameter substitution</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Named parameters</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Promise based interface.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Connection pooling</li>\n<li class="task-list-item"><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md">Custom Streams</a></li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn install --save bs-sql-common</code></pre></div>\n<p>Then add <code>bs-sql-common</code> to your <code>bs-dependencies</code> in your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"bs-sql-common"</span> ]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>In all of the examples the <a href="https://github.com/scull7/bs-mysql2">bs-mysql2</a> bindings are used, however,\nit should be the same with any SqlCommon compatible driver bindings.</p>\n<h3 id="standard-callback-interface"><a href="#standard-callback-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Callback Interface</h3>\n<h4 id="standard-query-method"><a href="#standard-query-method" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Query Method</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-type">SqlCommon</span>.raw(\n  conn,\n  <span class="hljs-string">"SHOW DATABASES"</span>,\n  (r) =&gt;\n    <span class="hljs-keyword">switch</span> r {\n    | <span class="hljs-type">Response</span>.<span class="hljs-type">Error</span>(e) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n    | <span class="hljs-type">Response</span>.<span class="hljs-type">Select</span>(s) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"SELECT: "</span>, s)\n    | <span class="hljs-type">Response</span>.<span class="hljs-type">Mutation</span>(m) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"MUTATION: "</span>, m)\n    }\n);\n\n<span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close(conn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">SqlCommon</span>.raw conn <span class="hljs-string">"SHOW DATABASES"</span>\n    (<span class="hljs-keyword">fun</span> r  -&gt;\n       <span class="hljs-keyword">match</span> r <span class="hljs-keyword">with</span>\n       | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Error</span> (e))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"ERROR: "</span> e\n       | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Select</span> (s))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"SELECT: "</span> s\n       | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Mutation</span> (m))[@explicit_arity ]) -&gt;\n           <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"MUTATION: "</span> m)\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close conn</code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements---named-placeholders"><a href="#prepared-statements---named-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements - Named Placeholders</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn =\n  <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-type">SqlCommon</span>.with_named_params(conn, <span class="hljs-string">"SELECT :x + :y as z"</span>, {<span class="hljs-string">"x"</span>: <span class="hljs-number">1</span>, <span class="hljs-string">"y"</span>: <span class="hljs-number">2</span>}, result =&gt;\n  <span class="hljs-keyword">switch</span> result {\n  | <span class="hljs-type">Error</span>(e) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n  | <span class="hljs-type">Mutation</span>(m) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"MUTATION: "</span>, m)\n  | <span class="hljs-type">Select</span>(s) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"SELECT: "</span>, s)\n  }\n);\n\n<span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close(conn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">SqlCommon</span>.with_named_params conn <span class="hljs-string">"SELECT :x + :y as z"</span>\n    ([%bs.obj { x = <span class="hljs-number">1</span>; y = <span class="hljs-number">2</span> }])\n    (<span class="hljs-keyword">fun</span> result  -&gt;\n       <span class="hljs-keyword">match</span> result <span class="hljs-keyword">with</span>\n       | ((<span class="hljs-type">Error</span> (e))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"ERROR: "</span> e\n       | ((<span class="hljs-type">Mutation</span> (m))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"MUTATION: "</span> m\n       | ((<span class="hljs-type">Select</span> (s))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"SELECT: "</span> s)\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close conn</code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements---un-named-placeholders"><a href="#prepared-statements---un-named-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements - Un-named Placeholders</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-keyword">let</span> logThenClose = (label, x) =&gt; {\n  <span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = <span class="hljs-type">Js</span>.log2(label, x);\n  <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close(conn)\n};\n\n<span class="hljs-type">SqlCommon</span>.with_params(\n  conn,\n  <span class="hljs-string">"SELECT 1 + ? + ? as result"</span>,\n  [|<span class="hljs-number">5</span>, <span class="hljs-number">6</span>|],\n  (r) =&gt;\n    <span class="hljs-keyword">switch</span> r {\n    | <span class="hljs-type">Response</span>.<span class="hljs-type">Error</span>(e) =&gt; logThenClose(<span class="hljs-string">"ERROR: "</span>, e)\n    | <span class="hljs-type">Response</span>.<span class="hljs-type">Select</span>(s) =&gt; logThenClose(<span class="hljs-string">"SELECT: "</span>, s)\n    | <span class="hljs-type">Response</span>.<span class="hljs-type">Mutation</span>(m) =&gt; logThenClose(<span class="hljs-string">"MUTATION: "</span>, m)\n    }\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> logThenClose label x =\n  <span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log2 label x <span class="hljs-keyword">in</span> <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close conn\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">SqlCommon</span>.with_params conn <span class="hljs-string">"SELECT 1 + ? + ? as result"</span> [|<span class="hljs-number">5</span>;<span class="hljs-number">6</span>|]\n    (<span class="hljs-keyword">fun</span> r  -&gt;\n       <span class="hljs-keyword">match</span> r <span class="hljs-keyword">with</span>\n       | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Error</span> (e))[@explicit_arity ]) -&gt; logThenClose <span class="hljs-string">"ERROR: "</span> e\n       | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Select</span> (s))[@explicit_arity ]) -&gt;\n           logThenClose <span class="hljs-string">"SELECT: "</span> s\n       | ((<span class="hljs-type">Response</span>.<span class="hljs-type">Mutation</span> (m))[@explicit_arity ]) -&gt;\n           logThenClose <span class="hljs-string">"MUTATION: "</span> m)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="promise-interface"><a href="#promise-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promise Interface</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(conn)\n|&gt; <span class="hljs-type">SqlCommon</span>.<span class="hljs-type">Promise</span>.pipe_with_params(<span class="hljs-string">"SELECT ? as search"</span>, [|<span class="hljs-string">"%schema"</span>|])\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(\n     (value) =&gt; {\n       <span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = <span class="hljs-type">Js</span>.log(value);\n       <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(<span class="hljs-number">1</span>)\n     }\n   )\n|&gt; <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.<span class="hljs-type">Promise</span>.close(conn)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch(\n     (err) =&gt; {\n       <span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = <span class="hljs-type">Js</span>.log2((<span class="hljs-string">"Failure!!!"</span>, err));\n       <span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close(conn);\n       <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve((-<span class="hljs-number">1</span>))\n     }\n   );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  ((((<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve conn) |&gt;\n       (<span class="hljs-type">SqlCommon</span>.<span class="hljs-type">Promise</span>.pipe_with_params <span class="hljs-string">"SELECT ? as search"</span> [|<span class="hljs-string">"%schema"</span>|]))\n      |&gt;\n      (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_\n         (<span class="hljs-keyword">fun</span> <span class="hljs-keyword">value</span>  -&gt; <span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log <span class="hljs-keyword">value</span> <span class="hljs-keyword">in</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-number">1</span>)))\n     |&gt; (<span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.<span class="hljs-type">Promise</span>.close conn))\n    |&gt;\n    (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch\n       (<span class="hljs-keyword">fun</span> err  -&gt;\n          <span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log2 (<span class="hljs-string">"Failure!!!"</span>, err) <span class="hljs-keyword">in</span>\n          <span class="hljs-keyword">let</span> _ = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.close conn <span class="hljs-keyword">in</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve (-<span class="hljs-number">1</span>)))</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/scull7/bs-sql-common",repositoryUrl:"https://github.com/scull7/bs-sql-common",npmUrl:"https://www.npmjs.com/package/bs-sql-common",issuesUrl:"https://github.com/scull7/bs-sql-common/issues",slug:"/package/bs-sql-common"}},pathContext:{id:"bs-sql-common"}}}});
//# sourceMappingURL=path---package-bs-sql-common-8d5369c3b49baf7c1ef5.js.map