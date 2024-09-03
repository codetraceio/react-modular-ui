import React, { useState } from "react";

import UiToggle, { ToggleProps } from "../components/Toggle";
import "../../styles/src/default/toggle.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Toggle",
  component: UiToggle,
  argTypes: {
    size: {
      options: [16, 24, 32],
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
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    children: {
      defaultValue: "Toggle",
      control: { type: "text" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Toggle = (props: ToggleProps) => {
  const [checked, setChecked] = useState(false);
  return <UiToggle {...props} checked={checked} onChange={setChecked} />;
};
