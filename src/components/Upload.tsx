import * as React from 'react';

import { IModifiers, getBlockName } from '../services/componentService';

export interface IUploadProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;

  onChange?: (files: FileList) => void
}

export interface IUploadState {
  active: boolean;
}

export default class Upload extends React.PureComponent<IUploadProps, IUploadState> {
  private element: HTMLDivElement = null;
  private fileElement: HTMLInputElement = null;

  state = {
    active: false
  };

  getModifierObject(): IModifiers {
    return {
      active: this.state.active
    };
  }

  updateElement(element: HTMLDivElement) {
    if (!element) {
      return;
    }

    if (this.element !== element) {
      element.addEventListener('dragover', this.onDragOver, false);
      element.addEventListener('dragleave', this.onDragLeave, false);
      element.addEventListener('drop', this.onDrop, false);
    }

    this.element = element;
  }

  updateFileElement(element: HTMLInputElement) {
    this.fileElement = element;
  }

  onDragOver = (event: Event) => {
    event.preventDefault();
    this.setState({
      active: true
    });
  };

  onDragLeave = () => {
    this.setState({
      active: false
    });
  };

  onDrop = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const files = event.dataTransfer.files;

    this.setState({
      active: false
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(files);
    }
  };

  onClick = () => {
    if (!this.fileElement) {
      return;
    }

    this.fileElement.click();
  };

  onChange = () => {
    const files = this.fileElement.files;

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(files);
    }
  };

  render() {
    return (
      <div
        className={getBlockName('upload', this.getModifierObject())}
        ref={(element) => this.updateElement(element)}
        data-name={this.props.name}
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
          {this.props.children}
        </div>
      </div>
    );
  }
}
