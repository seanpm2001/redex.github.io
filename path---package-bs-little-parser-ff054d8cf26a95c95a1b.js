webpackJsonp([3084940558488],{1229:function(e,t){e.exports={data:{package:{type:"published",id:"bs-little-parser",name:"bs-little-parser",version:"0.3.4",category:"library",flags:["neglected"],platforms:["any"],description:"Little parser combinator for BuckleScript or Reason.",keywords:["parsing"],license:"MIT",updated:"2020-01-07T03:46:46.383Z",stars:9,score:.40427536645956297,quality:.7060252637173796,popularity:.05318153078163587,maintenance:.4967264330593616,readme:'<h1 id="bs-little-parser"><a href="#bs-little-parser" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-little-parser</h1>\n<p>Little parser combinator for BuckleScript or Reason.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsLittleParser</span>.<span class="hljs-type">Parser</span>;\n\n<span class="hljs-keyword">let</span> input =\n  <span class="hljs-type">BsLittleParser</span>.<span class="hljs-type">Input</span>.{text: <span class="hljs-string">"abcabc  abc"</span>, index: <span class="hljs-number">0</span>, whitespace: <span class="hljs-string">" "</span>};\n\n<span class="hljs-keyword">let</span> abc = stringParser(<span class="hljs-string">"abc"</span>);\n\n<span class="hljs-keyword">let</span> () = input |&gt; rep(abc) |&gt; <span class="hljs-type">Js</span>.log;\n</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsLittleParser</span>.<span class="hljs-type">Parser</span>\n\n<span class="hljs-keyword">let</span> input = <span class="hljs-type">BsLittleParser</span>.<span class="hljs-type">Input</span>.{text = <span class="hljs-string">"abcabc  abc"</span>; index = <span class="hljs-number">0</span>; whitespace = <span class="hljs-string">" "</span>}\n\n<span class="hljs-keyword">let</span> abc = stringParser <span class="hljs-string">"abc"</span>\n\n<span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> =\n  input\n  |&gt; rep abc\n  |&gt; <span class="hljs-type">Js</span>.log</code></pre>\n      </div>\n    </div>\n  \n<p>Type <code>Input.t</code> has a whitespace which specify a character sequence should be ignored.</p>\n<h2 id="parsers"><a href="#parsers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parsers</h2>\n<table>\n<thead>\n<tr>\n<th align="left">parser</th>\n<th align="left">description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">str s</td>\n<td align="left">expect string</td>\n</tr>\n<tr>\n<td align="left">chr c</td>\n<td align="left">expect char</td>\n</tr>\n<tr>\n<td align="left">regex r</td>\n<td align="left">expect regex</td>\n</tr>\n<tr>\n<td align="left">p \n<code>&#x3C;*></code>\n q</td>\n<td align="left">execute q only if p succeeds</td>\n</tr>\n<tr>\n<td align="left">p \n<code>&#x3C;|></code>\n q</td>\n<td align="left">execute q only if p fails</td>\n</tr>\n<tr>\n<td align="left">p \n<code>&#x3C;*</code>\n q</td>\n<td align="left">same with \n<code>&#x3C;*></code>\n but throw the result of q away</td>\n</tr>\n<tr>\n<td align="left">p \n<code>*></code>\n q</td>\n<td align="left">same with \n<code>&#x3C;*></code>\n but throw the result of p away</td>\n</tr>\n<tr>\n<td align="left">p \n<code>>></code>\n fnq</td>\n<td align="left">apply the result of p to fnq then execute the return parser</td>\n</tr>\n<tr>\n<td align="left">p \n<code>^^</code>\n fn</td>\n<td align="left">apply the result of p to fn</td>\n</tr>\n<tr>\n<td align="left">rep p</td>\n<td align="left">repeat p</td>\n</tr>\n<tr>\n<td align="left">rep1 p</td>\n<td align="left">repeat p at least once</td>\n</tr>\n<tr>\n<td align="left">opt p</td>\n<td align="left">execute p zero or once</td>\n</tr>\n<tr>\n<td align="left">andPred p</td>\n<td align="left">execute p without consuming the input</td>\n</tr>\n<tr>\n<td align="left">notPred p</td>\n<td align="left">succeeds only if p fails without consuming the input</td>\n</tr>\n</tbody>\n</table>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT</p>\n',homepageUrl:"https://github.com/Henoc/bs-little-parser#readme",repositoryUrl:"https://github.com/Henoc/bs-little-parser",npmUrl:"https://www.npmjs.com/package/bs-little-parser",issuesUrl:"https://github.com/Henoc/bs-little-parser/issues",slug:"/package/bs-little-parser"}},pathContext:{id:"bs-little-parser"}}}});
//# sourceMappingURL=path---package-bs-little-parser-ff054d8cf26a95c95a1b.js.map