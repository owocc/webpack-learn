const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  //配置入口文件
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map", //使用 source map
  // 配置开发服务器
  devServer: {
    static: "./dist", //指定静态资源地址
  },
  plugins: [
    new HTMLWebPackPlugin({
      title: "开发环境", //配置输出的 index.html 的 title
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), //指定输出目录
    clean: true, //开启清理 dist 目录文件(就是将旧的文件删除)
    publicPath: "/", //设置文件之间的引用路径
  },
  optimization: {
    runtimeChunk: "single", // 控制webpack 是否将运行代码拆分成一个单独的 chunk
  },
};
