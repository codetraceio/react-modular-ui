import React from 'react';

import AbstractComponent from './AbstractComponent';
import Portal from './Portal';

export default class Modal extends AbstractComponent {
  onClose() {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  onClickContent(event) {
    event.stopPropagation();
  }

  render() {
    return (
      <Portal show={this.props.show} portal={this.props.portal} portalKey={this.props.name}>
        <div className={this.getBlockClassName('modal')} onClick={() => this.onClose()}>
          <div className={this.getElementClassName('modal', 'content')} onClick={(event) => this.onClickContent(event)}>
            {this.props.children}
          </div>
        </div>
      </Portal>
    );
  }
}
