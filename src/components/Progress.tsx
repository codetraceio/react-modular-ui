import * as React from 'react';
import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';

export interface IProgressProps {
  size?: string | number;
  color?: string;
  value: string | number;
}

export default class Progress extends AbstractComponent<IProgressProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  getValue() {
    if (typeof this.props.value === 'string' || typeof this.props.value === 'number') {
      return this.props.value.toString();
    }
    return '0';
  }

  render() {
    return (
      <div className={this.getBlockName('progress', this.getModifierObject())}>
        <div
          className={this.getElementName('progress', 'line')}
          style={{width:`${this.getValue()}%`}}
        />
      </div>
    );
  }
}
