import React from "react";

import UiLoading, { LoadingProps } from "../components/Loading";
import "../../styles/src/default/loading.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Loading",
  component: UiLoading,
  argTypes: {
    size: {
      options: [16, 24, 32, 48],
      control: { type: "select" },
      defaultValue: 24,
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Loading = (props: LoadingProps) => {
  return <UiLoading {...props} />
};
