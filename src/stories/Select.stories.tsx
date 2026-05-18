import React, { useCallback, useState } from "react";

import UiSelect, { SelectProps } from "../components/Select";
import "../../styles/src/default/select.scss";
import "../../styles/src/default/icon.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Select",
  component: UiSelect,
  args: {
    size: 32,
    color: "primary",
    variant: "default",
    shape: "default",
    disabled: false,
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
    options: { control: { type: "none" } },
  },
  decorators: [ThemeDecorator],
};

const options = [
  { title: "Option one", value: "value1" },
  { title: "Option two", value: "value2" },
  { title: "Option three", value: "value3" },
];

export const Select = (props: SelectProps) => {
  const [value, setValue] = useState("value1");

  const handleChange = useCallback((next: string) => {
    setValue(next);
  }, []);

  return (
    <UiSelect
      {...props}
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};
