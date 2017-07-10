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
var Upload = (function (_super) {
    __extends(Upload, _super);
    function Upload() {
        var _this = _super.call(this) || this;
        _this.element = null;
        _this.fileElement = null;
        _this.onDragOverListener = _this.onDragOver.bind(_this);
        _this.onDragLeaveListener = _this.onDragLeave.bind(_this);
        _this.onDropListener = _this.onDrop.bind(_this);
        _this.state = {
            active: false
        };
        return _this;
    }
    Upload.prototype.getModifierObject = function () {
        return {
            active: this.state.active
        };
    };
    Upload.prototype.updateElement = function (element) {
        if (!element) {
            return;
        }
        if (this.element !== element) {
            element.addEventListener('dragover', this.onDragOverListener, false);
            element.addEventListener('dragleave', this.onDragLeaveListener, false);
            element.addEventListener('drop', this.onDropListener, false);
        }
        this.element = element;
    };
    Upload.prototype.updateFileElement = function (element) {
        this.fileElement = element;
    };
    Upload.prototype.onDragOver = function (event) {
        event.preventDefault();
        this.setState({
            active: true
        });
    };
    Upload.prototype.onDragLeave = function () {
        this.setState({
            active: false
        });
    };
    Upload.prototype.onDrop = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer.files;
        this.setState({
            active: false
        });
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(files);
        }
    };
    Upload.prototype.onClick = function () {
        if (!this.fileElement) {
            return;
        }
        this.fileElement.click();
    };
    Upload.prototype.onChange = function () {
        var files = this.fileElement.files;
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(files);
        }
    };
    Upload.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: this.getBlockName('upload', this.getModifierObject()), ref: function (element) { return _this.updateElement(element); }, "data-name": this.props.name, onClick: function () { return _this.onClick(); } },
            React.createElement("input", { type: "file", name: this.props.name, style: { display: 'none' }, ref: function (element) { return _this.updateFileElement(element); }, onChange: function () { return _this.onChange(); } }),
            React.createElement("div", null, this.props.children)));
    };
    return Upload;
}(AbstractComponent_1.default));
exports.default = Upload;
