import React from "react";

import UiTextarea, { TextareaProps } from "../components/Textarea";
import "../../styles/src/default/textarea.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Textarea",
  component: UiTextarea,
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

export const Textarea = (props: TextareaProps) => {
  return <UiTextarea {...props} />
};
