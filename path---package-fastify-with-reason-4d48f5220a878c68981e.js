webpackJsonp([81804106102071],{1270:function(s,a){s.exports={data:{package:{type:"published",id:"fastify-with-reason",name:"fastify-with-reason",version:"0.1.4",category:"binding",flags:[],platforms:["node"],description:"Fastify bindings in Reason",keywords:["platform api"],license:"MIT",updated:"2019-04-12T09:06:29.348Z",stars:4,score:.4905630426484791,quality:.4323708564762615,popularity:.03155046728581531,maintenance:.9994546347301867,readme:'<p><img src="https://raw.githubusercontent.com/aaronshaf/reasonml-fastify/master/Reasonfastify.png" alt="Logo"></p>\n<p><a href="https://www.fastify.io/">Fastify</a> bindings for <a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> in <a href="https://reasonml.github.io/">ReasonML</a> </p>\n<p><img src="https://img.shields.io/npm/v/fastify-with-reason.svg?style=plastic"> <img src="https://img.shields.io/github/license/aaronshaf/reasonml-fastify.svg?style=plastic"> </p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>Create a new project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>bsb -<span class="hljs-keyword">init</span> server -theme basic-reason</code></pre></div>\n<p>Install fastify-with-reason using npm:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn add fastify-<span class="hljs-keyword">with</span>-reason</code></pre></div>\n<p>Then add fastify-with-reason as a dependency to <code>bsconfig.json</code></p>\n<h2 id="example-server"><a href="#example-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example Server</h2>\n<p>Create a Server.re inside src:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Fastify</span>;\n\n<span class="hljs-keyword">let</span> app = createServer(~logger=<span class="hljs-literal">true</span>);\n\napp-&gt;<span class="hljs-keyword">get</span>(<span class="hljs-string">"/"</span>, (_request, reply) =&gt; reply-&gt;send(<span class="hljs-string">"Hello, world!"</span>));\n\napp-&gt;listen(<span class="hljs-number">3000</span>, result =&gt;\n  <span class="hljs-keyword">switch</span> (result) {\n  | <span class="hljs-type">Ok</span>(_address) =&gt; ()\n  | <span class="hljs-type">Error</span>(error) =&gt;\n    app-&gt;logError(error);\n    <span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.exit(<span class="hljs-number">1</span>);\n  }\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>This server simply respond with a json "Hello, world!" on localhost:3000</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn build\nnode src/Server.bs.js</code></pre></div>\n<h3 id="a-little-benchmark-with-autocannon"><a href="#a-little-benchmark-with-autocannon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A little Benchmark with Autocannon</h3>\n<p>On my iMac (2,3 GHz Intel Core i5 - 8 GB 2133 MHz DDR4)</p>\n<p><img src="https://raw.githubusercontent.com/aaronshaf/reasonml-fastify/master/Benchmark.png" alt="Benchmark"></p>\n<p>Go to <a href="https://github.com/aaronshaf/reasonml-fastify/wiki">Wiki</a> for documentation (coming soon)</p>\n',homepageUrl:"https://github.com/aaronshaf/reasonml-fastify#readme",repositoryUrl:"https://github.com/aaronshaf/reasonml-fastify",npmUrl:"https://www.npmjs.com/package/fastify-with-reason",issuesUrl:"https://github.com/aaronshaf/reasonml-fastify/issues",slug:"/package/fastify-with-reason"}},pathContext:{id:"fastify-with-reason"}}}});
//# sourceMappingURL=path---package-fastify-with-reason-4d48f5220a878c68981e.js.map