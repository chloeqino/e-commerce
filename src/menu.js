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
          items: Array()
        };
        console.log(Object.keys(this.props.resources));
        this.items = this.renderItems();
        console.log(this.items);
        //new Server().emptyCart();
        
    }
    renderItems(){
       return Object.keys(this.props.resources).map(
           (e) =>{
               return <Item id = {this.props.resources[e].id} title = {this.props.resources[e].title} price = {this.props.resources[e].price} />
           }
       );
    }
    render(){
        return (
            <div className="menu">
            {
                this.items
            }
            
            </div>
        );
    }
}

export default Menu;