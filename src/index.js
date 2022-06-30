import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //here we import App.js file
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //by getting root element we will update it from index.js file.
root.render(
  <React.StrictMode>
    <App />       { /*We can see we render our App file here and it will update data of App file in root id div*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
