import React from "react";
import Server from "./server";
import { BrowserRouter as Router,Routes, Route, Link,NavLink,useNavigate } from 'react-router-dom';
import Cart from "./cart";
import Order from "./order";
import Menu from "./menu";
import EditOrder from './edititem.js';

import './App.css';
class Home extends React.Component{
    render(){
return (<section id="hero">
       <div className="wrapper">
 <h1>Boba</h1>
 <Link to="/menu" className='menuBtn'>Menu</Link>
 </div>
   </section>);
    }
}
class App extends React.Component{
   
    componentDidMount() {
        console.log(Object.keys(this.server.items));
    }
    constructor(props){
        super(props);
        this.server = new Server();
        this.state = {"citemnum":this.server.CartItems.length};
    }
    updateCartNum =()=>{
        this.setState({"citemnum":this.server.CartItems.length});
    }
    render(){
       return(
        <div className="container">
      
          
                <nav>
      <div className='wrapper'>
    <NavLink to="/" className='nav-item'>Home</NavLink>
    <NavLink to={{
   pathname:'/menu',
   state: {updateNum:this.updateCartNum}  
 }} className='nav-item'>Menu</NavLink>
    <NavLink to="/cart" className='nav-item'>Cart<span id="cartnum">{this.server.CartItems.length}</span></NavLink>
    </div>
    </nav>
        
       
       <Routes>
       <Route exact path='/' element={<Home />}></Route>
                 <Route exact path='/cart' element={<Cart />}></Route>
                 <Route path='/menu' element={<Menu />}></Route>
                 <Route path='/orderdetail' element={<Order />}>
                   <Route path=":itemid" element={<Order />}></Route>
                 </Route>
                 <Route path='/edititem' element={<EditOrder />}>
                   <Route path=":orderid" element={<EditOrder />}></Route>
                 </Route>
                
          </Routes>
       )
       
   </div>
       );
}
}

export default App; 