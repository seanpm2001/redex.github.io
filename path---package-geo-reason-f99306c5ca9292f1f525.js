webpackJsonp([0x8efa0cab17f0],{1325:function(s,e){s.exports={data:{package:{type:"published",id:"geo-reason",name:"geo-reason",version:"0.7.0",category:"library",flags:[],platforms:["browser","node"],description:"Reason types and functions for working with GeoJSON",keywords:["maps"],license:"MIT",updated:"2020-06-27T13:04:59.681Z",stars:10,score:.6009170631243863,quality:.8750316233427007,popularity:.038208341096446885,maintenance:.928670447822342,readme:'<h1 id="georeason"><a href="#georeason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GeoReason</h1>\n<p><a href="https://circleci.com/gh/HomeBay/geo-reason"><img src="https://img.shields.io/circleci/build/github/HomeBay/geo-reason.svg?style=flat-square" alt="build status"></a>\n<a href="https://coveralls.io/github/HomeBay/geo-reason"><img src="https://img.shields.io/coveralls/github/HomeBay/geo-reason.svg?style=flat-square" alt="test coverage"></a>\n<a href="https://www.npmjs.com/package/geo-reason"><img src="https://img.shields.io/npm/v/geo-reason.svg?style=flat-square" alt="npm version"></a>\n<a href="https://github.com/HomeBay/geo-reason/blob/master/LICENSE"><img src="https://img.shields.io/github/license/HomeBay/geo-reason.svg?style=flat-square" alt="license"></a></p>\n<p>GeoReason provides ReasonML types for working with <a href="https://tools.ietf.org/html/rfc7946">RFC-7946-compliant GeoJSON data</a>. This includes decoders to safely parse JSON data into structured types, encoders to convert Reason data into valid GeoJSON, and a variety of utility functions for working with points, polygons, and more.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Get the library from npm:</p>\n<p><code>npm install --save geo-reason</code></p>\n<p>Then update your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"geo-reason"</span>\n],</code></pre></div>\n<p>Note that this library has some peerDependencies. If you don\'t already have the following libraries, you should also: <code>npm install --save bs-abstract bs-decode relude</code>. While this is a little more work up front, it helps you avoid duplicate versions of these packages which can cause issues while compiling.</p>\n<h2 id="purpose-and-usage"><a href="#purpose-and-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Purpose and Usage</h2>\n<p>If you\'ve worked with GeoJSON in its JSON form, you\'ve probably noticed that it\'s very compact, but hard to make sense of (and error-prone to produce). For example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>[\n  [\n    [100.0, 0.0],\n    [101.0, 0.0],\n    [101.0, 1.0],\n    [100.0, 1.0],\n    [100.0, 0.0]\n  ]\n]</code></pre></div>\n<p>These are valid coordinates for a polygon in GeoJSON... three layers of array (and it gets worse for multi-polygons), and a bunch of unlabeled numbers. By contrast, the <code>GeoReason</code> version is a bit more verbose, but much harder to get wrong:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> polygon =\n  <span class="hljs-type">GeoJSON</span>.<span class="hljs-type">Geometry</span>.(\n    <span class="hljs-type">Polygon</span>(\n      <span class="hljs-type">Polygon</span>.makeShape(\n        ~startEnd=<span class="hljs-type">Position</span>.makeLabels(~longitude=<span class="hljs-number">100.0</span>, ~latitude=<span class="hljs-number">0.0</span>, ()),\n        ~second=<span class="hljs-type">Position</span>.makeLabels(~longitude=<span class="hljs-number">101.0</span>, ~latitude=<span class="hljs-number">0.0</span>, ()),\n        ~third=<span class="hljs-type">Position</span>.makeLabels(~longitude=<span class="hljs-number">101.0</span>, ~latitude=<span class="hljs-number">1.0</span>, ()),\n        ~rest=[<span class="hljs-type">Position</span>.makeLabels(~longitude=<span class="hljs-number">100.0</span>, ~latitude=<span class="hljs-number">1.0</span>, ())],\n        (),\n      ),\n    )\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> polygon =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">GeoJSON</span>.<span class="hljs-type">Geometry</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Polygon</span>\n        ((<span class="hljs-type">Polygon</span>.makeShape\n            ~startEnd:(<span class="hljs-type">Position</span>.makeLabels ~longitude:<span class="hljs-number">100.0</span> ~latitude:<span class="hljs-number">0.0</span> <span class="hljs-literal">()</span>)\n            ~second:(<span class="hljs-type">Position</span>.makeLabels ~longitude:<span class="hljs-number">101.0</span> ~latitude:<span class="hljs-number">0.0</span> <span class="hljs-literal">()</span>)\n            ~third:(<span class="hljs-type">Position</span>.makeLabels ~longitude:<span class="hljs-number">101.0</span> ~latitude:<span class="hljs-number">1.0</span> <span class="hljs-literal">()</span>)\n            ~rest:[<span class="hljs-type">Position</span>.makeLabels ~longitude:<span class="hljs-number">100.0</span> ~latitude:<span class="hljs-number">1.0</span> <span class="hljs-literal">()</span>] <span class="hljs-literal">()</span>)))\n    [@explicit_arity ])</code></pre>\n      </div>\n    </div>\n  \n<p>The GeoReason version ensures that:</p>\n<ul>\n<li>You won\'t accidentally switch the latitude and longitude (which is easy to do, since GeoJSON puts longitude first)</li>\n<li>Your start and end point are guaranteed to be the same, which is required by the spec</li>\n<li>Your polygon has at least three points, which is also required by the spec</li>\n</ul>\n<p>Note that there are some additional rules in the spec (e.g. for polygons, exterior rings are specified in counter-clockwise order, inner rings are clockwise) that aren\'t easy to enforce with the compiler. So it\'s still possible to produce invalid GeoJSON, but it\'s definitely harder.</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<ul>\n<li>fork and clone <a href="https://github.com/HomeBay/geo-reason">this repository</a></li>\n<li>if you\'re adding utility functions, make sure they\'re fully tested</li>\n<li>if you\'re fixing encoders/decoders, please use samples from <a href="https://tools.ietf.org/html/rfc7946">the spec</a> in tests</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>Released under the <a href="https://github.com/HomeBay/geo-reason/blob/master/LICENSE">MIT license</a>.</p>\n',homepageUrl:"https://github.com/homebay/geo-reason",repositoryUrl:"https://github.com/homebay/geo-reason",npmUrl:"https://www.npmjs.com/package/geo-reason",issuesUrl:"https://github.com/homebay/geo-reason/issues",slug:"/package/geo-reason"}},pathContext:{id:"geo-reason"}}}});
//# sourceMappingURL=path---package-geo-reason-f99306c5ca9292f1f525.js.map