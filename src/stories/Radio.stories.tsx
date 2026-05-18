import React, { useState } from "react";

import UiRadio, { RadioProps } from "../components/Radio";
import "../../styles/src/default/radio.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Radio",
  component: UiRadio,
  args: {
    size: 24,
    color: "primary",
    variant: "default",
    disabled: false,
    children: "Radio",
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

export const Radio = (props: RadioProps) => {
  const [selected, setSelected] = useState("");
  return (
    <UiRadio
      {...props}
      value="radio1"
      checked={selected === "radio1"}
      onChange={setSelected}
    />
  );
};
