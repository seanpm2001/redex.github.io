webpackJsonp([0xb2776734d61f],{1360:function(e,a){e.exports={data:{package:{type:"published",id:"re-tailwind",name:"re-tailwind",version:"0.0.1",category:"library",flags:[],platforms:["browser"],description:"ReasonML utility classes generated from Tailwind config",keywords:["css"],license:"MIT",updated:"2019-10-21T16:53:46.513Z",stars:0,score:.36572970864242227,quality:.42981269227808705,popularity:.013453636727207537,maintenance:.6630775088699243,readme:'<h1 id="re-tailwind"><a href="#re-tailwind" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>re-tailwind</h1>\n<p>ReasonML utility to generate Tailwind classes</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save re-tailwind</code></pre></div>\n<p>Add re-tailwind to <code>bs-dependencies</code> in <code>bsconfig.json</code></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<ol>\n<li>Ensure your app already import tailwind css</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>[%bs.raw {|require(<span class="hljs-string">"tailwindcss/dist/tailwind.min.css"</span>)|}];</code></pre></div>\n<ol start="2">\n<li>Use function Tailwind.make to construct your tailwind classnames:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Example</span> = {\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt;\n    &lt;div className=<span class="hljs-type">Tailwind</span>.make([`relative, `overflowHidden, `mbAuto])&gt;\n      {<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"Hello Example"</span>)}\n    &lt;/div&gt;;\n};</code></pre></div>\n<h2 id="credits"><a href="#credits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Credits</h2>\n<ul>\n<li><a href="https://github.com/dvkndn/typed-tailwind">Typed tailwind</a> which has the same purpose to this project but in TypeScript</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p><a href="https://choosealicense.com/licenses/mit">MIT</a></p>\n',homepageUrl:"https://github.com/phthhieu/re-tailwind#readme",repositoryUrl:"https://github.com/phthhieu/re-tailwind",npmUrl:"https://www.npmjs.com/package/re-tailwind",issuesUrl:"https://github.com/phthhieu/re-tailwind/issues",slug:"/package/re-tailwind"}},pathContext:{id:"re-tailwind"}}}});
//# sourceMappingURL=path---package-re-tailwind-4ff3a6bbb2b83f6f6923.js.map