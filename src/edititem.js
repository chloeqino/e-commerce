import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link,useParams, useNavigate} from 'react-router-dom';

import Server from "./server";

import Cart from './cart';
export default function EditOrder(){

    let navigate = useNavigate();
   let id = useParams().orderid;
   let myserver = new Server();
   let o = myserver.CartItems.filter((e)=>{
       return e.id==id;
   })[0];
   console.log(o);
   
   let itemname = myserver.Items[o.itemid].title;
   console.log();
   const [toppings_checked,setChecked] = useState(o.toppings.map((e)=>{
       return e.id;
   }));
   const [sugar,setSugar] = useState(o.sugar);
   const [price,setPrice] = useState(updatePrice());
   let c = toppings_checked;
  
   //setsetChecked(c);
   //console.log(toppings_checked);
  
   
    function toggleSugar(e){
        setSugar(e.target.value);
        console.log(e.target.value);
    }
    function updatePrice(){
        //return (new Server().Items[id].price+0.5*toppings_checked.filter(Boolean).length)*qty;
    }  
    function renderSugarLevels(){
    return new Server().sugar_levels.map(
        (e,i)=>{
            return (<div className='sugarLevel'>
                <input type="radio" name="sugar" value={e.value} id={e.id} key = {e.id}
                checked = {e.value==sugar} onChange = {toggleSugar} /><label htmlFor={e.id}>{e.value+'%'}</label>
            </div>);
        }
    );
    }
    function renderToppings(){
        return new Server().Toppings.map(
            (e,i)=>{
                //console.log(i);
                return (<div className='topping'><input type = "checkbox" key = {e.id} id={e.id} name={e.id} value={e.name} className='toppingoption'
                defaultChecked = {toppings_checked.includes(e.id)} onChange = {event=>{
                    let checks = toppings_checked;
                    
                    if(event.target.checked){
                        if(!checks.includes(e.id)){
                        checks.push(e.id);
                        }
                    }else{
                        let rindex = checks.indexOf(e.id)
                            if (rindex>-1){
                                checks.splice(rindex,1);
                            }
                        }
                    
                    //console.log(checks);
                    setChecked(checks);

                    //console.log(toppings_checked);
                    setPrice(updatePrice());
                }} /><label htmlFor={e.id}>{e.name}</label></div>);
            }
        );
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("toppings "+toppings_checked);
        
        
        let updatesugar =sugar;
        let updatetoppings = new Server().Toppings.filter((e,i)=>{
            return toppings_checked.includes(e.id);
        });
        console.log(o);
        myserver.EditItem(id,updatesugar,updatetoppings);
        navigate("/e-commerce/cart");

        /*
       
        console.log("sugar "+sugar);
        
        for(let i = 0; i<Math.max(1,qty)+1-1;i++ ){
            new Server().addtoCart(o);
        }
        console.log(JSON.stringify(o));
        */

    }
     return (<main>
         <div className='wrapper'>
             <Link to="/e-commerce/cart" id="back2cart"> &lt;- back to cart</Link>
         <h1>{itemname}</h1>
     
     <form onSubmit={handleSubmit}>
     
     
    
         <p>
   
     
      </p>
      <p>
          Sugar level: <br/>
          {renderSugarLevels()}
      </p>
      <p> select toppings: (Optional)<br />
         {renderToppings()}</p>
      <input type="submit" value="Update" />
     </form>
     </div>
     </main>);
     
    
}

