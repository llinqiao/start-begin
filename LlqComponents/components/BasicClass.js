class BasicClass {
  constructor(options) {
    if (!options.container) {
      // 组件放的容器
      throw new Error("no container");
    }
    this.container = options.container;
  }

  // 处理数据setState
  setState(data) {
    this.data = {
      ...this.data,
      ...data,
    };
    // 公开 API
    this._render();
    this.componentDidUpdate();
  }

  // 初始处理,调用render和外部的componentDidMount
  mount() {
    this._render();
    this.componentDidMount();
  }

  componentDidMount() {} // 子类覆盖

  componentDidUpdate() {} // 子类覆盖

  _render() {
    // 内部方法
    const html = this.render();
    this.container.innerHTML = html;
    this.componentWillUnmount();
    this.componentDidMount();
  }

  render() {
    // 子类覆盖
    return "";
  }
}

export default BasicClass;

//   class Count extends Component {
//     constructor(options) {
//       super(options);
//       this.data = {
//         counter: 0,
//       };
//       this.onClick = this.onClick.bind(this);
//     }

//     onClick() {
//       this.setData({ counter: this.data.counter + 1 });
//     };

//     addEvent() {
//       const btn = document.querySelector("#btn");
//       btn.addEventListener("click", this.onClick);
//     }

//     removeEvent() {
//       const btn = document.querySelector("#btn");
//       btn.removeEventListener("click", this.onClick);
//     }

//     render() {
//       return `
//         <div>
//           <div id="btn">Click Me</div>
//           <div>${this.data.counter}</div>
//         </div>
//         `;
//     }
//   }

//   const Count = new Count({
//     container: document.querySelector("#root"),
//   });
//   Count.mount()
