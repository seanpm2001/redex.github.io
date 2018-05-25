webpackJsonp([0x5f3b9ae85a6f],{1144:function(e,t){e.exports={data:{package:{id:"bs-puppeteer",stars:20,name:"bs-puppeteer",version:"0.7.0",category:"binding",flags:[],platforms:["node"],description:"Bucklescript bindings for Puppeteer (headless chrome browser) written in Reason",keywords:["development tools","platform api"],license:"MIT",updated:"2018-05-22T16:38:52.455Z",type:"published",score:.6148748600285545,quality:.8274318325900007,popularity:.047558029290155124,maintenance:1,readme:'<h1 id="bucklescript-puppeteer-bs-puppeteer"><a href="#bucklescript-puppeteer-bs-puppeteer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BuckleScript Puppeteer (bs-puppeteer)</h1>\n<p>BuckleScript bindings to\n<a href="https://github.com/GoogleChrome/puppeteer">Puppeteer</a>\n(the Headless Chrome Node API)\nwritten in <a href="https://reasonml.github.io">Reason</a>.\nThis allows programmatic control of an instance of the Chrome or Chromium browser\nfrom BuckleScript or Reason.</p>\n<p><a href="https://npmjs.org/package/bs-puppeteer"><img src="https://img.shields.io/npm/v/bs-puppeteer.svg" alt="NPM bs-puppeteer package"></a>\n<a href="https://travis-ci.org/bs-puppeteer/bs-puppeteer"><img src="https://travis-ci.org/bs-puppeteer/bs-puppeteer.svg?branch=master" alt="Travis build status"></a></p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>These bindings are a work in progress.\nMost bindings for navigation and interaction with web pages have been implemented.\nThere may be some minor breaking changes as we refine the API.\nBindings to the the page events API are planned for a future version.\nSee <a href="examples/">examples</a> and the <a href="__tests__/puppeteer_test.re">test suite</a>\nfor examples of usage.\nFeatures of the Puppeteer API are implemented as we need or get to them.\nWe do our best to track upstream API changes.\nIf you would like to add or fix some bindings, see <a href="#contributing">Contributing</a>.</p>\n<p>Changes are documented in <a href="HISTORY.md">HISTORY.md</a>.</p>\n<h2 id="creating-a-project-using-bs-puppeteer"><a href="#creating-a-project-using-bs-puppeteer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a project using bs-puppeteer</h2>\n<p>Create a new BuckleScript project if you have not already:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install -g bs-platform\nbsb -init my-project -theme basic-reason\n<span class="hljs-built_in">cd</span> my-project</code></pre></div>\n<p>See the\n<a href="https://bucklescript.github.io/docs/en/installation.html">BuckleScript documentation</a>\nfor more information about starting a project.</p>\n<p>Add bs-puppeteer as a dependency.\nThis will install the currently supported version of Puppeteer.</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-puppeteer</code></pre></div>\n<p>Edit your <code>bsconfig.json</code> file to add <code>bs-puppeteer</code> to <code>bs-dependencies</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>  <span class="hljs-string">"bs-dependencies"</span> : [\n    <span class="hljs-string">"bs-puppeteer"</span>,\n  ],</code></pre></div>\n<p>Now run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install\nnpm start</code></pre></div>\n<p>The <code>Puppeteer</code> module should now be available in your Reason source files.\nWhile <code>npm start</code> is running, it will attempt to recompile your code each time you save it.\nOne-off builds can be done with <code>npm run build</code>.</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>Contributions are welcome.\nGet started by cloning the respository and starting the compiler in watch mode.</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>git <span class="hljs-built_in">clone</span> https://github.com/bs-puppeteer/bs-puppeteer.git\n<span class="hljs-built_in">cd</span> bs-puppeteer\nnpm install\nnpm start</code></pre></div>\n<p>Any changes should pass the test suite (<code>npm run test</code>).\nOne great way to contribute is by writing tests for features that don\'t yet have them.\nTests can be found in the <code>__tests__</code> directory.</p>\n<p>A git hook will automatically run <code>refmt</code> on your code and run the test suite each time you commit.\nContributors should have the latest release version of <code>refmt</code>, which is included with Reason.\nSee the <a href="https://reasonml.github.io/docs/en/global-installation.html">Reason Global Installation</a> instructions.</p>\n<p>Good references for writing bindings are:</p>\n<ul>\n<li><a href="https://bucklescript.github.io/docs/en/interop-cheatsheet.html">BuckleScript Interop Cheatsheet</a></li>\n<li><a href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md">Puppeteer API Docs</a></li>\n<li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/puppeteer/index.d.ts">Puppeteer TypeScript Definitions</a></li>\n</ul>\n<h2 id="projects-using-bs-puppeteer"><a href="#projects-using-bs-puppeteer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Projects using bs-puppeteer</h2>\n<ul>\n<li><a href="https://github.com/jrdrg/hamilton-lottery">Hamilton Lottery</a></li>\n</ul>\n',homepageUrl:"https://github.com/bs-puppeteer/bs-puppeteer#readme",repositoryUrl:"https://github.com/bs-puppeteer/bs-puppeteer",npmUrl:"https://www.npmjs.com/package/bs-puppeteer",issuesUrl:"https://github.com/bs-puppeteer/bs-puppeteer/issues",slug:"/package/bs-puppeteer"}},pathContext:{id:"bs-puppeteer"}}}});
//# sourceMappingURL=path---package-bs-puppeteer-9bf84b939e1bd0337570.js.map