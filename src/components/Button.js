import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Button extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      shape: this.props.shape,
      disabled: this.props.disabled
    };
  }

  render() {
    return (
      <div
        className={this.getBlockName('button', this.getModifierObject())}
        data-name={this.props.name}
        tabIndex="1"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}
