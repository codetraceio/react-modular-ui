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

export default function Form({
  action,
  method,
  name,
  target,
  onChange,
  onSubmit,
  ...props
}: PropsWithChildren<FormProps>) {

  const handleChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    if (typeof onChange === "function") {
      onChange(event.target.name, event.target.value, event);
    }
  }, [onChange]);

  return (
    <form
      className={className("form")}
      action={action}
      method={method}
      name={name}
      target={target}
      onChange={handleChange}
      onSubmit={onSubmit}
      {...props}
    >
      <input type="submit" style={{display: "none"}}/>
      {props.children}
    </form>
  );
}
