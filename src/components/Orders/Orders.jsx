import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const cart = useLoaderData();
  return (
    <div>
      <div className="shop-container">
        <div className="product-container grid grid-cols-3 lg:grid-cols-3 p-8 gap-3">
          <h2>Orders page:{cart.length} </h2>
        </div>
        <div className="cart-container bg-secondary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
