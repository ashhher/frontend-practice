import React from 'react';
import styles from './App.module.css';
import { HomePage } from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
