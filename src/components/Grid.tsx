import React = require("react");

import componentService, { IProp } from "../services/componentService";

interface IGridProps {
  columns?: IProp<string | number>;
  space?: IProp<string | number>;
  templateColumns?: string;
}

export default class Grid extends React.PureComponent<IGridProps, {}> {
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
