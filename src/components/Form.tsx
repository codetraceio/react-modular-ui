import React, { useCallback, PropsWithChildren, ChangeEvent, FormEvent } from "react";
import { className } from "../utils/className";

export interface FormProps {
  action?: string;
  method?: string;
  target?: string;

  name?: string;
  onChange?: (name: string, value: string, event: ChangeEvent<HTMLFormElement>) => void;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form(props: PropsWithChildren<FormProps>) {
  const { onChange } = props;

  const handleChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    if (typeof onChange === "function") {
      onChange(event.target.name, event.target.value, event);
    }
  }, [onChange]);

  return (
    <form
      className={className("form")}
      action={props.action}
      method={props.method}
      name={props.name}
      target={props.target}
      onChange={handleChange}
      onSubmit={props.onSubmit}
    >
      <input type="submit" style={{display: "none"}}/>
      {props.children}
    </form>
  );
}
