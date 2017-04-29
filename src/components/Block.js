import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Block extends AbstractComponent {
  getModifierNames() {
    const modifiers = [
      'layout', 'wrap', 'padding', 'margin', 'hide', 'fit',
      'grow', 'shrink', 'order', 'grid', 'align', 'justify', 'center',
      'scroll', 'spaceHorizontal', 'spaceVertical',
      'height', 'width'
    ];
    if (this.props.modifiers) {
      modifiers.push(...this.props.modifiers);
    }
    return modifiers;
  }

  render() {
    return (
      <div className={this.getBlockName('block', this.getModifierNames())}>
        {this.props.children}
      </div>
    )
  }
}
