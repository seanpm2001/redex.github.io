webpackJsonp([0xfa4fb2bb0988],{1290:function(s,a){s.exports={data:{package:{type:"published",id:"bs-sql-common",name:"bs-sql-common",version:"6.0.0",category:"library",flags:[],platforms:["node"],description:"A common interface common for SQL drivers.",keywords:["database","sql"],license:"MIT",updated:"2020-01-10T18:08:38.021Z",stars:16,score:.6500774826889384,quality:.9161809846801515,popularity:.07217904161347344,maintenance:.999887207771935,readme:'<p><a href="https://nodei.co/npm/bs-sql-common/"><img src="https://nodei.co/npm/bs-sql-common.png" alt="NPM"></a>\n<a href="https://www.travis-ci.org/scull7/bs-sql-common"><img src="https://www.travis-ci.org/scull7/bs-sql-common.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/bs-sql-common?branch=master"><img src="https://coveralls.io/repos/github/scull7/bs-sql-common/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h1 id="bs-sql-common"><a href="#bs-sql-common" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-sql-common</h1>\n<p>A common interface for SQL-based Node.js drivers.</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why?</h2>\n<p>To provide a common interface for MySQL, PostgreSQL and sqlite\nimplementations.  </p>\n<h3 id="version-3"><a href="#version-3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version 3</h3>\n<p>A rewrite of the entire package to expose it as a Functor that can accept\nany module which implements the <a href="#Queryable"><code>Queryable</code></a> interface.</p>\n<ul>\n<li>\n<p>Use <a href="https://bucklescript.github.io/bucklescript/api/Belt.Result.html">Belt.Result</a> for responses so to better integrate with then\nBuckleScript ecosystem.</p>\n</li>\n<li>\n<p>Provide <a href="#Sql.Response">response decoding and inspection</a> functions so that\nthe user has a consistent view into responses from any library.</p>\n</li>\n<li>\n<p>Provide an <a href="#Sql.Id">ID type</a> that properly encodes large integers as strings.</p>\n</li>\n<li>\n<p>Provide batch inserts and queries</p>\n</li>\n</ul>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>The standard things are there and this library is being used live within\nseveral production projects.</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Query parameter substitution</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Named parameters</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Promise based interface.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Connection pooling</li>\n<li class="task-list-item"><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md">Custom Streams</a></li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn install --save bs-sql-common</code></pre></div>\n<p>Then add <code>bs-sql-common</code> to your <code>bs-dependencies</code> in your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"bs-sql-common"</span> ]\n}</code></pre></div>\n<p>Then add a <code>bs-sql-common</code> compatible package to your repository or create your\nown. All of the examples use the <a href="https://github.com/scull7/bs-mysql2"><code>bs-mysql2</code></a> package, here are the\nrequirements to use that package:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn install --save bs-mysql2Â</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"bs-sql-common"</span>, <span class="hljs-string">"bs-mysql2"</span> ]\n}</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Sql</span> = <span class="hljs-type">SqlCommon</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">MySql2</span>)\n\n<span class="hljs-keyword">let</span> db = <span class="hljs-type">Sql</span>.<span class="hljs-type">Connection</span>.connect\n  ~host=<span class="hljs-string">"127.0.0.1"</span>\n  ~port=<span class="hljs-number">3306</span>\n  ~user=<span class="hljs-string">"root"</span>\n  <span class="hljs-literal">()</span>\n\n<span class="hljs-type">Sql</span>.query ~db ~sql:<span class="hljs-string">"SHOW DATABASES"</span> (<span class="hljs-keyword">fun</span> res -&gt;\n  <span class="hljs-keyword">match</span> res <span class="hljs-keyword">with</span>\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> e -&gt; raise e\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> select -&gt;\n    select\n    |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.<span class="hljs-type">Select</span>.flatMap (<span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.dict <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.<span class="hljs-built_in">string</span>)\n    |. <span class="hljs-type">Belt</span>.<span class="hljs-type">Array</span>.map (<span class="hljs-keyword">fun</span> x -&gt; <span class="hljs-type">Js</span>.dict.unsafeGet x <span class="hljs-string">"Database"</span>)\n    |. <span class="hljs-type">Expect</span>.expect\n    |&gt; <span class="hljs-type">Expect</span>.toContain @@ <span class="hljs-string">"test"</span>\n)</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p><strong><em>Note:</em></strong> All of the examples use the <a href="https://github.com/scull7/bs-mysql2"><code>bs-mysql2</code></a> package as the\nconnection provider. Any other provider should have the same behavior with\ndiffering connection creation requirements.</p>\n<h3 id="create-a-connection-and-customized-module"><a href="#create-a-connection-and-customized-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create a connection and customized module</h3>\n<p>The following connection and module will be use within the rest of the examples.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Sql</span> = <span class="hljs-title">SqlCommon</span>.<span class="hljs-title">Make</span>(<span class="hljs-title">MySql2</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">db</span> = <span class="hljs-title">Sql</span>.<span class="hljs-title">Connection</span>.<span class="hljs-title">connect</span>(~<span class="hljs-title">host</span>="127.0.0.1", ~<span class="hljs-title">port</span>=3306, ~<span class="hljs-title">user</span>="<span class="hljs-title">root</span>", ());</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Sql</span> = <span class="hljs-type">SqlCommon</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">MySql2</span>)\n<span class="hljs-keyword">let</span> db = <span class="hljs-type">Sql</span>.<span class="hljs-type">Connection</span>.connect ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>Assume the following statement occurs at the end of each example.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Sql</span>.<span class="hljs-type">Connection</span>.close(conn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">Sql</span>.<span class="hljs-type">Connection</span>.close conn</code></pre>\n      </div>\n    </div>\n  \n<h3 id="standard-callback-interface"><a href="#standard-callback-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Callback Interface</h3>\n<h4 id="standard-query-method"><a href="#standard-query-method" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Query Method</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Sql</span>.query(~db, ~sql=<span class="hljs-string">"SHOW DATABASES"</span>,\n  <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params">\n<span class="hljs-params"> <span class="hljs-params"> |<span class="hljs-params"> Belt.Result.Error<span class="hljs-params"> e<span class="hljs-params"> </span></span></span></span></span></span></span>=&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> select =&gt;\n    select\n    |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.<span class="hljs-type">Select</span>.rows\n    |. <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"RESPONSE ROWS: "</span>, <span class="hljs-number">_</span>)\n);\n\n<span class="hljs-type">Sql</span>.mutate(\n  ~db,\n  ~sql=<span class="hljs-string">"INSERT INTO test (foo) VALUES (?)"</span>,\n  ~params=<span class="hljs-type">Sql</span>.<span class="hljs-type">Params</span>.positional(<span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.([|string(<span class="hljs-string">"bar"</span>)|] |. array)),\n  (res) =&gt;\n    <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params">\n<span class="hljs-params"> <span class="hljs-params"> <span class="hljs-params"> <span class="hljs-params"> |<span class="hljs-params"> Belt.Result.Error<span class="hljs-params"> </span></span></span></span></span></span></span></span>=&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n    | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> mutation =&gt;\n      mutation\n      |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.<span class="hljs-type">Mutation</span>.insertId\n      |. <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"INSERT ID: "</span>, <span class="hljs-number">_</span>)\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">767</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements---named-placeholders"><a href="#prepared-statements---named-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements - Named Placeholders</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> json = <span class="hljs-type">Sql</span>.<span class="hljs-type">Params</span>.named(\n  <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"x"</span>, int(<span class="hljs-number">1</span>)),\n  (<span class="hljs-string">"y"</span>, int(<span class="hljs-number">2</span>)),\n  ]))\n));\n\n<span class="hljs-keyword">let</span> decoder = <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.array(<span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.int)\n\n<span class="hljs-type">Sql</span>.query(~db, ~sql:<span class="hljs-string">"SELECT :x + :y AS z"</span>, ~params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> select =&gt;\n    select\n    |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.flatMap(decoder)\n    |. <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"DECODED ROWS: "</span>, <span class="hljs-number">_</span>)\n  }\n);\n\n<span class="hljs-type">Sql</span>.mutate(~db, ~sql:<span class="hljs-string">"INSERT INTO test (foo, bar) VALUES (:x, :y)"</span>, ~params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> mutation =&gt;\n    mutation\n    |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.<span class="hljs-type">Mutation</span>.insertId\n    |. <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"INSERT ID: "</span>, <span class="hljs-number">_</span>)\n  }\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2540</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements---positional-placeholders"><a href="#prepared-statements---positional-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements - Positional Placeholders</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> params = <span class="hljs-type">Sql</span>.<span class="hljs-type">Params</span>.positional(\n  <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(array(int, [|<span class="hljs-number">5</span>,<span class="hljs-number">6</span>|]))\n));\n\n<span class="hljs-type">Sql</span>.query(~db, ~sql:<span class="hljs-string">"SELECT 1 + ? + ? AS result"</span>, ~params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> select =&gt;\n    select\n    |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.rows\n    |. <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"RAW ROWS: "</span>, <span class="hljs-number">_</span>)\n  }\n);\n\n<span class="hljs-type">Sql</span>.mutate(~db, ~sql:<span class="hljs-string">"INSERT INTO test (foo, bar) VALUES (?, ?)"</span>, ~params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> mutation =&gt;\n    mutation\n    |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.<span class="hljs-type">Mutation</span>.insertId\n    |. <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"INSERT ID: "</span>, <span class="hljs-number">_</span>)\n  }\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2540</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="promise-interface"><a href="#promise-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promise Interface</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> params = <span class="hljs-type">Sql</span>.<span class="hljs-type">Params</span>.positional(\n  <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(array(int, [|<span class="hljs-string">"%schema"</span>|]))\n));\n\n<span class="hljs-type">Sql</span>.query(~db, ~params, ~sql=<span class="hljs-string">"SELECT ? AS search"</span>)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(select =&gt;\n  select\n  |. <span class="hljs-type">Sql</span>.<span class="hljs-type">Response</span>.rows\n  |. <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"RAW ROWS: "</span>, <span class="hljs-number">_</span>)\n  |. ignore\n)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch(err =&gt;\n  <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"Failure!!!"</span>, err)\n  |. ignore\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2540</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="sqlid"><a href="#sqlid" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sql.Id</h2>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Id</span>: <span class="hljs-keyword">sig</span>\n  <span class="hljs-keyword">type</span> t = <span class="hljs-type">Driver</span>.<span class="hljs-type">Id</span>.t\n\n  <span class="hljs-keyword">val</span> fromJson : <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; <span class="hljs-type">Driver</span>.<span class="hljs-type">Id</span>.t\n\n  <span class="hljs-keyword">val</span> toJson : <span class="hljs-type">Driver</span>.<span class="hljs-type">Id</span>.t -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t\n\n  <span class="hljs-keyword">val</span> toString : <span class="hljs-type">Driver</span>.<span class="hljs-type">Id</span>.t -&gt; <span class="hljs-built_in">string</span>\n<span class="hljs-keyword">end</span></code></pre></div>\n<h2 id="sqlresponse"><a href="#sqlresponse" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sql.Response</h2>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Response</span>: <span class="hljs-keyword">sig</span>\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Mutation</span>: <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">val</span> insertId : <span class="hljs-type">Driver</span>.<span class="hljs-type">Mutation</span>.t -&gt; <span class="hljs-type">Id</span>.t option\n\n    <span class="hljs-keyword">val</span> affectedRows: <span class="hljs-type">Driver</span>.<span class="hljs-type">Mutation</span>.t -&gt; <span class="hljs-built_in">int</span>\n  <span class="hljs-keyword">end</span>\n\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Select</span>: <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">module</span> <span class="hljs-type">Meta</span> : <span class="hljs-keyword">sig</span>\n      <span class="hljs-keyword">val</span> schema : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.<span class="hljs-type">Meta</span>.t -&gt; <span class="hljs-built_in">string</span>\n\n      <span class="hljs-keyword">val</span> name : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.<span class="hljs-type">Meta</span>.t -&gt; <span class="hljs-built_in">string</span>\n\n      <span class="hljs-keyword">val</span> table : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.<span class="hljs-type">Meta</span>.t -&gt; <span class="hljs-built_in">string</span>\n    <span class="hljs-keyword">end</span>\n\n    <span class="hljs-keyword">val</span> meta : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t -&gt; <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.<span class="hljs-type">Meta</span>.t <span class="hljs-built_in">array</span>\n\n    <span class="hljs-keyword">val</span> concat : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t -&gt; <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t -&gt; <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t\n\n    <span class="hljs-keyword">val</span> count : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t -&gt; <span class="hljs-built_in">int</span>\n\n    <span class="hljs-keyword">val</span> flatMap :\n      <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t -&gt;\n      (<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.<span class="hljs-type">Meta</span>.t <span class="hljs-built_in">array</span> -&gt; <span class="hljs-symbol">\'a</span>) -&gt;\n      <span class="hljs-symbol">\'a</span> <span class="hljs-built_in">array</span>\n\n    <span class="hljs-keyword">val</span> flatMap : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t -&gt; (<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; <span class="hljs-symbol">\'a</span>) -&gt; <span class="hljs-symbol">\'a</span> <span class="hljs-built_in">array</span>\n\n    <span class="hljs-keyword">val</span> rows : <span class="hljs-type">Driver</span>.<span class="hljs-type">Select</span>.t -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t <span class="hljs-built_in">array</span>\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">end</span></code></pre></div>\n<h2 id="queryable-interface"><a href="#queryable-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Queryable Interface</h2>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-keyword">type</span> <span class="hljs-type">Queryable</span> = <span class="hljs-keyword">sig</span>\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Connection</span> : <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">type</span> t\n\n    <span class="hljs-keyword">val</span> connect :\n      ?host:<span class="hljs-built_in">string</span> -&gt;\n      ?port:<span class="hljs-built_in">int</span> -&gt;\n      ?user:<span class="hljs-built_in">string</span> -&gt;\n      ?password:<span class="hljs-built_in">string</span> -&gt;\n      ?database:<span class="hljs-built_in">string</span> -&gt;\n      <span class="hljs-built_in">unit</span> -&gt; t\n\n    <span class="hljs-keyword">val</span> close : t -&gt; <span class="hljs-built_in">unit</span>\n  <span class="hljs-keyword">end</span>\n\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Exn</span> : <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">val</span> fromJs : <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; <span class="hljs-built_in">exn</span>\n  <span class="hljs-keyword">end</span>\n\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Id</span> : <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">type</span> t\n\n    <span class="hljs-keyword">val</span> fromJson : <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; t\n\n    <span class="hljs-keyword">val</span> toJson : t -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t\n\n    <span class="hljs-keyword">val</span> toString : t -&gt; <span class="hljs-built_in">string</span>\n  <span class="hljs-keyword">end</span>\n\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Mutation</span> : <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">type</span> t\n\n    <span class="hljs-keyword">val</span> insertId : t -&gt; <span class="hljs-type">Id</span>.t option\n\n    <span class="hljs-keyword">val</span> affectedRows : t -&gt; <span class="hljs-built_in">int</span>\n  <span class="hljs-keyword">end</span>\n\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Params</span> : <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">type</span> t\n\n    <span class="hljs-keyword">val</span> named : <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; t\n\n    <span class="hljs-keyword">val</span> positional : <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; t\n  <span class="hljs-keyword">end</span>\n\n  <span class="hljs-keyword">module</span> <span class="hljs-type">Select</span> : <span class="hljs-keyword">sig</span>\n    <span class="hljs-keyword">type</span> t\n\n    <span class="hljs-keyword">module</span> <span class="hljs-type">Meta</span> : <span class="hljs-keyword">sig</span>\n      <span class="hljs-keyword">type</span> t\n\n      <span class="hljs-keyword">val</span> schema : t -&gt; <span class="hljs-built_in">string</span>\n\n      <span class="hljs-keyword">val</span> name : t -&gt; <span class="hljs-built_in">string</span>\n\n      <span class="hljs-keyword">val</span> table : t -&gt; <span class="hljs-built_in">string</span>\n    <span class="hljs-keyword">end</span>\n\n    <span class="hljs-keyword">val</span> meta : t -&gt; <span class="hljs-type">Meta</span>.t <span class="hljs-built_in">array</span>\n\n    <span class="hljs-keyword">val</span> concat : t -&gt; t -&gt; t\n\n    <span class="hljs-keyword">val</span> count : t -&gt; <span class="hljs-built_in">int</span>\n\n    <span class="hljs-keyword">val</span> flatMapWithMeta : t -&gt; (<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; <span class="hljs-type">Meta</span>.t <span class="hljs-built_in">array</span> -&gt; <span class="hljs-symbol">\'a</span>) -&gt; <span class="hljs-symbol">\'a</span> <span class="hljs-built_in">array</span>\n\n    <span class="hljs-keyword">val</span> flatMap : t -&gt; (<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; <span class="hljs-symbol">\'a</span>) -&gt; <span class="hljs-symbol">\'a</span> <span class="hljs-built_in">array</span>\n\n    <span class="hljs-keyword">val</span> rows : t -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t <span class="hljs-built_in">array</span>\n  <span class="hljs-keyword">end</span>\n\n  <span class="hljs-keyword">type</span> response =\n    [\n    | <span class="hljs-tag">`Error</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">exn</span>\n    | <span class="hljs-tag">`Mutation</span> <span class="hljs-keyword">of</span> <span class="hljs-type">Mutation</span>.t\n    | <span class="hljs-tag">`Select</span> <span class="hljs-keyword">of</span> <span class="hljs-type">Select</span>.t\n    ]\n\n  <span class="hljs-keyword">type</span> callback = response -&gt; <span class="hljs-built_in">unit</span>\n\n  <span class="hljs-keyword">val</span> execute : <span class="hljs-type">Connection</span>.t -&gt; <span class="hljs-built_in">string</span> -&gt; <span class="hljs-type">Params</span>.t option -&gt; callback -&gt; <span class="hljs-built_in">unit</span>\n<span class="hljs-keyword">end</span></code></pre></div>\n',
homepageUrl:"https://github.com/scull7/bs-sql-common",repositoryUrl:"https://github.com/scull7/bs-sql-common",npmUrl:"https://www.npmjs.com/package/bs-sql-common",issuesUrl:"https://github.com/scull7/bs-sql-common/issues",slug:"/package/bs-sql-common"}},pathContext:{id:"bs-sql-common"}}}});
//# sourceMappingURL=path---package-bs-sql-common-61346c4fa3961236bc9e.js.map