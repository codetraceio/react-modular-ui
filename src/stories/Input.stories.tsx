import React from "react";

import UiInput, { InputProps } from "../components/Input";
import "../../styles/src/default/input.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Input",
  component: UiInput,
  argTypes: {
    size: {
      options: [24, 32, 48],
      control: { type: "select" },
      defaultValue: 24,
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    variant: {
      defaultValue: "default",
      options: ["default", "outline"],
      control: { type: "select" },
    },
    shape: {
      defaultValue: "default",
      options: ["default", "rectangle"],
      control: { type: "select" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Input = (props: InputProps) => {
  return <UiInput {...props} />
};
