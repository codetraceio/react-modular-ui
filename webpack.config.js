module.exports = {
  entry: {
    'index': './dist/example/client/index.js',
    'static': './dist/example/client/static.js'
  },
  output: {
    filename: 'dist/example/build/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
  },
  devtool: 'inline-source-map',
  mode: 'production'
};
