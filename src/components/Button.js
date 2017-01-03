import React from 'react';
import AbstractUiComponent from './AbstractUiComponent';

export default class Button extends AbstractUiComponent {
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
