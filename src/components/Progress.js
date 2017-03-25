import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Progress extends AbstractComponent {
  getModifiers() {
    return ['color', 'size'];
  }

  render() {
    return (
      <div className={this.blockName('progress', this.getModifiers())}>
        <div className={this.elementName('progress', 'line')} style={{width:`${this.props.value}%`}} />
      </div>
    );
  }
}
