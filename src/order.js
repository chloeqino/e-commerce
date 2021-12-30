import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link,useParams } from 'react-router-dom';

import Server from "./server";
export default function Order(){

    
   let itemid = useParams().itemid;
    let iteminfo = new Server().Items[itemid];   
    
     return (<main><h1>Order:{itemid}</h1>
     {iteminfo.title}
     </main>);
    
}

