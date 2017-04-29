import React from 'react';
import AbstractComponent from './AbstractComponent';
import settings from '../settings';

export default class Button extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      width: this.props.width,
      height: this.props.height,
      color: this.props.color,
      rotate: this.props.rotate
    };
  }

  render() {
    return (
      <div
        className={this.getBlockName('icon', this.getModifierObject())}
        onClick={this.props.onClick}
      >
        {settings.getIcon(this.props.name)}
      </div>
    )
  }
}
