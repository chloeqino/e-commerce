import React from "react";
import { Link } from "react-router-dom";
import Server from "./server";
import EditOrder from './edititem.js';
 class Cart extends React.Component{
     constructor(props){
         super(props);
         this.server = new Server();
         this.state = {items:this.server.CartItems};
         console.log("item"+this.state.items);
         this.cartitems = React.createRef();
         this.cartnum = null;
        
     }
     componentDidMount(){
        this.cartnum = document.getElementById("cartnum").textContent;
        console.log(this.cartnum);
     }
     deleteitem(i){
        console.log("index"+i);
        console.log(this.cartitems.current);
        this.server.deleteCartItem(i);
        this.setState({items:this.server.CartItems});
        //this.cartnum = this.state.items.length;
        document.getElementById("cartnum").textContent = new Server().CartItems.length;
     }
     renderCartItems(){
         if(this.state.items.length>0){
        return this.state.items.map((e,i)=>{
            let editurl = '/edititem/'+e.id;
            return (<div id={e.id} className="cartitem" ref={this.cartitems}>
                <h3>{this.server.Items[e.itemid].title}</h3>
                <p>Toppings:{e.toppings.map((e=>{
                    return <span className="topping" key={e.id}>{e.name}</span>;
                }))}</p>
                <Link to= {editurl}>edit</Link>
                <button onClick={()=>this.deleteitem(e.id)}>delete</button>
            </div>)
        });}
        return (<div>nothing here
            <br/>
            <Link to="/menu" className='nav-item'>Explore the menu</Link>
        </div>
            
            );
     }
     emptyCart = () => {
        new Server().emptyCart();
        this.setState({items:this.server.CartItems});
        document.getElementById("cartnum").textContent = new Server().CartItems.length;
     }
     render(){
         return (<div>
             <div className="wrapper">
             <button onClick = {this.emptyCart}>Clear</button>
         <h1>Cart</h1>
         <div id="cartitems">
            {this.renderCartItems()}
            </div>
            </div>
         </div>);
     }
 }
 export default Cart;