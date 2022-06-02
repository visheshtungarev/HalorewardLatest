import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Axios from 'axios';
import { getConfig } from './network/networkmanager';


//interceptors
//request interceptor
Axios.interceptors.request.use(
  async config => {
    let token = await getConfig(config);

    return token;
  },
  error => {
    console.log("axios ", error);
    return Promise.reject(error);
  }
);
//response interceptor
Axios.interceptors.response.use(
  response => {
    //200 //201 ....

    return response;
  },
  error => {
    //4000,50000
    console.log("error", error.response);
    return Promise.reject({ ...error, message: error.response.data.message });
  }
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
