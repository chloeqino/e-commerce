import React from "react";
import Server from "./server";
import Menu from "./menu";
class App extends React.Component{
    server = new Server();
    componentDidMount() {
        console.log(Object.keys(this.server.items));
    }
    render(){
       return <section>Hello React
     <h2>Menu</h2>
         <Menu resources = {this.server.items} />
       </section>;
    }
}

export default App; 