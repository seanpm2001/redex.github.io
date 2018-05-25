webpackJsonp([71038036364555],{1121:function(s,n){s.exports={data:{package:{id:"bs-knex",stars:14,name:"bs-knex",version:"3.1.0",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"BuckleScript interface to the node 'knex' library",keywords:["sql"],license:"BSD-2-Clause",updated:"2018-05-19T16:47:06.080Z",type:"published",score:.6435780390548927,quality:.9186640180068306,popularity:.05143991005695234,maintenance:.9999281860940294,readme:'<h1 id="bs-knex"><a href="#bs-knex" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-knex</h1>\n<p><a href="http://npm.im/bs-knex"><img src="https://img.shields.io/npm/v/bs-knex.svg" alt="version"></a>\n<a href="http://npm.im/bs-knex"><img src="https://img.shields.io/npm/dt/bs-knex.svg" alt="downloads"></a>\n<a href="LICENSE"><img src="https://img.shields.io/npm/l/express.svg" alt="license"></a></p>\n<p>BuckleScript utilities for working with the Node <a href="http://knexjs.org/">knex</a> library.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>To start working with Knex, first define a config:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (to_opt, getWithDefault) = (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt, <span class="hljs-type">Js</span>.<span class="hljs-type">Option</span>.getWithDefault);\n\n<span class="hljs-keyword">let</span> connection =\n  <span class="hljs-type">KnexConfig</span>.<span class="hljs-type">Connection</span>.make(\n    ~user=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.username,\n    ~password=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.password,\n    ~host=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.hostname,\n    ~port=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.port,\n    ~database=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.name,\n    ()\n  );\n\n<span class="hljs-keyword">let</span> pool =\n  <span class="hljs-type">KnexConfig</span>.<span class="hljs-type">Pool</span>.make(\n    ~<span class="hljs-built_in">min</span>=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.poolMin,\n    ~<span class="hljs-built_in">max</span>=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.poolMax,\n    ~idleTimeoutMillis=<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.poolIdle,\n    ()\n  );\n\n<span class="hljs-keyword">let</span> config =\n  <span class="hljs-type">KnexConfig</span>.make(~client=<span class="hljs-string">"pg"</span>, ~connection, ~pool, ~acquireConnectionTimeout=<span class="hljs-number">2000</span>, ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (to_opt,getWithDefault) = (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt, <span class="hljs-type">Js</span>.<span class="hljs-type">Option</span>.getWithDefault)\n<span class="hljs-keyword">let</span> connection =\n  <span class="hljs-type">KnexConfig</span>.<span class="hljs-type">Connection</span>.make ~user:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.username\n    ~password:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.password ~host:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.hostname\n    ~port:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.port ~database:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.name <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> pool =\n  <span class="hljs-type">KnexConfig</span>.<span class="hljs-type">Pool</span>.make ~min:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.poolMin\n    ~max:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.poolMax ~idleTimeoutMillis:<span class="hljs-type">Config</span>.<span class="hljs-type">Database</span>.poolIdle\n    <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> config =\n  <span class="hljs-type">KnexConfig</span>.make ~client:<span class="hljs-string">"pg"</span> ~connection ~pool\n    ~acquireConnectionTimeout:<span class="hljs-number">2000</span> <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>Then you can initialize a client:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> knex = <span class="hljs-type">Knex</span>.make(config);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> knex = <span class="hljs-type">Knex</span>.make config</code></pre>\n      </div>\n    </div>\n  \n<p>You can now try a raw query to verify the connection:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>knex |&gt; <span class="hljs-type">Knex</span>.raw(<span class="hljs-string">"select now()"</span>)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = knex |&gt; (<span class="hljs-type">Knex</span>.raw <span class="hljs-string">"select now()"</span>)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="querying"><a href="#querying" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Querying</h2>\n<p>Use the query builder to structure your request for the database:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Knex</span>.(\n  knex\n  |&gt; fromTable(<span class="hljs-string">"users"</span>)\n  |&gt; <span class="hljs-keyword">where</span>({<span class="hljs-string">"id"</span>: id})\n  |&gt; update({<span class="hljs-string">"first_name"</span>: firstName})\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Knex</span> <span class="hljs-keyword">in</span>\n    ((knex |&gt; (fromTable <span class="hljs-string">"users"</span>)) |&gt; (where ([%bs.obj { id }]))) |&gt;\n      (update ([%bs.obj { first_name = firstName }]))</code></pre>\n      </div>\n    </div>\n  \n<p>When you\'re ready to wait for results, call <code>toPromise</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>|&gt; then_(\n  (results) =&gt;\n    <span class="hljs-keyword">switch</span> results {\n    <span class="hljs-comment">/* No user found, so resolve with None to signal onboarding */</span>\n    | [||] =&gt; resolve(<span class="hljs-type">None</span>)\n    | users =&gt; resolve(<span class="hljs-type">Some</span>(users[<span class="hljs-number">0</span>]))\n    }\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Handle empty results with the <code>rejectIfAny</code> handler:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>|&gt; then_(rejectIfEmpty(~error=<span class="hljs-string">"Unable to update User with id: "</span> ++ id))</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Handle specific unique violations with the <code>handleUniqueError</code> utility:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>|&gt; <span class="hljs-type">KnexUtils</span>.handleUniqueError(\n  ~name=<span class="hljs-string">"users_email_unique"</span>,\n  ~message=<span class="hljs-string">"That email address is already in use."</span>\n)\n|&gt; <span class="hljs-type">KnexUtils</span>.handleUniqueError(\n  ~name=<span class="hljs-string">"users_user_name_unique"</span>,\n  ~message=<span class="hljs-string">"That user name is already in use."</span>\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Finish off your operation by handling any remaining generic database errors with <code>KnexUtils</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>|&gt; <span class="hljs-type">KnexUtils</span>.handleDbErrors</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>This handles a some common database error cases, which will hopefully grow over time as the library becomes more mature.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p><a href="LICENSE">BSD 2-Clause</a></p>\n',homepageUrl:"https://github.com/ecliptic/bucklescript-tools#readme",repositoryUrl:"https://github.com/ecliptic/bucklescript-tools",npmUrl:"https://www.npmjs.com/package/bs-knex",issuesUrl:"https://github.com/ecliptic/bucklescript-tools/issues",slug:"/package/bs-knex"}},pathContext:{id:"bs-knex"}}}});
//# sourceMappingURL=path---package-bs-knex-3896858f44d4ae79f875.js.map