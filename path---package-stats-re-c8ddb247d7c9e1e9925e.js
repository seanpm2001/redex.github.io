webpackJsonp([0x6400691c72ae],{1140:function(s,a){s.exports={data:{package:{id:"stats.re",stars:3,name:"stats.re",version:"2.3.1",category:"library",flags:[],platforms:["any"],description:"Statistics module written in Reason. Inspired by [simple-statistics](https://github.com/simple-statistics/simple-statistics). Help me add more functions :-)",keywords:["math","utilities"],license:"MIT",updated:"2018-02-02T15:44:43.106Z",type:"published",score:.5825020091502529,quality:.7298822394047904,popularity:.04386498946269298,maintenance:.9948131171910664,readme:'<p>Statistics module written in Reason. Inspired by <a href="https://github.com/simple-statistics/simple-statistics">simple-statistics</a>. Help me add more functions :-)</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn install stats.re</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>// <span class="hljs-keyword">in</span> bsconfig.json\n<span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"stats"</span>]</code></pre></div>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> array = [|<span class="hljs-number">1.2</span>, <span class="hljs-number">2.3</span>, <span class="hljs-number">3.4</span>, <span class="hljs-number">4.5</span>|];\n<span class="hljs-keyword">let</span> result = <span class="hljs-type">ArrayStats</span>.mean(array); <span class="hljs-comment">/* 2.85 */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> <span class="hljs-built_in">array</span> = [|<span class="hljs-number">1.2</span>;<span class="hljs-number">2.3</span>;<span class="hljs-number">3.4</span>;<span class="hljs-number">4.5</span>|]\n<span class="hljs-keyword">let</span> result = <span class="hljs-type">ArrayStats</span>.mean <span class="hljs-built_in">array</span></code></pre>\n      </div>\n    </div>\n  \n<p>The best docs are the tests. See <a href="https://github.com/aaronshaf/stats.re/blob/master/src/ArrayStatsTests.re">ArrayStatsTests.re</a> and <a href="https://github.com/aaronshaf/stats.re/blob/master/src/ListStatsTests.re">ListStatsTests.re</a>.</p>\n<h3 id="arraystats-mirrors-liststats"><a href="#arraystats-mirrors-liststats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ArrayStats (mirrors ListStats)</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* basics */</span>\n<span class="hljs-type">ArrayStats</span>.<span class="hljs-built_in">min</span>(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.<span class="hljs-built_in">max</span>(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.sum_simple(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.mode(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.quantile(quantile: float, x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.product(x: array(float)) =&gt; float;\n\n<span class="hljs-comment">/* sorted */</span>\n<span class="hljs-type">ArrayStats</span>.<span class="hljs-built_in">sort</span>(x: array(float)) =&gt; array(float);\n<span class="hljs-type">ArrayStats</span>.min_sorted(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.mode_sorted(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.quantile_sorted(quantile: float, x: array(float)) =&gt; float;\n\n<span class="hljs-comment">/* measures of central tendency */</span>\n<span class="hljs-type">ArrayStats</span>.mean(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.median(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.root_mean_squared(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.geometric_mean(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.harmonic_mean(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.sample_skewness(x: array(float)) =&gt; float;\n\n<span class="hljs-comment">/* measures of dispersion */</span>\n<span class="hljs-type">ArrayStats</span>.variance(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.sample_variance(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.standard_deviation(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.sample_standard_deviation(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.interquartile_range(x: array(float)) =&gt; float;\n<span class="hljs-type">ArrayStats</span>.sum_nth_power_deviations(x: array(float), n: float) =&gt; float;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2122</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="utils"><a href="#utils" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Utils</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Stats</span>.<span class="hljs-type">Utils</span>.add_to_mean(mean: float, listLength: float, newValue: float) =&gt; float;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2122</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="dev"><a href="#dev" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dev</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn start\n<span class="hljs-comment"># open http://localhost:1234</span>\n<span class="hljs-comment"># edit src/Stats.re</span></code></pre></div>\n<p>See more <a href="https://simplestatistics.org/docs/">here</a>.</p>\n<h2 id="see-also"><a href="#see-also" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>See also</h2>\n<ul>\n<li><a href="https://github.com/ryanrhymes/owl">owl</a> - "numerical library: dense and sparse matrix, linear algebra, regressions, maths and stats functions"</li>\n</ul>\n',homepageUrl:"https://github.com/aaronshaf/stats.re",repositoryUrl:"https://github.com/aaronshaf/stats.re",npmUrl:"https://www.npmjs.com/package/stats.re",issuesUrl:"https://github.com/aaronshaf/stats.re/issues",slug:"/package/stats.re"}},pathContext:{id:"stats.re"}}}});
//# sourceMappingURL=path---package-stats-re-c8ddb247d7c9e1e9925e.js.map