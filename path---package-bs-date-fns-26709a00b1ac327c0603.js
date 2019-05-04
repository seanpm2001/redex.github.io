webpackJsonp([0x9b0c56495563],{1169:function(e,s){e.exports={data:{package:{type:"published",id:"bs-date-fns",name:"bs-date-fns",version:"0.1.6",category:"binding",flags:[],platforms:["browser","node"],description:"Bucklescript bindings to date-fns",keywords:["date/time manipulation"],license:"MIT",updated:"2019-05-03T03:16:44.285Z",stars:22,score:.3850018112880201,quality:.4110436593485658,popularity:.07618286629044804,maintenance:.6714991722336958,readme:'<h2 id="bucklescript-bindings-to-date-fns"><a href="#bucklescript-bindings-to-date-fns" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bucklescript bindings to date-fns</h2>\n<p>Bindings for all date-fns functions as of 1.29.0. Currently still missing support for locales.</p>\n<h3 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-date-fns --save</code></pre></div>\n<p>Add <code>"bs-date-fns"</code> to <code>bs-dependencies</code> in your project\'s <code>bsconfig.json</code></p>\n<h3 id="differences-from-original-date-fns-api"><a href="#differences-from-original-date-fns-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Differences from original date-fns API</h3>\n<p>In bindings the date parameter is moved to last position in a bunch of functions to work better with currying and make better use of pipe operator. Most of these can be seen from types. The ones that have same types but are different from date-fns:</p>\n<div class="redex-codeblock"><pre class="hljs lang-rs"><code>laterDate |&gt; DateFns.isAfter(earlierDate) /* <span class="hljs-literal">true</span> */\nDateFns.isAfter(earlierDate, laterDate) /* <span class="hljs-literal">true</span> */\n\nearlierDate |&gt; DateFns.isBefore(laterDate) /* <span class="hljs-literal">true</span> */\nDateFns.isBefore(laterDate, earlierDate) /* <span class="hljs-literal">true</span> */\n\nmiddleDate |&gt; DateFns.isWithinRange(earliestDate, latestDate) /* <span class="hljs-literal">true</span> */\nDateFns.isWithinRange(earliestDate, latestDate, middleDate) /* <span class="hljs-literal">true</span> */</code></pre></div>\n',homepageUrl:"https://github.com/SllyQ/bs-date-fns#readme",repositoryUrl:"https://github.com/SllyQ/bs-date-fns",npmUrl:"https://www.npmjs.com/package/bs-date-fns",issuesUrl:"https://github.com/SllyQ/bs-date-fns/issues",slug:"/package/bs-date-fns"}},pathContext:{id:"bs-date-fns"}}}});
//# sourceMappingURL=path---package-bs-date-fns-26709a00b1ac327c0603.js.map