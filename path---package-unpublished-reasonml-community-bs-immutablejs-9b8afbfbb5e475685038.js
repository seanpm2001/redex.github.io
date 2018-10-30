webpackJsonp([35441937395684],{1309:function(s,e){s.exports={data:{package:{type:"unpublished",id:"unpublished/reasonml-community/bs-immutablejs",name:"reasonml-community/bs-immutablejs",version:"0.1.0",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"Reason + BuckleScript bindings to Immutable.js",keywords:["collections"],license:"MIT",updated:"2018-10-30T19:44:00.134Z",stars:26,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-immutablejs"><a href="#bs-immutablejs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-immutablejs</h1>\n<p><strong>Note</strong>: these are <strong>bindings</strong> to the <a href="https://facebook.github.io/immutable-js/">Immutable.js</a> library. These are only meant to be used to interoperate with existing JavaScript code; In Reason/BS, we have more lightweight immutable (and optionally mutable) data structures by default (list, record, hashmap, set, and upcoming data structures). New Reason/BS projects projects don\'t need bs-immutablejs.</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>The source is a <a href="https://github.com/reasonml-community/bs-immutablejs/blob/master/src/immJsRe.re">single file</a> of BuckleScript <code>external</code>s. The API corresponds to Immutable.js\' API.</p>\n<p>Example usage:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greeting = <span class="hljs-type">ImmutableJsRe</span>.<span class="hljs-type">List</span>.fromArray([|<span class="hljs-string">"hello"</span>, <span class="hljs-string">"world"</span>|]);\n\n<span class="hljs-keyword">let</span> extendedGreeting = <span class="hljs-type">ImmutableJsRe</span>.<span class="hljs-type">List</span>.push(greeting, <span class="hljs-string">"how are you"</span>);\n\n<span class="hljs-keyword">let</span> reallyExtendedGreeting =\n  <span class="hljs-type">ImmutableJsRe</span>.<span class="hljs-type">List</span>.(\n    extendedGreeting\n    |. push(<span class="hljs-string">"I\'m fine"</span>)\n    |. push(<span class="hljs-string">"thank you"</span>)\n    |. push(<span class="hljs-string">"and you?"</span>)\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> greeting = <span class="hljs-type">ImmutableJsRe</span>.<span class="hljs-type">List</span>.fromArray [|<span class="hljs-string">"hello"</span>;<span class="hljs-string">"world"</span>|]\n<span class="hljs-keyword">let</span> extendedGreeting = <span class="hljs-type">ImmutableJsRe</span>.<span class="hljs-type">List</span>.push greeting <span class="hljs-string">"how are you"</span>\n<span class="hljs-keyword">let</span> reallyExtendedGreeting =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">ImmutableJsRe</span>.<span class="hljs-type">List</span> <span class="hljs-keyword">in</span>\n    ((extendedGreeting |. (push <span class="hljs-string">"I\'m fine"</span>)) |. (push <span class="hljs-string">"thank you"</span>)) |.\n      (push <span class="hljs-string">"and you?"</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>Generated code:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-keyword">var</span> greeting = <span class="hljs-type">Immutable</span>.<span class="hljs-type">List</span>(<span class="hljs-comment">/* array */</span>[\n      <span class="hljs-string">"hello"</span>,\n      <span class="hljs-string">"world"</span>\n    ]);\n<span class="hljs-keyword">var</span> extendedGreeting = greeting.push(<span class="hljs-string">"how are you"</span>);\nextendedGreeting.push(<span class="hljs-string">"I\'m fine"</span>).push(<span class="hljs-string">"thank you"</span>).push(<span class="hljs-string">"and you?"</span>);</code></pre></div>\n<h2 id="transitioning-to-idiomatic-reasonbucklescript-data-structures"><a href="#transitioning-to-idiomatic-reasonbucklescript-data-structures" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transitioning to Idiomatic Reason/BuckleScript Data Structures</h2>\n<p>Here\'s a table of Immutable.js data structures and their Reason/BuckleScript equivalents. Reason/BS provide the data structures out of the box.</p>\n<table>\n<thead>\n<tr>\n<th>Immutable.js</th>\n<th>Reason/BuckleScript</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>List</td>\n<td>List</td>\n</tr>\n<tr>\n<td>Map</td>\n<td>Map</td>\n</tr>\n<tr>\n<td>OrderedMap</td>\n<td><a href="https://bucklescript.github.io/bucklescript/api/Belt.Map.html">Belt Map</a></td>\n</tr>\n<tr>\n<td>Set</td>\n<td>Set</td>\n</tr>\n<tr>\n<td>OrderedSet</td>\n<td><a href="https://bucklescript.github.io/bucklescript/api/Belt.Map.html">Belt Set</a></td>\n</tr>\n<tr>\n<td>Stack</td>\n<td>List</td>\n</tr>\n<tr>\n<td>Record</td>\n<td>Record</td>\n</tr>\n<tr>\n<td>Seq</td>\n<td>Use \n<code>lazy</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>Prerequisite: <code>https://github.com/reasonml/reason-cli</code>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>git <span class="hljs-built_in">clone</span> https://github.com/BuckleTypes/bs-immutablejs.git\n<span class="hljs-built_in">cd</span> bs-immutablejs\nnpm install\nnpm start</code></pre></div>\n',homepageUrl:"https://github.com/reasonml-community/bs-immutablejs#readme",repositoryUrl:"https://github.com/reasonml-community/bs-immutablejs",npmUrl:null,issuesUrl:"https://github.com/reasonml-community/bs-immutablejs/issues",slug:"/package/unpublished/reasonml-community/bs-immutablejs"}},pathContext:{id:"unpublished/reasonml-community/bs-immutablejs"}}}});
//# sourceMappingURL=path---package-unpublished-reasonml-community-bs-immutablejs-9b8afbfbb5e475685038.js.map