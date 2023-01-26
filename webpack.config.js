const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    fallback: {
      process: require.resolve('process/browser'),
      buffer: require.resolve('buffer'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|jpg|svg|gif)?$/,
        use: 'file-loader?name=./assets/images/[name].[ext]',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/favicon.ico', to: '' },
        { from: './src/manifest.json', to: '' },
        { from: './src/logo192.png', to: '' },
      ],
    }),

  ],
};
