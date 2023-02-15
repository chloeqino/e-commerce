import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import empty_cart from "../assets/empty_cart.svg";
import Menu from "../menu";
export function EmptyCart() {
  return (
    <div
      className="full-height vertical-center text-center"
      id="emptycart-page"
    >
      <div className="image-container text-center">
        <img src={empty_cart} id="empty-cart" alt="your cart is empty"></img>
      </div>
      <h4 className="text-center">Your Cart is Empty</h4>
      <div>Looks like you haven't added any drink to the cart yet</div>
      <nav>
        <Link to="/e-commerce/menu" className="btn primary">
          Explore the menu
        </Link>
      </nav>
    </div>
  );
}
