import React from 'react';
import AbstractComponent from './AbstractComponent';
import settings from '../settings';

export default class Button extends AbstractComponent {
  getModifierNames() {
    return ['size', 'width', 'height', 'color', 'rotate'];
  }

  render() {
    return (
      <div
        className={this.getBlockName('icon', this.getModifierNames())}
        onClick={this.props.onClick}
      >
        {settings.getIcon(this.props.name)}
      </div>
    )
  }
}
