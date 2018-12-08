module.exports = {
  entry: {
    "index": "./src/example/client/index.tsx",
    "static": "./src/example/client/static.ts"
  },
  output: {
    filename: "./example/build/[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      }],
    }],
  },
  devtool: "inline-source-map",
  mode: "production"
};
