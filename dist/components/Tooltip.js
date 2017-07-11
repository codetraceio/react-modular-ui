"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const settings_1 = require("../settings");
const utils_1 = require("../utils");
const AbstractComponent_1 = require("./AbstractComponent");
const Portal_1 = require("./Portal");
class Tooltip extends AbstractComponent_1.default {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.wrapperElement = null;
        this.tooltipElement = null;
    }
    updateWrapper(element) {
        this.wrapperElement = element;
    }
    updateTooltip(element) {
        this.tooltipElement = element;
    }
    onUpdateTooltip() {
        const wrapperElement = this.wrapperElement;
        const tooltipElement = this.tooltipElement;
        if (!wrapperElement || !tooltipElement) {
            return;
        }
        utils_1.default.updateTooltip(wrapperElement, tooltipElement, this.props.prefer);
    }
    onShowTooltip() {
        this.setState({
            show: true
        }, () => this.onUpdateTooltip());
    }
    onHideTooltip() {
        this.setState({
            show: false
        });
    }
    render() {
        const portalKey = settings_1.default.isBackend() ? utils_1.default.generateKey() : '';
        return (React.createElement("div", { className: this.getBlockClassName('tooltip-wrapper'), onMouseOver: () => this.onShowTooltip(), onMouseOut: () => this.onHideTooltip(), ref: (element) => this.updateWrapper(element), "data-portal-key": portalKey },
            this.props.children,
            React.createElement(Portal_1.default, { show: this.state.show, portal: this.props.portal, portalKey: portalKey },
                React.createElement("div", { className: this.getBlockClassName('tooltip'), ref: (element) => this.updateTooltip(element) }, this.props.title))));
    }
}
exports.default = Tooltip;
