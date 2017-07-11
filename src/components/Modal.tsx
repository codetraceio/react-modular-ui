import * as React from 'react';

import AbstractComponent from './AbstractComponent';
import Portal from './Portal';

export interface IModalProps {
  show?: boolean;
  portal?: JSX.Element[];
  name?: string;
  onClose?: () => void;
}

export default class Modal extends AbstractComponent<IModalProps, {}> {
  onClose() {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  onClickContent(event: React.MouseEvent<HTMLDivElement>) {
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
