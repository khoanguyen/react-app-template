const path = require('path');

console.log(process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './compile/public/js/main.js',
    //vendor: ['react', 'react-dom', 'jquery']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public/js'),
    chunkFilename: 'vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};