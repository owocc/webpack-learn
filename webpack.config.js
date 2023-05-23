const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  //配置入口文件
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  plugins: [
    new HTMLWebPackPlugin({
      title: "管理输出", //配置输出的 index.html 的 title
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), //指定输出目录
    clean: true, //开启清理 dist 目录文件(就是将旧的文件删除)
  },
};
