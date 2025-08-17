import React from "react";

function SweetsList() {
    const sweets = [
        { id: 1, name: "Gulab Jamun", price: 120 },
        { id: 2, name: "Rasgulla", price: 100 },
        { id: 3, name: "Ladoo", price: 80 },
    ];

    return (
        <div>
            {sweets.map((s) => (
                <div key={s.id}>
                    {s.name} - Price: {s.price} ₹
                </div>
            ))}
        </div>
    );
}

export default SweetsList;