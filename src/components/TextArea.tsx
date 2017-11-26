import * as React from 'react';

import { IModifiers, getBlockName, getElementName } from '../services/componentService';

export interface ITextAreaProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  height?: string | number;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;

  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

function getModifierObject(props: ITextAreaProps): IModifiers {
  return {
    size: props.size,
    view: props.view,
    color: props.color,
    disabled: props.disabled
  };
}

function getStyle(props: ITextAreaProps) {
  const style: React.CSSProperties = {};
  if (props.height) {
    style.height = `${props.height.toString()}px`;
  }
  return style;
}

function onEvent(
  event: React.SyntheticEvent<HTMLTextAreaElement>,
  callback: (value: string, event: React.SyntheticEvent<HTMLTextAreaElement>) => void
) {
  if (typeof callback === 'function') {
    callback(event.currentTarget.value, event);
  }
}

function renderLabel(props: ITextAreaProps) {
  return props.label ? (
    <div className={getElementName('textarea', 'label')}>{props.label}</div>
  ) : null;
}

export default function TextArea(props: ITextAreaProps) {

  return (
    <div className={getBlockName('textarea', getModifierObject(props))}>
      {renderLabel(props)}
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        style={getStyle(props)}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onEvent(event, props.onChange)}
        onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => onEvent(event, props.onKeyDown)}
        onKeyUp={(event: React.KeyboardEvent<HTMLTextAreaElement>) => onEvent(event, props.onKeyUp)}
        onKeyPress={(event: React.KeyboardEvent<HTMLTextAreaElement>) => onEvent(event, props.onKeyPress)}
        onFocus={(event: React.FocusEvent<HTMLTextAreaElement>) => onEvent(event, props.onFocus)}
        onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => onEvent(event, props.onBlur)}
      />
    </div>
  );
}
