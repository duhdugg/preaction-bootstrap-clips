let path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    Alert: './src/components/Alert.js',
    Boilerplate: './src/components/Boilerplate.js',
    Card: './src/components/Card.js',
    NavBar: './src/components/NavBar.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|\.test\.js)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
}
