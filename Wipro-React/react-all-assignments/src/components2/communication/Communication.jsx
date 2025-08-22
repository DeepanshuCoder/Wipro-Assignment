import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CommunicationApp = () => {
  // parent holds fruit list and selected fruit
  const [fruits, setFruits] = useState(["Apple", "Mango"]);
  const [selectedFruit, setSelectedFruit] = useState("");

  // child B sends fruit to parent
  const addFruit = () => {
    setFruits([...fruits, "Orange"]);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4">React – Parent / Child / Sibling Communication</h4>

      {/* Child A - shows fruit list and lets user select */}
      <div className="card p-3 mb-3">
        <h5>Fruit List</h5>
        {fruits.map((fruit, i) => (
          <p
            key={i}
            className="mb-1"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedFruit(fruit)}
          >
            {fruit}
          </p>
        ))}
      </div>

      <div className="row">
        {/* Child B - sender */}
        <div className="col">
          <div className="card p-3">
            <h5>Sender</h5>
            <button className="btn btn-secondary mt-2" onClick={addFruit}>
              Send Fruit
            </button>
          </div>
        </div>

        {/* Child C - selected fruit */}
        <div className="col">
          <div className="card p-3">
            <h5>Selected Fruit</h5>
            <p>{selectedFruit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationApp;
