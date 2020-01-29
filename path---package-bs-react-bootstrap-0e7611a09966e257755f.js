webpackJsonp([24743462922935],{1262:function(s,a){s.exports={data:{package:{type:"published",id:"bs-react-bootstrap",name:"bs-react-bootstrap",version:"0.1.0",category:"binding",flags:[],platforms:["browser"],description:"## Introduction",keywords:["react","ui"],license:"MIT",updated:"2020-01-09T13:54:15.670Z",stars:1,score:.32175454290451083,quality:.43148438720446,popularity:.0163005509165445,maintenance:.533154382635378,readme:'<h1 id="bs-react-bootstrap"><a href="#bs-react-bootstrap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-bootstrap</h1>\n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>This is <a href="https://bucklescript.github.io/">BuckleScript</a> bindings for <a href="https://react-bootstrap.github.io/">React-Bootstrap</a></p>\n<h3 id="wip---feel-free-to-send-pr-and-help-improve-it"><a href="#wip---feel-free-to-send-pr-and-help-improve-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WIP - Feel free to send PR and help improve it.</h3>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ul>\n<li>With npm:</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-react-bootstrap</code></pre></div>\n<ul>\n<li>With Yarn</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn add bs-react-bootstrap</code></pre></div>\n<ul>\n<li>Add <code>bs-react-bootstrap</code> to <code>bs-dependencies</code> on your <code>bsconfig.json</code></li>\n<li>Include Bootstrap CSS into your <code>index.html</code></li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-html"><code>&lt;link\n  rel=<span class="hljs-string">"stylesheet"</span>\n  href=<span class="hljs-string">"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"</span>\n  integrity=<span class="hljs-string">"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"</span>\n  crossorigin=<span class="hljs-string">"anonymous"</span>\n&gt;</code></pre></div>\n<blockquote>\n<h3 id="note"><a href="#note" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Note</h3>\n<p>As you are using React Bootstrap it\'s not necessary to import any jQuery stuff.</p>\n</blockquote>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Please refer to <a href="https://react-bootstrap.github.io/components/alerts/">React Bootstrap Documentation</a> for each component Spec.</p>\n<p>Some specif patterns:</p>\n<ul>\n<li>enums :fast_forward: polymorphic variants <sup>see on sample</sup></li>\n</ul>\n<blockquote>\n<h3 id="legend"><a href="#legend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Legend</h3>\n<p>:link: Binding\\\n:white_check_mark: Done\\\n:x: Not implemented yet\\\n:warning: WIP</p>\n</blockquote>\n<p>:link: :x: Alerts\\\n:link: :x: Badge\\\n:link: :x: Breadcrumb\\\n:link: :x: Buttons\\\n:link: :x: Button Group\\\n:link: :x: Cards\\\n:link: :x: Carousel\\\n:link: :x: Dropdowns\\\n:link: :x: Forms\\\n:link: :x: Input Group\\\n:link: :x: Images\\\n:link: :x: Figures\\\n:link: :x: Jumbotron\\\n:link: :x: List Group\\\n:link: :x: Modal\\\n:link: :warning: Navs\\\n:link: :white_check_mark:Navbar\\\n:link: :x: Overlays\\\n:link: :x: Pagination\\\n:link: :x: Popovers\\\n:link: :x: Progress\\\n:link: :x: Table\\\n:link: :x: Tabs\\\n:link: :x: Tooltips</p>\n<p>Sample: <code>Navbar</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReactBootstrap</span>;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-string">"App"</span> |&gt; <span class="hljs-type">ReasonReact</span>.statelessComponent;\n\n<span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;div className=<span class="hljs-string">"App container"</span>&gt;\n      &lt;<span class="hljs-type">Navbar</span> fixed=`top fluid=<span class="hljs-literal">true</span> collapseOnSelect=<span class="hljs-literal">true</span>&gt;\n        &lt;<span class="hljs-type">Navbar</span>.<span class="hljs-type">Brand</span>&gt;\n          &lt;a href=<span class="hljs-string">"/"</span>&gt;\n            {string(<span class="hljs-string">"Scratch"</span>)}\n          &lt;/a&gt;\n        &lt;/<span class="hljs-type">Navbar</span>.<span class="hljs-type">Brand</span>&gt;\n        &lt;<span class="hljs-type">Navbar</span>.<span class="hljs-type">Toggle</span> /&gt;\n        &lt;<span class="hljs-type">Navbar</span>.<span class="hljs-type">Collapse</span>&gt;\n          &lt;<span class="hljs-type">Nav</span> pullRight=<span class="hljs-literal">true</span>&gt;\n            &lt;<span class="hljs-type">Nav</span>.<span class="hljs-type">Item</span> href=<span class="hljs-string">"signup"</span>&gt;\n              {string(<span class="hljs-string">"Sign Up"</span>)}\n            &lt;/<span class="hljs-type">Nav</span>.<span class="hljs-type">Item</span>&gt;\n            &lt;<span class="hljs-type">Nav</span>.<span class="hljs-type">Item</span> href=<span class="hljs-string">"login"</span>&gt;\n              {string(<span class="hljs-string">"Log In"</span>)}\n            &lt;/<span class="hljs-type">Nav</span>.<span class="hljs-type">Item</span>&gt;\n          &lt;/<span class="hljs-type">Nav</span>&gt;\n        &lt;/<span class="hljs-type">Navbar</span>.<span class="hljs-type">Collapse</span>&gt;\n      &lt;/<span class="hljs-type">Navbar</span>&gt;\n      &lt;<span class="hljs-type">Routes</span> /&gt;\n    &lt;/div&gt;,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReactBootstrap</span>\n<span class="hljs-keyword">let</span> component = <span class="hljs-string">"App"</span> |&gt; <span class="hljs-type">ReasonReact</span>.statelessComponent\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((div ~className:<span class="hljs-string">"App container"</span>\n             ~children:[((<span class="hljs-type">Navbar</span>.createElement ~fixed:`top ~fluid:<span class="hljs-literal">true</span>\n                            ~collapseOnSelect:<span class="hljs-literal">true</span>\n                            ~children:[((<span class="hljs-type">Navbar</span>.<span class="hljs-type">Brand</span>.createElement\n                                           ~children:[((a ~href:<span class="hljs-string">"/"</span>\n                                                          ~children:[\n                                                                    <span class="hljs-built_in">string</span>\n                                                                    <span class="hljs-string">"Scratch"</span>]\n                                                          <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n                                      [@<span class="hljs-type">JSX</span> ]);\n                                      ((<span class="hljs-type">Navbar</span>.<span class="hljs-type">Toggle</span>.createElement\n                                          ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                      ((<span class="hljs-type">Navbar</span>.<span class="hljs-type">Collapse</span>.createElement\n                                          ~children:[((<span class="hljs-type">Nav</span>.createElement\n                                                         ~pullRight:<span class="hljs-literal">true</span>\n                                                         ~children:[((\n                                                                   <span class="hljs-type">Nav</span>.<span class="hljs-type">Item</span>.createElement\n                                                                    ~href:<span class="hljs-string">"signup"</span>\n                                                                    ~children:\n                                                                    [\n                                                                    <span class="hljs-built_in">string</span>\n                                                                    <span class="hljs-string">"Sign Up"</span>]\n                                                                    <span class="hljs-literal">()</span>)\n                                                                   [@<span class="hljs-type">JSX</span> ]);\n                                                                   ((\n                                                                   <span class="hljs-type">Nav</span>.<span class="hljs-type">Item</span>.createElement\n                                                                    ~href:<span class="hljs-string">"login"</span>\n                                                                    ~children:\n                                                                    [\n                                                                    <span class="hljs-built_in">string</span>\n                                                                    <span class="hljs-string">"Log In"</span>]\n                                                                    <span class="hljs-literal">()</span>)\n                                                                   [@<span class="hljs-type">JSX</span> ])]\n                                                         <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n                                      [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                       ((<span class="hljs-type">Routes</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n         [@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/daniloraisi/bs-react-bootstrap#readme",repositoryUrl:"https://github.com/daniloraisi/bs-react-bootstrap",npmUrl:"https://www.npmjs.com/package/bs-react-bootstrap",issuesUrl:"https://github.com/daniloraisi/bs-react-bootstrap/issues",slug:"/package/bs-react-bootstrap"}},pathContext:{id:"bs-react-bootstrap"}}}});
//# sourceMappingURL=path---package-bs-react-bootstrap-0e7611a09966e257755f.js.map