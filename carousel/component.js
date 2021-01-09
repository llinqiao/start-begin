import "./index.css";
class Component {
  constructor(imgList) {
    this.imgList = imgList;
    this.current = 0;
    this.init();
  }

  init() {
    const template = this.insetImageToTemplate();
    let tempNode = document.createElement("div");
    tempNode.innerHTML = template;
    const container = document.getElementById("root");
    container.appendChild(tempNode);
    this.handleCarousel(); // 监听计算
  }

  // 把图片插入模版字符串中
  insetImageToTemplate() {
    // ${this.imgList.map((item) => `<img src=${item}></img>`).join("")}
    let templateString = `
    <div class="carousel">
        <button class="left">左边</button>
        <div class="container">
            <div class="container-wrapper">
            ${this.imgList.map((item) => `<div class=img>${item}</div>`).join("")}
            </div>
        </div>
        <button class="right">右边</button>
    </div>`;
    return templateString;
  }

  // 切换图片
  handleCarousel() {
    let leftButton = document.getElementsByClassName("left")[0];
    let rightButton = document.getElementsByClassName("right")[0];
    let parentNode = document.getElementsByClassName("container-wrapper")[0];
    leftButton.addEventListener("click", () => {
      parentNode.style.transform = `translateX(${this.calcCurrent("left")}px)`;
    });
    rightButton.addEventListener("click", () => {
      parentNode.style.transform = `translateX(${this.calcCurrent("right")}px)`;
    });
  }

  // 计算当前是哪张图片
  calcCurrent(type) {
    let childrenImg = document.getElementsByClassName("img")[0];
    let imgWidth = +window
      .getComputedStyle(childrenImg, null)
      .getPropertyValue("width")
      .match(/\d*/)[0]; // 获取图片的宽度
    if (type === "left") {
      this.current =
        this.current === 0 ? this.imgList.length - 1 : this.current - 1;
    } else {
      this.current =
        this.current === this.imgList.length - 1 ? 0 : this.current + 1;
    }
    return -this.current * imgWidth;
  }
}
new Component([1, 2, 3]);


export default Component;
