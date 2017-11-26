import * as React from 'react';

import settings from '../services/settingService';

import { IModifiers, getBlockName, getElementName } from '../services/componentService';

export interface ICheckboxProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;
  children?: JSX.Element | JSX.Element[] | string;

  onChange?: (checked: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

import Icon from './Icon';

function getModifierObject(props: ICheckboxProps): IModifiers {
  return {
    size: props.size,
    view: props.view,
    color: props.color,
    disabled: props.disabled
  };
}

function isChecked(props: ICheckboxProps): boolean {
  return props.checked || false;
}

export default function Button(props: ICheckboxProps) {
  function onChange(e: React.MouseEvent<HTMLDivElement>) {
    if (typeof props.onChange === 'function') {
      props.onChange(!props.checked, e);
    }
  }

  if (settings.isBackend()) {
    return (
      <div
        className={getBlockName('checkbox', getModifierObject(props))}
        role="checkbox"
        tabIndex={1}
        data-name={props.name}
        aria-checked={isChecked(props).toString()}
      >
        <div>
          <div
            className={getElementName('checkbox', 'icon', {
              checked: true
            })}
          >
            <Icon size={props.size} name='checkbox-checked' />
          </div>
          <div
            className={getElementName('checkbox', 'icon', {
              notChecked: true
            })}
          >
            <Icon size={props.size} name='checkbox' />
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    );
  }

  return (
    <div
      className={getBlockName('checkbox', getModifierObject(props))}
      data-name={props.name}
      aria-checked={isChecked(props).toString()}
      tabIndex={1}
      onClick={onChange}
    >
      <div className={getElementName('checkbox', 'icon')}>
        {props.checked ? (
          <Icon
            size={props.size}
            name="checkbox"
          />
        ) : null}
      </div>
      <div>{props.children}</div>
    </div>
  );
}
