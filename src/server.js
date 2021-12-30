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
}
export default Server; 

