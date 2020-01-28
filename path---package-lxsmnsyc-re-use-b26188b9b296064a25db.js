webpackJsonp([0xcef9878bd7c3],{1334:function(e,s){e.exports={data:{package:{type:"published",id:"@lxsmnsyc/re-use",name:"@lxsmnsyc/re-use",version:"0.5.0",category:"library",flags:[],platforms:["browser"],description:"A collection of hooks for ReasonReact",keywords:["state management","react"],license:"MIT",updated:"2020-01-09T10:47:31.277Z",stars:21,score:.5160503532597096,quality:.4971173120392738,popularity:.04832902756550719,maintenance:1,readme:'<h1 id="lxsmnsycre-use"><a href="#lxsmnsycre-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>@lxsmnsyc/re-use</h1>\n<blockquote>\n<p>⚛️ 🎣 A collection of hooks for ReasonReact</p>\n</blockquote>\n<p><a href="https://www.npmjs.com/package/@lxsmnsyc/re-use"><img src="https://img.shields.io/npm/v/@lxsmnsyc/re-use.svg" alt="NPM"></a> <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a></p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install --save @lxsmnsyc/re-use</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn add @lxsmnsyc/re-use</code></pre></div>\n<h3 id="bsconfigjson"><a href="#bsconfigjson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig.json</h3>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"@lxsmnsyc/re-use"</span>\n  ],</code></pre></div>\n<h2 id="hooks"><a href="#hooks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hooks</h2>\n<ul>\n<li>Constant</li>\n<li>ConstantCallback</li>\n<li>ForceUpdate</li>\n<li>IsomorphicEffect</li>\n<li>LifeCycle</li>\n<li>MountedState</li>\n<li>Mutable</li>\n<li>NativeCallback</li>\n<li>NativeEffect</li>\n<li>NativeIsomorphicEffect</li>\n<li>NativeLayoutEffect</li>\n<li>NativeMemo</li>\n<li>NativeState</li>\n<li>NativeSyncEffect</li>\n<li>OnMount</li>\n<li>OnUnmount</li>\n<li>PageVisibility</li>\n<li>Previous</li>\n<li>Promise</li>\n<li>RefMounted</li>\n<li>SyncEffect</li>\n<li>ThrottledReducer</li>\n<li>ThrottledState</li>\n<li>UpdateEffect</li>\n<li>WindowSize</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT © <a href="https://github.com/lxsmnsyc">lxsmnsyc</a></p>\n',homepageUrl:"https://github.com/LXSMNSYC/re-use",repositoryUrl:"https://github.com/LXSMNSYC/re-use",npmUrl:"https://www.npmjs.com/package/%40lxsmnsyc%2Fre-use",issuesUrl:"https://github.com/LXSMNSYC/re-use/issues",slug:"/package/@lxsmnsyc/re-use"}},pathContext:{id:"@lxsmnsyc/re-use"}}}});
//# sourceMappingURL=path---package-lxsmnsyc-re-use-b26188b9b296064a25db.js.map