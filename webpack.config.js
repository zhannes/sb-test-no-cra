const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require("path");
const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
  'scss'
];

module.exports = {
  mode: 'development',
  devServer: { port: '8083' },
  resolve: {
    extensions: moduleFileExtensions.map(ext => `.${ext}`),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new ModuleFederationPlugin(
      {
        name: 'Team1',
        filename: 'remoteEntry.js',
  	    remotes: {
          common_ui: 'common_ui@http://localhost:8081/remoteEntry.js',
        },
      }
    ),
  ]
};
