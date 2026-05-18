module.exports = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc",
    "storybook-addon-sass-postcss"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {}
};
