const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const isCssExtractPlugin = env.mode === 'production'
    ? { loader: MiniCssExtractPlugin.loader }
    : { loader: 'style-loader' };
  const isSourceMap = env.mode === 'production' ? false : 'inline-source-map';

  const config = {
    mode: env.mode,
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: isSourceMap,

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            isCssExtractPlugin,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                camelCase: true,
                modules: true,
                localIdentName: '[local]',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    devServer: {
      compress: true,
      open: true,
      port: 6289,
      historyApiFallback: true,
      hot: true,
      progress: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new CleanWebpackPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],

    resolve: {
      alias: {
        Components: resolve(__dirname, 'src/components/'),
        Containers: resolve(__dirname, 'src/containers/'),
        images: resolve(__dirname, 'src/images/'),
      },
    },
  };

  return config;
};
