var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/App.tsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {loader: 'awesome-typescript-loader'},
        include: SRC_DIR,
      },
      {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
    ],
  },
  devtool: 'source-map',
};
