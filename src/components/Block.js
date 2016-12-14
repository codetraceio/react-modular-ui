import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Block extends AbstractComponent {
  getModifiers() {
    return ['layout'];
  }

  render() {
    return (
      <div className={this.blockName('block', this.getModifiers())}>
        {this.props.children}
      </div>
    )
  }
}
