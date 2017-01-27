import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Pill extends AbstractComponent {
  getModifiers() {
    return ['size', 'color'];
  }

  render() {
    return (
      <div
        className={this.blockName('pill', this.getModifiers())}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
