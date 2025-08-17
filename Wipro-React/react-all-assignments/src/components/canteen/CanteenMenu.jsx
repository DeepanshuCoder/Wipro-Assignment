import React from "react";
import CanteenItem from "./CanteenItem";

const CanteenMenu = () => {
  return (
    <div>
      <h2>Canteen Name: Campus Bites</h2>
      <p>Location: Block A</p>
      <p>Open Hours: 8:00 AM - 6:00 PM</p>

      <CanteenItem name="Idli"      price={40}  category="Breakfast" available="Yes" />
      <CanteenItem name="Veg Thali" price={120} category="Lunch"     available="Yes" />
      <CanteenItem name="Samosa"    price={20}  category="Snack"     available="No" />
    </div>
  );
};

export default CanteenMenu;
