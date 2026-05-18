import React, { useState } from "react";

import UiToggle, { ToggleProps } from "../components/Toggle";
import "../../styles/src/default/toggle.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Toggle",
  component: UiToggle,
  args: {
    size: 24,
    color: "primary",
    variant: "default",
    disabled: false,
    children: "Toggle",
  },
  argTypes: {
    size: { options: [16, 24, 32], control: { type: "select" } },
    color: {
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    variant: {
      options: ["default", "outline"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
    children: { control: { type: "text" } },
  },
  decorators: [ThemeDecorator],
};

export const Toggle = (props: ToggleProps) => {
  const [checked, setChecked] = useState(false);
  return <UiToggle {...props} checked={checked} onChange={setChecked} />;
};
