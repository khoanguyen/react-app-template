const path = require("path");

console.log(process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    main: "./src/public/ts/main.tsx"
    //"css/main": './src/public/less/main.less'
    //vendor: ['react', 'react-dom', 'jquery']
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public/js"),
    chunkFilename: "vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
