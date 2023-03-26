import React from "react";

const Product = (props) => {
  const { name, img, price, seller, ratings } = props.product;
  return (
    <div>
      <div className="card w-80 h-full bg-base-100 shadow-xl my-6">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {name}</h2>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
