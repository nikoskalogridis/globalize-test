const path = require('path');
const webpack = require('webpack');
const GlobalizePlugin = require('globalize-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const production = process.env.NODE_ENV === 'production';

const entry = production
  ? {
    main: './index.js',
    vendor: [
			'globalize',
			'globalize/dist/globalize-runtime/number',
			'globalize/dist/globalize-runtime/currency',
			'globalize/dist/globalize-runtime/date',
			'globalize/dist/globalize-runtime/message',
			'globalize/dist/globalize-runtime/plural',
			'globalize/dist/globalize-runtime/relative-time',
			'globalize/dist/globalize-runtime/unit'
		]
  }
  : './index.js'
module.exports = {
  devtool: 'eval',
  entry,
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new GlobalizePlugin({
      production,
      developmentLocale: 'el',
      supportedLocales: ['en', 'el', 'de', 'fr', 'it'],
      output: 'i18n/[locale].[hash].js'
    }),
    new CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(vendor|node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'es2015',
                  {modules: false}
                ]
              ],
              babelrc: false
            }
          }
        ]
      }
    ]
  }
};
