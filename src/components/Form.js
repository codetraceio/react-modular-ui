import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Form extends AbstractComponent {
  onChange(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e.target.name, e.target.value, e);
    }
  }

  render() {
    return (
      <form
        className={this.getBlockName('form', [])}
        action={this.props.action}
        method={this.props.method}
        name={this.props.name}
        target={this.props.target}
        onChange={this.onChange}
        onSubmit={this.props.onSubmit}
      >
        <input type="submit" style={{display: 'none'}} />
        {this.props.children}
      </form>
    )
  }
}
