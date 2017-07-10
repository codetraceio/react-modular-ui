"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AbstractComponent_1 = require("./AbstractComponent");
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            color: this.props.color
        };
    };
    Loading.prototype.render = function () {
        return (React.createElement("div", { className: this.getBlockName('loading', this.getModifierObject()) },
            React.createElement("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                React.createElement("circle", { cx: "50", cy: "50", r: "40", stroke: "none", fill: "none", strokeWidth: "10" },
                    React.createElement("animate", { attributeName: "stroke-dashoffset", dur: "2s", repeatCount: "indefinite", from: "0", to: "-502" }),
                    React.createElement("animate", { attributeName: "stroke-dasharray", dur: "2s", repeatCount: "indefinite", values: "150.6 100.4;1 250;150.6 100.4" })))));
    };
    return Loading;
}(AbstractComponent_1.default));
exports.default = Loading;
