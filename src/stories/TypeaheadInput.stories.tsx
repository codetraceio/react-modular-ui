import React, { useCallback, useState } from "react";

import UiTypeaheadInput, { TypeaheadInputProps } from "../components/TypeaheadInput";
import "../../styles/src/default/typeahead-input.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "TypeaheadInput",
  component: UiTypeaheadInput,
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
  "Title 1",
  "Title 2",
];

export const TypeaheadInput = (props: TypeaheadInputProps) => {
  const [value, setValue] = useState(options[0]);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return <UiTypeaheadInput {...props} options={options} value={value} onChange={handleChange} />
};
