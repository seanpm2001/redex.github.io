webpackJsonp([0xf4b68b203326],{1224:function(s,e){s.exports={data:{package:{type:"published",id:"bs-priority-queue",name:"bs-priority-queue",version:"0.1.4",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript/ReasonML bindings for [tinyqueue](https://github.com/mourner/tinyqueue), a priority queue/heap implementation.",keywords:["collections"],license:"MIT",updated:"2019-06-02T03:58:16.979Z",stars:0,score:.41955218605103206,quality:.4110037660658368,popularity:.016852974796927014,maintenance:.8295786144353046,readme:'<h1 id="bs-priority-queue"><a href="#bs-priority-queue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-priority-queue</h1>\n<p>BuckleScript/ReasonML bindings for <a href="https://github.com/mourner/tinyqueue">tinyqueue</a>, a priority queue/heap implementation.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-priority-queue</code></pre></div>\n<p>Then, add the dependency in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-priority-queue"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Create an empty priority queue */</span>\n<span class="hljs-keyword">let</span> minQueue = <span class="hljs-type">PriorityQueue</span>.make(<span class="hljs-type">Pervasives</span>.compare);\n\n<span class="hljs-comment">/* Add some items */</span>\nminQueue-&gt;<span class="hljs-type">PriorityQueue</span>.push(<span class="hljs-number">7</span>);\nminQueue-&gt;<span class="hljs-type">PriorityQueue</span>.push(<span class="hljs-number">5</span>);\nminQueue-&gt;<span class="hljs-type">PriorityQueue</span>.push(<span class="hljs-number">10</span>);\n\n<span class="hljs-comment">/* Remove the top item */</span>\n<span class="hljs-type">Js</span>.log(minQueue-&gt;<span class="hljs-type">PriorityQueue</span>.pop); <span class="hljs-comment">/* Returns Some(5) */</span>\n\n<span class="hljs-comment">/* Return the top item (without removing it) */</span>\n<span class="hljs-type">Js</span>.log(minQueue-&gt;<span class="hljs-type">PriorityQueue</span>.peek); <span class="hljs-comment">/* Returns Some(7) */</span>\n\n<span class="hljs-comment">/* Remove the top item, throwing Not_found if the queue is empty */</span>\n<span class="hljs-type">Js</span>.log(minQueue-&gt;<span class="hljs-type">PriorityQueue</span>.popExn); <span class="hljs-comment">/* Returns 7 */</span>\n\n<span class="hljs-comment">/* Return the top item, throwing Not_found if the queue is empty */</span>\n<span class="hljs-type">Js</span>.log(minQueue-&gt;<span class="hljs-type">PriorityQueue</span>.peekExn); <span class="hljs-comment">/* Returns 10 */</span>\n\n<span class="hljs-comment">/* Get the size of the queue */</span>\n<span class="hljs-type">Js</span>.log(minQueue-&gt;<span class="hljs-type">PriorityQueue</span>.size); <span class="hljs-comment">/* Returns 1 */</span>\n\n<span class="hljs-comment">/* Populate a priority queue with an existing array */</span>\n<span class="hljs-keyword">let</span> minQueue = <span class="hljs-type">PriorityQueue</span>.fromArray([|<span class="hljs-number">7</span>, <span class="hljs-number">5</span>, <span class="hljs-number">10</span>|], <span class="hljs-type">Pervasives</span>.compare);\n\n<span class="hljs-comment">/* Set the top to be the max element */</span>\n<span class="hljs-keyword">let</span> maxQueue = <span class="hljs-type">PriorityQueue</span>.make((a, b) =&gt; b - a);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/yunyu/bs-priority-queue",repositoryUrl:"https://github.com/yunyu/bs-priority-queue",npmUrl:"https://www.npmjs.com/package/bs-priority-queue",issuesUrl:"https://github.com/yunyu/bs-priority-queue/issues",slug:"/package/bs-priority-queue"}},pathContext:{id:"bs-priority-queue"}}}});
//# sourceMappingURL=path---package-bs-priority-queue-42eb51e492a191e2014b.js.map