import React from "react";
import { Story as StoryType } from "@storybook/react";
import { ThemeContext } from "../components/ThemeContext";

const themeMap: Record<string, string> = {
  "#fafafa": "light",
  "#0a0a0a": "dark",
  default: "light",
};

export function ThemeDecorator(
  Story: StoryType,
  props: {
    globals: {
      backgrounds: {
        value: string;
      };
    };
  },
) {
  const backgroundColor = props.globals?.backgrounds?.value || "#ffffff";

  return (
    <ThemeContext.Provider
      value={themeMap[backgroundColor] || themeMap.default}
    >
      <Story />
    </ThemeContext.Provider>
  );
}
