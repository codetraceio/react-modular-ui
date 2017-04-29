import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Progress extends AbstractComponent {
  getModifierNames() {
    return ['color', 'size'];
  }

  render() {
    return (
      <div className={this.getBlockName('progress', this.getModifierNames())}>
        <div className={this.getElementName('progress', 'line')} style={{width:`${this.props.value}%`}} />
      </div>
    );
  }
}
