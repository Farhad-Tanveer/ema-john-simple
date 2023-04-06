import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reviewitem from "../Reviewitem/Reviewitem";
import "./orders.css";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div className="review-container">
          {cart.map((product) => (
            <Reviewitem
              key={product.id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            ></Reviewitem>
          ))}
        </div>
        <div className="cart-container bg-secondary">
          <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
