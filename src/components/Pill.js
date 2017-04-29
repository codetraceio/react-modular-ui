import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Pill extends AbstractComponent {
  getModifierNames() {
    return ['size', 'color'];
  }

  render() {
    return (
      <div
        className={this.getBlockName('pill', this.getModifierNames())}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
