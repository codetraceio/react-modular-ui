import * as React from 'react';

import { IModifiers, getBlockName, getElementName } from '../services/componentService';

export interface IToggleProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  children?: JSX.Element | JSX.Element[] | string;

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

function getModifierObject(props: IToggleProps): IModifiers {
  return {
    size: props.size,
    color: props.color,
    checked: props.checked,
    disabled: props.disabled
  };
}

function isChecked(props: IToggleProps): boolean {
  return props.checked || false;
}

export default function Toggle(props: IToggleProps) {

  function onClick(e: React.MouseEvent<HTMLDivElement>) {
    if (typeof props.onChange === 'function') {
      props.onChange(!props.checked, e);
    }
  }

  return (
    <div
      className={getBlockName('toggle', getModifierObject(props))}
      role="checkbox"
      tabIndex={0}
      aria-checked={isChecked(props).toString()}
      onClick={(e) => onClick(e)}
    >
      <div className={getElementName('toggle', 'container')}>
        <div className={getElementName('toggle', 'line')} />
        <div className={getElementName('toggle', 'handle')} />
      </div>
      {props.children ? (
        <div className={getElementName('toggle', 'label')}>
          {props.children}
        </div>
      ) :  null}
    </div>
  );
}
