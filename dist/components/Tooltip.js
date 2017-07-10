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
var settings_1 = require("../settings");
var utils_1 = require("../utils");
var AbstractComponent_1 = require("./AbstractComponent");
var Portal_1 = require("./Portal");
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super.call(this) || this;
        _this.state = {
            show: false
        };
        _this.wrapperElement = null;
        _this.tooltipElement = null;
        return _this;
    }
    Tooltip.prototype.updateWrapper = function (element) {
        this.wrapperElement = element;
    };
    Tooltip.prototype.updateTooltip = function (element) {
        this.tooltipElement = element;
    };
    Tooltip.prototype.onUpdateTooltip = function () {
        var wrapperElement = this.wrapperElement;
        var tooltipElement = this.tooltipElement;
        if (!wrapperElement || !tooltipElement) {
            return;
        }
        utils_1.default.updateTooltip(wrapperElement, tooltipElement, this.props.prefer);
    };
    Tooltip.prototype.onShowTooltip = function () {
        var _this = this;
        this.setState({
            show: true
        }, function () { return _this.onUpdateTooltip(); });
    };
    Tooltip.prototype.onHideTooltip = function () {
        this.setState({
            show: false
        });
    };
    Tooltip.prototype.render = function () {
        var _this = this;
        var portalKey = settings_1.default.isBackend() ? utils_1.default.generateKey() : '';
        return (React.createElement("div", { className: this.getBlockClassName('tooltip-wrapper'), onMouseOver: function () { return _this.onShowTooltip(); }, onMouseOut: function () { return _this.onHideTooltip(); }, ref: function (element) { return _this.updateWrapper(element); }, "data-portal-key": portalKey },
            this.props.children,
            React.createElement(Portal_1.default, { show: this.state.show, portal: this.props.portal, portalKey: portalKey },
                React.createElement("div", { className: this.getBlockClassName('tooltip'), ref: function (element) { return _this.updateTooltip(element); } }, this.props.title))));
    };
    return Tooltip;
}(AbstractComponent_1.default));
exports.default = Tooltip;
