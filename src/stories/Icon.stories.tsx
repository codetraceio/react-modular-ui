import React from "react";

import UiIcon, { IconProps } from "../components/Icon";
import "../../styles/src/default/icon.scss";
import { ThemeDecorator } from "./ThemeDecorator";
import { setConfig } from "../services/configService";

export default {
  title: "Icon",
  component: UiIcon,
  argTypes: {
    icon: {
      options: ["checkbox", "radio", "pagination", "dropdown", "handle"],
      control: { type: "select" },
      defaultValue: "checkbox",
    },
    size: {
      options: [16, 24, 32],
      control: { type: "select" },
    },
    width: {
      options: [16, 24, 32],
      control: { type: "select" },
    },
    height: {
      options: [16, 24, 32],
      control: { type: "select" },
    },
    rotate: {
      options: [0, 90, 180, 270],
      control: { type: "select" },
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  decorators: [ThemeDecorator],
};

setConfig({
  icons: {
    "checkbox": <svg viewBox="0 0 24 24"><path d="M20.785 5.745l-2.346-1.85c-.074-.06-.164-.103-.266-.103-.103 0-.197.043-.27.107L9.37 14.865s-3.356-3.227-3.45-3.32c-.094-.095-.218-.253-.406-.253-.188 0-.273.132-.37.23-.074.077-1.27 1.334-1.86 1.958-.035.04-.056.06-.086.09-.05.073-.085.155-.085.244 0 .094.034.17.085.244l.12.11s5.953 5.72 6.05 5.818c.1.098.22.222.395.222.17 0 .312-.184.393-.265L20.802 6.267c.05-.073.085-.154.085-.248 0-.108-.042-.198-.102-.275z" /></svg>,
    "radio": <svg viewBox="0 0 24 24"><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>,
    "pagination": <svg viewBox="0 0 24 24"><path d="M5.875 11.998l8.214-8.553c.205-.212.2-.56-.01-.777l-1.47-1.503c-.21-.216-.555-.22-.762-.01L1.818 11.6c-.11.108-.158.255-.15.398-.003.147.046.29.15.397l10.03 10.45c.207.21.55.206.762-.01l1.47-1.503c.21-.217.215-.565.01-.777l-8.215-8.557z" /></svg>,
    "dropdown": <svg viewBox="0 0 12 6"><path d="M12 0L6 6 0 0" /></svg>,
    "handle": <svg viewBox="0 0 14 24"><path d="M3 3h3v3H3zM3 8h3v3H3zM3 13h3v3H3zM3 18h3v3H3zM8 3h3v3H8zM8 8h3v3H8zM8 13h3v3H8zM8 18h3v3H8z" /></svg>,
  },
});

export const Icon = (props: IconProps) => {
  return <UiIcon {...props} />
};
