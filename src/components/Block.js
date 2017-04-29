import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Block extends AbstractComponent {
  getModifierObject() {
    const modifiers = {
      layout: this.props.layout,
      wrap: this.props.wrap,
      padding: this.props.padding,
      margin: this.props.margin,
      hide: this.props.hide,
      fit: this.props.fit,
      grow: this.props.grow,
      shrink: this.props.shrink,
      order: this.props.order,
      grid: this.props.grid,
      align: this.props.align,
      justify: this.props.justify,
      center: this.props.center,
      scroll: this.props.scroll,
      spaceHorizontal: this.props.spaceHorizontal,
      spaceVertical: this.props.spaceVertical,
      height: this.props.height,
      width: this.props.width
    };
    if (this.props.modifiers) {
      this.props.modifiers.forEach((key) => {
        modifiers[key] = this.props[key];
      });
    }
    return modifiers;
  }

  render() {
    return (
      <div className={this.getBlockName('block', this.getModifierObject())}>
        {this.props.children}
      </div>
    )
  }
}
