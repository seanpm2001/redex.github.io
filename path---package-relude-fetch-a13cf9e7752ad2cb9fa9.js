webpackJsonp([64006974674298],{1399:function(e,h){e.exports={data:{package:{type:"published",id:"relude-fetch",name:"relude-fetch",version:"0.6.0",category:"library",flags:[],platforms:["browser","node"],description:"Relude interop library for the fetch API",keywords:["data fetching"],license:"MIT",updated:"2020-01-04T09:01:09.237Z",stars:13,score:.6199888311149241,quality:.8470896424414788,popularity:.04608511439740252,maintenance:.9992347095525418,readme:'<h1 id="relude-fetch"><a href="#relude-fetch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>relude-fetch</h1>\n<p><a href="https://circleci.com/gh/reazen/relude-fetch"><img src="https://img.shields.io/circleci/project/github/reazen/relude-fetch/master.svg" alt="CircleCI"></a>\n<a href="https://www.npmjs.com/package/relude-fetch"><img src="https://img.shields.io/npm/v/relude-fetch.svg" alt="npm"></a></p>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p><a href="https://github.com/reazen/relude">Relude</a> interop library for the Browser\n<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a>.\nThis can also be used in Node.js using a polyfill like\n<a href="https://www.npmjs.com/package/isomorphic-fetch">isomorphic-fetch</a>.</p>\n<p>This library basically wraps the\n<a href="https://github.com/reasonml-community/bs-fetch">bs-fetch</a> Bucklescript library\nto lift any publicly-exposed <code>Js.Promise.t(\'a)</code> values into <code>Relude.IO.t(\'a, Js.Promise.error)</code> values.  Using <code>IO</code> rather than <code>Promise</code> makes error\nhandling 100% more explicit, allows for better composability with other\neffect and error types, and unlocks the full power of monads!</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See the <a href="https://github.com/reazen/relude-fetch/blob/master/__tests__/ReludeFetch_test.re">tests</a> for example usage.</p>\n<p>Also see the <a href="https://github.com/reazen/relude-fetch/blob/master/examples/demo">demo</a> for real-world usage, such as file uploads.</p>\n<h2 id="developer-info"><a href="#developer-info" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Developer info</h2>\n<h3 id="scripts"><a href="#scripts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scripts</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-comment"># Normal development scripts</span>\n&gt; npm run clean\n&gt; npm run build\n&gt; npm run cleanbuild\n&gt; npm run <span class="hljs-built_in">test</span>\n&gt; npm run cleantest\n&gt; npm run watch\n\n<span class="hljs-comment"># Run the demo project via parcel</span>\n&gt; npm run demo</code></pre></div>\n<h3 id="publishing-to-npm"><a href="#publishing-to-npm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Publishing to npm</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>&gt; npm version major|minor|patch\n&gt; git push origin --follow-tags\n&gt; git push upstream --follow-tags\n&gt; npm publish</code></pre></div>\n<h3 id="nixos"><a href="#nixos" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>NixOS</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>&gt; nix-shell\n%nix%&gt; npm install</code></pre></div>\n',homepageUrl:"https://github.com/reazen/relude-fetch#readme",repositoryUrl:"https://github.com/reazen/relude-fetch",npmUrl:"https://www.npmjs.com/package/relude-fetch",issuesUrl:"https://github.com/reazen/relude-fetch/issues",slug:"/package/relude-fetch"}},pathContext:{id:"relude-fetch"}}}});
//# sourceMappingURL=path---package-relude-fetch-a13cf9e7752ad2cb9fa9.js.map