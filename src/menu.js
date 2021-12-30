import React from "react";
class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id = {this.props.id}>
                <h3>{this.props.title}</h3>
                {this.props.price}
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