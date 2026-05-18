import React, { useCallback, useState } from "react";

import UiTypeaheadInput, {
  TypeaheadInputProps,
} from "../components/TypeaheadInput";
import "../../styles/src/default/typeahead-input.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "TypeaheadInput",
  component: UiTypeaheadInput,
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

const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export const TypeaheadInput = (props: TypeaheadInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((next: string) => {
    setValue(next);
  }, []);

  return (
    <UiTypeaheadInput
      {...props}
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};
