import * as React from 'react';

import { getBlockClassName, getElementClassName } from '../services/componentService';
import Portal from './Portal';

export interface IModalProps {
  portal?: JSX.Element[];
  name?: string;
  children: JSX.Element;
  onClose?: () => void;
}

export default function Modal(props: IModalProps) {
  function onClose() {
    if (typeof props.onClose === 'function') {
      props.onClose();
    }
  }

  function onClickContent(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  return (
    <Portal portal={props.portal} portalKey={props.name}>
      <div className={getBlockClassName('modal')} onClick={onClose}>
        <div className={getElementClassName('modal', 'content')} onClick={onClickContent}>
          {props.children}
        </div>
      </div>
    </Portal>
  );
}
