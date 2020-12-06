const { merge } = require('webpack-merge');
const common = require('./webpack.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const env = 'config/.env.alpha';
const dotenv = require('dotenv');
dotenv.config({ path: env });

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].[fullhash].bundle.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[id].[fullhash].css',
    }),
    new Dotenv({
      path: env,
    }),
    new CleanWebpackPlugin({ root: 'build' }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});
