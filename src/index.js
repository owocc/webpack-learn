import _ from "lodash";
import printMe from "./print";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button"); //创建按钮

  element.innerHTML = _.join(["hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;//给按钮添加点击事件

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
