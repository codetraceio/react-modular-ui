import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Button extends AbstractComponent {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  render() {
    return (
      <div
        className={this.blockName('button', this.getModifiers())}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}
