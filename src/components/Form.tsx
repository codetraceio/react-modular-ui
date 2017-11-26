import * as React from 'react';

import { getBlockName } from '../services/componentService';

export interface IFormProps {
  action?: string;
  method?: string;
  target?: string;
  children?: JSX.Element;

  name?: string;
  onChange?: (name: string, value: string, event: React.ChangeEvent<HTMLFormElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form(props: IFormProps) {
  function onChange(event: React.ChangeEvent<HTMLFormElement>) {
    if (typeof props.onChange === 'function') {
      props.onChange(event.target.name, event.target.value, event);
    }
  }
  
  return (
    <form
      className={getBlockName('form')}
      action={props.action}
      method={props.method}
      name={props.name}
      target={props.target}
      onChange={onChange}
      onSubmit={props.onSubmit}
    >
      <input type="submit" style={{display: 'none'}} />
      {props.children}
    </form>
  );
}
