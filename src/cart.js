import React from "react";
import Server from "./server";
 class Cart extends React.Component{
     constructor(props){
         super(props);
         this.server = new Server();
         this.state = {items:this.server.CartItems};
         console.log("item"+this.state.items);
     }
     renderCartItems(){
         if(this.state.items.length>0){
        return this.state.items.map((e)=>{
            return (<div id={e.id} className="cartitem">
                <h3>{this.server.Items[e.itemid].title}</h3>
                <p>Toppings:{e.toppings.map((e=>{
                    return <span className="topping">{e.name}</span>;
                }))}</p>
            </div>)
        });}
        return "nothing here";
     }
     emptyCart = () => {
        new Server().emptyCart();
        this.setState({items:this.server.CartItems});
     }
     render(){
         return (<div>
             <button onClick = {this.emptyCart}>Clear</button>
         <h1>Cart</h1>
         <div id="cartitems">
            {this.renderCartItems()}
            </div>
         </div>);
     }
 }
 export default Cart;