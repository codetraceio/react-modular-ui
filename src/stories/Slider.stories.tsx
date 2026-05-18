import React, { useState } from "react";

import UiSlider, { SliderProps } from "../components/Slider";
import "../../styles/src/default/slider.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Slider",
  component: UiSlider,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: { control: { type: "boolean" } },
  },
  decorators: [ThemeDecorator],
};

export const Slider = (props: SliderProps) => {
  const [value, setValue] = useState(40);
  return (
    <div style={{ padding: "32px", maxWidth: "480px" }}>
      <UiSlider {...props} value={value} total={100} onChange={setValue} />
      <div style={{ marginTop: "16px", color: "#71717a", fontSize: "13px" }}>
        Value: {value}
      </div>
    </div>
  );
};
