webpackJsonp([0xfa4d14d8112f],{1326:function(e,a){e.exports={data:{package:{type:"published",id:"@johnridesabike/bs-numeral",name:"@johnridesabike/bs-numeral",version:"3.0.0",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for Numeral.js",keywords:["utilities"],license:"MIT",updated:"2020-01-06T08:13:49.500Z",stars:1,score:.6045415541701267,quality:.8170640743779931,popularity:.027016005629760323,maintenance:.9999049425323219,readme:'<h1 id="bs-numeral"><a href="#bs-numeral" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-numeral</h1>\n<p>These are ReasonML/Bucklescript bindings for <a href="http://numeraljs.com/">Numeral.js</a>.</p>\n<p><img src="/screenshot.png" alt="bs-numeral code screenshot"></p>\n<h2 id="-use-in-your-project"><a href="#-use-in-your-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🏁 Use in your project</h2>\n<p>Run this command in your project\'s directory:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i @johnridesabike/bs-numeral</code></pre></div>\n<p>And then add the project to the <code>bs-dependencies</code> array in your <code>bsconfig.json</code> file, like so:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"@johnridesabike/bs-numeral"</span>\n]</code></pre></div>\n<h2 id="🧐-why-use-this-bs-numeral"><a href="#%F0%9F%A7%90-why-use-this-bs-numeral" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🧐 Why use this bs-numeral?</h2>\n<p>There are a few other Numeral.js bindings, and it\'s easy to write an simple binding yourself if you only use a few of its functions. This project aims to be a complete implementation. To help ensure accuracy, it uses (mostly) the same tests as vanilla Numeral.js. The goal is to provide a hassle-free replacement for people used to using Numeral.js in their JavaScript.</p>\n<h2 id="-documentation"><a href="#-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>📝 Documentation</h2>\n<p>As with most ReasonML bindings, the interface files are mostly self-documenting. <a href="/src/Numeral.rei">You can view this project\'s interface here</a>.</p>\n<p>Numeral.js uses several JS paradigms that don\'t directly translate to ReasonML, but this tries to make the transition as smooth as possible.</p>\n<p>Notable differences between this binding and vanilla Numeral.js:</p>\n<ul>\n<li>You create a numeral object with <code>Numeral.make</code>.</li>\n<li>The <code>Numeral</code> module only accepts floats. This is because once a number gets passed to the JavaScript side, it essentially becomes a float anyway. <code>Numeral</code> always returns values as floats.</li>\n<li>To use a string as input, use <code>Numeral.String</code>. The bindings for that module are almost the same as the base module, except that it accepts strings and returns <code>option</code>s. By keeping the two modules separate, we don\'t have to deal with <code>option</code> cases every time we use the module.</li>\n<li>bs-numeral cannot recieve <code>Null</code> as input.</li>\n<li>Some functions are not bound because they\'re irrelevant in ReasonML, such as <code>isNumeral</code>.</li>\n<li>Some functions that can take several optional inputs are split into multiple functions. For example: <code>numeral.format</code> has been turned into <code>Numeral.defaultFormat</code>, <code>Numeral.format</code>, and <code>Numeral.formatRound</code>.</li>\n<li>The math functions, <code>add</code>, <code>subtract</code>, etc., can only take floats (or strings, for the <code>String</code> module).</li>\n<li>The helper functions (<code>numeral._</code>) are available in <code>Numeral.Helpers</code>. They are not documented or tested by vanilla Numeral.js, so their bindings here are not well tested either. Some of them are irrelevant in ReasonML anyway.</li>\n<li>Numeral.js uses has several functions that accept or return JS objects for configuration. This binding uses BuckleScript abstract types as a replacement, which are rely on helper functions. For example, the confguration object is created with <code>makeConfig</code>, and the format configuration object is created with <code>makeFormat</code>. <a href="/src/Numeral.rei">The exact bindings are at the top of the rei file</a>.</li>\n</ul>\n<p>You\'ll notice that this binding is very strict about what types are accepted as input. Numeral.js can throw a runtime error with malformed inputs, or simply return <code>null</code>. Strictness helps ensure that corrupt data doesn\'t escape into the rest of your code. If you find the strictness too limiting, open an issue with your situation.</p>\n<h1 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h1 id="watch"><a href="#watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Watch</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run watch</code></pre></div>\n<h1 id="editor"><a href="#editor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor</h1>\n<p>If you use <code>vscode</code>, Press <code>Windows + Shift + B</code> it will build automatically</p>\n<h2 id="️-authors"><a href="#%EF%B8%8F-authors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>✍️ Authors</h2>\n<ul>\n<li><a href="https://github.com/johnridesabike">@johnridesabike</a> - Idea and initial work</li>\n</ul>\n',homepageUrl:"https://github.com/johnridesabike/bs-numeral",repositoryUrl:"https://github.com/johnridesabike/bs-numeral",npmUrl:"https://www.npmjs.com/package/%40johnridesabike%2Fbs-numeral",issuesUrl:"https://github.com/johnridesabike/bs-numeral/issues",slug:"/package/@johnridesabike/bs-numeral"}},pathContext:{id:"@johnridesabike/bs-numeral"}}}});
//# sourceMappingURL=path---package-johnridesabike-bs-numeral-3954d67db054ae0edcb5.js.map