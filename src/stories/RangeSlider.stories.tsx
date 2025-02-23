import React, { useState } from "react";

import UiRangeSlider, { RangeSliderProps } from "../components/RangeSlider";
import "../../styles/src/default/slider.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "RangeSlider",
  component: UiRangeSlider,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  decorators: [ThemeDecorator],
};

export const RangeSlider = (props: RangeSliderProps) => {
  const [value, setValue] = useState<[number, number]>([0, 100]);
  return (
    <UiRangeSlider {...props} value={value} total={100} onChange={setValue} />
  );
};
