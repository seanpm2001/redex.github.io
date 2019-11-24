webpackJsonp([97986901988337],{1256:function(e,a){e.exports={data:{package:{type:"published",id:"bs-react-ga",name:"bs-react-ga",version:"0.0.2",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for react-ga (Google Analytics)",keywords:["react","analytics"],license:"MIT",updated:"2019-11-18T00:14:23.581Z",stars:1,score:.26371288543680627,quality:.4118158552877945,popularity:.019526033927892122,maintenance:.3809543342163019,readme:'<h1 id="bs-react-ga"><a href="#bs-react-ga" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-ga</h1>\n<p>Bucklescript bindings for <a href="https://github.com/react-ga/react-ga">react-ga</a>.</p>\n<p>From <code>react-ga</code> documentation:</p>\n<p>React-ga is a JavaScript module that can be used to include Google Analytics tracking code in a website or app that uses React for its front-end codebase. It does not currently use any React code internally, but has been written for use with a number of Mozilla Foundation websites that are using React, as a way to standardize our GA Instrumentation across projects.</p>\n<p>It is designed to work with the latest version of Google Analytics, Universal Analytics. At this point, all Google Analytics projects are being upgraded to Universal Analytics, so this module will not support the older ga.js implementation.</p>\n<p>This module is mildly opinionated in how we instrument tracking within our front-end code. Our API is slightly more verbose than the core Google Analytics library, in the hope that the code is easier to read and understand for our engineers. See examples below.</p>\n<h1 id="prerequisites"><a href="#prerequisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --global bs-platform\nyarn install</code></pre></div>\n<h1 id="how-to-compile"><a href="#how-to-compile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to compile</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn build</code></pre></div>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-react-ga</code></pre></div>\n<p>And add <code>bs-react-ga</code> to <code>dependencies</code> node of your <code>bsconfig.json</code>.</p>\n<p>For the moment, only <code>initialize</code> and <code>pageView</code> bindings are provided.</p>\n<h1 id="code-snippets"><a href="#code-snippets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code snippets</h1>\n<p>GA must be initialized using <code>initialize</code> before any of the other tracking functions will record any data. </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ReactGa</span>.initialize(<span class="hljs-string">"&lt;you GA id&gt;"</span>);\n<span class="hljs-type">ReactGa</span>.pageView(location.pathname ++ location.hash ++ location.search);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">ReactGa</span>.initialize <span class="hljs-string">"&lt;you GA id&gt;"</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">ReactGa</span>.pageView (location.pathname ^ (location.hash ^ location.search))</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/viebel/bs-react-ga#readme",repositoryUrl:"https://github.com/viebel/bs-react-ga",npmUrl:"https://www.npmjs.com/package/bs-react-ga",issuesUrl:"https://github.com/viebel/bs-react-ga/issues",slug:"/package/bs-react-ga"}},pathContext:{id:"bs-react-ga"}}}});
//# sourceMappingURL=path---package-bs-react-ga-820b5d61a6a17d92fc9d.js.map