import React, { useState } from "react";
import Chair from "./Chair";
import Table from "./Table";
import Sofa from "./Sofa";
import Bed from "./Bed";

const FurnitureMain = () => {
  // use the useState Hook for selected furniture
  const [type, setType] = useState("Chair");

  // furniture object data in the pair of key and value
  const furnitureData = {
    Chair: { name: "Wooden Chair", price: 1500, material: "Wood", size: "Medium", brand: "Ikea" },
    Table: { name: "Dining Table", price: 5000, material: "Glass", size: "Large", brand: "Godrej" },
    Sofa: { name: "Leather Sofa", price: 12000, material: "Leather", size: "3-Seater", brand: "Urban Ladder" },
    Bed: { name: "King Bed", price: 20000, material: "Teak Wood", size: "King", brand: "Durian" }
  };

  // switch case renderer
  const renderFurniture = () => {
    switch (type) {
      case "Chair": return <Chair data={furnitureData.Chair} />;
      case "Table": return <Table data={furnitureData.Table} />;
      case "Sofa": return <Sofa data={furnitureData.Sofa} />;
      case "Bed": return <Bed data={furnitureData.Bed} />;
      default: return null;
    }
  };

  return (
    <div>
      {/* dropdown menu to select the particular furniture */}
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Chair</option>
        <option>Table</option>
        <option>Sofa</option>
        <option>Bed</option>
      </select>

      {/* also render selected furniture */}
      {renderFurniture()}
    </div>
  );
};

export default FurnitureMain;
