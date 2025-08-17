import React from "react";

const CanteenItem = ({ name, price, category, available }) => {
  return (
    <div>
      <strong>{name}</strong> - ₹{price} | {category} | Available: {available}
    </div>
  );
};

export default CanteenItem;
