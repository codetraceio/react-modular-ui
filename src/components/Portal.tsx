import * as React from "react";
import * as ReactDom from "react-dom";

import settings from "../services/settingService";

export interface IPortalProps {
  portal?: JSX.Element[];
  portalKey?: string;

  onUpdate?: () => void;
}

export default class Portal extends React.PureComponent<IPortalProps, {}> {
  private portalElement: HTMLElement = document.createElement("div");

  componentDidMount() {
    window.document.body.appendChild(this.portalElement);
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.portalElement);
  }

  componentDidUpdate() {
    if (typeof this.props.onUpdate === "function") {
      this.props.onUpdate();
    }
  }

  render() {
    if (settings.isBackend() && Array.isArray(this.props.portal) && this.props.portalKey) {
      this.props.portal.push(
        <div key={this.props.portalKey} data-portal={this.props.portalKey} style={{display: "none"}}>
          {this.props.children}
        </div>
      );
    }

    return ReactDom.createPortal(this.props.children, this.portalElement);
  }
}
