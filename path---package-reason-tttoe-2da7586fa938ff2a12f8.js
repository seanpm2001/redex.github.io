webpackJsonp([0xaef64be14ca7],{1260:function(e,a){e.exports={data:{package:{type:"published",id:"reason-tttoe",name:"reason-tttoe",version:"1.0.1",category:"library",flags:[],platforms:["any"],description:"a game development library",keywords:["game development"],license:"MIT",updated:"2018-10-22T11:19:36.362Z",stars:3,score:.635415988783592,quality:.9243581588458708,popularity:.023342132542712075,maintenance:.9998251278282329,readme:'<h1 id="reason-tttoe"><a href="#reason-tttoe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-tttoe</h1>\n<p><code>reason-tttoe</code> is a Tic-Tac-Toe engine. This library can be used for game development in the browser, node.js, mobile or native. Its code is mostly a port of my <a href="https://github.com/venil7/Programming-in-Haskell-exercises-/blob/master/tttoe/ttoe.hs">Haskell code</a>.</p>\n<p>See <a href="./example/">Example</a> of how it can be used on the web.</p>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<p><a href="https://travis-ci.org/venil7/ReasonML-TicTacToe"><img src="https://travis-ci.org/venil7/ReasonML-TicTacToe.svg?branch=master" alt="Build Status"></a></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install\nnpm run build</code></pre></div>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install reason-tttoe --save</code></pre></div>\n<h3 id="update-bsconfigjson"><a href="#update-bsconfigjson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Update <code>bsconfig.json</code></h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>...\n<span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"reason-tttoe"</span>\n]\n...</code></pre></div>\n<h2 id="run-example"><a href="#run-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run <a href="./example/">Example</a></h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">cd</span> example\nnpm install\nnpm start</code></pre></div>\n<p><em>this is how example it looks</em></p>\n<p><img src="https://user-images.githubusercontent.com/508022/36355005-4baa9e48-14d4-11e8-8ec8-dac0aee5c872.gif" alt="example gameplay"></p>\n<h2 id="run-tests"><a href="#run-tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run Tests</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run <span class="hljs-built_in">test</span></code></pre></div>\n',homepageUrl:"https://github.com/venil7/ReasonML-TicTacToe#readme",repositoryUrl:"https://github.com/venil7/ReasonML-TicTacToe",npmUrl:"https://www.npmjs.com/package/reason-tttoe",issuesUrl:"https://github.com/venil7/ReasonML-TicTacToe/issues",slug:"/package/reason-tttoe"}},pathContext:{id:"reason-tttoe"}}}});
//# sourceMappingURL=path---package-reason-tttoe-2da7586fa938ff2a12f8.js.map