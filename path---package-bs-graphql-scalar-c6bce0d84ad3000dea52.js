webpackJsonp([99980340178535],{1188:function(s,a){s.exports={data:{package:{type:"published",id:"bs-graphql-scalar",name:"bs-graphql-scalar",version:"0.2.2",category:"library",flags:["neglected"],platforms:["node"],description:"BuckleScript interface to create GraphQL Custom Scalar types",keywords:["graphql"],license:"BSD-2-Clause",updated:"2019-04-27T01:18:45.518Z",stars:16,score:.41327417537647126,quality:.8203707135412642,popularity:.046243425140004624,maintenance:.43136503575740115,readme:'<h1 id="bs-graphql-scalar"><a href="#bs-graphql-scalar" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-graphql-scalar</h1>\n<p><a href="http://npm.im/bs-graphql-scalar"><img src="https://img.shields.io/npm/v/bs-graphql-scalar.svg" alt="version"></a>\n<a href="http://npm.im/bs-graphql-scalar"><img src="https://img.shields.io/npm/dt/bs-graphql-scalar.svg" alt="downloads"></a>\n<a href="LICENSE"><img src="https://img.shields.io/npm/l/express.svg" alt="license"></a></p>\n<p>BuckleScript utilities for creating new GraphQL scalar types.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>To create a new scalar using the <code>graphql</code> JavaScript libary, you need three functions:</p>\n<ul>\n<li><code>serialize</code> - Used when serializing results to send back to the client.</li>\n<li><code>parseValue</code> - Used to parse input that was provided as variables by the client.</li>\n<li><code>parseLiteral</code> - Used to parse input that was provided inline in the query.</li>\n</ul>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> serializeDateTime = (value) =&gt;\n  value |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.getTime |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Float</span>.<span class="hljs-built_in">toString</span> |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.<span class="hljs-keyword">return</span>;\n\n<span class="hljs-keyword">let</span> parseDateTimeValue = (str) =&gt;\n  str |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.fromString |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.<span class="hljs-keyword">return</span>;\n\n<span class="hljs-keyword">let</span> parseDateTimeLiteral = (ast) =&gt; {\n  open <span class="hljs-type">Language</span>;\n  <span class="hljs-keyword">let</span> kind = getAstKind(ast);\n  <span class="hljs-keyword">if</span> (kind === intKind) {\n    ast |&gt; getAstValue |&gt; <span class="hljs-type">TextUtils</span>.parseInt_(<span class="hljs-number">10</span>) |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.<span class="hljs-keyword">return</span>\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.null\n  }\n};\n\n<span class="hljs-keyword">let</span> resolvers = {\n  <span class="hljs-string">"DateTime"</span>:\n    makeScalar({\n      <span class="hljs-string">"name"</span>: <span class="hljs-string">"DateTime"</span>,\n      <span class="hljs-string">"description"</span>: <span class="hljs-string">"DateTime custom scalar Type"</span>,\n      <span class="hljs-string">"serialize"</span>: serializeDateTime,\n      <span class="hljs-string">"parseValue"</span>: parseDateTimeValue,\n      <span class="hljs-string">"parseLiteral"</span>: parseDateTimeLiteral\n    }),\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> serializeDateTime <span class="hljs-keyword">value</span> =\n  ((<span class="hljs-keyword">value</span> |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.getTime) |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Float</span>.toString) |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.return\n<span class="hljs-keyword">let</span> parseDateTimeValue str =\n  (str |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.fromString) |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.return\n<span class="hljs-keyword">let</span> parseDateTimeLiteral ast =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Language</span> <span class="hljs-keyword">in</span>\n    <span class="hljs-keyword">let</span> kind = getAstKind ast <span class="hljs-keyword">in</span>\n    <span class="hljs-keyword">if</span> kind == intKind\n    <span class="hljs-keyword">then</span>\n      ((ast |&gt; getAstValue) |&gt; (<span class="hljs-type">TextUtils</span>.parseInt_ <span class="hljs-number">10</span>)) |&gt;\n        <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.return\n    <span class="hljs-keyword">else</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.null\n<span class="hljs-keyword">let</span> resolvers =\n  [%bs.obj\n    {\n      <span class="hljs-type">DateTime</span> =\n        (makeScalar\n           ([%bs.obj\n              {\n                name = <span class="hljs-string">"DateTime"</span>;\n                description = <span class="hljs-string">"DateTime custom scalar Type"</span>;\n                serialize = serializeDateTime;\n                parseValue = parseDateTimeValue;\n                parseLiteral = parseDateTimeLiteral\n              }]))\n    }]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p><a href="LICENSE">BSD 2-Clause</a></p>\n',homepageUrl:"https://github.com/ecliptic/bucklescript-tools#readme",repositoryUrl:"https://github.com/ecliptic/bucklescript-tools",npmUrl:"https://www.npmjs.com/package/bs-graphql-scalar",issuesUrl:"https://github.com/ecliptic/bucklescript-tools/issues",slug:"/package/bs-graphql-scalar"}},pathContext:{id:"bs-graphql-scalar"}}}});
//# sourceMappingURL=path---package-bs-graphql-scalar-c6bce0d84ad3000dea52.js.map