import styles from './index.css';
import React from 'react';
import first from '../../image/index-active.png';
import second from '../../image/me-active.png';
import third from '../../image/log-active.png';
import { right } from 'inquirer/lib/utils/readline';

export default class WW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [first, second, third],
      currentIndex: 0,
      tarnsValue: {},
    };
  }

  calcTranslate = (type) => {
    const { currentIndex } = this.state;
    if (type === 'left' && currentIndex === 0) {
      console.log('搞什么啊');
      this.setState({
        currentIndex: 2,
        tarnsValue: {
          transform: `translateX(-400px)`,
        },
      });
    } else if (type === 'left') {
      this.setState({
        currentIndex: currentIndex - 1,
        tarnsValue: {
          transform: `translateX(${-200 * (currentIndex - 1)}px)`,
        },
      });
    } else if (type === 'right' && currentIndex === 2) {
      this.setState({
        currentIndex: 0,
        tarnsValue: {},
      });
    } else {
      this.setState({
        currentIndex: currentIndex + 1,
        tarnsValue: {
          transform: `translateX(${-200 * (currentIndex + 1)}px)`,
        },
      });
    }
  };
  render() {
    const { arr, currentIndex, tarnsValue } = this.state;
    return (
      <div className={styles.pages}>
        <button
          onClick={() => {
            this.calcTranslate('left');
          }}
        >
          左边
        </button>
        <div className={styles.container}>
          <div className={styles.container_wrapper} style={tarnsValue}>
            {arr.map((item) => {
              return <img src={item} className={styles.container_img} />;
            })}
          </div>
        </div>

        <div className={styles.view}></div>
        <button onClick={() => this.calcTranslate('right')}>右边</button>
      </div>
    );
  }
}
