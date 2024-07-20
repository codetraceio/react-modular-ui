import React from "react";

import UiPagination, { PaginationProps } from "../components/Pagination";
import "../../styles/src/default/pagination.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Pagination",
  component: UiPagination,
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
    count: {
      control: { type: "number" },
      defaultValue: 100,
    },
    limit: {
      control: { type: "number" },
      defaultValue: 10,
    },
    offset: {
      control: { type: "number" },
      defaultValue: 10,
    },
  },
  decorators: [ThemeDecorator],
};

export const Pagination = (props: PaginationProps) => {
  return <UiPagination {...props} />;
};
