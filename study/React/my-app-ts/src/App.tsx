import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';

import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCard from './components/ShoppingCart'

interface Props {

}

const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Set title
  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);

  // Setup robot gallery
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // show loading
      try {
        const responses = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
          console.log(e.message);
        }
      }
      setLoading(false); // cancel loading
    }
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>机器人购物网站online版名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCard />
      {error && <h3>Error: {error}</h3>}
      {loading ?
        (<h1>LOADING...</h1>) :
        (<div className={styles.robotList}>
          {robotGallery.map((r, index) => (
            index % 2 === 0 ? (
              <RobotDiscount id={r.id} name={r.name} email={r.email} />
            ) : (
              <Robot id={r.id} name={r.name} email={r.email} />
            )
          )
          )}
        </div>)}
    </div>
  );
}

export default App;
