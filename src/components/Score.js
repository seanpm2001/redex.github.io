// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Icon        = require("../bindings/Icon.js");
var React       = require("react");
var Vrroom      = require("vrroom/src/Vrroom.bs.js");
var Tooltip     = require("./Tooltip.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ScoreStyles = require("./ScoreStyles.js");

function formatPercentage(number) {
  return (number * 100).toFixed() + "%";
}

function factor(name, value) {
  return React.createElement("div", {
              className: ScoreStyles.factor
            }, React.createElement("span", undefined, Vrroom.Helpers[/* text */0](name)), React.createElement("span", undefined, Vrroom.Helpers[/* text */0](formatPercentage(value))));
}

var component = ReasonReact.statelessComponent("Score");

function make($$package, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Tooltip.make(React.createElement("div", {
                          className: ScoreStyles.tooltip
                        }, factor("Quality", $$package.quality), factor("Popularity", $$package.popularity), factor("Maintenance", $$package.maintenance)), /* None */0, React.createElement("span", {
                          className: ScoreStyles.root
                        }, Vrroom.Helpers[/* text */0](formatPercentage($$package.score)), ReasonReact.element(/* None */0, /* None */0, Icon.Verified[/* make */0](/* Some */[ScoreStyles.icon], /* array */[])))));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles           = Styles;
exports.formatPercentage = formatPercentage;
exports.factor           = factor;
exports.component        = component;
exports.make             = make;
/* component Not a pure module */
