import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reviewitem from "../Reviewitem/Reviewitem";
import "./orders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

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
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/checkout">
              <button className="btn btn-warning mt-5 mr-5  w-96 flex items-centermr-5 group justify-between">
                <span>Proceed Checkout</span>
                <FontAwesomeIcon icon={faCreditCard} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
