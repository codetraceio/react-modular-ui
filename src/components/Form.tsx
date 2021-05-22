import * as React from "react";

import { getBlockName } from "../services/componentService";

export interface FormProps {
  action?: string;
  method?: string;
  target?: string;

  name?: string;
  onChange?: (name: string, value: string, event: React.ChangeEvent<HTMLFormElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default class Form extends React.PureComponent<FormProps, {}> {
  onChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(event.target.name, event.target.value, event);
    }
  };

  render() {
    return (
      <form
        className={getBlockName("form")}
        action={this.props.action}
        method={this.props.method}
        name={this.props.name}
        target={this.props.target}
        onChange={this.onChange}
        onSubmit={this.props.onSubmit}
      >
        <input type="submit" style={{display: "none"}}/>
        {this.props.children}
      </form>
    );
  }
}
