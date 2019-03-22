webpackJsonp([0xbf3d8826ce82],{1111:function(e,s){e.exports={data:{package:{type:"published",id:"@aantron/repromise",name:"@aantron/repromise",version:"0.6.0",category:"binding",flags:[],platforms:["browser","node","native"],description:"Type-safe JS promises for ReasonML",keywords:["async"],license:"MIT",updated:"2019-03-05T01:52:25.328Z",stars:198,score:.5667055627916819,quality:.7544159769759049,popularity:.10469543485814371,maintenance:.867821049995886,readme:'<h1 id="repromise----version-060-travis-status"><a href="#repromise----version-060-travis-status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Repromise    <a href="https://www.npmjs.com/package/@aantron/repromise"><img src="https://img.shields.io/npm/v/@aantron/repromise.svg" alt="Version 0.6.0"></a> <a href="https://travis-ci.org/aantron/repromise/branches"><img src="https://img.shields.io/travis/aantron/repromise/master.svg?label=travis" alt="Travis status"></a></h1>\n<p>Repromise is a binding to JS promises, with:</p>\n<ul>\n<li><strong>Interop</strong> — each Repromise <a href="https://aantron.github.io/repromise/docs/Interop#representation">is a JS promise</a>, so JS libraries that return promises already return Repromises, and existing JS tooling should work.</li>\n<li><strong>Type safety</strong> — Repromises nest, and don\'t <a href="https://aantron.github.io/repromise/docs/DesignFAQ#why-are-js-promises-not-type-safe">"collapse"</a> like JS promises.</li>\n<li><strong>Explicit errors</strong> — no baked-in <code>reject</code> or exception handling, so you can choose how to handle errors.</li>\n<li><strong>Minimal code</strong> — the compiled <code>repromise.js</code> compresses to about 1K.</li>\n<li><strong>Native support</strong> — Repromise also has a <a href="https://github.com/aantron/repromise/blob/master/src/native/repromise.re">pure-Reason implementation</a>, which compiles to native code.</li>\n<li><strong><code>async</code>/<code>await</code> syntax</strong> — this is unreleased, but see a preview <a href="https://aantron.github.io/repromise/docs/DesignFAQ#is-there-an-async-await-syntax-for-repromise">here</a>.</li>\n</ul>\n<br/>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> (p, resolve_p) = <span class="hljs-type">Repromise</span>.make<span class="hljs-literal">()</span>;\n\np\n|&gt; <span class="hljs-type">Repromise</span>.map(s =&gt; s ++ <span class="hljs-string">", world!"</span>)\n|&gt; <span class="hljs-type">Repromise</span>.wait(print_endline);\n\nresolve_p(<span class="hljs-string">"Hello"</span>);\n\n/* <span class="hljs-type">Prints</span> <span class="hljs-string">"Hello, world!"</span> */</code></pre></div>\n<br/>\n<h2 id="installing"><a href="#installing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-platform\nnpm install @aantron/repromise</code></pre></div>\n<p>Add <code>@aantron/repromise</code> to your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"@aantron/repromise"</span>\n  ]\n}</code></pre></div>\n<br/>\n<h2 id="sample-projects"><a href="#sample-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sample projects</h2>\n<p>We have a couple repos that show how to depend on Repromise and get started with it:</p>\n<ul>\n<li><a href="https://github.com/aantron/repromise-example-bsb#readme">Minimal project that prints <code>"Hello, world!"</code>.</a></li>\n<li><a href="https://github.com/aantron/repromise-example-binding#readme">Minimal binding to a JS library, <code>node-fetch</code>.</a></li>\n</ul>\n<br/>\n<h2 id="docs"><a href="#docs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Docs</h2>\n<p>...are <a href="https://aantron.github.io/repromise">online</a>!</p>\n<p>To begin, we recommend looking at the <a href="https://github.com/aantron/repromise-example-bsb#readme"><code>"Hello, world!"</code> project</a>, and then reading the <a href="https://aantron.github.io/repromise/docs/API">API docs</a>. Starting from <a href="https://aantron.github.io/repromise/docs/API#wait"><code>wait</code></a>, each function has examples. You can paste them into the <code>"Hello, world!"</code> project to play around with Repromise.</p>\n<p>The <a href="https://aantron.github.io/repromise/docs/DesignFAQ">Design FAQ</a> gives some background about Repromise.</p>\n<p>To learn how to write bindings, we suggest starting with the <a href="https://github.com/aantron/repromise-example-binding#readme"><code>node-fetch</code> project</a>, then reading the <a href="https://aantron.github.io/repromise/docs/Interop">Interop docs</a>, and perhaps the <a href="https://aantron.github.io/repromise/docs/RejectableAPI">rejectable API docs</a>.</p>\n<br/>\n<h2 id="roadmap"><a href="#roadmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Roadmap</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> Release <a href="https://github.com/aantron/repromise/blob/master/src/native/repromise.re">native implementation</a>.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Release <a href="https://aantron.github.io/repromise/docs/DesignFAQ#is-there-an-async-await-syntax-for-repromise"><code>let%await</code> syntax</a> (the PPX).</li>\n<li class="task-list-item"><input type="checkbox" disabled> Helpers for converting <code>Repromise.Rejectable.t</code> to <code>Belt.Result.t</code>.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Smarter <a href="https://aantron.github.io/repromise/docs/API#onunhandledexception">async exception handling</a>.</li>\n</ul>\n<br/>\n<h2 id="contact"><a href="#contact" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contact</h2>\n<p>Please don\'t hesitate to <a href="https://github.com/aantron/repromise/issues/new">open an issue</a>, or come <a href="https://discordapp.com/invite/reasonml">bug us on Discord</a>. All questions, feedback, and <a href="https://github.com/aantron/repromise/issues/22">bikeshedding</a> are welcome :)</p>\n<p>Repromise is at a pretty early stage of development, and we can change just about everything.</p>\n',homepageUrl:"https://aantron.github.io/repromise",repositoryUrl:"https://github.com/aantron/repromise",npmUrl:"https://www.npmjs.com/package/%40aantron%2Frepromise",issuesUrl:"https://github.com/aantron/repromise/issues",slug:"/package/@aantron/repromise"}},pathContext:{id:"@aantron/repromise"}}}});
//# sourceMappingURL=path---package-aantron-repromise-af4d6d8eed502f86d55c.js.map