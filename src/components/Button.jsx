import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Button extends AbstractComponent {
  getModifiers() {
    return ['size', 'view', 'color', 'selected', 'disabled'];
  }

  render() {
    return (
      <div className={this.blockName('button', this.getModifiers())}>
        {this.props.children}
      </div>
    )
  }
}
