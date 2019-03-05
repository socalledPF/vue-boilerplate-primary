const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueloaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: ['vue-style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
},
  plugins: [
    new VueloaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

