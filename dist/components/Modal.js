"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
const Portal_1 = require("./Portal");
class Modal extends AbstractComponent_1.default {
    onClose() {
        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    }
    onClickContent(event) {
        event.stopPropagation();
    }
    render() {
        return (React.createElement(Portal_1.default, { show: this.props.show, portal: this.props.portal, portalKey: this.props.name },
            React.createElement("div", { className: this.getBlockClassName('modal'), onClick: () => this.onClose() },
                React.createElement("div", { className: this.getElementClassName('modal', 'content'), onClick: (event) => this.onClickContent(event) }, this.props.children))));
    }
}
exports.default = Modal;
