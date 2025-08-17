import { useState } from "react";
import React from "react";

const Phone = () => {
  const [brand] = useState("Apple");
  const [model] = useState("iPhone 15");
  const [price, setPrice] = useState(79999);

  const updatePrice = () => setPrice((p) => p + 1000);

  return (
    <div>
      <h2>Phone</h2>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Price: ₹{price}</p>
      <button className="btn btn-primary m-2" onClick={updatePrice}>Update Price</button>
    </div>
  );
};

export default Phone;
