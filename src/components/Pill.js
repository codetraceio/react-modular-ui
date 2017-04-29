import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Pill extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  render() {
    return (
      <div
        className={this.getBlockName('pill', this.getModifierObject())}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
