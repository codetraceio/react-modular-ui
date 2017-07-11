"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Upload extends AbstractComponent_1.default {
    constructor() {
        super();
        this.element = null;
        this.fileElement = null;
        this.onDragOverListener = this.onDragOver.bind(this);
        this.onDragLeaveListener = this.onDragLeave.bind(this);
        this.onDropListener = this.onDrop.bind(this);
        this.state = {
            active: false
        };
    }
    getModifierObject() {
        return {
            active: this.state.active
        };
    }
    updateElement(element) {
        if (!element) {
            return;
        }
        if (this.element !== element) {
            element.addEventListener('dragover', this.onDragOverListener, false);
            element.addEventListener('dragleave', this.onDragLeaveListener, false);
            element.addEventListener('drop', this.onDropListener, false);
        }
        this.element = element;
    }
    updateFileElement(element) {
        this.fileElement = element;
    }
    onDragOver(event) {
        event.preventDefault();
        this.setState({
            active: true
        });
    }
    onDragLeave() {
        this.setState({
            active: false
        });
    }
    onDrop(event) {
        event.stopPropagation();
        event.preventDefault();
        const files = event.dataTransfer.files;
        this.setState({
            active: false
        });
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(files);
        }
    }
    onClick() {
        if (!this.fileElement) {
            return;
        }
        this.fileElement.click();
    }
    onChange() {
        const files = this.fileElement.files;
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(files);
        }
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('upload', this.getModifierObject()), ref: (element) => this.updateElement(element), "data-name": this.props.name, onClick: () => this.onClick() },
            React.createElement("input", { type: "file", name: this.props.name, style: { display: 'none' }, ref: (element) => this.updateFileElement(element), onChange: () => this.onChange() }),
            React.createElement("div", null, this.props.children)));
    }
}
exports.default = Upload;
