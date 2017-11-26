import * as React from 'react';
import { IProp, IModifiers, getBlockName } from '../services/componentService';

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
  children?: JSX.Element | JSX.Element[] | string;
}

function getModifierObject(props: IBlockProps): IModifiers {
  return {
    layout: props.layout,
    wrap: props.wrap,
    padding: props.padding,
    margin: props.margin,
    hide: props.hide,
    fit: props.fit,
    grow: props.grow,
    shrink: props.shrink,
    order: props.order,
    grid: props.grid,
    align: props.align,
    justify: props.justify,
    scroll: props.scroll,
    spaceHorizontal: props.spaceHorizontal,
    spaceVertical: props.spaceVertical,
    height: props.height,
    width: props.width,
    ...props.modifiers
  };
}

export default function Block(props: IBlockProps) {
  return (
    <div className={getBlockName('block', getModifierObject(props))}>
      {props.children}
    </div>
  );
}
