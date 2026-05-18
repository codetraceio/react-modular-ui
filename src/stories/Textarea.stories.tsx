import React, { useState } from "react";

import UiTextarea, { TextareaProps } from "../components/Textarea";
import "../../styles/src/default/textarea.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Textarea",
  component: UiTextarea,
  args: {
    size: 32,
    color: "primary",
    variant: "default",
    shape: "default",
    disabled: false,
    placeholder: "Write something...",
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

export const Textarea = (props: TextareaProps) => {
  const [value, setValue] = useState("");
  return <UiTextarea {...props} value={value} onChange={setValue} />;
};
