import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';

import robots from "./mockdata/robots.json"
import Robot from './components/Robot';
import ShoppingCard from './components/ShoppingCart'

interface Props {

}

interface State {
  robotGallery: any[];
}

class App extends React.Component<Props, State> {

  // * 生命周期第一阶段：初始化
  // 初始化组件 state
  constructor(props: Props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }

  // 在组件创建好dom元素后，挂载进页面的时候调用
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  // * 生命周期第二阶段：更新
  // 1. componentWillRecieveProps 在组件接收到一个新的 props (更新后)时被调用
  //    但建议使用 getDerivedStateFromProps(nextProps, prevState) 会在组件初始化及更新时都被调用
  // 2. shouldComponentUpdate(nextProps, nextState) 判断props和state变化控制组件更新 但默认的方法有可能被频繁调用造成资源浪费 可以通过比较this.state和nextState重新定义刷新的条件
  // 3. componentDidUpdate() 组件更新后被调用

  // * 生命周期第三阶段：销毁
  // componentWillUnmount() 组件销毁后调用 可以当作析构函数使用 可回收监听/事件 避免内存泄漏
  
  render(): React.ReactNode {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>机器人购物网站online版名字要长</h1>
        </div>
        <ShoppingCard />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r =>
            <Robot id={r.id} name={r.name} email={r.email} />)}
        </div>
      </div>
    );
  }

}

export default App;
