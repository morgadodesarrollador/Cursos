import React from 'react';
import './index.css';
//permite a React acceder al DOM. Hace renderizacione en el HTML
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
//const divRoot = document.querySelector('#root');
//ReactDOM.render(<App/>, divRoot);
ReactDOM.render(
  <React.StrictMode>
    <App saludo="hola" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
