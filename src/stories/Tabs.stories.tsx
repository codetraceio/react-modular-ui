import React, { useCallback, useState } from "react";

import UiTabs, { TabsProps } from "../components/Tabs";
import "../../styles/src/default/tabs.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Tabs",
  component: UiTabs,
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
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    options: {
      control: { type: "none" },
    },
    value: {
      control: { type: "none" },
    },
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
  },
  {
    title: "Title 3",
    value: "value3",
  },
  {
    title: "Title 4",
    value: "value4",
  },
  {
    title: "Title 5",
    value: "value5",
  },
];

export const Tabs = (props: TabsProps) => {
  const [value, setValue] = useState(options[0].value);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <UiTabs
      {...props}
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};
