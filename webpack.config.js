var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackDevServer = require("webpack-dev-server");
var url = "http://0.0.0.0:3000";


var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  path.resolve(APP_DIR, 'index.jsx') // Your appʼs entry point
],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['react-hot','babel']
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }, 
    ],
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      }
    ]
      
  },
 plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin()
 ],
devServer: {
    contentBase: path.resolve(__dirname, 'src/client/'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: url.match(/\/\/([\w.-]+)/)[1],
    port: url.match(/:(\d{4})\/?/)[1]
}
    
    
};

module.exports = config;
