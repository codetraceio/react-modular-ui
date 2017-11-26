import * as React from 'react';

import { IModifiers, getBlockName, getElementName} from '../services/componentService';

export interface IInputProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  shape?: string;

  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (value: string, event: React.MouseEvent<HTMLInputElement>) => void;
}

function getModifierObject(props: IInputProps): IModifiers {
  return {
    size: props.size,
    view: props.view,
    color: props.color,
    disabled: props.disabled,
    shape: props.shape,
  };
}

function renderLabel(props: IInputProps) {
  return props.label ? (
    <div className={getElementName('input', 'label')}>{props.label}</div>
  ) : null;
}

function onEvent(
  event: React.SyntheticEvent<HTMLInputElement>,
  callback: (value: string, event: React.SyntheticEvent<HTMLInputElement>) => void
) {
  if (typeof callback === 'function') {
    callback(event.currentTarget.value, event);
  }
}

function onKeyDownEvent(event: React.KeyboardEvent<HTMLInputElement>, props: IInputProps) {
  if (typeof props.onKeyDown === 'function') {
    props.onKeyDown(event.currentTarget.value, event);
  }
  if (event.isPropagationStopped()) {
    return;
  }
  if (
    typeof props.onSubmit === 'function' &&
    ['Enter', 'NumpadEnter'].indexOf(event.key) !== -1 && !event.shiftKey
  ) {
    props.onSubmit(event.currentTarget.value, event);
  }
}

export default function Input(props: IInputProps) {
  return (
    <div className={getBlockName('input', getModifierObject(props))}>
      {renderLabel(props)}
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onEvent(event, props.onChange)}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => onKeyDownEvent(event, props)}
        onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => onEvent(event, props.onKeyUp)}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => onEvent(event, props.onKeyPress)}
        onFocus={(event: React.FocusEvent<HTMLInputElement>) => onEvent(event, props.onFocus)}
        onBlur={(event: React.FocusEvent<HTMLInputElement>) => onEvent(event, props.onBlur)}
        onClick={(event: React.MouseEvent<HTMLInputElement>) => onEvent(event, props.onClick)}
      />
    </div>
  );
}
