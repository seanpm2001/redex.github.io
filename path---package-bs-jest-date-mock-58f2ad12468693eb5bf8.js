webpackJsonp([0xff4c10bd559],{1222:function(s,e){s.exports={data:{package:{type:"published",id:"bs-jest-date-mock",name:"bs-jest-date-mock",version:"1.0.2",category:"binding",flags:[],platforms:["node"],description:"Mock Js.Date when run unit test cases with Jest. Make tests of Js.Date easier.",keywords:["date/time manipulation","testing"],license:"MIT",updated:"2020-01-02T18:07:35.558Z",stars:0,score:.6369830859191898,quality:.936392584547949,popularity:.01739431957221689,maintenance:.9999351391557976,readme:'<h1 id="bs-jest-date-mock"><a href="#bs-jest-date-mock" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-jest-date-mock</h1>\n<p><a href="https://www.npmjs.org/package/bs-jest-date-mock"><img src="http://img.shields.io/npm/v/bs-jest-date-mock.svg" alt="NPM version"></a>\n<a href="https://travis-ci.org/mikaello/bs-jest-date-mock"><img src="https://travis-ci.org/mikaello/bs-jest-date-mock.svg?branch=master" alt="Build Status"></a></p>\n<p>BuckleScript bindings for <a href="https://github.com/hustcc/jest-date-mock">jest-date-mock</a>. Use it to mock <code>Js.Date.t</code> when using Jest.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-jest-date-mock</code></pre></div>\n<p>Then add <code>bs-jest-date-mock</code> as a dependency to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code><span class="hljs-string">"bs-dependencies"</span>: [\n+  <span class="hljs-string">"bs-jest-date-mock"</span>\n]</code></pre></div>\n<p>And add <code>jest-date-mock</code> to Jest setup files in <code>package.json</code> (you will need to add the <code>"jest"</code>-part to <code>package.json</code> if you don\'t have it already):</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code><span class="hljs-string">"jest"</span>: {\n  <span class="hljs-string">"setupFiles"</span>: [\n+    <span class="hljs-string">"jest-date-mock"</span>\n  ]\n}</code></pre></div>\n<p>There is also other ways, check out the <a href="https://github.com/hustcc/jest-date-mock#setup">setup sections</a> in jest-date-mock.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsJestDateMock</span>\n\nadvanceTo(<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.makeWithYMD(~year=<span class="hljs-number">2010.0</span>, ~month=<span class="hljs-number">5.0</span>, ~date=<span class="hljs-number">27.0</span>, ()));\n\n<span class="hljs-type">Js</span>.log(<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make() |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.toUTCString);\n<span class="hljs-comment">// =&gt; Sat, 26 Jun 2010 22:00:00 GMT</span>\n\nadvanceBy(<span class="hljs-number">3</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>); <span class="hljs-comment">// advanceBy 3 minutes (given in milliseconds)</span>\n\n<span class="hljs-type">Js</span>.log(<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make() |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.toUTCString);\n<span class="hljs-comment">// =&gt; Sat, 26 Jun 2010 22:03:00 GMT</span>\n\nclear(); <span class="hljs-comment">// shut down mock system, Js.Date should now be as before</span>\n\n<span class="hljs-type">Js</span>.log(<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make() |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.toUTCString);\n<span class="hljs-comment">// =&gt; Sat, 06 Jul 2019 07:01:41 GMT</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">976</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>\n<ul>\n<li>If you find bugs or want to improve this library, feel free to open an issue or PR.</li>\n<li>If you are upgrading any dependencies, please use yarn so <code>yarn.lock</code> is updated.</li>\n<li>Try to adhere to <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guideline">Angular commit guidelines</a>.</li>\n</ul>\n<h2 id="alternatives"><a href="#alternatives" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alternatives</h2>\n<p>There is some tips in the post "<a href="https://codewithhugo.com/mocking-the-current-date-in-jest-tests/">Mocking/stubbing the current Date in Jest tests</a>" by Hugo Di Francesco.</p>\n',homepageUrl:"https://github.com/mikaello/bs-jest-date-mock",repositoryUrl:"https://github.com/mikaello/bs-jest-date-mock",npmUrl:"https://www.npmjs.com/package/bs-jest-date-mock",issuesUrl:"https://github.com/mikaello/bs-jest-date-mock/issues",slug:"/package/bs-jest-date-mock"}},pathContext:{id:"bs-jest-date-mock"}}}});
//# sourceMappingURL=path---package-bs-jest-date-mock-58f2ad12468693eb5bf8.js.map