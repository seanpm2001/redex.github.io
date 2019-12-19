webpackJsonp([0x9bdedb2a76e9],{1377:function(s,e){s.exports={data:{package:{type:"published",id:"reasonably-typed",name:"reasonably-typed",version:"2.0.0-beta4",category:"tool",flags:[],platforms:["node"],description:"Converts flow definitions to Bucklescript definitions",keywords:["code generation"],license:"MIT",updated:"2019-11-22T15:26:45.524Z",stars:498,score:.6515566215926267,quality:.8473753600453204,popularity:.1353828389227694,maintenance:.9998857713030322,readme:'<h1 align="center"><img src="https://github.com/rrdelaney/ReasonablyTyped/raw/master/docs/logo.png"></h1>\n<pre align="center">\n  $ npm install --global reasonably-typed\n</pre>\n<h4 align="center">\n  <i>Converts TypeScript and Flow definitions to Reason interfaces</i>\n  <br>\n  <i>(Also maybe TypeScript definitions to Flow)</i>\n</h4>\n<hr>\n<h3 align="center">Take your Flow or TypeScript definition</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>// class.js\n<span class="hljs-built_in">declare</span> module <span class="hljs-string">\'classes\'</span> {\n  <span class="hljs-built_in">declare</span> <span class="hljs-built_in">type</span> State = {\n    id: number,\n    storeName: string,\n  }\n\n  <span class="hljs-built_in">declare</span> <span class="hljs-built_in">export</span> class Store {\n    constructor(initialState: State): Store;\n    state: State;\n    update(nextState: State): void;\n  }\n}</code></pre></div>\n<h3 align="center">Run retyped</h3>\n<pre align="center">\n$ retyped class.js\n</pre>\n<h3 align="center">Get Reason</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Module classes */</span>\n\n<span class="hljs-keyword">type</span> state = {. <span class="hljs-string">"id"</span>: float, <span class="hljs-string">"storeName"</span>: string };\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Store</span> = </span>{\n  <span class="hljs-keyword">type</span> t = {. <span class="hljs-string">"state"</span>: (state), <span class="hljs-string">"update"</span>: [@bs.meth](state =&gt; unit)};\n  [@bs.<span class="hljs-keyword">new</span>] [@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"classes"</span>] external make : state =&gt; t = <span class="hljs-string">"Store"</span>;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> state = &lt; id :<span class="hljs-built_in">float</span> ;storeName :<span class="hljs-built_in">string</span>  &gt; <span class="hljs-type">Js</span>.t\n<span class="hljs-keyword">module</span> <span class="hljs-type">Store</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> t = &lt; state :state ;update :((state -&gt; <span class="hljs-built_in">unit</span>)[@bs.meth ])  &gt; <span class="hljs-type">Js</span>.t\n    <span class="hljs-keyword">external</span> make : state -&gt; t = <span class="hljs-string">"Store"</span>[@@bs.<span class="hljs-keyword">new</span> ][@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"classes"</span>]\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="docs"><a href="#docs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Docs</h2>\n<p><details>\n<summary><b><a href="https://rrdelaney.github.io/ReasonablyTyped">Examples</a></b></summary>\n</details></p>\n<p><details>\n<summary><b>TypeScript</b></summary>\n<p>TypeScript has a similar workflow. Compile your TypeScript file with:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ retyped my-definition.d.ts</code></pre></div>\n</details></p>\n<p><details>\n<summary><b>Command-line Usage</b></summary>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>Usage:\n  $ retyped ...files\n\nExamples:\n  $ retyped file1.js file2.js file3.d.ts                                           [boolean]</code></pre></div>\n</details></p>\n<p><details>\n<summary><b>Usage as a library</b></summary>\nReasonablyTyped also exports a library for use! See the example below:\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-comment">// lib-usage.js</span>\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> <span class="hljs-type">ReasonablyTyped</span> from \'reasonably-typed\'\n\nconst libSrc = fs.readFileSync(\'lib.js\').<span class="hljs-built_in">toString</span>()\nconst bsInterface = <span class="hljs-type">ReasonablyTyped</span>.compile(libSrc)</code></pre></div>\n<p><strong><code>format (code: string) => string</code></strong></p>\n<p>Formats a block of code using <code>refmt</code></p>\n<p><strong><code>compile (code: string, filename?: string) => string</code></strong></p>\n<p>Compiles a libdef, formats the result, and handles errors cleanly</p>\n</details></p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<p>See <a href="DEVELOPING.md">DEVELOPING</a> and <a href="CONTRIBUTING.md">CONTRIBUTING</a>.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p><a href="https://circleci.com/gh/rrdelaney/ReasonablyTyped"><img src="https://circleci.com/gh/rrdelaney/ReasonablyTyped.svg?style=svg" alt="CircleCI"></a></p>\n',homepageUrl:"https://github.com/rrdelaney/ReasonablyTyped",repositoryUrl:"https://github.com/rrdelaney/ReasonablyTyped",npmUrl:"https://www.npmjs.com/package/reasonably-typed",issuesUrl:"https://github.com/rrdelaney/ReasonablyTyped/issues",slug:"/package/reasonably-typed"}},pathContext:{id:"reasonably-typed"}}}});
//# sourceMappingURL=path---package-reasonably-typed-f2bbf65d68547803e5ec.js.map