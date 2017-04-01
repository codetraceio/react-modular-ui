import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Button extends AbstractComponent {
  getModifiers() {
    return ['size', 'view', 'color', 'shape', 'disabled'];
  }

  render() {
    return (
      <div
        className={this.blockName('button', this.getModifiers())}
        data-name={this.props.name}
        tabIndex="1"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}
