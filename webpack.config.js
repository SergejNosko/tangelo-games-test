const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]__[hash:base64:6]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: '/',
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ]
}

module.exports = config
