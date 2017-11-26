import * as React from 'react';

import settings from '../services/settingService';

import {IModifiers, getBlockName, getElementName} from '../services/componentService';
import Icon from './Icon';

export interface IRadioProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  value?: string | number | boolean;
  checked?: boolean;
  placeholder?: string;
  children?: JSX.Element | JSX.Element[] | string;

  onChange?: (value: string | number | boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

function getModifierObject(props: IRadioProps): IModifiers {
  return {
    size: props.size,
    view: props.view,
    color: props.color,
    disabled: props.disabled
  };
}

export default function Radio(props: IRadioProps) {

  function onChange(e: React.MouseEvent<HTMLDivElement>) {
    if (typeof props.onChange === 'function') {
      props.onChange(props.value, e);
    }
  }

  if (settings.isBackend()) {
    return (
      <div
        className={getBlockName('radio', getModifierObject(props))}
        role="radio"
        tabIndex={1}
        data-name={props.name}
        aria-checked={props.checked.toString()}
      >
        <div>
          <div
            className={getElementName('radio', 'icon', {
              notChecked: true
            })}
          >

          </div>
          <div
            className={getElementName('radio', 'icon', {
              checked: true
            })}
          >
            <Icon size={props.size} name='radio' />
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    );
  }

  return (
    <div
      className={getBlockName('radio', getModifierObject(props))}
      data-name={props.name}
      tabIndex={1}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => onChange(e)}
    >
      <div className={getElementName('radio', 'icon')}>
        {props.checked ? (
          <Icon
            size={props.size}
            name="radio"
          />
        ) : null}
      </div>
      <div>{props.children}</div>
    </div>
  );
}