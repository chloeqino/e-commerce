import React from "react";

import { BrowserRouter as Router,Routes, Route, Link,NavLink,useNavigate } from 'react-router-dom';
import Cart from "../cart";

import Menu from "../menu";

export default function MenuOrOrder(){


    return (<div className="popupModal">
        <Link to="/e-commerce/menu/">Order More Items</Link>
        <Link to="/e-commerce/cart/">Go to Cart</Link>
    </div>);
}