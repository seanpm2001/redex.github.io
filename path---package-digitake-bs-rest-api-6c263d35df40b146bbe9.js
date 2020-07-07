webpackJsonp([0x6379c2046133],{1319:function(s,a){s.exports={data:{package:{type:"published",id:"@digitake/bs-rest-api",name:"@digitake/bs-rest-api",version:"1.3.2",category:"library",flags:[],platforms:["browser","node"],description:"BuckleScript REST API Builder",keywords:["data fetching"],license:"MIT",updated:"2020-06-08T10:29:10.033Z",stars:0,score:.5995464740263025,quality:.8085035483903099,popularity:.02001492426136495,maintenance:.9999719600506622,readme:'<h1 id="bs-rest-api"><a href="#bs-rest-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-rest-api</h1>\n<p>REST in style, no more pain with the Functor force.</p>\n<hr>\n<p><a href="https://packagequality.com/#?package=@digitake%2Fbs-rest-api"><img src="https://npm.packagequality.com/badge/@digitake%2Fbs-rest-api.png" alt="Package Quality"></a></p>\n<h2 id="version-132"><a href="#version-132" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version: 1.3.2</h2>\n<h2 id="dependencies"><a href="#dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dependencies</h2>\n<p>This package used <code>bs-json</code> for most of <code>encode/decode</code> part. It relied on <code>bs-fetch</code> as a communication layer. And also uses <code>bs-promise-monad</code> for syntatic suger, although it is not required.</p>\n<hr>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use?</h2>\n<h4 id="1-define-the-module"><a href="#1-define-the-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Define the module</h4>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">TodoItem</span> = {\n  /** <span class="hljs-number">1.1</span> <span class="hljs-type">Define</span> data model */\n  <span class="hljs-keyword">type</span> t = {\n    userId: <span class="hljs-built_in">int</span>,\n    id: <span class="hljs-built_in">int</span>,\n    title: <span class="hljs-built_in">string</span>,\n    completed: <span class="hljs-built_in">bool</span>\n  };\n\n  /** <span class="hljs-number">1.2</span> <span class="hljs-type">The</span> namespace represents url path <span class="hljs-keyword">for</span> the resource */\n  <span class="hljs-keyword">let</span> namespace = <span class="hljs-string">"todos"</span>;\n\n  /** <span class="hljs-number">1.3</span> <span class="hljs-type">Create</span> a decoder */\n  <span class="hljs-keyword">let</span> decode = json =&gt; <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.({\n      userId: json |&gt; field(<span class="hljs-string">"userId"</span>, <span class="hljs-built_in">int</span>),\n      id: json |&gt; field(<span class="hljs-string">"id"</span>, <span class="hljs-built_in">int</span>),\n      title: json |&gt; field(<span class="hljs-string">"title"</span>, <span class="hljs-built_in">string</span>),\n      completed: json |&gt; field(<span class="hljs-string">"completed"</span>, <span class="hljs-built_in">bool</span>)\n  });\n\n  /** <span class="hljs-number">1.4</span> <span class="hljs-type">Create</span> an encoder */\n  <span class="hljs-keyword">let</span> encode = (d:t) =&gt; <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.({\n    [\n      (<span class="hljs-string">"userId"</span>, <span class="hljs-built_in">int</span>(d.userId)),\n      (<span class="hljs-string">"id"</span>, <span class="hljs-built_in">int</span>(d.id)),\n      (<span class="hljs-string">"title"</span>, <span class="hljs-built_in">string</span>(d.title)),\n      (<span class="hljs-string">"completed"</span>, <span class="hljs-built_in">bool</span>(d.completed))\n    ]\n    |&gt; object_\n  });\n}</code></pre></div>\n<h4 id="2-define-the-endpoint"><a href="#2-define-the-endpoint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Define the Endpoint</h4>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">DummyEndpoint</span>: <span class="hljs-title">RestApi</span>.<span class="hljs-title">Endpoint</span> = </span>{\n  <span class="hljs-comment">/** 2.1 Define base url */</span>\n  <span class="hljs-keyword">let</span> baseUrl = <span class="hljs-string">"https://jsonplaceholder.typicode.com"</span>\n\n  <span class="hljs-comment">/** 2.2 Define a urlWithPath function */</span>\n  <span class="hljs-keyword">let</span> urlWithPath = path =&gt; [|baseUrl, path|] |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Array</span>.joinWith(<span class="hljs-string">"/"</span>)\n}</code></pre></div>\n<h4 id="3-build-the-api"><a href="#3-build-the-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Build the API</h4>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">TodoAPI</span> = <span class="hljs-type">RestApi</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">DummyEndpoint</span>, <span class="hljs-type">TodoItem</span>)</code></pre></div>\n<h4 id="4-use-the-api"><a href="#4-use-the-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Use the API</h4>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>open <span class="hljs-type">PromiseMonad</span>;\n<span class="hljs-type">TodoAPI</span>.list()\n&gt;&gt;- (result =&gt; <span class="hljs-keyword">switch</span>(result) {\n    | <span class="hljs-type">Ok</span>(items) =&gt; <span class="hljs-type">Js</span>.log(items)\n    | <span class="hljs-type">Error</span>((code, status)) =&gt; <span class="hljs-type">Js</span>.log2(code, status)\n    }\n);\n\n<span class="hljs-type">TodoAPI</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"1"</span>)\n&gt;&gt;- (result =&gt; <span class="hljs-keyword">switch</span>(result) {\n    | <span class="hljs-type">Ok</span>(item) =&gt; <span class="hljs-type">Js</span>.log(item)\n    | <span class="hljs-type">Error</span>((code, status)) =&gt; <span class="hljs-type">Js</span>.log2(code, status)\n    }\n);\n    \n<span class="hljs-type">TodoAPI</span>.post({\n        id: -<span class="hljs-number">1</span>,\n        userId: <span class="hljs-number">1</span>,\n        title: <span class="hljs-string">"Easy API with free type power"</span>,\n        completed: <span class="hljs-literal">false</span>\n    }) &gt;&gt;- (result =&gt; <span class="hljs-keyword">switch</span>(result) {\n    | <span class="hljs-type">Ok</span>(item) =&gt; <span class="hljs-type">Js</span>.log(item)\n    | <span class="hljs-type">Error</span>((code, status)) =&gt; <span class="hljs-type">Js</span>.log2(code, status)\n    }\n);\n\n<span class="hljs-comment">/** For custom path, it will fall back to Fetch.Request and Fetch.Response*/</span>\n<span class="hljs-keyword">let</span> customRequest = <span class="hljs-type">Fetch</span>.<span class="hljs-type">RequestInit</span>.make(\n    ~method_=<span class="hljs-type">Fetch</span>.<span class="hljs-type">Post</span>, \n    ~headers=<span class="hljs-type">Fetch</span>.<span class="hljs-type">HeadersInit</span>.make({ \n    <span class="hljs-string">"Content-Type"</span>: <span class="hljs-string">"application/json"</span>,\n    }), \n    ~body=<span class="hljs-type">Fetch</span>.<span class="hljs-type">BodyInit</span>.make({|\n    {\n      <span class="hljs-string">"postId"</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-string">"name"</span>: <span class="hljs-string">"Test comment"</span>,\n      <span class="hljs-string">"email"</span>: <span class="hljs-string">"Nikita@garfield.biz"</span>,\n      <span class="hljs-string">"body"</span>: <span class="hljs-string">"hello from bs-rest-api"</span>\n    }\n    |}),\n    ()\n);\n\n<span class="hljs-type">TodoAPIWithHeader</span>.fetch(<span class="hljs-string">"posts/1/comments"</span>, customRequest)\n    &gt;&gt;- (result =&gt; <span class="hljs-keyword">switch</span>(result) {\n        | <span class="hljs-type">Ok</span>(rawResponse) =&gt; rawResponse-&gt;<span class="hljs-type">Fetch</span>.<span class="hljs-type">Response</span>.text|&gt; innerHTML(container)\n        | <span class="hljs-type">Error</span>((code, status)) =&gt; <span class="hljs-string">"&lt;h2&gt;"</span>++string_of_int(code)++<span class="hljs-string">":"</span>++status++<span class="hljs-string">"&lt;/h2&gt;"</span>|&gt; innerHTML(container)\n        }\n    )</code></pre></div>\n<h4 id="extra---use-it-with-custom-request-header-suah-as-token"><a href="#extra---use-it-with-custom-request-header-suah-as-token" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extra - Use it with custom request header suah as Token?</h4>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">TokenHeader</span> = </span>{\n  <span class="hljs-keyword">let</span> makeHeaders () =&gt; <span class="hljs-type">HeadersInit</span>.make({ \n      <span class="hljs-string">"Content-Type"</span>: <span class="hljs-string">"application/json"</span>,\n      <span class="hljs-string">"Authorization"</span>: <span class="hljs-string">"token-this-here you can pull it with your custom logic."</span>\n    })\n}\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">TodoAPIWithHeader</span> = <span class="hljs-title">MakeWithHeader</span>(<span class="hljs-title">DummyEndpoint</span>, <span class="hljs-title">TodoItem</span>, <span class="hljs-title">TokenHeader</span>)\n\n<span class="hljs-title">TodoAPIWithHeader</span>.<span class="hljs-title">get</span>("1")\n&gt;&gt;- (<span class="hljs-title">result</span> =&gt; <span class="hljs-title">switch</span>(<span class="hljs-title">result</span>) </span>{\n    | <span class="hljs-type">Ok</span>(item) =&gt; <span class="hljs-type">Js</span>.log(item)\n    | <span class="hljs-type">Error</span>((code, status)) =&gt; <span class="hljs-type">Js</span>.log2(code, status)\n    }\n);</code></pre></div>\n<h3 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h3>\n<h4 id="132"><a href="#132" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.3.2</h4>\n<ul>\n<li>Fix a securrity issue from PR #1</li>\n</ul>\n<h4 id="130"><a href="#130" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.3.0</h4>\n<ul>\n<li>Add MakeWithHeader</li>\n<li>Rename module name to be more consistent</li>\n<li>Remove unused module.</li>\n</ul>\n<h4 id="120"><a href="#120" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.2.0</h4>\n<ul>\n<li>Publish to npm</li>\n<li>Add detail example</li>\n<li>API Can be used now.</li>\n</ul>\n<h4 id="100"><a href="#100" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.0.0</h4>\n<ul>\n<li>Initial commit with compilable code</li>\n</ul>\n<h3 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h3>\n<ul>\n<li>Implement npm publish action</li>\n<li>Improve Module Type Interface(Try to reduce types exposure)</li>\n<li>Implement interactive demo to pull API</li>\n<li>Implement API DataModel Generator(start with django-rest-framework)</li>\n</ul>\n<p>PRs are welcome. Comments or Requests are also welcome. Thank you.</p>\n',homepageUrl:"https://github.com/digitake/bs-rest-api#readme",repositoryUrl:"https://github.com/digitake/bs-rest-api",npmUrl:"https://www.npmjs.com/package/%40digitake%2Fbs-rest-api",issuesUrl:"https://github.com/digitake/bs-rest-api/issues",slug:"/package/@digitake/bs-rest-api"}},pathContext:{id:"@digitake/bs-rest-api"}}}});
//# sourceMappingURL=path---package-digitake-bs-rest-api-6c263d35df40b146bbe9.js.map