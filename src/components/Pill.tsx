import * as React from 'react';

import { IModifiers, getBlockName } from '../services/componentService';

export interface IPillProps {
  size?: string | number;
  color?: string;
  children?: JSX.Element | JSX.Element[] | string;

  onChange?: (offset: number, page: number) => void;
}

function getModifierObject(props: IPillProps): IModifiers {
  return {
    size: props.size,
    color: props.color
  };
}

export default function Pill(props: IPillProps) {
  return (
    <div
      className={getBlockName('pill', getModifierObject(props))}
    >
      <div>
        {props.children}
      </div>
    </div>
  );
}
