import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container grid grid-cols-3 lg:grid-cols-3 p-8 gap-3">
        {products.slice(0, 6).map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>order summery</h3>
      </div>
    </div>
  );
};

export default Shop;
