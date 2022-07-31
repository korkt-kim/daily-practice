const path = require('path');
const webpack = require('webpack');
const ReactReloadPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  name: 'asdf',
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: ['./index'],
  module: {
    // entry 파일에서의 읽은 css, js, html, assets 등이 output으로 산출될때 중간에서 변환을 담당하는 module
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@emotion/babel-preset-css-prop',
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
            ],
            plugins: ['@emotion/babel-plugin', isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
      },
    ],
  },
  plugins: [isDevelopment && new webpack.HotModuleReplacementPlugin(), isDevelopment && new ReactReloadPlugin()].filter(Boolean),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist',
  },
  devServer: {
    static: { directory: path.join(__dirname) },
    hot: true,
    historyApiFallback: true,
  },
};
