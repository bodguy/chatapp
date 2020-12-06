const { merge } = require('webpack-merge');
const common = require('./webpack.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const env = 'config/.env.local';
const dotenv = require('dotenv');
dotenv.config({ path: env });

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new Dotenv({
      path: env,
    }),
    new CleanWebpackPlugin({ root: 'build' }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    open: true,
    openPage: process.env.PUBLIC_URL.slice(1),
  },
});