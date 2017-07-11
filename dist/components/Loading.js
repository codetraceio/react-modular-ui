"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Loading extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            color: this.props.color
        };
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('loading', this.getModifierObject()) },
            React.createElement("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                React.createElement("circle", { cx: "50", cy: "50", r: "40", stroke: "none", fill: "none", strokeWidth: "10" },
                    React.createElement("animate", { attributeName: "stroke-dashoffset", dur: "2s", repeatCount: "indefinite", from: "0", to: "-502" }),
                    React.createElement("animate", { attributeName: "stroke-dasharray", dur: "2s", repeatCount: "indefinite", values: "150.6 100.4;1 250;150.6 100.4" })))));
    }
}
exports.default = Loading;
