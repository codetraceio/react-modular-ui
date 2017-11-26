import * as React from 'react';

import { IModifiers, getBlockName } from '../services/componentService';

export interface ILoadingProps {
  size?: string | number;
  color?: string;
}

function getModifierObject(props: ILoadingProps): IModifiers {
  return {
    size: props.size,
    color: props.color
  };
}

export default function Loading(props: ILoadingProps) {
  return (
    <div
      className={getBlockName('loading', getModifierObject(props))}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="40" stroke="none" fill="none" strokeWidth="10">
          <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="-502" />
          <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4" />
        </circle>
      </svg>
    </div>
  );
}
