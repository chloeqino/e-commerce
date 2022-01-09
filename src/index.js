import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import App from './App.js'
import Cart from "./cart";
import Order from "./order";
import Menu from "./menu";
import EditOrder from './edititem.js';
const myelem = <h1>hello react</h1>;
ReactDOM.render(
  <Router>
    <nav>
      <div className='wrapper'>
    <Link to="/" className='nav-item'>Home</Link>
    <Link to="/menu" className='nav-item'>Menu</Link>
    <Link to="/cart" className='nav-item'>Cart</Link>
    </div>
    </nav>
    <Routes>
                 <Route exact path='/' element={<App />}></Route>
                 <Route exact path='cart' element={<Cart />}></Route>
                 <Route exact path='menu' element={<Menu />}></Route>
                 <Route path='orderdetail' element={<Order />}>
                   <Route path=":itemid" element={<Order />}></Route>
                 </Route>
                 <Route path='edititem' element={<EditOrder />}>
                   <Route path=":orderid" element={<EditOrder />}></Route>
                 </Route>
                
          </Routes>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

