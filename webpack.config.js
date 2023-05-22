const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
module.exports = {
  //配置入口文件
  entry: "./src/index.js",
  // 配置输出
  output: {
    filename: "bundle.js", //指定的文件名
    path: path.resolve(__dirname, "dist"), //指定输出目录
  },

  //添加模块,一些 loader (算是解析器吧,用于解析指定类型的文件)
  module: {
    rules: [
      {
        test: /\.css$/i, //指定要匹配的文件后缀(其实就是正则)
        use: ["style-loader", "css-loader"], //配置 css loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //加载图片文件
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //配置字体文件 loader
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i, //添加 csv 和 tsv 格式的 loader
        use: ["csv-loader"], //这里使用的 是 use,和之前的 css loader 一样,使用的是下载的包(大概是这个意思)
      },
      {
        test: /\.xml$/i, // 添加 xml loader
        use: ["xml-loader"],
      },
      // 使用自定义 parse 替换(增强)原始的 JSOn 解析器
      {
        // toml 文件解析
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        // yaml 文件解析
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        // josn5 文件解析
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
