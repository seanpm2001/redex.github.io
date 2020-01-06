webpackJsonp([0xb8f6d2c8362a],{1455:function(e,a){e.exports={data:{package:{type:"unpublished",id:"unpublished/Schmavery/reprocessing",name:"Schmavery/reprocessing",version:"0.3.2",category:"library",flags:[],platforms:["browser","native"],description:"Processing library for Reason",keywords:["opengl","graphics"],license:"MIT",updated:"2020-01-06T17:54:58.632Z",stars:619,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reprocessing"><a href="#reprocessing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reprocessing</h1>\n<p><a href="https://travis-ci.org/Schmavery/reprocessing"><img src="https://travis-ci.org/Schmavery/reprocessing.svg?branch=master" alt="Build Status"></a>\n<a href="https://ci.appveyor.com/project/Schmavery/reprocessing/branch/master"><img src="https://ci.appveyor.com/api/projects/status/jgaaw641624db0pq/branch/master?svg=true&#x26;passingText=windows%20-%20OK&#x26;failingText=windows%20-%20Failing" alt="Build status"></a></p>\n<p>This is a high-level drawing library, inspired by <a href="https://processing.org">Processing</a>, allowing you to write code that\'ll run on the web (using WebGL) and natively (using OpenGL).</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>The <a href="https://schmavery.github.io/reprocessing/">interactive docs</a> are the simplest way to try reprocessing. (They are generated using <a href="https://github.com/jaredly/redoc">redoc</a>!).</p>\n<p>The 2nd simplest way to try is to clone <a href="https://github.com/bsansouci/reprocessing-example">reprocessing-example</a>.</p>\n<p>See <a href="#projects-using-reprocessing">below</a> for projects using Reprocessing!</p>\n<!--!\n```reason;shared(sandbox)\n[@bs.val] external sandboxCanvasId: string = "";\n[@bs.val] external sandboxCanvas: \'canvas = "";\n[@bs.val] external containerDiv: \'node = "";\n[@bs.send] external addEventListener: (\'node, string, \'eventT => unit) => unit = "addEventListener";\nlet id = sandboxCanvasId;\naddEventListener(containerDiv, "mouseleave", (_) => Reprocessing.playPause(id, false) |> ignore);\naddEventListener(containerDiv, "mouseenter", (_) => Reprocessing.playPause(id, true) |> ignore);\nReprocessing.setScreenId(sandboxCanvasId);\n```\n-->\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install reprocessing</code></pre></div>\n<blockquote>\n<p>Note: on linux, you may need to also install some libraries):<br>\n<code>apt install libsdl2-dev fcitx-libs-dev libibus-1.0-dev</code></p>\n</blockquote>\n<h3 id="code-example"><a href="#code-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code Example</h3>\n<p><em>Clone <a href="https://github.com/bsansouci/reprocessing-example">reprocessing-example</a> and follow instructions there to setup a new project.</em></p>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;use(sandbox);canvas"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Reprocessing</span>;\n\n<span class="hljs-keyword">let</span> setup = (env) =&gt; {\n  <span class="hljs-type">Env</span>.size(~width=<span class="hljs-number">200</span>, ~height=<span class="hljs-number">200</span>, env);\n};\n\n<span class="hljs-keyword">let</span> draw = (_state, env) =&gt; {\n  <span class="hljs-type">Draw</span>.background(<span class="hljs-type">Constants</span>.black, env);\n  <span class="hljs-type">Draw</span>.fill(<span class="hljs-type">Constants</span>.red, env);\n  <span class="hljs-type">Draw</span>.rect(~pos=(<span class="hljs-number">50</span>, <span class="hljs-number">50</span>), ~width=<span class="hljs-number">100</span>, ~height=<span class="hljs-number">100</span>, env)\n};\n\nrun(~setup, ~draw, <span class="hljs-literal">()</span>);</code></pre></div>\n<h3 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h3>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run build</code></pre></div>\n<p>This will draw a simple red square on a black background.  Compare this to <a href="https://github.com/bsansouci/reasonglexampleproject/blob/simple/src/index.re">reglexampleproject</a>, which takes 200+ lines to do the exact same thing.  This difference is even more notable on bigger projects.  Check out the code for a <a href="https://github.com/Schmavery/reprocessing/blob/master/examples/redsquare.re">draggable red square</a>.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<p>There are a couple demos inside <code>examples</code>. Run <code>npm i</code> to install all deps and <code>npm run build</code> to build to JS (default). Open <code>index.html</code> in safari (or use <code>python -m SimpleHTTPServer 8000</code> to spawn a static server and go to <code>localhost:8000</code> in chrome).</p>\n<p>Run <code>npm run build:bytecode</code> to build to a bytecode executable and run <code>./lib/bs/bytecode/index.byte</code>.</p>\n<p>Run <code>npm run build:native</code> to build to a native executable and run <code>./lib/bs/native/index.native</code>.</p>\n<p>See <a href="#projects-using-reprocessing">below</a> for examples!</p>\n<h1 id="faqs"><a href="#faqs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQs</h1>\n<h3 id="where-do-i-find-x-function"><a href="#where-do-i-find-x-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where do I find <code>x</code> function?</h3>\n<p>There are a few modules in <code>Reprocessing</code> that store most functions you will want to use.\nThe best way to find one is to use the <em>search</em> on the docs site: <a href="https://schmavery.github.io/reprocessing/">https://schmavery.github.io/reprocessing/</a></p>\n<p>In general:</p>\n<ul>\n<li><code>Draw</code> contains functions that draw to the screen (and affect drawing), like <code>rect</code> and <code>image</code>.</li>\n<li><code>Env</code> contains functions involving the environment (or window) you are running in. For example, <code>mouse</code> and <code>size</code>.</li>\n<li><code>Utils</code> contains many static helper functions from Processing such as <code>lerp</code> and <code>dist</code>.</li>\n<li><code>Constants</code> contains some mathematical and color-related constants, like <code>pi</code> and <code>green</code>.</li>\n</ul>\n<h3 id="why-do-some-functions-have-an-f-at-the-end"><a href="#why-do-some-functions-have-an-f-at-the-end" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why do some functions have an <code>"f"</code> at the end?</h3>\n<p>Several utility functions that would otherwise accept either an integer or a float in Processing expose a version with an <code>f</code> suffix, which supports floats.  Ex: <code>random</code> vs <code>randomf</code>. This lets you use whichever you prefer without needing to convert all the time.</p>\n<h3 id="when-do-i-run-loadimage-or-loadfont"><a href="#when-do-i-run-loadimage-or-loadfont" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When do I run loadImage or loadFont?</h3>\n<p>It is best to run these functions in the setup function. They are fairly expensive to run and setup is usually the easiest place to load your assets once. Then you can keep a reference to them in your state and draw them as many times as you want!</p>\n<h3 id="how-do-i-use-different-fonts-when-drawing-text"><a href="#how-do-i-use-different-fonts-when-drawing-text" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use different fonts when drawing text?</h3>\n<p>There is a default font in Reprocessing that will be automatically used if you use <code>Draw.text</code> without providing a font. However, you frequently want to have your own font!</p>\n<p>The story for using fonts in your Reprocessing app is still under some development to make it nicer.  Right now we have support for writing text in a font defined in the <a href="http://www.angelcode.com/products/bmfont/">Angel Code font</a> format. This is basically a bitmap of packed glyph textures along with a text file that describes it.</p>\n<p>★★★ Check out <a href="https://github.com/bsansouci/font-generator">font-generator</a> for a tool that can take any truetype or opentype font and output font files that Reprocessing can use.</p>\n<p>In order to use a font once you have the files:</p>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;prefix(2);suffix(1);no-run"><code><span class="hljs-built_in">let</span> font = Draw.loadFont(~filename, env);\nDraw.text(~font, ~body=<span class="hljs-string">"Test!!!"</span>, ~pos=(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>), env);</code></pre></div>\n<h3 id="why-is-there-no-support-for-3d-drawing"><a href="#why-is-there-no-support-for-3d-drawing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why is there no support for 3D drawing?</h3>\n<p>The original goal for reprocessing was to make something extremely easy to use and build real (2d) games and experiences with in ReasonML. Processing\'s 2D API does an amazing job at making graphics approachable. It would be really neat to be able to extend this to 3D creations but I do tend to feel that the 3D API is significantly more complex in some ways. It adds several new concepts such as 3d shapes, texture/materials/lighting, and we\'d need to extend several functions to optionally support a third dimension. It also doesn\'t let you avoid the matrix functions which can be counterintuitive and camera logic gets more involved. We may consider trying to add support in the future but it currently isn\'t on the roadmap.</p>\n<h1 id="some-differences-from-processing"><a href="#some-differences-from-processing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some Differences from Processing</h1>\n<ul>\n<li>\n<p>For state management, we encourage the use of the <code>state</code> value that Reprocessing manages for the user.  To use this, decide on a datatype representing the state and return the initial value from <code>setup</code>.  This will be persisted behind the scenes and passed to every callback (such as <code>draw</code> and <code>mouseDown</code>).  Each callback should return the new value of the state (or the old value if it doesn\'t change).</p>\n</li>\n<li>\n<p>There are no built-in variables like <code>width</code> and <code>mouseX</code>.  Instead, these are functions that are called, passing in an environment object that is always provided.</p>\n</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;prefix(1);no-run"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Reprocessing</span>;\n<span class="hljs-keyword">let</span> draw = (state, env) =&gt; {\n  <span class="hljs-keyword">let</span> w = <span class="hljs-type">Env</span>.width(env);\n  print_endline(<span class="hljs-string">"The current width is:"</span> ++ string_of_int(w))\n};</code></pre></div>\n<ul>\n<li>\n<p>The builtin <code>map</code> function is called <code>remap</code> instead to avoid confusion with the well-known <code>List.map</code> function which maps over a list of values. As, according to the Processing docs, this function "Re-maps a number from one range to another.", this naming seems appropriate.</p>\n</li>\n<li>\n<p>Points are expressed as tuples.  Instead of exposing a <code>mouseX</code> and <code>mouseY</code>, there is a <code>mouse</code>, which is a tuple of x and y values.</p>\n</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;prefix(1);no-run"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Reprocessing</span>;\n<span class="hljs-keyword">let</span> draw = (state, env) =&gt; {\n  <span class="hljs-keyword">let</span> (x, y) = <span class="hljs-type">Env</span>.mouse(env);\n  print_endline(<span class="hljs-string">"The current mouse position is:"</span> ++ (string_of_int(x) ++ string_of_int(y)))\n};</code></pre></div>\n<h2 id="projects-using-reprocessing"><a href="#projects-using-reprocessing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Projects using Reprocessing</h2>\n<ul>\n<li><a href="https://github.com/jaredly/gravitron">Gravitron</a></li>\n<li><a href="https://github.com/bsansouci/ludum-dare-40">Oh No! Zombies!</a></li>\n<li><a href="https://github.com/bsansouci/reprocessing-example/tree/2048">2048</a></li>\n<li><a href="https://github.com/bsansouci/reprocessing-example/tree/livestream-flappybird">FlappyBird</a></li>\n<li><a href="https://github.com/fabe/t-rex-runner-reason">Chrome T-Rex</a></li>\n<li><a href="https://github.com/illbexyz/repong">Pong</a></li>\n<li><a href="https://github.com/blaketarter/reticky-tacky">Ticky-Tacky</a></li>\n<li><a href="https://github.com/ekosz/reprocessing-example-flow-field">Perlin Noise Flow Field</a></li>\n<li><a href="https://github.com/Rigellute/L-system-reasonml">L-System</a></li>\n<li><a href="https://github.com/bsansouci/ludum-dare-41">My Dear Farm</a></li>\n<li><a href="https://github.com/jslauthor/reprocessing-retro">Retro</a></li>\n<li><a href="https://github.com/romanschejbal/reasonml-gol">Game Of Life</a></li>\n<li><a href="https://github.com/rdavison/retetris">Tetris</a></li>\n<li><a href="https://github.com/jaredly/purple-maze">Purple Maze</a></li>\n<li><a href="https://github.com/danieljharvey/reason-egg">Egg</a></li>\n<li><a href="https://github.com/sscaff1/remandelbrot">Remandelbrot</a></li>\n<li><a href="https://github.com/RawToast/ReTurbo">ReTurbo</a></li>\n</ul>\n<h2 id="talks-and-articles-about-reprocessing"><a href="#talks-and-articles-about-reprocessing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Talks and articles about Reprocessing</h2>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=PUBJwiECPoc">Wonky Game Physics in Reason and Lessons Learned</a></li>\n<li><a href="https://jaredforsyth.com/posts/making-a-cross-platform-mobile-game-in-reason-ocaml/">Making a cross-platform mobile game in Reason/OCaml</a></li>\n<li><a href="https://www.youtube.com/watch?v=UDOEd5jS0Ac">2048 live-coding</a></li>\n<li><a href="https://www.youtube.com/watch?v=5aD3aPvNpyQ">FlappyBird live-coding</a></li>\n</ul>\n<p>Please open a PR to add any cool projects, talks or articles about Reprocessing that are missing above!</p>\n',homepageUrl:"https://github.com/Schmavery/reprocessing#readme",repositoryUrl:"https://github.com/Schmavery/reprocessing",npmUrl:null,issuesUrl:"https://github.com/Schmavery/reprocessing/issues",slug:"/package/unpublished/Schmavery/reprocessing"}},pathContext:{id:"unpublished/Schmavery/reprocessing"}}}});
//# sourceMappingURL=path---package-unpublished-schmavery-reprocessing-48e6aa6ca4922b8e99d6.js.map