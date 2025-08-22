import React from "react";

const ProductComponent = ({ product }) => {
  // here destructure the product props (props destructuring)
  const { name, brand, price, category, warranty, availability } = product;

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow p-3" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <p className="mb-1">Name: {name}</p>
          <p className="mb-1">Brand: {brand}</p>
          {/* Here using the ternary operator */}
          <p className="mb-1">
            Price: ₹{price} → {price > 50000 ? "Premium Product" : "Budget Product"}
          </p>
          <p className="mb-1">
            {warranty > 0 ? `Warranty: ${warranty} years` : "No Warranty"}
          </p>
          <p className="mb-1">
            {availability ? "In Stock ✅" : "Out of Stock ❌"}
          </p>
          <p className="mb-0">
            {category === "Laptop" ? "Free Laptop Bag Offer 🎒" : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
