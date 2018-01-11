webpackJsonp([57583024406969],{1121:function(e,o){e.exports={data:{package:{id:"unpublished/reasonml-community/bs-socket.io",score:0,name:"reasonml-community/bs-socket.io",version:"0.1.0",description:"socket.io in Reason",keywords:[],license:null,updated:"2018-01-11T10:40:23.272Z",stars:4,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h2>bs-socket.io</h2>\n<p>Simple bindings to <a href="https://socket.io/">socket.io</a>.</p>\n<p>To build everything run <code>npm run build</code> and to run the demo run <code>npm run run</code> and go to <code>localhost:3000</code> on two tabs. You can send messages back and forth!</p>\n<h1>Couple Gotchas</h1>\n<p>There are a couple differences between the JS API and this one.</p>\n<ul>\n<li>There are no methods, just functions that take as first parameter the object on which they interact. ie: <code>socket.emit("bla", 10)</code> is <code>Server.emit socket "bla" 10</code> in Reason.</li>\n<li><code>Server.Server</code> <code>Client.Client</code> and <code>Namespace.Namespace</code> are functors, meaning that they\'ll take a module that contains 2 things: a type called <code>t</code>, a function called <code>stringify</code>. This allows ocaml to typecheck the messages that you send back and forth between the server and the client. ie: you can only listen to / send messages that the server can listen to / send too.</li>\n<li><code>Server.emit</code> is different from <code>Server.Socket.emit</code>. The former emits to all connected peers while the latter emits to the given peer.</li>\n<li>Instead of <code>io.sockets</code> there is <code>Namespace.default io</code> which does the same thing.</li>\n<li>Instead of <code>io.of</code> there is <code>Namespace.of_ io</code> which does the same thing. (<code>of</code> is a Reason keyword)</li>\n<li>All functions that are overloaded have different names depending on what you\'re passing. There\'s <code>Server.create</code> but also <code>Server.createWithHtpp</code> (see example) among others.</li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/reasonml-community/bs-socket.io",npmUrl:null,issuesUrl:null,slug:"packages/unpublished/reasonml-community/bs-socket.io"}},pathContext:{id:"unpublished/reasonml-community/bs-socket.io"}}}});
//# sourceMappingURL=path---packages-unpublished-reasonml-community-bs-socket-io-293307e09e2d8cc69116.js.map