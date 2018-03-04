webpackJsonp([0xcf2d015b5144],{1189:function(s,n){s.exports={data:{package:{id:"rex-json",stars:22,name:"rex-json",version:"1.2.0",category:"library",flags:[],platforms:["any"],description:"Works with both native and js targets (compiled with bsb-native).",keywords:["json","parsing"],license:"MIT",updated:"2018-03-01T22:10:31.843Z",type:"published",score:.6235873789472786,quality:.8019115045769898,popularity:.09439101659305693,maintenance:.9999344907617476,readme:'<h1 id="a-simple-cross-target-json-library-for-reasonocaml"><a href="#a-simple-cross-target-json-library-for-reasonocaml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A simple cross-target JSON library for Reason/OCaml</h1>\n<p>Works with both native and js targets (compiled with bsb-native).</p>\n<p>Why would you want this library?</p>\n<ul>\n<li>you want minimal dependencies</li>\n<li>you want forgiving json parsing (comments, trailing commas allowed)</li>\n<li>you\'re fine with "good enough" performance</li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Add <code>rex-json</code> to your <code>package.json</code> and your <code>bsconfig.json</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage:</h2>\n<div class="redex-codeblock"><pre class="hljs lang-rust"><code><span class="hljs-keyword">let</span> data = {|\n{\n  <span class="hljs-string">"some"</span>: <span class="hljs-string">"json"</span>, <span class="hljs-comment">// with a comment!</span>\n  <span class="hljs-string">"more"</span>: [<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,],\n  <span class="hljs-string">"nested"</span>: [{\n    <span class="hljs-string">"and"</span>: [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,{<span class="hljs-string">"stuff"</span>: <span class="hljs-number">5</span>}]\n  }], <span class="hljs-comment">// trailing commas!</span>\n}\n|};\n<span class="hljs-keyword">let</span> json = <span class="hljs-type">Json</span>.parse(data);\n<span class="hljs-keyword">let</span> simple = <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"some"</span>, json); <span class="hljs-comment">/* == Some(String("json")) */</span>\n\n<span class="hljs-comment">/** Yay get us a bind of optionals */</span>\n<span class="hljs-keyword">let</span> (|&gt;&gt;) = <span class="hljs-type">Json</span>.bind;\n\n<span class="hljs-keyword">let</span> stuff = json\n  |&gt; <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"nested"</span>)\n  |&gt;&gt; <span class="hljs-type">Json</span>.nth(<span class="hljs-number">0</span>)\n  |&gt;&gt; <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"and"</span>)\n  |&gt;&gt; <span class="hljs-type">Json</span>.nth(<span class="hljs-number">2</span>)\n  |&gt;&gt; <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"stuff"</span>)\n  |&gt;&gt; <span class="hljs-type">Json</span>.number; <span class="hljs-comment">/* == Some(5.) */</span>\n\n<span class="hljs-keyword">let</span> str = <span class="hljs-type">Json</span>.stringify(json); <span class="hljs-comment">/* back to a string */</span></code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-rust"><code><span class="hljs-keyword">type</span> t =\n  | <span class="hljs-type">String</span>(<span class="hljs-built_in">string</span>)\n  | <span class="hljs-type">Number</span>(<span class="hljs-built_in">float</span>)\n  | <span class="hljs-type">Array</span>(<span class="hljs-built_in">list</span>(t))\n  | <span class="hljs-type">Object</span>(<span class="hljs-built_in">list</span>((<span class="hljs-built_in">string</span>, t)))\n  | <span class="hljs-type">True</span>\n  | <span class="hljs-type">False</span>\n  | <span class="hljs-type">Null</span>;</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-rust"><code>/* doing <span class="hljs-built_in">let</span> (|&gt;&gt;) = Json.bind can be quite nice */\n<span class="hljs-built_in">let</span> <span class="hljs-built_in">bind</span>: (option(<span class="hljs-string">\'a), \'</span>a =&gt; <span class="hljs-string">\'b) =&gt; option(\'</span>b);\n<span class="hljs-built_in">let</span> get: (string, t) =&gt; option(t) // object access\n<span class="hljs-built_in">let</span> nth: (int, t) =&gt; option(t) // array access\n\n/* helpers <span class="hljs-keyword">for</span> unwrapping `t` */\n<span class="hljs-built_in">let</span> array: t =&gt; option(list(t))\n<span class="hljs-built_in">let</span> obj: t =&gt; option(list((string, t)))\n\n<span class="hljs-built_in">let</span> string: t =&gt; option(string)\n<span class="hljs-built_in">let</span> number: t =&gt; option(<span class="hljs-built_in">float</span>)\n<span class="hljs-built_in">let</span> bool t =&gt; option(bool)\n<span class="hljs-built_in">let</span> null: t =&gt; option(())</code></pre></div>\n',homepageUrl:"https://github.com/jaredly/rex-json#readme",repositoryUrl:"https://github.com/jaredly/rex-json",npmUrl:"https://www.npmjs.com/package/rex-json",issuesUrl:"https://github.com/jaredly/rex-json/issues",slug:"/package/rex-json"}},pathContext:{id:"rex-json"}}}});
//# sourceMappingURL=path---package-rex-json-235f4f5cd8ef697e23d8.js.map