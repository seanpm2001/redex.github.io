webpackJsonp([0xb89a05a877a6],{1295:function(s,a){s.exports={data:{package:{type:"published",id:"@piq9117/bs-mailgun",name:"@piq9117/bs-mailgun",version:"3.0.0-beta",category:"binding",flags:[],platforms:["node"],description:"mailgun-js bucklescript binding",keywords:["platform api"],license:"Apache-2.0",updated:"2019-04-12T18:02:21.309Z",stars:0,score:.5140675314023722,quality:.5229499798215671,popularity:.023761017629874096,maintenance:.9967605179584175,readme:'<h1 id="bs-mailgun"><a href="#bs-mailgun" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-mailgun</h1>\n<p><a href="http://bojand.github.io/mailgun-js/#/">mailgun-js</a> bucklescript bindings.</p>\n<p><a href="https://www.mailgun.com/">Mailgun</a> is a cloud-based email service for sending, receiving and tracking email sent through\nyour websites and applications. <a href="http://bojand.github.io/mailgun-js/#/">mailgun-js</a> is a node module for interacting with <a href="https://documentation.mailgun.com/en/latest/api_reference.html">Mailgun\'s api</a>.\nThis bucklescript library is a binding for <a href="http://bojand.github.io/mailgun-js/#/">mailgun-js</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install @piq9117/bs-mailgun</code></pre></div>\n<h3 id="bsconfig"><a href="#bsconfig" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig</h3>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>  ...\n\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"@piq9117/bs-mailgun"</span>\n  ]\n  ...</code></pre></div>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<h3 id="sending-mail"><a href="#sending-mail" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sending Mail</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> mailgunKeys =\n  <span class="hljs-type">Mailgun</span>.mailgunReq\n    ~apiKey:<span class="hljs-string">"YOUR API KEY"</span>\n    ~domain:<span class="hljs-string">"YOUR DOMAIN"</span>\n\n<span class="hljs-keyword">let</span> mailgun = <span class="hljs-type">Mailgun</span>.mailgun req\n\n<span class="hljs-keyword">let</span> emailData =\n  <span class="hljs-type">Mailgun</span>.emailData\n    ~from:<span class="hljs-string">"Excited User &lt;me@samples.mailgun.org&gt;"</span>\n    ~to_:<span class="hljs-string">"serobnic@mail.ru"</span>\n    ~subject:<span class="hljs-string">"Hello"</span>\n    ~text:<span class="hljs-string">"Testing some Mailgun awesomeness!"</span>\n    \n<span class="hljs-keyword">let</span> messages = <span class="hljs-type">Mailgun</span>.<span class="hljs-type">Message</span>.messages mailgun\n\n<span class="hljs-keyword">let</span> sendMail =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Belt_Result</span> <span class="hljs-keyword">in</span>\n  <span class="hljs-type">Mailgun</span>.<span class="hljs-type">Message</span>.send messages emailData (<span class="hljs-keyword">fun</span> s -&gt;\n    <span class="hljs-keyword">match</span> s <span class="hljs-keyword">with</span>\n    | <span class="hljs-type">Ok</span> o -&gt; <span class="hljs-type">Js</span>.log o\n    | <span class="hljs-type">Error</span> e -&gt; <span class="hljs-type">Js</span>.log e \n  )</code></pre></div>\n<p><a href="./docs/howto.md">More examples on how to use this bindings library</a></p>\n',homepageUrl:"https://github.com/piq9117/bs-mailgun",repositoryUrl:"https://github.com/piq9117/bs-mailgun",npmUrl:"https://www.npmjs.com/package/%40piq9117%2Fbs-mailgun",issuesUrl:"https://github.com/piq9117/bs-mailgun/issues",slug:"/package/@piq9117/bs-mailgun"}},pathContext:{id:"@piq9117/bs-mailgun"}}}});
//# sourceMappingURL=path---package-piq-9117-bs-mailgun-052411d74e12ca66e35e.js.map