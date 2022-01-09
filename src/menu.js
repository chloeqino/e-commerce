import React from "react";
import Server from "./server";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
class Item extends React.Component{
    constructor(props){
        super(props)
        this.itemUrl = '/orderdetail/'+this.props.id;
    }
    orderItem=()=>{
        console.log(this.props.id);
    }
    render(){
        return (
            <div id = {this.props.id} className="item" key={this.props.id}>
                <h3>{this.props.title}</h3>
                {this.props.price}
                <Link to= {this.itemUrl} key="this.props.id">order</Link>
            </div>
        );
    }
}
class Menu extends React.Component{
     items = [];
    constructor(props){
        super(props);
        this.state = {
          items: new Server().Items
        };
        
        this.items = this.renderItems();
        console.log(this.props);
        //new Server().emptyCart();
        
    }
    componentDidMount(){
        var cartnum = document.getElementById("cartnum");
        console.log(cartnum);
       // console.log(this.props.location.state);
    }
    renderItems(){
       return Object.keys(this.state.items).map(
           (e) =>{
               return <Item id = {this.state.items[e].id} title = {this.state.items[e].title} price = {this.state.items[e].price} />
           }
       );
    }
    render(){
        return (
            <section id="menu">
            {
                <div className="wrapper">
                {this.items}
                </div>
            }
            
            </section>
        );
    }
}

export default Menu;