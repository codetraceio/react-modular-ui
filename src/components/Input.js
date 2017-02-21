import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Input extends AbstractComponent {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  delegateEvent(eventName) {
    return (event) => {
      if (typeof this.props[eventName] === 'function') {
        this.props[eventName](event.target.value, event);
      }
    };
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
          onChange={this.delegateEvent('onChange')}
          onKeyDown={this.delegateEvent('onKeyDown')}
          onKeyUp={this.delegateEvent('onKeyUp')}
          onKeyPress={this.delegateEvent('onKeyPress')}
          onFocus={this.delegateEvent('onFocus')}
          onBlur={this.delegateEvent('onBlur')}
        />
      </div>
    )
  }
}
