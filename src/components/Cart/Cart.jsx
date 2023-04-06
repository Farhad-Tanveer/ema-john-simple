import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  //   const cart = props.cart; or
  //   const { cart } = props;  option 2

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // simple solution to show the product quantity correctly
    //   if (product.quantity === 0) {
    //     product.quantity = 1;
    //   }
    // another way to solve this
    product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h3 className="text-center my-6 text-3xl">order summery</h3>
      <div className="p-4 text-xl space-y-5">
        <p>Selected Items: ${quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        <button
          onClick={handleClearCart}
          className="btn btn-error mr-5  w-96 flex items-centermr-5 group justify-between"
        >
          <span>Clear Cart</span>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
