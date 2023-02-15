import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Server from "./server";
import Modal from "react-modal";
import MenuOrOrder from "./components/MenuOrCart";
export default function Order() {
  let id = useParams().itemid;
  const [itemid, setId] = useState(id);
  const [qty, setQty] = useState(1);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  //Modal.setAppElement("#main");
  const [toppings_checked, setChecked] = useState(
    Array(new Server().Toppings.length).fill(false)
  );
  const [sugar, setSugar] = useState(100);
  const [price, setPrice] = useState(updatePrice());
  useEffect(() => {
    console.log("qty chagned" + qty);
    setPrice(updatePrice());
  }, [qty]);
  let c = toppings_checked;
  let cartnum = null;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  //setsetChecked(c);
  //console.log(toppings_checked);

  let iteminfo = new Server().Items[itemid];
  function toggleSugar(e) {
    setSugar(e.target.value);
    console.log(e.target.value);
  }
  function updatePrice() {
    console.log("updating price");
    return (
      (new Server().Items[id].price +
        0.5 * toppings_checked.filter(Boolean).length) *
      qty
    );
  }
  function renderSugarLevels() {
    return new Server().sugar_levels.map((e, i) => {
      return (
        <div className="sugarLevel">
          <input
            type="radio"
            name="sugar"
            value={e.value}
            id={e.id}
            key={e.id}
            checked={e.value == sugar}
            onChange={toggleSugar}
          />
          <label htmlFor={e.id}>{e.value + "%"}</label>
        </div>
      );
    });
  }
  function renderToppings() {
    return new Server().Toppings.map((e, i) => {
      //console.log(i);
      return (
        <div className="topping">
          <input
            type="checkbox"
            key={e.id}
            id={e.id}
            name={e.id}
            value={e.name}
            className="toppingoption"
            defaultChecked={toppings_checked[i]}
            onChange={(event) => {
              let checks = toppings_checked;

              checks[i] = !checks[i];
              //console.log(checks);
              setChecked(checks);
              //console.log(toppings_checked);
              setPrice(updatePrice());
            }}
          />
          <label htmlFor={e.id}>{e.name}</label>
        </div>
      );
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log(Math.max(1, qty) + 1);
    console.log("toppings " + toppings_checked);
    console.log("sugar " + sugar);
    let o = {};
    o["itemid"] = itemid;
    o["sugar"] = sugar;
    o["toppings"] = new Server().Toppings.filter((e, i) => {
      return toppings_checked[i];
    });
    for (let i = 0; i < Math.max(1, qty) + 1 - 1; i++) {
      new Server().addtoCart(o);
    }
    console.log(JSON.stringify(o));
    document.getElementById("cartnum").textContent =
      new Server().CartItems.length;
    openModal();
  }
  return (
    <main id="orderpage">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h4>Added to Cart!</h4>
        <MenuOrOrder />
        <button onClick={closeModal} className="closeBtn">
          X
        </button>
      </Modal>
      <div className="wrapper">
        <nav>
          <Link to="/e-commerce/menu">menu</Link>/{iteminfo.title}
        </nav>

        <div id="orderform" className="row">
          <div className="col" id="itemImgContainer">
            <img
              src={iteminfo.imageUrl}
              alt={iteminfo.title}
              id="itemImg"
            ></img>
          </div>
          <div id="form">
            <form onSubmit={handleSubmit} id="form1">
              <fieldset>
                <legend>{iteminfo.title}</legend>
                <input type="hidden" name="itemId" value={itemid} />

                <p>
                  <label htmlFor="qty" className="subtitle">
                    quantity:{" "}
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={qty}
                    id="qty"
                    onChange={(e) => {
                      let v = e.target.value;
                      if ((v < 1) & (v != null) & (v != "")) {
                        v = 1;
                      }
                      if (v == "") {
                        setQty("");

                        return;
                        console.log("empty");
                      }

                      setQty(Number(v));

                      console.log(price);
                    }}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </p>
                <p>
                  <label className="subtitle">Sugar level: </label>
                  {renderSugarLevels()}
                </p>
                <p>
                  {" "}
                  <label className="subtitle">
                    select toppings: (Optional)
                  </label>
                  {renderToppings()}
                </p>
                <button type="submit" form="form1" key={price}>
                  Add To Cart &#xB7; $ {price}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
