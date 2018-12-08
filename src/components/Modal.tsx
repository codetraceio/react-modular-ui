import * as React from "react";

import { getBlockClassName, getElementClassName } from "../services/componentService";
import Portal from "./Portal";

export interface IModalProps {
  portal?: JSX.Element[];
  name?: string;

  onClose?: () => void;
}

export default class Modal extends React.PureComponent<IModalProps, {}> {
  onClose = () => {
    if (typeof this.props.onClose === "function") {
      this.props.onClose();
    }
  };

  onClickContent = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  render() {
    return (
      <Portal portal={this.props.portal} portalKey={this.props.name}>
        <div className={getBlockClassName("modal")} onClick={this.onClose}>
          <div className={getElementClassName("modal", "content")} onClick={this.onClickContent}>
            {this.props.children}
          </div>
        </div>
      </Portal>
    );
  }
}
