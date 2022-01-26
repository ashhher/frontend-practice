import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/configs'
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.headers['x-icode'] = '7047F853AA569426';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
