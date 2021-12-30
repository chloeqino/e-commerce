class Server{
    myStorage = window.localStorage;
    
    items = {
        "item00":{
            "id":"item00",
            "title":"Milk Tea",
            "price":3.0
        },
        "item01":{
            "id":"item01",
            "title":"Thai Tea",
            "price":3.5
        }
    };
    
     logStorage(){
        console.log(this.myStorage);
    }
    get Items(){
        return this.items;
    }
    emptyCart(){
        this.myStorage.setItem("cart","{}");
    }
    get CartItems(){
        return JSON.parse(this.myStorage.getItem("cart"));
    }
    addtoCart(id,qty){
        if(!this.myStorage.getItem('cart')){
            this.myStorage.setItem("cart","{}");
        }
        let o = {};
        o["id"] = id;
        o["qty"] = qty;
        console.log(o);
        console.log(this.myStorage.getItem('cart'));
        let currentorders = JSON.parse(this.myStorage.getItem('cart'));
        
        if(currentorders[id]){
            currentorders[id].qty = currentorders[id].qty+qty;
        }else{
            currentorders[id] = o;
        }
       this.myStorage.setItem("cart",JSON.stringify(currentorders));
    }
}   

export default Server; 

