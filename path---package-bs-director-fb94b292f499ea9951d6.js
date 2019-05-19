webpackJsonp([0xbc8914fd0bc1],{1172:function(s,a){s.exports={data:{package:{type:"published",id:"bs-director",name:"bs-director",version:"0.0.6",category:"binding",flags:["neglected"],platforms:["browser"],description:"BuckleScript bindings to the Director router",keywords:["routing"],license:"MIT",updated:"2019-05-18T09:58:14.475Z",stars:null,score:.16442652074956363,quality:.429372646377014,popularity:.03521406265421479,maintenance:.0665422997356694,readme:'<h1 id="bs-director"><a href="#bs-director" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-director</h1>\n<p><a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings to the <a href="https://github.com/flatiron/director">Director</a> router.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i bs-director</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> router =\n  <span class="hljs-type">DirectorRe</span>.makeRouter {\n    <span class="hljs-string">"/"</span>: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"Navigated to tasks list"</span>,\n    <span class="hljs-string">"/active"</span>: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"Navigated active tasks list"</span>,\n    <span class="hljs-string">"/profile/:userid"</span>: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> (userid:<span class="hljs-params"> string)<span class="hljs-params"> </span></span></span></span>=&gt; <span class="hljs-type">Js</span>.log (<span class="hljs-string">"Navigated to profile for: "</span> ^ userid)\n    <span class="hljs-string">"/completed"</span>: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"Completed a task"</span>,\n  };\n\n<span class="hljs-comment">/* Optional configuration */</span> \n<span class="hljs-type">DirectorRe</span>.configure router {<span class="hljs-string">"foo"</span>: <span class="hljs-string">"bar"</span>};\n\n<span class="hljs-type">DirectorRe</span>.<span class="hljs-keyword">init</span> router <span class="hljs-string">"/"</span>;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-director",issuesUrl:null,slug:"/package/bs-director"}},pathContext:{id:"bs-director"}}}});
//# sourceMappingURL=path---package-bs-director-fb94b292f499ea9951d6.js.map