webpackJsonp([0xbbe17aea81cf],{1095:function(s,e){s.exports={data:{package:{id:"bs-expo",stars:25,name:"bs-expo",version:"0.0.3",category:"binding",flags:["neglected"],platforms:["node"],description:"These are unoffical `reasonml` bindings to the `expo` JS SDK.",keywords:["react","platform api"],license:"MIT",updated:"2018-05-01T11:10:09.117Z",type:"published",score:.4977991874652892,quality:.42245426674185993,popularity:.06046655463140904,maintenance:.9997131809192517,readme:'<h1 id="bs-expo"><a href="#bs-expo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-expo</h1>\n<p>These are unoffical <code>reasonml</code> bindings to the <code>expo</code> JS SDK.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<p><strong>See test-app</strong> for a working expo example.</p>\n<p>Great that you want to use Reason with Expo/ReactNative! To get everything\nrunning are just a couple of steps.  Let\'s assume that you already\nhave a React Native project. Otherwise follow the ReactNative\n<a href="http://facebook.github.io/react-native/docs/getting-started.html">instructions</a>\nuntil you have your app running.</p>\n<ol>\n<li>Install <a href="https://github.com/bloomberg/bucklescript">Bucklescript</a>\n(the Reason -> JS compiler),\n<a href="https://github.com/reasonml/reason-react">Reason-React</a> and <code>bs-react-native</code>:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code><span class="hljs-comment"># substitute yarn with npm if you prefer</span>\nyarn add bs-platform reason-react bs-react-native bs-expo</code></pre></div>\n<ol start="2">\n<li>Create a <code>re</code> folder (there will be your Reason code)</li>\n<li>Create a <code>bsconfig.json</code> with the following content file in your project root</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n    <span class="hljs-string">"name"</span>: <span class="hljs-string">"my-awesome-app"</span>,\n    <span class="hljs-string">"reason"</span>: {\n        <span class="hljs-string">"react-jsx"</span>: <span class="hljs-number">2</span>\n    },\n    <span class="hljs-string">"bsc-flags"</span>: [<span class="hljs-string">"-bs-super-errors"</span>],\n    <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-react-native"</span>, <span class="hljs-string">"reason-react"</span>, <span class="hljs-string">"bs-expo"</span>],\n    <span class="hljs-string">"sources"</span>: [{\n        <span class="hljs-string">"dir"</span>: <span class="hljs-string">"re"</span>\n    }],\n    <span class="hljs-string">"refmt"</span>: <span class="hljs-number">3</span>\n}</code></pre></div>\n<ol start="4">\n<li>You are nearly done, the last configuration before we get to the fun stuff. In your <code>package.json</code> add to the <code>"scripts"</code> section two scripts:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"scripts"</span>: {\n  ...\n  <span class="hljs-string">"build"</span>: <span class="hljs-string">"bsb -make-world -clean-world"</span>,\n  <span class="hljs-string">"watch"</span>: <span class="hljs-string">"bsb -make-world -clean-world -w"</span>\n}</code></pre></div>\n<ol start="5">\n<li>Now you can build all your (so far nonexsisting) Reason in two modes:</li>\n</ol>\n<ul>\n<li><code>yarn run build</code> performs a single build</li>\n<li><code>yarn run watch</code> enters the watch mode</li>\n</ul>\n<ol start="6">\n<li>Now we come to the fun stuff! Create a new file <code>re/app.re</code> and make it look like this:</li>\n</ol>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsReactNative</span>;\n\n<span class="hljs-keyword">let</span> app = () =&gt;\n  &lt;<span class="hljs-type">View</span> style=<span class="hljs-type">Style</span>.(style([flex(<span class="hljs-number">1</span>.), justifyContent(<span class="hljs-type">Center</span>), alignItems(<span class="hljs-type">Center</span>)]))&gt;\n    &lt;<span class="hljs-type">Text</span> value=<span class="hljs-string">"Reason is awesome!"</span> /&gt;\n  &lt;/<span class="hljs-type">View</span>&gt;;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsReactNative</span>\n<span class="hljs-keyword">let</span> app <span class="hljs-literal">()</span> =\n  ((<span class="hljs-type">View</span>.createElement\n      ~style:(<span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Style</span> <span class="hljs-keyword">in</span>\n                style [flex <span class="hljs-number">1.</span>; justifyContent <span class="hljs-type">Center</span>; alignItems <span class="hljs-type">Center</span>])\n      ~children:[((<span class="hljs-type">Text</span>.createElement ~<span class="hljs-keyword">value</span>:<span class="hljs-string">"Reason is awesome!"</span>\n                     ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<p>and start the watcher with <code>yarn run watch</code> if you haven\'t done it yet.</p>\n<ol start="7">\n<li>We are nearly done! We now have to adapt <code>App.js</code></li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-keyword">import</span> { app } from <span class="hljs-string">"./lib/js/re/app.js"</span>;\nexport <span class="hljs-keyword">default</span> app;</code></pre></div>\n<h2 id="helping-out"><a href="#helping-out" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Helping out</h2>\n<p>Lots of easy to finish tasks, just do <code>yarn start</code> and you\'ll see all\nthe compiler errors to fix.</p>\n',homepageUrl:"https://github.com/fxfactorial/bs-expo#readme",repositoryUrl:"https://github.com/fxfactorial/bs-expo",npmUrl:"https://www.npmjs.com/package/bs-expo",issuesUrl:"https://github.com/fxfactorial/bs-expo/issues",slug:"/package/bs-expo"}},pathContext:{id:"bs-expo"}}}});
//# sourceMappingURL=path---package-bs-expo-d6cfe438f1c23c05b60d.js.map