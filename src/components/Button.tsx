import * as React from 'react';

import { IModifiers, getBlockName } from '../services/componentService';

export interface IButtonProps {
  size?: string | number;
  view?: string;
  color?: string;
  shape?: string;
  disabled?: boolean;
  padding?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  name?: string;
  children?: JSX.Element | JSX.Element[] | string;

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function getModifierObject(props: IButtonProps): IModifiers {
  return {
    size: props.size,
    view: props.view,
    color: props.color,
    shape: props.shape,
    disabled: props.disabled,
    padding: props.padding,
    paddingLeft: props.paddingLeft,
    paddingRight: props.paddingRight
  };
}

export default function Button(props: IButtonProps) {
  return (
    <div
      className={getBlockName('button', getModifierObject(props))}
      data-name={props.name}
      tabIndex={1}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
