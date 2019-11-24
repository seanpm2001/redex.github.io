webpackJsonp([0xaf9f83e8a3e7],{1458:function(s,a){s.exports={data:{package:{type:"unpublished",id:"unpublished/szymonzmyslony/reason-react-native-navigation",name:"szymonzmyslony/reason-react-native-navigation",version:"0.1.0",category:"library",flags:["neglected"],platforms:["node"],description:"This is a simple react native navigation written in reason.",keywords:["react","routing"],license:"MIT",updated:"2019-11-24T17:33:09.362Z",stars:28,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reason-react-native-navigation"><a href="#reason-react-native-navigation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-react-native-navigation</h1>\n<p>This is a simple react native navigation written in reason. It has been created with an eye to fully utilize Reason type-system.\nCurrently, only stack-navigation (standard slide from left for iOS and slide from button from Android) is implemented.\nMain problem that we are trying to solve with this is passing props to child components in a straightforward and type-safe way.</p>\n<h2 id="how-does-it-look-like"><a href="#how-does-it-look-like" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How does it look like?</h2>\n<p>The example app is avaialble at <a href="https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp">https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp</a></p>\n<p>This is how this example app looks like:\n<img src="reason-navigation.gif" alt="Switch between screens"></p>\n<p>As you can see the count update (state of the root component) doesn\'t get rerendered when you click increment or decrement on the second screen. This is the first issue that I will be working on solving.</p>\n<h2 id="how-to-use-it-when-you-want-to-have-a-full-control-over-your-navigation-state"><a href="#how-to-use-it-when-you-want-to-have-a-full-control-over-your-navigation-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use it (when you want to have a full control over your navigation state)?</h2>\n<p>StackNavigator is a functor that expects one type for your navigationState variant:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">type</span> <span class="hljs-title">Impl</span> = </span>{\n  <span class="hljs-keyword">type</span> navigationState;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-keyword">type</span> <span class="hljs-type">Impl</span>  = <span class="hljs-keyword">sig</span> <span class="hljs-keyword">type</span> navigationState <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<p>This is how you create a functor:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">StackNavigator</span> =\n  <span class="hljs-title">StackNavigator</span>.<span class="hljs-title">Make</span> </span>{\n    <span class="hljs-keyword">type</span> navigationState = screen;\n  };</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">StackNavigator</span> =\n  <span class="hljs-type">StackNavigator</span>.<span class="hljs-type">Make</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> navigationState = screen <span class="hljs-keyword">end</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>For example, in my simple app, I had:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> screen =\n  | <span class="hljs-type">Login</span>\n  | <span class="hljs-type">MainScreen</span>\n  | <span class="hljs-type">Player</span> int string;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3536</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>StackNavigator requires navigation state to be managed by parent component. Thus, we need to pass\nnavigation state, pop, and push methods, and two render functions (header and screen). This is how root render in my app looks\nlike:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code> render: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> {state,<span class="hljs-params"> update,<span class="hljs-params"> handle}<span class="hljs-params"> </span></span></span></span></span>=&gt;\n    <span class="hljs-type">ReasonReact</span>.element @@\n    <span class="hljs-type">StackNavigator</span>.make\n      navigationState::state.navigationState\n      goBack::(update pop)\n      getHeaderConfig::headerTitle\n      render::(\n        renderScreen\n          ::handle\n          pop::(update pop)\n          push::(update push)\n          updateProjects::(update updateProjects)\n          projects::state.projects\n      )</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1685</span>: <span class="hljs-keyword">fun</span> is a reserved keyword, it cannot be used <span class="hljs-keyword">as</span> an identifier. <span class="hljs-type">Try</span> `fun_\' instead</code></pre>\n      </div>\n    </div>\n  \n<p>renderScreen and render can take any arguments needed from the root of the app and pass it down to other screens:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> renderScreen\n    pop::(pop: \'a =&gt; unit)\n    push::(push: screen =&gt; unit)\n    ::projects\n    ::handle\n    ::updateProjects\n    screen =&gt;\n  <span class="hljs-keyword">switch</span> screen {\n  | <span class="hljs-type">Login</span> =&gt; <span class="hljs-type">ReasonReact</span>.element @@ <span class="hljs-type">LoginScreen</span>.make ()\n  | <span class="hljs-type">Player</span> index _id =&gt; <span class="hljs-type">DetailViewProject</span>.render project::(<span class="hljs-type">List</span>.nth projects index)\n  | <span class="hljs-type">MainScreen</span> =&gt;\n    <span class="hljs-type">ReasonReact</span>.element @@ <span class="hljs-type">MainScreenContainer</span>.make ::push ::updateProjects ::projects\n  };\n\n<span class="hljs-keyword">let</span> headerTitle screen =&gt;\n  <span class="hljs-keyword">switch</span> screen {\n  | <span class="hljs-type">MainScreen</span> =&gt; <span class="hljs-string">"Shows"</span>\n  | <span class="hljs-number">_</span> =&gt; <span class="hljs-string">"test"</span>\n  };</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1525</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>  New StatefullStackNavigator module avoid boilerplate for push and pop actions.\nThe example app (<a href="https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp">https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp</a>)\nis showing how to use it. </p>\n',homepageUrl:"https://github.com/szymonzmyslony/reason-react-native-navigation#readme",repositoryUrl:"https://github.com/szymonzmyslony/reason-react-native-navigation",npmUrl:null,issuesUrl:"https://github.com/szymonzmyslony/reason-react-native-navigation/issues",slug:"/package/unpublished/szymonzmyslony/reason-react-native-navigation"}},pathContext:{id:"unpublished/szymonzmyslony/reason-react-native-navigation"}}}});
//# sourceMappingURL=path---package-unpublished-szymonzmyslony-reason-react-native-navigation-1af86d52831c9315610e.js.map