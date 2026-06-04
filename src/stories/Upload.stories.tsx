import React from "react";

import UiUpload, { UploadProps } from "../components/Upload";
import "../../styles/src/default/upload.scss";
import "../../styles/src/default/icon.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Upload",
  component: UiUpload,
  args: {
    multiple: false,
    disabled: false,
  },
  argTypes: {
    multiple: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
  decorators: [ThemeDecorator],
};

export const Upload = (props: UploadProps) => {
  return (
    <div style={{ padding: "24px", maxWidth: "480px" }}>
      <UiUpload {...props}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{ fontSize: "15px", fontWeight: 500, marginBottom: "4px" }}
          >
            Drop files here
          </div>
          <div style={{ fontSize: "13px", color: "#71717a" }}>
            or click to browse
          </div>
        </div>
      </UiUpload>
    </div>
  );
};
