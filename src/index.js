import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var sobj = {
  rno: 1001,
  sname: "Nathiya",
  mark: [12,10,13,14],
  rank: 1,
  grade: "super",
  location: "Velusamypuram",
  issingle:true,
  Phonenum:897654321,
  hobbies:{
    hob1:"dance",
    hob2:"singing",
    hob3:"reading"
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
