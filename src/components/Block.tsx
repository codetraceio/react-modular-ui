import * as React from 'react';
import {
  default as AbstractComponent,
  IProp
} from './AbstractComponent';

interface IBlockProps {
  layout: IProp<string>;
  wrap: IProp<boolean>;
  padding: IProp<string>;
  hide: IProp<boolean>;
  margin: IProp<string>;
  fit: IProp<boolean>;
  grow: IProp<string>;
  shrink: IProp<string>;
  order: IProp<string>;
  grid: IProp<string>;
  align: IProp<string>;
  justify: IProp<string>;
  scroll: IProp<string>;
  spaceHorizontal: IProp<string>;
  spaceVertical: IProp<string>;
  height: IProp<string>;
  width: IProp<string>;
  modifiers: string[];
  [key: string]: IProp<string | number | boolean> | string[];
}

export default class Block extends AbstractComponent<IBlockProps, {}> {
  getModifierObject() {
    const modifiers: {[key: string]: IProp<string | number | boolean>} = {
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
      scroll: this.props.scroll,
      spaceHorizontal: this.props.spaceHorizontal,
      spaceVertical: this.props.spaceVertical,
      height: this.props.height,
      width: this.props.width
    };
    if (this.props.modifiers) {
      this.props.modifiers.forEach((key: string) => {
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
