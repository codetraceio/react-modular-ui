import React from "react";

import UiUpload, { UploadProps } from "../components/Upload";
import "../../styles/src/default/upload.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Upload",
  component: UiUpload,
  argTypes: {
    children: {
      defaultValue: "Upload",
      control: { type: "text" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Upload = (props: UploadProps) => {
  return <UiUpload {...props} />
};
