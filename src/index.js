import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
import App from './App.js'
import Cart from "./cart";
import Order from "./order";
import Menu from "./menu";
import EditOrder from './edititem.js';
const myelem = <h1>hello react</h1>;

ReactDOM.render(
 

    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

