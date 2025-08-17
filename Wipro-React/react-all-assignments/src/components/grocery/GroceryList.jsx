import React from "react";

function GroceryList({ items }) {
    const handleClick = () => alert("Groceries Added to Cart!");

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button className="btn btn-primary mt-2" onClick={handleClick}>Add to Cart</button>
        </div>
    );
}

export default GroceryList;