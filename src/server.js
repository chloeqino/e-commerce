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
        },
        "item02":{
            "id":"item02",
            "title":"Green Tea",
            "price":2
        }
    };
    
     logStorage(){
        console.log(this.myStorage);
    }
    get Items(){
        return this.items;
    }
    emptyCart(){
        this.myStorage.setItem("cart","[]");
    }
    get CartItems(){
        return JSON.parse(this.myStorage.getItem("cart"));
    }

    //receive an object denoting an order and add it to the local storage
    addtoCart(orderitem){
        if(!this.myStorage.getItem('cart')){
            this.myStorage.setItem("cart","[]");
        }
        let o = orderitem;
        
        console.log(o);
        console.log(this.myStorage.getItem('cart'));
        let currentorders = JSON.parse(this.myStorage.getItem('cart'));
        
        currentorders.push(o);
       this.myStorage.setItem("cart",JSON.stringify(currentorders));
    }
}   

export default Server; 

