webpackJsonp([84992188558386],{1173:function(e,t){e.exports={data:{package:{type:"published",id:"bs-react-native",name:"bs-react-native",version:"0.10.0",category:"binding",flags:[],platforms:["node"],description:"[![Build Status][build-badge]][build] [![Version][version-badge]][package] [![MIT License][license-badge]][license] [![All Contributors][all-contributors-badge]][contributors] [![PRs Welcome][prs-welcome-badge]][prs-welcome] [![Chat][chat-badge]][chat] [!",keywords:["react","ui","react-native"],license:"MIT",updated:"2018-10-12T17:00:09.829Z",stars:398,score:.6392720519022564,quality:.766284129134434,popularity:.1698774885319612,maintenance:.9997991205021141,readme:'<h1 id="bs-react-native"><a href="#bs-react-native" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-native</h1>\n<p><a href="https://circleci.com/gh/reasonml-community/bs-react-native"><img src="https://img.shields.io/circleci/project/github/reasonml-community/bs-react-native/master.svg" alt="Build Status"></a>\n<a href="https://www.npmjs.com/package/bs-react-native"><img src="https://img.shields.io/npm/v/bs-react-native.svg" alt="Version"></a>\n<a href="https://github.com/reasonml-community/bs-react-native/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/bs-react-native.svg" alt="MIT License"></a>\n<a href="https://github.com/reasonml-community/bs-react-native/blob/master/CONTRIBUTORS.md"><img src="https://img.shields.io/badge/all_contributors-53-orange.svg" alt="All Contributors"></a>\n<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>\n<a href="https://discord.gg/q8GQD34"><img src="https://img.shields.io/discord/496273792503513089.svg?logo=discord&#x26;colorB=blue" alt="Chat"></a>\n<a href="https://github.com/facebook/react-native"><img src="https://img.shields.io/badge/react--native-%5E0.53.3-green.svg" alt="React Native"></a>\n<a href="https://github.com/reasonml-community/bs-react-native/blob/master/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/code%20of-conduct-ff69b4.svg" alt="Code of Conduct"></a></p>\n<blockquote>\n<p><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/facebook/react-native">React Native</a></p>\n</blockquote>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ react-native init HelloWorld --template reason</code></pre></div>\n<p>Check our <a href="https://reasonml-community.github.io/bs-react-native/BsReactNative/gettingstarted.html">getting started</a> guide for details.</p>\n<p>You can run the <a href="./example">playground</a> with Expo: <a href="https://expo.io/@grabbou/bs-react-native">https://expo.io/@grabbou/bs-react-native</a>.</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>See <a href="https://reasonml-community.github.io/bs-react-native">https://reasonml-community.github.io/bs-react-native</a>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>See <a href="https://github.com/reasonml-community/bs-react-native/tree/master/RNTester">https://github.com/reasonml-community/bs-react-native/tree/master/RNTester</a></p>\n<h2 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>\n<p>Read the <a href="./CONTRIBUTING.md">contribution guidelines</a> before contributing.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<p>Check the <a href="./CHANGELOG.md">changelog</a> for more informations about recent releases.</p>\n<h2 id="code-of-conduct"><a href="#code-of-conduct" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code of Conduct</h2>\n<p>We want this community to be friendly and respectful to each other. Please read <a href="https://github.com/callstack/reasonml-community/blob/master/CODE_OF_CONDUCT.md">the full text</a> so that you can understand what actions will and will not be tolerated.</p>\n<!-- badges -->\n',homepageUrl:"https://github.com/reasonml-community/bs-react-native#readme",repositoryUrl:"https://github.com/reasonml-community/bs-react-native",npmUrl:"https://www.npmjs.com/package/bs-react-native",issuesUrl:"https://github.com/reasonml-community/bs-react-native/issues",slug:"/package/bs-react-native"}},pathContext:{id:"bs-react-native"}}}});
//# sourceMappingURL=path---package-bs-react-native-83406c711d2cf0d704b8.js.map