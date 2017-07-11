import * as React from 'react';

import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';

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

export default class Upload extends AbstractComponent<IUploadProps, IUploadState> {
  private element: HTMLDivElement;
  private fileElement: HTMLInputElement;
  private onDragOverListener: (event: DragEvent) => void;
  private onDragLeaveListener: () => void;
  private onDropListener: (event: DragEvent) => void;

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
      element.addEventListener('dragover', this.onDragOverListener, false);
      element.addEventListener('dragleave', this.onDragLeaveListener, false);
      element.addEventListener('drop', this.onDropListener, false);
    }

    this.element = element;
  }

  updateFileElement(element: HTMLInputElement) {
    this.fileElement = element;
  }

  onDragOver(event: React.DragEvent<HTMLDivElement>) {
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

  onDrop(event: React.DragEvent<HTMLDivElement>) {
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
    return (
      <div
        className={this.getBlockName('upload', this.getModifierObject())}
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
