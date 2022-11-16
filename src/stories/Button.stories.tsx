import React from "react";
import { ComponentMeta } from "@storybook/react";

import UiButton, { ButtonProps } from "../components/Button";
import "../../styles/src/default/button.scss";

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
      defaultValue: "contained",
      options: ["contained", "outlined"],
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
} as ComponentMeta<typeof UiButton>;

export const Button = (props: ButtonProps) => {
  return <UiButton {...props} />
};
