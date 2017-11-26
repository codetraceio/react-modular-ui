import * as React from 'react';
import { IModifiers, getBlockName, getElementName } from '../services/componentService';

export interface IProgressProps {
  size?: string | number;
  color?: string;
  value: string | number;
}

function getModifierObject(props: IProgressProps): IModifiers {
  return {
    size: props.size,
    color: props.color
  };
}

function getValue(props: IProgressProps) {
  if (typeof props.value === 'string' || typeof props.value === 'number') {
    return props.value.toString();
  }
  return '0';
}

export default function Progress(props: IProgressProps) {
  return (
    <div className={getBlockName('progress', getModifierObject(props))}>
      <div
        className={getElementName('progress', 'line')}
        style={{width:`${getValue(props)}%`}}
      />
    </div>
  );
}
