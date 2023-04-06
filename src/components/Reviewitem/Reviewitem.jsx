import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./Reviewitem.css";

const Reviewitem = ({ product, handleRemoveFromCart }) => {
  const { id, img, price, name, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details flex flex-col flex-grow justify-center">
        <p>{name}</p>
        <p>
          Price: <span className=" text-orange-500 ">${price}</span>
        </p>
        <p>
          Order Quantity: <span className=" text-orange-500 ">{quantity}</span>
        </p>
      </div>
      <div className="flex justify-center items-center mr-5 group">
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="btn btn-error border-none h-14 w-14 rounded-full bg-[rgba(235,87,87,0.3)]"
        >
          <FontAwesomeIcon
            className="text-2xl text-red-700 group-hover:text-white"
            icon={faTrashAlt}
          />
        </button>
      </div>
    </div>
  );
};

export default Reviewitem;
