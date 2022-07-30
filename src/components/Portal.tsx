import * as React from "react";
import * as ReactDom from "react-dom";

import settings from "../services/settingService";

export interface PortalProps {
  portal?: JSX.Element[];
  portalKey?: string;

  onUpdate?: () => void;
}

export default class Portal extends React.PureComponent<PortalProps, {}> {
  private portalElement: HTMLElement;

  constructor(props: PortalProps) {
    super(props);

    if (typeof window === "object" && window.document) {
      this.portalElement = window.document.createElement("div");
    }
  }

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
    if (settings.isBackend()) {
      if (Array.isArray(this.props.portal) && this.props.portalKey) {
        this.props.portal.push(
          <div key={this.props.portalKey} data-portal={this.props.portalKey} style={{display: "none"}}>
            {this.props.children}
          </div>
        );
      }
      return null;
    }

    return !settings.isServer() ? ReactDom.createPortal(this.props.children, this.portalElement) : null;
  }
}
