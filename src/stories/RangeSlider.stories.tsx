import React, { useState } from "react";

import UiRangeSlider, { RangeSliderProps } from "../components/RangeSlider";
import "../../styles/src/default/slider.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "RangeSlider",
  component: UiRangeSlider,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: { control: { type: "boolean" } },
  },
  decorators: [ThemeDecorator],
};

export const RangeSlider = (props: RangeSliderProps) => {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return (
    <div style={{ padding: "32px", maxWidth: "480px" }}>
      <UiRangeSlider {...props} value={value} total={100} onChange={setValue} />
      <div style={{ marginTop: "16px", color: "#71717a", fontSize: "13px" }}>
        Range: {value[0]} – {value[1]}
      </div>
    </div>
  );
};
