webpackJsonp([68552666194059],{1283:function(s,e){s.exports={data:{package:{type:"published",id:"bs-svg-attachment",name:"bs-svg-attachment",version:"0.3.0",category:"binding",flags:[],platforms:["browser"],description:"Tiny SVG utilities",keywords:["graphics","svg"],license:"MIT",updated:"2019-11-23T00:29:19.069Z",stars:0,score:.39810811022650583,quality:.6317267378800184,popularity:.024598588375472175,maintenance:.5713730940888144,readme:'<h1 id="bs-svg-attachment"><a href="#bs-svg-attachment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-svg-attachment</h1>\n<p>Tiny utility functions for SVG DOM mainly in Buckle Script / Reason.</p>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<ul>\n<li>Simple, easy.</li>\n<li>No dirty DOM. No append some extra attributes.</li>\n</ul>\n<h2 id="installaion"><a href="#installaion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installaion</h2>\n<p>SVG attachment depents on types of <code>bs-webapi</code>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install bs-svg-attachment bs-webapi</code></pre></div>\n<p>Then add them to bs-dependencies in your bsconfig.json.</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"some"</span>,\n  <span class="hljs-string">"source"</span>: <span class="hljs-string">"src"</span>,\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-svg-attachment"</span>,\n    <span class="hljs-string">"bs-webapi"</span>\n  ]\n}</code></pre></div>\n<h2 id="modules"><a href="#modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modules</h2>\n<ul>\n<li>Svg\nFunctions for one element</li>\n<li>SvgSet\nFunctions for element set</li>\n</ul>\n',homepageUrl:"https://github.com/Henoc/bs-svg-attachment#readme",repositoryUrl:"https://github.com/Henoc/bs-svg-attachment",npmUrl:"https://www.npmjs.com/package/bs-svg-attachment",issuesUrl:"https://github.com/Henoc/bs-svg-attachment/issues",slug:"/package/bs-svg-attachment"}},pathContext:{id:"bs-svg-attachment"}}}});
//# sourceMappingURL=path---package-bs-svg-attachment-b1c20ecd1cde9fe53c47.js.map