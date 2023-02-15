class Server {
  myStorage = window.localStorage;

  items = {
    item00: {
      id: "item00",
      title: "Milk Tea",
      price: 3.0,
      imageUrl: require("./assets/bobapink.png"),
    },
    item01: {
      id: "item01",
      title: "Thai Tea",
      price: 3.5,
      imageUrl: require("./assets/thai.png"),
    },
    item02: {
      id: "item02",
      title: "Green Tea",
      price: 2,
      imageUrl: require("./assets/green.png"),
    },
    item03: {
      id: "item03",
      title: "Coconut Milk Tea",
      price: 4,
      imageUrl: require("./assets/coconut.png"),
    },
    item04: {
      id: "item04",
      title: "Wicked Bubble Tea",
      price: 4.5,
      imageUrl: require("./assets/magic.png"),
    },
    item05: {
      id: "item05",
      title: "Rose Bubble Tea",
      price: 4,
      imageUrl: require("./assets/rose.png"),
    },
  };
  toppings = [
    {
      name: "grass jelly",
      id: "t0",
    },
    {
      name: "pearl",
      id: "t1",
    },
    {
      name: "sago",
      id: "t2",
    },
    {
      name: "lychee jelly",
      id: "t3",
    },
  ];
  sugar_levels = [
    {
      value: 100,
      id: "sugar100",
    },
    {
      value: 70,
      id: "sugar70",
    },
    {
      value: 50,
      id: "sugar50",
    },
    {
      value: 30,
      id: "sugar30",
    },
    {
      value: 0,
      id: "sugar0",
    },
  ];
  logStorage() {
    console.log(this.myStorage);
  }
  get Toppings() {
    return this.toppings;
  }
  get Items() {
    return this.items;
  }
  EditItem(orderid, sugar, toppings) {
    let index = -1;
    let newcart = JSON.parse(this.myStorage.getItem("cart"));
    let oldcart = JSON.parse(this.myStorage.getItem("cart"));
    for (let i = 0; i < oldcart.length; i++) {
      if (oldcart[i].id == orderid) {
        newcart[i].toppings = toppings;
        newcart[i].sugar = String(sugar);
        break;
      }
    }
    this.myStorage.setItem("cart", JSON.stringify(newcart));
  }
  emptyCart() {
    this.myStorage.setItem("cart", "[]");
    this.myStorage.setItem("orderNumber", "0");
  }
  deleteCartItem(index) {
    let items = this.myStorage.getItem("cart");
    items = JSON.parse(items);
    items = items.filter((e, i) => {
      return e.id != index;
    });

    this.myStorage.setItem("cart", JSON.stringify(items));
  }
  duplicateCartItem(orderId) {
    let items = this.myStorage.getItem("cart");
    items = JSON.parse(items);
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == orderId) {
        let o = JSON.parse(JSON.stringify(items[i]));
        o["id"] = this.OrderId;

        items.splice(i, 0, o);
        console.log(items);
        this.myStorage.setItem("cart", JSON.stringify(items));
        break;
      }
    }
  }

  get TotalPrice() {
    let price = 0;
    if (this.myStorage.getItem("cart")) {
      let items = JSON.parse(this.myStorage.getItem("cart"));
      console.log(items);
      for (let i = 0; i < items.length; i++) {
        price += Number(items[i]["subtotal"]);
      }
    }
    return price;
  }
  get CartItems() {
    if (this.myStorage.getItem("cart")) {
      let items = JSON.parse(this.myStorage.getItem("cart"));
      for (let i = 0; i < items.length; i++) {
        //console.log(items[i]);
        //items[i]["toppings"] = JSON.parse(items[i]["toppings"]);
        items[i]["sugar"] = Number(items[i]["sugar"]);
      }
      return items;
    }
    return [];
  }
  get OrderId() {
    let n = 0;
    if (!this.myStorage.getItem("orderNumber")) {
      this.myStorage.setItem("orderNumber", "0");
    }
    n = Number(this.myStorage.getItem("orderNumber")) + 1;
    this.myStorage.setItem("orderNumber", n.toString());
    return "order" + n;
  }
  //receive an object denoting an order and add it to the local storage
  addtoCart(orderitem) {
    if (!this.myStorage.getItem("cart")) {
      this.myStorage.setItem("cart", "[]");
    }
    let o = orderitem;
    o["id"] = this.OrderId;
    o["subtotal"] = this.items[o["itemid"]].price + o["toppings"].length * 0.5;
    console.log(o);
    console.log(this.myStorage.getItem("cart"));
    let currentorders = JSON.parse(this.myStorage.getItem("cart"));

    currentorders.unshift(o);
    this.myStorage.setItem("cart", JSON.stringify(currentorders));
  }
}

export default Server;
