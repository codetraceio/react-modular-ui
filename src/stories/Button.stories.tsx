import React from "react";

import UiButton, { ButtonProps } from "../components/Button";
import "../../styles/src/default/button.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Button",
  component: UiButton,
  args: {
    size: 32,
    color: "primary",
    variant: "default",
    shape: "default",
    disabled: false,
    children: "Button",
  },
  argTypes: {
    size: { options: [32, 48, 56], control: { type: "select" } },
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
    children: { control: { type: "text" } },
  },
  decorators: [ThemeDecorator],
};

export const Button = (props: ButtonProps) => {
  return <UiButton {...props} />;
};
