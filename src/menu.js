import React from "react";
import Server from "./server";
class Item extends React.Component{
    constructor(props){
        super(props)
    }
    orderItem=()=>{
        console.log(this.props.id);
    }
    render(){
        return (
            <div id = {this.props.id} className="item">
                <h3>{this.props.title}</h3>
                {this.props.price}
                <button onClick={this.orderItem}>Order</button>
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