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
    toppings = [
        {
            "name":"grass jelly",
            "id":"t0"
        },
        {
            "name":"pearl",
            "id":'t1'
        },
        {
            "name":"sago",
            "id":"t2"
        }

    ];
    sugar_levels = [
     {
         "value": 100,
         "id":"sugar100"
     },
     {
         "value":70,
         "id":"sugar70"
     },
     {
        "value":50,
        "id":"sugar50"
    },
    {
        "value":30,
        "id":"sugar30"
    },
    {
        "value":0,
        "id":"sugar0"
    },
    ];
     logStorage(){
        console.log(this.myStorage);
    }
    get Toppings(){
        return this.toppings;
    }
    get Items(){
        return this.items;
    }
    emptyCart(){
        this.myStorage.setItem("cart","[]");
    }
    get CartItems(){
        if(this.myStorage.getItem("cart")){
        let items = JSON.parse(this.myStorage.getItem("cart"));
        for(let i = 0; i< items.length;i++)
        {
            console.log(items[i]);
        //items[i]["toppings"] = JSON.parse(items[i]["toppings"]);
        items[i]["sugar"] = Number(items[i]["sugar"]);
        }
        return items;
        }
       return [];
    }
    get OrderId(){
        let n = 0;
        if(!this.myStorage.getItem("orderNumber"))
        {
             this.myStorage.setItem("orderNumber","0");
        }
        n = Number(this.myStorage.getItem("orderNumber"))+1;
        this.myStorage.setItem("orderNumber",n.toString());
        return "order"+n;
    }
    //receive an object denoting an order and add it to the local storage
    addtoCart(orderitem){
        if(!this.myStorage.getItem('cart')){
            this.myStorage.setItem("cart","[]");
        }
        let o = orderitem;
        o["id"] = this.OrderId;
        console.log(o);
        console.log(this.myStorage.getItem('cart'));
        let currentorders = JSON.parse(this.myStorage.getItem('cart'));
        
        currentorders.push(o);
       this.myStorage.setItem("cart",JSON.stringify(currentorders));
    }
}   

export default Server; 

