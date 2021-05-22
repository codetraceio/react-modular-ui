import * as React from "react";
import { Prop, Modifiers, getBlockName } from "../services/componentService";

export interface BlockProps {
  layout?: Prop<string>;
  wrap?: Prop<boolean>;
  padding?: Prop<string | number>;
  hide?: Prop<boolean>;
  margin?: Prop<string | number>;
  fit?: Prop<boolean>;
  grow?: Prop<string | number>;
  shrink?: Prop<string | number>;
  order?: Prop<string | number>;
  grid?: Prop<string | number>;
  align?: Prop<string>;
  justify?: Prop<string>;
  scroll?: Prop<string>;
  spaceHorizontal?: Prop<string | number>;
  spaceVertical?: Prop<string | number>;
  height?: Prop<string | number>;
  width?: Prop<string | number>;
  container?: Prop<string | number>;
  modifiers?: Modifiers;
}

export default class Block extends React.PureComponent<BlockProps, {}> {
  getModifierObject(): Modifiers {
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
      container: this.props.container,
      ...this.props.modifiers
    };
  }

  render() {
    return (
      <div className={getBlockName("block", this.getModifierObject())}>
        {this.props.children}
      </div>
    );
  }
}
