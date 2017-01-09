import React from 'react';
import AbstractComponent from './AbstractComponent';
import settings from '../settings';

export default class Button extends AbstractComponent {
  getModifiers() {
    return ['size', 'color'];
  }

  render() {
    return (
      <div
        className={this.blockName('icon', this.getModifiers())}
        onClick={this.props.onClick}
      >
        {settings.getIcon(this.props.name)}
      </div>
    )
  }
}
