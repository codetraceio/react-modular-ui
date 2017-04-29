import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Button extends AbstractComponent {
  getModifierNames() {
    return ['size', 'view', 'color', 'shape', 'disabled'];
  }

  render() {
    return (
      <div
        className={this.getBlockName('button', this.getModifierNames())}
        data-name={this.props.name}
        tabIndex="1"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}
