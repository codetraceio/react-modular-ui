import React, { useState } from "react";

import UiSlider, { SliderProps } from "../components/Slider";
import "../../styles/src/default/slider.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Slider",
  component: UiSlider,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Slider = (props: SliderProps) => {
  const [value, setValue] = useState(0);
  return <UiSlider {...props} value={value} total={100} onChange={setValue} />;
};
