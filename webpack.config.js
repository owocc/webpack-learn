const path = require("path");

module.exports = {
  //配置入口文件
  entry: "./src/index.js",
  // 配置输出
  output: {
    filename: "main.js", //指定的文件名
    path: path.resolve(__dirname, "dist"), //指定输出目录
  },
};
