webpackJsonp([0xe197627f60b2],{1204:function(s,n){s.exports={data:{package:{type:"published",id:"bs-cron",name:"bs-cron",version:"1.1.0",category:"binding",flags:[],platforms:["node"],description:"Cron for NodeJS. Execute something at a schedule.",keywords:["utilities"],license:"MIT",updated:"2020-06-13T00:41:55.262Z",stars:3,score:.6409755303385143,quality:.9321965692704994,popularity:.03234661276015982,maintenance:.999986414546596,readme:'<h1 id="bs-cron"><a href="#bs-cron" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-cron</h1>\n<p><a href="https://www.npmjs.org/package/bs-cron"><img src="http://img.shields.io/npm/v/bs-cron.svg" alt="NPM version"></a>\n<a href="https://travis-ci.org/mikaello/bs-node-cron"><img src="https://travis-ci.org/mikaello/bs-node-cron.svg?branch=master" alt="Build Status"></a></p>\n<p>Bindings for <a href="https://github.com/kelektiv/node-cron">node-cron</a>, a tool that allows you to execute <em>something</em> on a schedule. This is typically done using the cron syntax:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>*    *    *    *    *    *\n┬    ┬    ┬    ┬    ┬    ┬\n│    │    │    │    │    │\n│    │    │    │    │    └ day <span class="hljs-keyword">of</span> week (<span class="hljs-number">0</span> - <span class="hljs-number">6</span>, <span class="hljs-keyword">or</span> sun - sat), <span class="hljs-number">0</span> is <span class="hljs-type">Sunday</span>\n│    │    │    │    └───── month (<span class="hljs-number">0</span> - <span class="hljs-number">11</span>, <span class="hljs-keyword">or</span> jan - dec)\n│    │    │    └────────── day <span class="hljs-keyword">of</span> month (<span class="hljs-number">1</span> - <span class="hljs-number">31</span>)\n│    │    └─────────────── hour (<span class="hljs-number">0</span> - <span class="hljs-number">23</span>)\n│    └──────────────────── minute (<span class="hljs-number">0</span> - <span class="hljs-number">59</span>)\n└───────────────────────── second (<span class="hljs-number">0</span> - <span class="hljs-number">59</span>, <span class="hljs-type">OPTIONAL</span>)</code></pre></div>\n<p>Learn more about the syntax at <a href="https://crontab.guru/">crontab.guru</a> (NB it does not have the seconds parameter and months start at 1 (this lib has 0-indexed months)).</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-cron</code></pre></div>\n<p>Then add <code>bs-cron</code> as a dependency to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code><span class="hljs-string">"bs-dependencies"</span>: [\n+  <span class="hljs-string">"bs-cron"</span>\n]</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsCron</span>\n\n<span class="hljs-comment">// Make a job that will fire every second when started</span>\n<span class="hljs-keyword">let</span> job =\n  <span class="hljs-type">CronJob</span>.make(\n    `<span class="hljs-type">CronString</span>(<span class="hljs-string">"* * * * * *"</span>),\n    <span class="hljs-number">_</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Just doing my job"</span>),\n    (),\n  );\n\n<span class="hljs-comment">// Firing every second, printing \'Just doing my job\'</span>\nstart(job);\n\n<span class="hljs-keyword">let</span> time =\n  <span class="hljs-type">CronTime</span>.make(`<span class="hljs-type">JsDate</span>(<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.fromString(<span class="hljs-string">"2021-04-11T10:20:30Z"</span>)), ());\n\n<span class="hljs-comment">// setTime will stop the current job, and change when it will fire next</span>\nsetTime(job, time);\n\n<span class="hljs-comment">// It will now fire once in april 2021</span>\nstart(job);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">976</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><a href="https://github.com/mikaello/bs-node-cron/tree/master/__tests__">The tests</a> have more examples of how to use these bindings.</p>\n<h2 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>\n<ul>\n<li>If you find bugs or want to improve this library, feel free to open an issue or PR.</li>\n<li>If you are upgrading any dependencies, please use yarn so <code>yarn.lock</code> is updated.</li>\n<li>Try to adhere to <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guideline">Angular commit guidelines</a>.</li>\n</ul>\n<h2 id="alternatives"><a href="#alternatives" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alternatives</h2>\n<p><a href="https://github.com/node-schedule/node-schedule"><em>node-schedule</em></a> is a JS library similar to <a href="https://github.com/kelektiv/node-cron"><em>node-cron</em></a> (which this library is bindings for).</p>\n',homepageUrl:"https://mikaello.github.io/bs-node-cron/",repositoryUrl:"https://github.com/mikaello/bs-node-cron",npmUrl:"https://www.npmjs.com/package/bs-cron",issuesUrl:"https://github.com/mikaello/bs-node-cron/issues",slug:"/package/bs-cron"}},pathContext:{id:"bs-cron"}}}});
//# sourceMappingURL=path---package-bs-cron-acfc30c45d8b5a3188dc.js.map