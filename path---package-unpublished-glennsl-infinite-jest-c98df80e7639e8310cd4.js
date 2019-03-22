webpackJsonp([85821852935206],{1340:function(s,n){s.exports={data:{package:{type:"unpublished",id:"unpublished/glennsl/infinite-jest",name:"glennsl/infinite-jest",version:"0.0.0",category:"library",flags:["neglected"],platforms:["browser","node","native"],description:"Experimental cross-platform native/BuckleScript test framework",keywords:["testing"],license:"MIT",updated:"2019-03-22T17:15:44.931Z",stars:6,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="infinite-jest"><a href="#infinite-jest" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>infinite-jest</h1>\n<p>An experimental cross-platform native/BuckleScript test framework</p>\n<blockquote>\n<p>Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is!</p>\n</blockquote>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">File</span> <span class="hljs-string">""</span>, line <span class="hljs-number">4</span>, characters <span class="hljs-number">2</span>-<span class="hljs-number">6</span>:\n<span class="hljs-type">Error</span>: <span class="hljs-type">Syntax</span> error</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">InfiniteJest</span>\n\n<span class="hljs-keyword">let</span> myTests =\n  <span class="hljs-keyword">open</span> <span class="hljs-type">InfiniteJest</span>.<span class="hljs-type">Test</span> <span class="hljs-keyword">in</span>\n  \n  describe <span class="hljs-string">"Assertions"</span> (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span> -&gt; [\n  \n    test <span class="hljs-string">"completely bananas"</span> (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span> -&gt;\n      <span class="hljs-string">"bananas"</span> |&gt; <span class="hljs-type">Expect</span>.stringContaining <span class="hljs-string">"nanas"</span>);\n      \n    test <span class="hljs-string">"succ"</span> (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span> -&gt;\n      <span class="hljs-number">2</span> |&gt; succ\n        |&gt; <span class="hljs-type">Expect</span>.toEqual <span class="hljs-number">3</span>);\n        \n  ])\n\n<span class="hljs-keyword">let</span> _ = \n  run [myTests]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="output-comparison"><a href="#output-comparison" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Output comparison</h2>\n<p>Jest/BuckleScript (Left) vs Native runner (Right)\n<img src="images/output-comparison.png" alt="Output comparison">)</p>\n',homepageUrl:"https://github.com/glennsl/infinite-jest#readme",repositoryUrl:"https://github.com/glennsl/infinite-jest",npmUrl:null,issuesUrl:"https://github.com/glennsl/infinite-jest/issues",slug:"/package/unpublished/glennsl/infinite-jest"}},pathContext:{id:"unpublished/glennsl/infinite-jest"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-infinite-jest-c98df80e7639e8310cd4.js.map