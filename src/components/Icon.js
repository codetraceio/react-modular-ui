import React from 'react';
import AbstractComponent from './AbstractComponent';
import settings from '../settings';

export default class Button extends AbstractComponent {
  getModifiers() {
    return ['size', 'width', 'height', 'color', 'rotate'];
  }

  render() {
    return (
      <div
        className={this.blockName('icon', this.getModifiers())}
        data-name={this.props.name}
        onClick={this.props.onClick}
      >
        {settings.getIcon(this.props.name)}
      </div>
    )
  }
}
