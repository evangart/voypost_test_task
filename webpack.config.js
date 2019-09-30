const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-spread",
              "@babel/plugin-transform-arrow-functions"
            ]
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-spread",
              "@babel/plugin-transform-arrow-functions",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
    ]
  },
}