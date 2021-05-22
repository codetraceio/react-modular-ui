import React = require("react");

import componentService, { Prop } from "../services/componentService";

interface GridProps {
  columns?: Prop<string | number>;
  space?: Prop<string | number>;
  templateColumns?: string;
}

export default class Grid extends React.PureComponent<GridProps, {}> {
  getModifiers() {
    return {
      columns: this.props.columns,
      space: this.props.space,
    };
  }

  getStyle() {
    return {
      gridTemplateColumns: this.props.templateColumns,
    };
  }

  render() {
    return (
      <div
        className={componentService.getBlockName("grid", this.getModifiers())}
        style={this.getStyle()}
      >
        {this.props.children}
      </div>
    );
  }
}
