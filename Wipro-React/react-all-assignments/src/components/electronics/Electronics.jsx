import { useState } from "react";
import React from "react";

function Electronics() {
  const [name] = useState("Laptop");
  const [brand, setBrand] = useState("HP");
  const [price, setPrice] = useState(45000);

  const updateBrand = () => setBrand("Dell");
  const increasePrice = () => setPrice((p) => p + 1000);

  return (
    <div>
      <h2>Electronics</h2>
      <p>Name: {name}</p>
      <p>Brand: {brand}</p>
      <p>Price: ₹{price}</p>
      <button className="btn btn-primary m-2" onClick={updateBrand}>Update Brand</button>
      <button className="btn btn-success m-2" onClick={increasePrice}>Increase Price</button>
    </div>
  );
}

export default Electronics;