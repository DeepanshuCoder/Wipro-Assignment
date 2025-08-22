import React from "react";

// here i can pass the bed data
const Bed = ({ data }) => {
  // show bed details
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Price: ₹{data.price}</p>
      <p>Material: {data.material}</p>
      <p>Size: {data.size}</p>
      <p>Brand: {data.brand}</p>
    </div>
  );
};

export default Bed;
