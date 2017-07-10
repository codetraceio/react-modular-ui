import * as React from 'react';
import {
  default as AbstractComponent,
  IProp,
  IModifiers
} from './AbstractComponent';

export interface IBlockProps {
  layout?: IProp<string>;
  wrap?: IProp<boolean>;
  padding?: IProp<string | number>;
  hide?: IProp<boolean>;
  margin?: IProp<string | number>;
  fit?: IProp<boolean>;
  grow?: IProp<string | number>;
  shrink?: IProp<string | number>;
  order?: IProp<string | number>;
  grid?: IProp<string | number>;
  align?: IProp<string>;
  justify?: IProp<string>;
  scroll?: IProp<string>;
  spaceHorizontal?: IProp<string | number>;
  spaceVertical?: IProp<string | number>;
  height?: IProp<string | number>;
  width?: IProp<string | number>;
  modifiers?: IModifiers;
}

export default class Block extends AbstractComponent<IBlockProps, {}> {
  getModifierObject(): IModifiers {
    return {
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
      width: this.props.width,
      ...this.props.modifiers
    };
  }

  render() {
    return (
      <div className={this.getBlockName('block', this.getModifierObject())}>
        {this.props.children}
      </div>
    )
  }
}
