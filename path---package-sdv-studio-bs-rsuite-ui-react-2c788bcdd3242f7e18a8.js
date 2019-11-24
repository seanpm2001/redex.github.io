webpackJsonp([60414369598059],{1410:function(n,s){n.exports={data:{package:{type:"published",id:"@sdv-studio/bs-rsuite-ui-react",name:"@sdv-studio/bs-rsuite-ui-react",version:"1.0.5",category:"binding",flags:[],platforms:["browser"],description:"Reason(React) bindings for Rsuite UI library",keywords:["react","ui"],license:"MIT",updated:"2019-11-04T13:08:50.077Z",stars:6,score:.5163067377052795,quality:.5115878271879089,popularity:.03665825585401934,maintenance:1,readme:'<h1 id="reasonml-bindings-for--rsuite-ui-react-library"><a href="#reasonml-bindings-for--rsuite-ui-react-library" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReasonML bindings for  <a href="https://rsuitejs.com">Rsuite UI React library</a></h1>\n<p><a href="https://badge.fury.io/js/%40sdv-studio%2Fbs-rsuite-ui-react"><img src="https://badge.fury.io/js/%40sdv-studio%2Fbs-rsuite-ui-react.svg" alt="npm version"></a></p>\n<p> <a href="https://rsuitejs.com/en/components/overview">Official overview</a> (bindings according it)</p>\n<p> p.s bindings from an enthusiast 🙂 </p>\n<h2 id="plans"><a href="#plans" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plans</h2>\n<ol>\n<li>Cover all documented components ✅</li>\n<li>Compare with official GitHub repo <strong>in progress</strong></li>\n<li>Check TODOs, fixes</li>\n<li>Improve DX (reuse, variants instead string as possible and etc.)</li>\n</ol>\n<h2 id="roadmap"><a href="#roadmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Roadmap</h2>\n<p>✅ = done<br>\n🌓 = not full support (temp) <br>\n🛑 = unimplemented<br></p>\n<table>\n<thead>\n<tr>\n<th align="center">Type</th>\n<th>Component</th>\n<th align="center">Status</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Button /></code>\n; \n<code>&#x3C;ButtonGroup /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Icon /></code>\n; \n<code>&#x3C;IconButton /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Tooltip /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Popover />;&#x3C;Whisper /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>Alert module</code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>Notification module</code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Message /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Loader /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Modal /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Drawer /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Alert /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Divider /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Progress /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">General</td>\n<td><code>&#x3C;Placeholder /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">:-:</td>\n<td>------------------------------------</td>\n<td align="center"></td>\n</tr>\n<tr>\n<td align="center">Navigation</td>\n<td><code>&#x3C;Dropdown /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Navigation</td>\n<td><code>&#x3C;Nav /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Navigation</td>\n<td><code>&#x3C;Navbar /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Navigation</td>\n<td><code>&#x3C;Sidenav /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Navigation</td>\n<td><code>&#x3C;Steps /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Navigation</td>\n<td><code>&#x3C;Pagination /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Navigation</td>\n<td><code>&#x3C;Breadcrumb /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">:-:</td>\n<td>------------------------------------</td>\n<td align="center">:-:</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Form /></code></td>\n<td align="center">🌓</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;ControlLabel /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;FormGroup /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;FormControl /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;HelpBlock /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Checkbox /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Radio /></code>\n; \n<code>&#x3C;RadioGroup /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Input /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;InputNumber /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;AutoComplete /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Toggle /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;InputPicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;TagPicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;SelectPicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;CheckPicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Toggle /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;TreePicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;CheckTreePicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Cascader /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;MultiCascader /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;DatePicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;DateRangePicker /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Slider /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Entry</td>\n<td><code>&#x3C;Uploader /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">:-:</td>\n<td>------------------------------------</td>\n<td align="center">:-:</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Avatar /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Badge /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Table /></code>\n + Cell/Column/Header</td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Tree /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;CheckTree /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Panel /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Timeline /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Tag />;&#x3C;TagGroup/></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;List /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Data Display</td>\n<td><code>&#x3C;Calendar /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">:-:</td>\n<td>------------------------------------</td>\n<td align="center">:-:</td>\n</tr>\n<tr>\n<td align="center">Layout</td>\n<td><code>&#x3C;Grid /></code>\n; \n<code>&#x3C;Row /></code>\n; \n<code>&#x3C;Col /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Layout</td>\n<td><code>&#x3C;FlexboxGrid /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Layout</td>\n<td><code>&#x3C;Container /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">:-:</td>\n<td>------------------------------------</td>\n<td align="center">:-:</td>\n</tr>\n<tr>\n<td align="center">Utils</td>\n<td><code>&#x3C;Animation /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Utils</td>\n<td><code>&#x3C;Portal /></code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">Utils</td>\n<td><code>DOMHelper module</code></td>\n<td align="center">✅</td>\n</tr>\n<tr>\n<td align="center">:-:</td>\n<td>------------------------------------</td>\n<td align="center">:-:</td>\n</tr>\n<tr>\n<td align="center">Undocumented</td>\n<td><code>&#x3C;SafeAnchor /></code></td>\n<td align="center">✅</td>\n</tr>\n</tbody>\n</table>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p><strong>I</strong>. Add <code>bs-rsuite-ui-react</code> binding as dependency </p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add <span class="hljs-string">"https://github.com/shurygindv/bs-rsuite-ui-react.git"</span>\n<span class="hljs-keyword">or</span>\nyarn add @sdv-studio/bs-rsuite-ui-react</code></pre></div>\n<p><strong>II</strong>. Also we need to say <code>bsb</code>: heey, look! Seems, <code>bs-rsuite-ui-react</code> perfectly complements you, let\'s add it to `bs-dependencies</p>\n<p><code>...somewhere in your bsconfig.json:</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  ... \n      <span class="hljs-string">"bs-dependencies"</span>: [\n        <span class="hljs-string">"reason-react"</span>,\n        ...,\n        <span class="hljs-string">"@sdv-studio/bs-rsuite-ui-react"</span>\n    ],\n  ...</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p><strong>III</strong>. We would be to see a sea of colors, sky and sun, there are two ways to achieve it, import:</p>\n<p><code>LESS</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[%bs.raw {|require(\'rsuite/lib/styles/index.less\')|}];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = [%bs.raw {|require(<span class="hljs-symbol">\'rsuite</span>/lib/styles/index.less\')|}]</code></pre>\n      </div>\n    </div>\n  \n<p>or as plain <code>CSS</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[%bs.raw {|require(\'rsuite/dist/styles/rsuite-<span class="hljs-keyword">default</span>.css\')|}];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = [%bs.raw {|require(<span class="hljs-symbol">\'rsuite</span>/dist/styles/rsuite-default.css\')|}]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>All bindings are in <code>RsuiteUi</code> namespace, let\'s try! Some <strong>examples</strong></p>\n<p><strong>Notification</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code> <span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Notification</span>._open(props); <span class="hljs-comment">// props is RsuiteUi.Notification.Props.t</span>\n <span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Notification</span>.closeAll();\n \n <span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Notification</span>.success(<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Notification</span>.<span class="hljs-type">Props</span>.make(\n   ~title = <span class="hljs-type">React</span>.string(<span class="hljs-string">"I\'m title"</span>),\n   ~description = <span class="hljs-type">React</span>.string(<span class="hljs-string">"I\'m desc"</span>),\n   ()\n ));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p><strong>CheckPicker</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code> <span class="hljs-keyword">let</span> item = <span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">RsuiteTypes</span>.<span class="hljs-type">DataItemType</span>.make(\n  ~value = <span class="hljs-string">"value"</span>,\n  ~label = <span class="hljs-type">React</span>.string(<span class="hljs-string">"value"</span>),\n  ()\n );\n \n &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">CheckPicker</span> data={[|item|]]} /&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3722</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Animation</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  <span class="hljs-keyword">let</span> (isVisible, setVisibility) = <span class="hljs-type">React</span>.useState(() =&gt; <span class="hljs-literal">false</span>);\n\n  <span class="hljs-type">React</span>.useEffect0(() =&gt; {\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Global</span>.setTimeout(() =&gt; {\n      setVisibility(<span class="hljs-number">_</span> =&gt; <span class="hljs-literal">true</span>);\n    }, <span class="hljs-number">200</span>);\n    <span class="hljs-type">None</span>\n  });\n\n  &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Animation</span>.<span class="hljs-type">Bounce</span> \n    _in={isVisible}\n  &gt;\n    &lt;div&gt;\n      {<span class="hljs-type">React</span>.string(<span class="hljs-string">"An"</span>)}\n    &lt;/div&gt;\n  &lt;/<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Animation</span>.<span class="hljs-type">Bounce</span>&gt; </code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">949</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Modal</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span> show={<span class="hljs-literal">true</span>}&gt;\n      &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Header</span>&gt;\n         {<span class="hljs-type">React</span>.string(<span class="hljs-string">"Header"</span>)}\n      &lt;/<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Header</span>&gt;\n      \n       &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Title</span>&gt;\n         {<span class="hljs-type">React</span>.string(<span class="hljs-string">"Title"</span>)}\n      &lt;/<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Title</span>&gt;\n      \n       &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Body</span>&gt;\n        {<span class="hljs-type">React</span>.string(<span class="hljs-string">"Body"</span>)}\n      &lt;/<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Body</span>&gt;\n      \n      &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Footer</span>&gt;\n       {<span class="hljs-type">React</span>.string(<span class="hljs-string">"Footer"</span>)}\n      &lt;/<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Footer</span>&gt;\n  &lt;/<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.createElement ~show:<span class="hljs-literal">true</span>\n      ~children:[((<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Header</span>.createElement\n                     ~children:[<span class="hljs-type">React</span>.<span class="hljs-built_in">string</span> <span class="hljs-string">"Header"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                ((<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Title</span>.createElement\n                    ~children:[<span class="hljs-type">React</span>.<span class="hljs-built_in">string</span> <span class="hljs-string">"Title"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                ((<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Body</span>.createElement\n                    ~children:[<span class="hljs-type">React</span>.<span class="hljs-built_in">string</span> <span class="hljs-string">"Body"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                ((<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Modal</span>.<span class="hljs-type">Footer</span>.createElement\n                    ~children:[<span class="hljs-type">React</span>.<span class="hljs-built_in">string</span> <span class="hljs-string">"Footer"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n  [@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<h2 id="caveats"><a href="#caveats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Caveats</h2>\n<p><strong>I</strong>. Next components: <code>&#x3C;MultiCascader /></code>, <code>&#x3C;Cascader /></code>, <code>&#x3C;DatePicker /></code>, <code>Notification module</code> have <strong>_open</strong> prop instead <strong>open</strong></p>\n<p><strong>Example:</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  &lt;<span class="hljs-type">MultiCascader</span> _open={<span class="hljs-literal">true</span>} /&gt;\n  &lt;<span class="hljs-type">Cascader</span> _open={<span class="hljs-literal">true</span>} /&gt;\n  &lt;<span class="hljs-type">DatePicker</span> _open={<span class="hljs-literal">true</span>} /&gt;\n   \n   \n   <span class="hljs-type">Notification</span>._open(...); <span class="hljs-comment">// instead Notification.open()</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>II</strong>. <strong>_in</strong> instead <strong>in</strong> prop</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>   &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Animation</span>.<span class="hljs-type">Bounce</span> _in={isVisible} /&gt;\n  \n   &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Animation</span>.<span class="hljs-type">Transition</span> _in={isVisible} /&gt;\n   \n   &lt;<span class="hljs-type">RsuiteUi</span>.<span class="hljs-type">Animation</span>.<span class="hljs-type">Slide</span> _in={isVisible} /&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>III</strong>. Similar situation with <code>&#x3C;FlexboxGrid /></code>; Sometimes we would be to use prop <code>justify</code> with <strong>end</strong> value, but we should use <strong>end_</strong> instead</p>\n<p><strong>Example</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  &lt;<span class="hljs-type">FlexboxGrid</span> justify=`end_ /&gt;\n  &lt;<span class="hljs-type">FlexboxGrid</span> justify=`spaceAround /&gt;\n  &lt;<span class="hljs-type">FlexboxGrid</span> justify=`center /&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="contributions"><a href="#contributions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributions</h2>\n<p>It would be great, make our world better!\nAll contributions are welcomed.</p>\n<h2 id="faq-just-to-save-time"><a href="#faq-just-to-save-time" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ (just to save time...)</h2>\n<p><strong>1</strong>. How can we pass <code>Component</code> as prop?</p>\n<ul>\n<li>Put it in a separate function</li>\n<li>See: <a href="https://github.com/reasonml/reason-react/blob/master/docs/component-as-prop.md">https://github.com/reasonml/reason-react/blob/master/docs/component-as-prop.md</a></li>\n</ul>\n<p><strong>2</strong>. What the different between <code>ReasonReact.string</code> and <code>React.string</code>?</p>\n<ul>\n<li>They are the same (aliases), prefer <code>React.string</code></li>\n<li>See: <a href="https://github.com/reasonml/reason-react/issues/406">https://github.com/reasonml/reason-react/issues/406</a> comments</li>\n</ul>\n<p><strong>3</strong>. How can we pass string as child?</p>\n<ul>\n<li>Use <code>React.string("example")</code> instead <code>"example"</code></li>\n</ul>\n<p><strong>4</strong>. What <code>_type</code>, <code>_open</code>, <code>_val</code>, <code>_in</code> mean as <code>Component</code> prop?</p>\n<ul>\n<li>are reserved in Reason/Ocaml (aliases <code>type</code>, <code>open</code> and so on),</li>\n<li>See: <a href="https://bucklescript.github.io/docs/en/object">https://bucklescript.github.io/docs/en/object</a>\nand <a href="https://github.com/reasonml/reason-react/issues/475">https://github.com/reasonml/reason-react/issues/475</a></li>\n</ul>\n<p>And many other useful details about Reason React here!\nSee: <a href="https://github.com/reasonml/reason-react/tree/master/docs">https://github.com/reasonml/reason-react/tree/master/docs</a></p>\n<p><strong>Good luck!</strong> 🙂</p>\n',homepageUrl:"https://github.com/shurygindv/bs-rsuite-ui-react",repositoryUrl:"https://github.com/shurygindv/bs-rsuite-ui-react",npmUrl:"https://www.npmjs.com/package/%40sdv-studio%2Fbs-rsuite-ui-react",issuesUrl:"https://github.com/shurygindv/bs-rsuite-ui-react/issues",slug:"/package/@sdv-studio/bs-rsuite-ui-react"}},pathContext:{id:"@sdv-studio/bs-rsuite-ui-react"}}}});
//# sourceMappingURL=path---package-sdv-studio-bs-rsuite-ui-react-2c788bcdd3242f7e18a8.js.map