import React from "react";
import Server from "./server";
import { BrowserRouter as Router,Routes, Route, Link,NavLink,useNavigate } from 'react-router-dom';
import Cart from "./cart";
import Order from "./order";
import Menu from "./menu";
import EditOrder from './edititem.js';
import Navbar from "./components/navbar";

import './App.css';
class Home extends React.Component{
    render(){
return (<header id="hero">
  <div class="svg-container">
<svg width="1324" height="242" viewBox="0 0 1324 242" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-wave">
<path  d="M-35 225.194V-59H1324C1324 -59 1083 44.0901 954 64.3897C825 84.6892 837.5 63.9916 683 84.6892C528.5 105.387 519.5 187.381 369 225.194C218.5 263.007 -35 225.194 -35 225.194Z" fill="url(#paint0_linear_39_56)" fill-opacity="0.78"/>
<defs>
<linearGradient id="paint0_linear_39_56" x1="602.755" y1="42.4735" x2="283.116" y2="210.114" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9D4D4"/>
<stop offset="1" stop-color="#F9DFD4"/>
</linearGradient>
</defs>
</svg>

</div>
       <div className="wrapper">
         <div id="intro">
 <h1>QC Boba</h1>
 <Link to="/menu" className='menuBtn'>Menu</Link>
 </div>
 <img id="bobaimg" src={require('./assets/bobapink.png')}></img>
 </div>
   </header>);
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
      
          
               
        <Navbar />
       
       <Routes>
       <Route path='/e-commerce/' element={<Home />}></Route>
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