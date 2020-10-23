var path = require('path');
var DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
  entry: './client/components/app.js',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
