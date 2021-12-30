import React from "react";
import Server from "./server";
 class Cart extends React.Component{
     constructor(props){
         super(props);
         this.items = new Server().CartItems;
         console.log(this.items);
     }
     render(){
         return <h1>Cart</h1>
     }
 }
 export default Cart;