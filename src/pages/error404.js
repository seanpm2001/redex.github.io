// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var React       = require("react");
var Config      = require("../Config.js");
var Helmet      = require("../bindings/gatsby/helmet.js");
var Vrroom      = require("vrroom/src/Vrroom.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("NotFoundPage");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate("404: Not Found")], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("h1", undefined, Vrroom.Helpers[/* text */1]("NOT FOUND")), React.createElement("p", undefined, Vrroom.Helpers[/* text */1]("You just hit a route that doesn't exist... the sadness.")));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
