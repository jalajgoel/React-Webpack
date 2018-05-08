var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src/client/app');
var config = {
  entry: APP_DIR + '/index.js',
  output: {
    /*
      [hash] is used here for concatinating 
      a hash value in bundle.js file for hot reloding
    */
    filename: 'bundle.[hash].js',
  },
  devServer: {
    host: 'localhost',
    port: 1994,
  }, 
  
  //Using babel-loader while bundeling files.
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
    ]
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: 'src/client/public/index.html'
   })
 ],
};

module.exports = config;
