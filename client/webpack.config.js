const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['sass-loader']
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 9999,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: '#source-map'
};
