import React from "react";
import Server from "./server";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
class Item extends React.Component{
    constructor(props){
        super(props)
        this.itemUrl = '/e-commerce/orderdetail/'+this.props.id;
        this.imgUrl = this.props.imgUrl;
    }
    orderItem=()=>{
        console.log(this.props.id);
    }
    render(){
        return (
            <Link id = {this.props.id} className="item" key={this.props.id} to={this.itemUrl}>
                <div className="imgContainer">
                <img src={this.imgUrl}></img>
                </div>
                <h3>{this.props.title}</h3>
                
                ${this.props.price.toFixed(2)}
                
            </Link>
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
        console.log(props);
        this.items = this.renderItems();
       
        
    }
    componentDidMount(){
        var cartnum = document.getElementById("cartnum");
        console.log(cartnum);
       // console.log(this.props.location.state);
    }
    renderItems(){
       return Object.keys(this.state.items).map(
           (e) =>{
               return <Item id = {this.state.items[e].id} title = {this.state.items[e].title} price = {this.state.items[e].price} imgUrl={this.state.items[e].imageUrl} />
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