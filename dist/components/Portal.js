"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const settings_1 = require("../settings");
const AbstractComponent_1 = require("./AbstractComponent");
class Portal extends AbstractComponent_1.default {
    constructor() {
        super();
        this.portalElement = null;
    }
    componentDidMount() {
        this.updatePortal();
    }
    componentWillUnmount() {
        this.removePortalElement();
    }
    componentDidUpdate() {
        this.updatePortal();
    }
    addPortalElement() {
        if (!this.portalElement) {
            this.portalElement = document.createElement('div');
            window.document.body.appendChild(this.portalElement);
        }
    }
    updatePortal() {
        if (this.props.show) {
            this.addPortalElement();
            ReactDom.render(React.createElement("div", null, this.props.children), this.portalElement);
        }
        else {
            this.removePortalElement();
        }
    }
    removePortalElement() {
        if (this.portalElement) {
            window.document.body.removeChild(this.portalElement);
            this.portalElement = null;
        }
    }
    render() {
        if (settings_1.default.isBackend() && Array.isArray(this.props.portal) && this.props.portalKey) {
            this.props.portal.push(React.createElement("div", { key: this.props.portalKey, "data-portal": this.props.portalKey, style: { display: 'none' } }, this.props.children));
        }
        return null;
    }
}
exports.default = Portal;
