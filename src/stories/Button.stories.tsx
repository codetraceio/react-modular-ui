import React from "react";
import { ComponentMeta } from "@storybook/react";

import UiButton, { ButtonProps } from "../components/Button";
import "../../styles/dist/default/index.css";

export default {
  title: "Button",
  component: UiButton,
  argTypes: {
    size: {
      options: [32, 48, 56],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "warning", "danger", "success"],
      control: { type: "select" },
    },
    variant: {
      options: ["outlined", "contained"],
      control: { type: "select" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof UiButton>;

export const Button = (props: ButtonProps) => {
  return <UiButton {...props} />
};
