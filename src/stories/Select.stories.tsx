import React from "react";

import UiSelect, { SelectProps } from "../components/Select";
import "../../styles/src/default/select.scss";
import "../../styles/src/default/icon.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Select",
  component: UiSelect,
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
    options: {
      control: { type: "none" },
    }
  },
  decorators: [ThemeDecorator],
};

const options = [
  {
    title: "Title 1",
    value: "value1",
  },
  {
    title: "Title 2",
    value: "value2",
  }
];

export const Select = (props: SelectProps) => {
  return <UiSelect {...props} options={options} />
};
