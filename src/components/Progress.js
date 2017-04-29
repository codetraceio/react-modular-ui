import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Progress extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  render() {
    return (
      <div className={this.getBlockName('progress', this.getModifierObject())}>
        <div className={this.getElementName('progress', 'line')} style={{width:`${this.props.value}%`}} />
      </div>
    );
  }
}
