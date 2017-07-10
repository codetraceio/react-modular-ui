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
var ReactDom = require("react-dom");
var settings_1 = require("../settings");
var AbstractComponent_1 = require("./AbstractComponent");
var Portal = (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super.call(this) || this;
        _this.portalElement = null;
        return _this;
    }
    Portal.prototype.componentDidMount = function () {
        this.updatePortal();
    };
    Portal.prototype.componentWillUnmount = function () {
        this.removePortalElement();
    };
    Portal.prototype.componentDidUpdate = function () {
        this.updatePortal();
    };
    Portal.prototype.addPortalElement = function () {
        if (!this.portalElement) {
            this.portalElement = document.createElement('div');
            window.document.body.appendChild(this.portalElement);
        }
    };
    Portal.prototype.updatePortal = function () {
        if (this.props.show) {
            this.addPortalElement();
            ReactDom.render(React.createElement("div", null, this.props.children), this.portalElement);
        }
        else {
            this.removePortalElement();
        }
    };
    Portal.prototype.removePortalElement = function () {
        if (this.portalElement) {
            window.document.body.removeChild(this.portalElement);
            this.portalElement = null;
        }
    };
    Portal.prototype.render = function () {
        if (settings_1.default.isBackend() && Array.isArray(this.props.portal) && this.props.portalKey) {
            this.props.portal.push(React.createElement("div", { key: this.props.portalKey, "data-portal": this.props.portalKey, style: { display: 'none' } }, this.props.children));
        }
        return null;
    };
    return Portal;
}(AbstractComponent_1.default));
exports.default = Portal;
