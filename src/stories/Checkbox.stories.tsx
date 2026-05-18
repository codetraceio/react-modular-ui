import React, { useCallback, useState } from "react";

import UiCheckbox, { CheckboxProps } from "../components/Checkbox";
import "../../styles/src/default/checkbox.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Checkbox",
  component: UiCheckbox,
  args: {
    size: 24,
    color: "primary",
    variant: "default",
    disabled: false,
    children: "Checkbox",
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
    checked: { control: { type: "none" } },
    children: { control: { type: "text" } },
  },
  decorators: [ThemeDecorator],
};

export const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback((value: boolean) => {
    setChecked(value);
  }, []);

  return <UiCheckbox {...props} checked={checked} onChange={handleChange} />;
};
