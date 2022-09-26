const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '../dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // CSS-loader只负责加载CSS文件
        // style-loader只负责将样式添加到DOM中
        // 当使用多个loader时，从右往左
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串的形式.
              // 当加载的图片大于limit时，需要使用file-loader模块进行加载. 
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}