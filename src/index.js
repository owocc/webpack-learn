import _ from "lodash";
import "./style.css"; // 导入 css 文件
import agz from "./agz.png"; // 导入爱国者图片
import Data from "./data/data.xml"; // 导入 xml 文件
import Notes from "./data/data.csv"; // 导入 csv 文件数据
import toml from "./data/data.toml"; // 导入 toml 文件
import yaml from "./data/data.yaml"; //导入 yaml 文件
import json5 from "./data/data.json5"; //导入 json5 文件
function component() {
  const element = document.createElement("div");

  //lodash
  element.innerHTML = _.join(["hello", "webpack"], " ");
  element.classList.add("hello"); //添加一个类名

  //创建一个img标签,然后将它添加到已经创建了的 div 里
  const agzImg = new Image();
  agzImg.src = agz;

  //将两个文件输出一下
  console.log(Data); //输出导入的 xml 文件
  console.log(Notes); //输出导入的 csv 文件
  console.log(toml); //输出导入 toml 文件
  console.log(yaml); //输出导入的 yaml 文件
  console.log(json5); //输出导入的 json5 文件

  element.appendChild(agzImg); //将图片添加到div中
  return element;
}

document.body.appendChild(component());
