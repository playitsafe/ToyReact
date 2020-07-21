module.exports = {
  entry: {
    main: './main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],// 也可以放babelrc
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                // pragma是文本替换，不加的话变成
                // React.createElement(MyComponent)
                {pragma: "ToyReact.createElement"}
              ]
            ]
          }
        }
      }
    ]
  },

  mode: "development",

  optimization: {
    minimize: false
  },

}