import React, { useState } from "react";

import UiInput, { InputProps } from "../components/Input";
import "../../styles/src/default/input.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Input",
  component: UiInput,
  args: {
    size: 32,
    color: "primary",
    variant: "default",
    shape: "default",
    disabled: false,
    placeholder: "Enter text...",
  },
  argTypes: {
    size: { options: [24, 32, 48], control: { type: "select" } },
    color: {
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    variant: {
      options: ["default", "outline"],
      control: { type: "select" },
    },
    shape: {
      options: ["default", "rectangle"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
    placeholder: { control: { type: "text" } },
  },
  decorators: [ThemeDecorator],
};

export const Input = (props: InputProps) => {
  const [value, setValue] = useState("");
  return <UiInput {...props} value={value} onChange={setValue} />;
};
