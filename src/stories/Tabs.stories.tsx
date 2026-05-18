import React, { useCallback, useState } from "react";

import UiTabs, { TabsProps } from "../components/Tabs";
import "../../styles/src/default/tabs.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Tabs",
  component: UiTabs,
  args: {
    size: 32,
    color: "primary",
    variant: "default",
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
    disabled: { control: { type: "boolean" } },
    options: { control: { type: "none" } },
    value: { control: { type: "none" } },
  },
  decorators: [ThemeDecorator],
};

const options = [
  { title: "Overview", value: "overview" },
  { title: "Activity", value: "activity" },
  { title: "Settings", value: "settings" },
  { title: "Billing", value: "billing" },
];

export const Tabs = (props: TabsProps) => {
  const [value, setValue] = useState(options[0].value);

  const handleChange = useCallback((next: string) => {
    setValue(next);
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
