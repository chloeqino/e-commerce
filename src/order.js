import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link,useParams } from 'react-router-dom';

import Server from "./server";


export default function Order(){

    
   let id = useParams().itemid;
   const [itemid,setId] = useState(id);
   const [qty,setQty] = useState(1);
    let iteminfo = new Server().Items[itemid];   
    function renderToppings(){
        return new Server().Toppings.map(
            (e)=>{
                return (<div className='topping'><input type = "checkbox" id={e.id} name={e.id} value={e.name} className='toppingoption' /><label htmlFor={e.id}>{e.name}</label></div>);
            }
        );
    }
     return (<main><h1>Order:{itemid}</h1>
     {iteminfo.title}
     <form>
     <input type="hidden" name="itemId" value={itemid} />
         {renderToppings()}<br />
    <label htmlFor="qty">quantity: </label><input type="number" min="1" step="1" value={qty} id="qty" onChange = {e=>{
       let v =e.target.value;
       if(v<1 & v!=''&v!=null){
           v = 1;
       }
        setQty(v);
        
    }} onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} />
     </form>
     </main>);
    
}

