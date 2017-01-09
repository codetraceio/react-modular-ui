import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Input extends AbstractComponent {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  renderLabel() {
    return this.props.label ? (
      <div className={this.elementName('input', 'label')}>{this.props.label}</div>
    ) : null;
  }

  render() {
    return (
      <div className={this.blockName('input', this.getModifiers())}>
        {this.renderLabel()}
        <input
          placeholder={this.props.placeholder}
          value={this.props.value}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
          onKeyDown={this.props.onKeyDown}
          onKeyUp={this.props.onKeyUp}
          onKeyPress={this.props.onKeyPress}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
      </div>
    )
  }
}
