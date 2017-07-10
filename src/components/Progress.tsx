import React from 'react';
import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';

export interface IProgressProps {
  size: string | number;
  color: string;
  value: string | number;
}

export default class Progress extends AbstractComponent<IProgressProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  render() {
    return (
      <div className={this.getBlockName('progress', this.getModifierObject())}>
        <div
          className={this.getElementName('progress', 'line')}
          style={{width:`${this.props.value.toString()}%`}}
        />
      </div>
    );
  }
}
