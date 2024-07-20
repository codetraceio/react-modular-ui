import React from "react";

import UiButton, { ButtonProps } from "../components/Button";
import "../../styles/src/default/button.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Button",
  component: UiButton,
  argTypes: {
    size: {
      options: [32, 48, 56],
      control: { type: "select" },
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
    children: {
      defaultValue: "Button",
      control: { type: "text" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Button = (props: ButtonProps) => {
  return <UiButton {...props} data-something="aaa" />;
};
