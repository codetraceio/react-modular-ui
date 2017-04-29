import React from 'react';

import AbstractComponent from './AbstractComponent';

export default class Upload extends AbstractComponent {
  constructor(props) {
    super(props);

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
    this.element = element;
    if (!this.element) {
      return;
    }
    this.element.removeEventListener('dragover', this.onDragOverListener, false);
    this.element.removeEventListener('dragleave', this.onDragLeaveListener, false);
    this.element.removeEventListener('drop', this.onDropListener, false);
    this.element.addEventListener('dragover', this.onDragOverListener, false);
    this.element.addEventListener('dragleave', this.onDragLeaveListener, false);
    this.element.addEventListener('drop', this.onDropListener, false);
  }

  updateFileElement(element) {
    this.fileElement = element;
  }

  onDragOver() {
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
    let file = null;
    if (files.length > 0) {
      file = files[0];
    }

    this.setState({
      active: false
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(file);
    }
  }

  onClick() {
    if (!this.fileElement) {
      return;
    }

    this.fileElement.click();
  }

  onChange() {
    const file = this.fileElement.files[0];

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(file);
    }
  }

  renderText() {
    if (this.props.success) {
      return this.props.successText;
    }

    return this.props.text;
  }

  render() {
    return (
      <div
        className={this.getBlockName('upload', this.getModifierObject())}
        ref={(element) => this.updateElement(element)}
        onClick={() => this.onClick()}
      >
        <input
          type="file"
          name={this.props.name}
          style={{display: 'none'}}
          ref={(element) => this.updateFileElement(element)}
          onChange={() => this.onChange()}
        />
        <div>
          {this.renderText()}
        </div>
      </div>
    );
  }
}
