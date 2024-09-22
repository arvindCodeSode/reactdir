import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {User, Teacher} from './User';
// import School from './School';
import reportWebVitals from './reportWebVitals';
// import TestClick from './TestClick';
// import StateC from "./cls/StateC";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <User /> */}
    {/* <Teacher /> */}
    {/* <School /> */}
    {/* <TestClick /> */}
    {/* <StateC></StateC> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
