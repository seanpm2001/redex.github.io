webpackJsonp([63728378497505],{1309:function(s,e){s.exports={data:{package:{type:"published",id:"decco",name:"decco",version:"1.1.1",category:"library",flags:[],platforms:["browser","node"],description:"Bucklescript PPX which generates JSON (de)serializers for user-defined types",keywords:["json","ppx","data serialization","parsing"],license:"MIT",updated:"2020-01-10T02:18:34.345Z",stars:106,score:.6504857168003539,quality:.863309167069688,popularity:.13820719684998098,maintenance:.9803441365198691,readme:'<h1 id="decco"><a href="#decco" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Decco</h1>\n<h2 id="latest-version-v11"><a href="#latest-version-v11" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Latest version: v1.1</h2>\n<p><strong>The latest version of Decco only works with BS6 and above!</strong></p>\n<p>If you need to use decco with BS5, install <code>@ryb73/decco</code> version ^0.1.0 by <a href="https://github.com/reasonml-labs/decco/blob/0452fc42fa4cd4230d394c718e7f62a0384ce045/README.md">following the old ReadMe here</a>.</p>\n<h2 id="what-is-it"><a href="#what-is-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is it?</h2>\n<p>A Bucklescript PPX which generates JSON serializers and deserializers for user-defined types.</p>\n<p>Example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Define types */</span>\n[@decco] <span class="hljs-keyword">type</span> variant(\'a) = <span class="hljs-type">A</span> | <span class="hljs-type">B</span>(int) | <span class="hljs-type">C</span>(int, \'a);\n<span class="hljs-keyword">type</span> dict = <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t(string);\n[@decco] <span class="hljs-keyword">type</span> mytype = {\n    s: string,\n    i: int,\n    o: option(int),\n    complex: array(option(list(variant(string)))),\n    [@decco.<span class="hljs-keyword">default</span> <span class="hljs-number">1.0</span>] f: float,\n    [@decco.key <span class="hljs-string">"other_key"</span>] otherKey: string,\n    magic: [@decco.codec <span class="hljs-type">Decco</span>.<span class="hljs-type">Codecs</span>.magic] dict,\n};\n\n<span class="hljs-comment">/* Use &lt;typename&gt;_encode to encode */</span>\n<span class="hljs-keyword">let</span> encoded = mytype_encode({\n    s: <span class="hljs-string">"hello"</span>,\n    i: <span class="hljs-number">12</span>,\n    o: <span class="hljs-type">None</span>,\n    complex: [| <span class="hljs-type">Some</span>([ <span class="hljs-type">C</span>(<span class="hljs-number">25</span>, <span class="hljs-string">"bullseye"</span>) ]) |],\n    f: <span class="hljs-number">13</span>.,\n    otherKey: <span class="hljs-string">"other"</span>,\n    magic: <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromArray([|(<span class="hljs-string">"key"</span>,<span class="hljs-string">"value"</span>)|]),\n});\n\n<span class="hljs-type">Js</span>.log(<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.stringifyWithSpace(encoded, <span class="hljs-number">2</span>));\n<span class="hljs-comment">/* {\n     "s": "hello",\n     "i": 12,\n     "o": null,\n     "complex": [ [ ["C", 25, "bullseye"] ] ],\n     "f": 13,\n     "other_key": "other",\n     "magic": { "key": "value" }\n  } */</span>\n\n<span class="hljs-comment">/* Use &lt;typename&gt;_decode to decode */</span>\n<span class="hljs-keyword">let</span> { s, i, o, complex, f, otherKey, magic } =\n    mytype_decode(encoded)\n    |&gt; <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.getExn;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> variant =\n  | <span class="hljs-type">A</span>\n  | <span class="hljs-type">B</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span>\n  | <span class="hljs-type">C</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span>* <span class="hljs-symbol">\'a</span>[@@decco ]\n<span class="hljs-keyword">type</span> dict = <span class="hljs-built_in">string</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t\n<span class="hljs-keyword">type</span> mytype =\n  {\n  s: <span class="hljs-built_in">string</span>;\n  i: <span class="hljs-built_in">int</span>;\n  o: <span class="hljs-built_in">int</span> option;\n  complex: <span class="hljs-built_in">string</span> variant <span class="hljs-built_in">list</span> option <span class="hljs-built_in">array</span>;\n  f: <span class="hljs-built_in">float</span>[@decco.default <span class="hljs-number">1.0</span>];\n  otherKey: <span class="hljs-built_in">string</span>[@decco.key <span class="hljs-string">"other_key"</span>];\n  magic: ((dict)[@decco.codec <span class="hljs-type">Decco</span>.<span class="hljs-type">Codecs</span>.magic]);}[@@decco ]\n<span class="hljs-keyword">let</span> encoded =\n  mytype_encode\n    {\n      s = <span class="hljs-string">"hello"</span>;\n      i = <span class="hljs-number">12</span>;\n      o = <span class="hljs-type">None</span>;\n      complex =\n        [|((<span class="hljs-type">Some</span> ([((<span class="hljs-type">C</span> (<span class="hljs-number">25</span>, <span class="hljs-string">"bullseye"</span>))[@explicit_arity ])]))[@explicit_arity\n                                                                ])|];\n      f = <span class="hljs-number">13.</span>;\n      otherKey = <span class="hljs-string">"other"</span>;\n      magic = (<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromArray [|(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>)|])\n    }\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.stringifyWithSpace encoded <span class="hljs-number">2</span>)\n<span class="hljs-keyword">let</span> { s; i; o; complex; f; otherKey; magic } =\n  (mytype_decode encoded) |&gt; <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.getExn</code></pre>\n      </div>\n    </div>\n  \n<h2 id="what-state-is-it-in"><a href="#what-state-is-it-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What state is it in?</h2>\n<p>Working fine in active production code.</p>\n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<ol>\n<li>Install package</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i decco</code></pre></div>\n<ol start="2">\n<li>Update your <code>bsconfig.json</code></li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...,\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"decco"</span> ],\n  <span class="hljs-string">"ppx-flags"</span>: [ <span class="hljs-string">"decco/ppx"</span> ],\n  ...\n}</code></pre></div>\n<p>Adding <code>decco/ppx</code> to <code>ppx-flags</code> will enable the PPX. Adding decco to <code>bs-dependencies</code> is required because the code generated by the PPX references the <code>Decco</code> module.</p>\n<h2 id="how-do-i-use-it"><a href="#how-do-i-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use it?</h2>\n<p>See <a href="test/__tests__/test.re"><code>test.re</code></a> for some examples.</p>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="attributes"><a href="#attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Attributes</h3>\n<h4 id="decco-1"><a href="#decco-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>[@decco]</h4>\n<p>Applies to: type declarations, type signatures</p>\n<p>Indicates that an encoder and decoder should be generated for the given type.</p>\n<h4 id="deccoencode"><a href="#deccoencode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>[@decco.encode]</h4>\n<p>Applies to: type declarations, type signatures</p>\n<p>Indicates than an encoder (but no decoder) should be generated for the given type.</p>\n<h4 id="deccodecode"><a href="#deccodecode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>[@decco.decode]</h4>\n<p>Applies to: type declarations, type signatures</p>\n<p>Indicates than an decoder (but no encoder) should be generated for the given type.</p>\n<h4 id="deccocodec"><a href="#deccocodec" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>[@decco.codec]</h4>\n<p>Applies to: type expressions</p>\n<p>Specifies custom encoders and decoders for the type. Note that both an encoder and decoder must be specified, even if the type expression is within a type for which [@decco.encode] or [@decco.decode] was specified.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@decco] <span class="hljs-keyword">type</span> t = [@decco.codec (fancyEncoder, fancyDecoder)] fancyType;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> t = ((fancyType)[@decco.codec (fancyEncoder, fancyDecoder)])[@@decco ]</code></pre>\n      </div>\n    </div>\n  \n<h4 id="deccokey"><a href="#deccokey" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>[@decco.key]</h4>\n<p>Applies to: record fields</p>\n<p>By default, Reason record fields map to JS object fields of the same name. Use [@decco.key] to specify a custom JS field name. Useful if the JS field name is invalid as a Reason record field name.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@decco]\n<span class="hljs-keyword">type</span> record = {\n    [@decco.key <span class="hljs-string">"other_key"</span>] otherKey: string,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> record = {\n  otherKey: <span class="hljs-built_in">string</span>[@decco.key <span class="hljs-string">"other_key"</span>];}[@@decco ]</code></pre>\n      </div>\n    </div>\n  \n<h4 id="deccodefault"><a href="#deccodefault" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>[@decco.default]</h4>\n<p>Applies to: record fields\nDefault: <code>Js.Json.null</code></p>\n<p>When decoding a record, the default value will be used for keys that are missing from the JSON object being decoded.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@decco] <span class="hljs-keyword">type</span> record = {\n    [@decco.<span class="hljs-keyword">default</span> <span class="hljs-string">"def"</span>] s: string,\n};\n\n<span class="hljs-keyword">let</span> {s} = <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.parseExn(<span class="hljs-string">"{}"</span>) |&gt; record_decode |&gt; <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.getExn;\n<span class="hljs-type">Js</span>.log(s); <span class="hljs-comment">/* def */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> record = {\n  s: <span class="hljs-built_in">string</span>[@decco.default <span class="hljs-string">"def"</span>];}[@@decco ]\n<span class="hljs-keyword">let</span> { s } = ((<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.parseExn <span class="hljs-string">"{}"</span>) |&gt; record_decode) |&gt; <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.getExn\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log s</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/reasonml-labs/decco#readme",repositoryUrl:"https://github.com/reasonml-labs/decco",npmUrl:"https://www.npmjs.com/package/decco",issuesUrl:"https://github.com/reasonml-labs/decco/issues",slug:"/package/decco"}},pathContext:{id:"decco"}}}});
//# sourceMappingURL=path---package-decco-9d9be14228a23f507ac2.js.map