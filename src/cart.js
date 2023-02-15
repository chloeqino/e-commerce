import React from "react";
import { Link } from "react-router-dom";
import Server from "./server";
import EditOrder from "./edititem.js";
import { EmptyCart } from "./components/empty-cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.server = new Server();
    this.state = {
      items: this.server.CartItems,
      total: this.server.TotalPrice,
    };
    console.log("item" + this.state.items);
    this.cartitems = React.createRef();
    this.cartnum = null;
  }
  componentDidMount() {
    this.cartnum = document.getElementById("cartnum").textContent;
    console.log(this.cartnum);
  }
  deleteitem(i, index) {
    console.log(index);
    console.log("index" + i);

    let todelete = document.querySelectorAll(".cartitem")[index];
    console.log(todelete);
    todelete.classList.add("hide");
    setTimeout(() => {
      this.server.deleteCartItem(i);
      this.setState({ items: this.server.CartItems });
      todelete.classList.remove("hide");
      //this.cartnum = this.state.items.length;
      document.getElementById("cartnum").textContent =
        new Server().CartItems.length;
      this.setState({ total: this.server.TotalPrice });
    }, 200);
  }
  additem(id, index) {
    console.log("index" + id);
    this.server.duplicateCartItem(id);
    this.setState({ items: this.server.CartItems });
    let toadd = document.querySelectorAll(".cartitem")[index];
    toadd.classList.add("fadein");
    document.getElementById("cartnum").textContent =
      new Server().CartItems.length;
    setTimeout(() => {
      toadd.classList.remove("fadein");
      this.setState({ total: this.server.TotalPrice });
    }, 200);
  }
  renderCartItems() {
    if (this.state.items.length > 0) {
      return this.state.items.map((e, i) => {
        let editurl = "/e-commerce/edititem/" + e.id;
        return (
          <div id={e.id} className="cartitem" ref={this.cartitems}>
            <Link to={editurl} className="iteminfo row">
              <img
                src={this.server.Items[e.itemid].imageUrl}
                className="col"
              ></img>
              <div className="col textinfo">
                <h3>{this.server.Items[e.itemid].title}</h3>
                <p>Sugar Level: {e.sugar}%</p>
                <p>
                  Toppings:
                  {e.toppings.map((e) => {
                    return (
                      <span className="topping" key={e.id}>
                        {e.name}
                      </span>
                    );
                  })}
                </p>
              </div>
            </Link>
            <div className="addDeleteBtns">
              <button
                onClick={() => {
                  this.deleteitem(e.id, i);
                }}
              >
                -
              </button>
              <button onClick={() => this.additem(e.id, i)}>+</button>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        nothing here
        <br />
        <Link to="/e-commerce/menu" className="nav-item">
          Explore the menu
        </Link>
        <EmptyCart />
      </div>
    );
  }
  emptyCart = () => {
    // <button onClick = {this.emptyCart} id="emotyCartbtn">Clear</button>
    new Server().emptyCart();
    this.setState({ items: this.server.CartItems });
    document.getElementById("cartnum").textContent =
      new Server().CartItems.length;
  };
  render() {
    if (this.state.items.length > 0) {
      return (
        <div id="cartlist">
          <nav className="wrapper mb-2">
            <Link to="/e-commerce/menu">Back to menu</Link>
          </nav>
          <div className="wrapper">
            <main id="cartitems">{this.renderCartItems()}</main>
            <div id="side">
              <div className="vcenter">
                <div key={this.state.total} id="total-price">
                  <h4 className="bg-lightpink padding-m text-center bold-300 uppercase">
                    Summary
                  </h4>
                  <div id="price-info">
                    <div className="space-between">
                      <div>Subtotal</div>
                      <div>$ {this.state.total.toFixed(2)}</div>
                    </div>
                    <div className="space-between">
                      <div>Tax</div>
                      <div>+ $ {(this.state.total * 0.13).toFixed(2)}</div>
                    </div>
                    <div className="space-between bold-600">
                      <div>Total</div>
                      <div>$ {(this.state.total * 1.13).toFixed(2)}</div>
                    </div>
                  </div>
                  <form action="/e-commerce/confirmation" id="checkout-btn">
                    <button className="w-100 btn primary" type="submit">
                      Checkout
                    </button>
                  </form>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <EmptyCart />;
    }
  }
}
export default Cart;
