import React from 'react';
import ReactDom from 'react-dom';

import settings from '../settings';
import AbstractComponent from './AbstractComponent';

export default class Portal extends AbstractComponent {
  constructor(props) {
    super(props);

    this.portalElement = null;
  }

  componentDidMount() {
    this.updatePortal();
  }

  componentWillUnmount() {
    this.removePortalElement();
  }

  componentDidUpdate() {
    this.updatePortal();
  }

  addPortalElement() {
    if (!this.portalElement) {
      this.portalElement = document.createElement('div');
      window.document.body.appendChild(this.portalElement);
    }
  }

  updatePortal() {
    if (this.props.show) {
      this.addPortalElement();
      ReactDom.render(<div>{this.props.children}</div>, this.portalElement);
    } else {
      this.removePortalElement();
    }
  }

  removePortalElement() {
    if (this.portalElement) {
      window.document.body.removeChild(this.portalElement);
      this.portalElement = null;
    }
  }

  render() {
    if (settings.isBackend() && Array.isArray(this.props.portal) && this.props.portalKey) {
      this.props.portal.push(
        <div key={this.props.portalKey} data-portal={this.props.portalKey} style={{display: 'none'}}>
          {this.props.children}
        </div>
      );
    }

    return null;
  }
}
