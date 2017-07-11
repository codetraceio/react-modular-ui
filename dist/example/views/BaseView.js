"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class BaseView extends React.Component {
    renderStyle() {
        return this.props.styles ? (React.createElement("link", { rel: "stylesheet", href: this.props.styles })) : null;
    }
    renderScript() {
        return this.props.scripts ? (React.createElement("script", { src: this.props.scripts })) : null;
    }
    render() {
        return (React.createElement("html", { lang: "en-US" },
            React.createElement("head", null,
                React.createElement("meta", { charSet: "UTF-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" }),
                React.createElement("title", null, this.props.title),
                React.createElement("base", { href: "/" }),
                React.createElement("meta", { name: "title", content: this.props.title }),
                this.renderStyle()),
            React.createElement("body", null,
                this.props.html ? (React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.html } })) : null,
                this.props.children,
                this.renderScript())));
    }
}
exports.default = BaseView;
