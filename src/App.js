import React from "react";
import Server from "./server";
import Menu from "./menu";

import { Link } from "react-router-dom";
import './App.css';
class App extends React.Component{
    server = new Server();
    componentDidMount() {
        console.log(Object.keys(this.server.items));
    }
    render(){
       return <section id="hero">
           <div className="wrapper">
     <h1>Boba</h1>
     <Link to="/menu" className='menuBtn'>Menu</Link>
     </div>
       </section>;
    }
}

export default App; 