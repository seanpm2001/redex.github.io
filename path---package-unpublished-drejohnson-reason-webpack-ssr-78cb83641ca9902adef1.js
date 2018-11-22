webpackJsonp([0x7ccf7a7ed868],{1294:function(e,a){e.exports={data:{package:{type:"unpublished",id:"unpublished/drejohnson/reason-webpack-ssr",name:"drejohnson/reason-webpack-ssr",version:"1.0.0",category:"boilerplate",flags:["neglected"],platforms:["node"],description:"",keywords:["boilerplate"],license:"MIT",updated:"2018-11-22T21:28:15.287Z",stars:8,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reasonreact-fullstack-graphql-ssr"><a href="#reasonreact-fullstack-graphql-ssr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReasonReact Fullstack Graphql SSR</h1>\n<blockquote>\n<p>A basic starting point for building universal web apps with ReasonReact.</p>\n<p>Far from refined. Used as a basis to learn ReasonML and POC for server side rendering and code-spliting with ReasonReact</p>\n<p>Build automation tools based heavily off of <a href="https://github.com/kriasoft/react-starter-kit">react-starter-kit</a></p>\n</blockquote>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://reasonml.github.io/reason-react/">ReasonReact</a></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://webpack.js.org/">Webpack</a></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> SSR - Server side rendering</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://github.com/nfl/react-helmet">React Helmet</a></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Code Splitting - <a href="https://github.com/kMeillet/reason-loadable">Reason Loadable</a></li>\n<li class="task-list-item"><input type="checkbox" disabled> <a href="https://github.com/apollographql/reason-apollo">Reason Apollo</a> (SSR not working)</li>\n<li class="task-list-item"><input type="checkbox" disabled> PWA - <a href="https://developers.google.com/web/tools/workbox/">Workbox</a></li>\n</ul>\n<h2 id="quick-start"><a href="#quick-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick start</h2>\n<ul>\n<li>Install dependencies: run <code>yarn</code> in project root then <code>cd server</code> and run <code>yarn</code></li>\n<li>For frontend dev server: run <code>yarn start</code> or <code>npm start</code>, from project root. The app should be running at: <a href="http://localhost:8080">http://localhost:8080</a>.</li>\n<li>For graphql server: in seperate terminal tab/window <code>cd server</code> and run <code>yarn bsb</code> or <code>npm run bsb</code> followed by <code>yarn start</code> or <code>npm start</code>, the server should be running at: <a href="http://localhost:4000">http://localhost:4000</a>.</li>\n<li>To build frontend run: <code>yarn build</code> or <code>npm run build</code> from project root. Run <code>yarn start</code> or <code>npm start</code> to start app.</li>\n</ul>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> Add offline capabilities (service workers) <a href="https://developers.google.com/web/tools/workbox/">Workbox</a></li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/drejohnson/reason-webpack-ssr",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/drejohnson/reason-webpack-ssr"}},pathContext:{id:"unpublished/drejohnson/reason-webpack-ssr"}}}});
//# sourceMappingURL=path---package-unpublished-drejohnson-reason-webpack-ssr-78cb83641ca9902adef1.js.map