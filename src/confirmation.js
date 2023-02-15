import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Server from "./server";

export default function Confirmation() {
  useEffect(() => {
    new Server().emptyCart();
    document.getElementById("cartnum").textContent =
      new Server().CartItems.length;
  }, []);
  return (
    <div className="vertical-center full-height text-center">
      <h2 className="mb-10" id="confirm-title">
        Your order has been received
      </h2>
      <div>
        <AiFillCheckCircle id="check-icon" />
      </div>
      <div className="mb-10">Thank you for your purchase</div>
      <nav>
        <Link to="/e-commerce/menu" className="btn primary">
          Order More Items
        </Link>
      </nav>
    </div>
  );
}
