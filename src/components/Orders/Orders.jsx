import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Reviewitem from "../Reviewitem/Reviewitem";
import "./orders.css";

const Orders = () => {
  const cart = useLoaderData();
  return (
    <div>
      <div className="shop-container">
        <div className="review-container">
          {cart.map((product) => (
            <Reviewitem key={product.id} product={product}></Reviewitem>
          ))}
        </div>
        <div className="cart-container bg-secondary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
