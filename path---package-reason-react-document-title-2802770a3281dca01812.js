webpackJsonp([0xd0de687222aa],{1321:function(e,t){e.exports={data:{package:{type:"published",id:"reason-react-document-title",name:"reason-react-document-title",version:"1.0.1",category:"library",flags:[],platforms:["browser"],description:"Reason component to manage document title",keywords:["react"],license:"MIT",updated:"2019-05-07T05:46:16.924Z",stars:1,score:.6003343269224295,quality:.8040628190617787,popularity:.026170767811946924,maintenance:.9998734641991842,readme:'<h1 id="reason-react-document-title"><a href="#reason-react-document-title" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason React Document Title</h1>\n<p>Provide reason react component for manage document.title</p>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<p>using yarn:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn add reason-react-document-title</code></pre></div>\n<p>using npm:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install reason-react-document-title --save</code></pre></div>\n<p>Remeber, add to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason-react-document-title"</span>]\n}</code></pre></div>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>For example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code><span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: _self =&gt; \n    &lt;div&gt;\n        &lt;<span class="hljs-type">DocumentTitle</span> title=<span class="hljs-string">"My title"</span> /&gt;\n        ... some stuff\n    &lt;/div&gt;,\n};</code></pre></div>\n<p>Or if you like:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code><span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: _self =&gt; \n    &lt;<span class="hljs-type">DocumentTitle</span> title=<span class="hljs-string">"My title"</span>&gt;\n        &lt;div&gt;\n            ... some stuff\n        &lt;/div&gt;\n    &lt;/<span class="hljs-type">DocumentTitle</span>&gt;,\n};</code></pre></div>\n<p>Changing title prop will affect on document.title automatically.</p>\n<p>When component is unmounted, document.title value will be set to empty string.</p>\n<p>If find any problems or have improvement idea, feel free to create issue :)</p>\n',homepageUrl:"https://github.com/kamilkuz/reason-react-document-title#readme",repositoryUrl:"https://github.com/kamilkuz/reason-react-document-title",npmUrl:"https://www.npmjs.com/package/reason-react-document-title",issuesUrl:"https://github.com/kamilkuz/reason-react-document-title/issues",slug:"/package/reason-react-document-title"}},pathContext:{id:"reason-react-document-title"}}}});
//# sourceMappingURL=path---package-reason-react-document-title-2802770a3281dca01812.js.map