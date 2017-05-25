import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Textarea extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      disabled: this.props.disabled
    };
  }

  getStyle() {
    const style = {};
    if (this.props.height) {
      style.height = `${this.props.height}px`;
    }
    return style;
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
      <div className={this.getElementName('textarea', 'label')}>{this.props.label}</div>
    ) : null;
  }

  render() {
    return (
      <div className={this.getBlockName('textarea', this.getModifierObject())} style={this.getStyle()}>
        {this.renderLabel()}
        <textarea
          name={this.props.name}
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
