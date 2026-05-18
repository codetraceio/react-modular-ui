import React from "react";
import configService from "../src/services/configService";

configService.setConfig({
  icons: {
    checkbox: (
      <svg viewBox="0 0 24 24">
        <path d="M20.285 6.708l-11.07 11.07-5.5-5.5 1.414-1.414 4.086 4.086 9.656-9.656z" />
      </svg>
    ),
    radio: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
    pagination: (
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    ),
    dropdown: (
      <svg viewBox="0 0 12 6">
        <path d="M12 0L6 6 0 0" />
      </svg>
    ),
    handle: (
      <svg viewBox="0 0 14 24">
        <path d="M3 3h3v3H3zM3 8h3v3H3zM3 13h3v3H3zM3 18h3v3H3zM8 3h3v3H8zM8 8h3v3H8zM8 13h3v3H8zM8 18h3v3H8z" />
      </svg>
    ),
    close: (
      <svg viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    ),
    upload: (
      <svg viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    ),
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#fafafa" },
      { name: "dark", value: "#0a0a0a" },
    ],
  },
};
