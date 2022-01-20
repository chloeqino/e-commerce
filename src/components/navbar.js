import React from "react";
import Server from "../server";
import { BrowserRouter as Router,Routes, Route, Link,NavLink,useNavigate } from 'react-router-dom';
import Cart from "../cart";

import Menu from "../menu";
import App from "../App";
import {AiOutlineShoppingCart} from "react-icons/ai";
class Navbar extends React.Component{


    constructor(props){
        super(props)
        this.server = new Server();
    }
    render(){
        return (
            <nav id="main-nav">
            <div className='wrapper'>
                <div className="left">
          <NavLink to="/" className='nav-item'>Home</NavLink>
          <NavLink to="/menu" className='nav-item'>Menu</NavLink>
          </div>
          <div className="right">
          <NavLink to="/cart" className='nav-item' id="cart"><span id="cartnum">{this.server.CartItems.length}</span><AiOutlineShoppingCart id="carticon"/></NavLink>
          </div>
          </div>
          </nav>
        );
    }
}

export default Navbar;