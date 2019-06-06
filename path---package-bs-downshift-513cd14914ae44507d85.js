webpackJsonp([61643412601810],{1178:function(e,s){e.exports={data:{package:{type:"published",id:"bs-downshift",name:"bs-downshift",version:"1.0.1",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for Downshift",keywords:["react","ui"],license:"MIT",updated:"2019-06-03T08:10:08.049Z",stars:20,score:.49194700992282203,quality:.6078551768925685,popularity:.05056748318833139,maintenance:.8339766792546729,readme:'<h1 id="bs-downshift"><a href="#bs-downshift" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>bs-downshift</code></h1>\n<p><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/paypal/downshift">Downshift</a></p>\n<p><a href="https://npmjs.org/bs-downshift"><img src="https://img.shields.io/npm/v/bs-downshift.svg" alt="npm"></a>\n<a href="https://github.com/reasonml-community/bs-downshift/issues"><img src="https://img.shields.io/github/issues/reasonml-community/bs-downshift.svg" alt="Issues"></a>\n<a href="https://github.com/reasonml-community/bs-downshift/blob/master/package.json"><img src="https://img.shields.io/david/peer/reasonml-community/bs-downshift.svg" alt="Dependencies"></a>\n<a href="https://github.com/reasonml-community/bs-downshift/issues"><img src="https://img.shields.io/github/issues/reasonml-community/bs-downshift.svg" alt="Issues"></a>\n<a href=""><img src="https://img.shields.io/github/last-commit/reasonml-community/bs-downshift.svg" alt="Last Commit"></a></p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<p><em>Coming soon</em></p>\n<h2 id="compatibility-with-original-downshift-library"><a href="#compatibility-with-original-downshift-library" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Compatibility with original <code>downshift</code> library</h2>\n<p>Compatible with <code>downshift</code> <a href="https://github.com/paypal/downshift/releases/tag/v1.25.0">v1.25.0</a>.</p>\n<blockquote>\n<p>Using newer versions of <code>downshift</code> might break the bindings as the API might have changed. Use at your own risk.</p>\n</blockquote>\n<h2 id="install-and-setup"><a href="#install-and-setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install and setup</h2>\n<h4 id="yarn"><a href="#yarn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>yarn</h4>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ yarn add bs-downshift</code></pre></div>\n<h4 id="bsconfig"><a href="#bsconfig" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig</h4>\n<p>Add <code>bs-downshift</code> to your <code>bs-dependencies</code>: <strong>bsconfig.json</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"bs-downshift"</span>,\n  <span class="hljs-string">"reason-react"</span>\n]</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>See <a href="./examples">examples</a> folder.</p>\n<h3 id="usage-of-render-function"><a href="#usage-of-render-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage of <code>render</code> function</h3>\n<p>The <code>render</code> prop is a function that passes an object which contains <em>methods</em> and <em>values</em>.</p>\n<p>In ReasonML, this object is represented as a module called <code>ControllerStateAndHelpers</code>.</p>\n<p>To make use of the <em>methods</em> and <em>values</em> within that module, you need to call it by passing the argument type (which is of type <code>ControllerStateAndHelpers.t</code> and does effectively the binding to the JS object method) like:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>render=(\n  t =&gt; {\n    <span class="hljs-type">ControllerStateAndHelpers</span>.toggleMenu(t, <span class="hljs-literal">()</span>);\n    /* ... */\n  }\n)</code></pre></div>\n<p>You can see that in the <a href="./examples">examples</a> folder.</p>\n',homepageUrl:"https://github.com/reasonml-community/bs-downshift#readme",repositoryUrl:"https://github.com/reasonml-community/bs-downshift",npmUrl:"https://www.npmjs.com/package/bs-downshift",issuesUrl:"https://github.com/reasonml-community/bs-downshift/issues",slug:"/package/bs-downshift"}},pathContext:{id:"bs-downshift"}}}});
//# sourceMappingURL=path---package-bs-downshift-513cd14914ae44507d85.js.map