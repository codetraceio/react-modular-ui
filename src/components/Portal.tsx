import * as React from "react";
import * as ReactDom from "react-dom";

import settings from "../services/settingService";

export interface IPortalProps {
  portal?: JSX.Element[];
  portalKey?: string;

  onUpdate?: () => void;
}

export default class Portal extends React.PureComponent<IPortalProps, {}> {
  private portalElement: HTMLElement;

  constructor(props: IPortalProps) {
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
    if (settings.isBackend() && Array.isArray(this.props.portal) && this.props.portalKey) {
      this.props.portal.push(
        <div key={this.props.portalKey} data-portal={this.props.portalKey} style={{display: "none"}}>
          {this.props.children}
        </div>
      );
      return null;
    }

    return ReactDom.createPortal(this.props.children, this.portalElement);
  }
}
