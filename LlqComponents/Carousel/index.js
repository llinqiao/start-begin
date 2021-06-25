import BasicClass from "../components/BasicClass";
import "./index.css";
class Carousel extends BasicClass {
  constructor(props) {
    super(props);
    this.data = {
      current: 0,
      imgList :[1,2,3]
    };
  
    this.calcCurrent = this.calcCurrent.bind(this);
    this.handleCarousel = this.handleCarousel.bind(this);
   
  }

  componentDidMount() {
    this.handleCarousel()
  }

  componentWillUnmount() {
    // let leftButton = document.getElementsByClassName("left")[0];
    // let rightButton = document.getElementsByClassName("right")[0];
    
    // leftButton .removeEventListener("click", this.onClick);
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
      this.data.current =
        this.data.current === 0 ? this.data.imgList.length - 1 : this.data.current - 1;
    } else {
      this.data.current =
        this.data.current === this.data.imgList.length - 1 ? 0 : this.data.current + 1;
    }
    return -this.data.current * imgWidth;
  }

  render() {
    return `
    <div class="carousel">
    <button class="left">左边</button>
    <div class="container">
        <div class="container-wrapper">
        ${this.data.imgList
          .map((item) => `<div class=img>${item}</div>`)
          .join("")}
        </div>
    </div>
    <button class="right">右边</button>
    </div>
        `;
  }
}

const carousel = new Carousel({
  container: document.querySelector("#root"),
 
});
carousel.mount();
