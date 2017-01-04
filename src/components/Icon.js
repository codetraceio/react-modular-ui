import React from 'react';
import AbstractUiComponent from './AbstractUiComponent';
import settings from '../settings';

export default class Button extends AbstractUiComponent {
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
