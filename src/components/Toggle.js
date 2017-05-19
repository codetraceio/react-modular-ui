import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Pill extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      color: this.props.color,
      checked: this.props.checked,
      disabled: this.props.disabled
    };
  }

  onClick(e) {
    this.props.onChange(!this.props.checked, e);
  }

  render() {
    return (
      <div
        className={this.getBlockName('toggle', this.getModifierObject())}
        role="checkbox"
        tabIndex="0"
        onClick={(e) => this.onClick(e)}
      >
        <div className={this.getElementName('toggle', 'container')}>
          <div className={this.getElementName('toggle', 'line')} />
          <div className={this.getElementName('toggle', 'handle')} />
        </div>
        {this.props.children ? (
          <div className={this.getElementName('toggle', 'label')}>
            {this.props.children}
          </div>
        ) :  null}
      </div>
    )
  }
}
