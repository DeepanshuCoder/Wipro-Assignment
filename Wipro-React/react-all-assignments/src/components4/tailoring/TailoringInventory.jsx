import React, { useEffect, useState } from "react";
import axios from "axios";

function TailoringInventory() {
    const [items, setItems] = useState([]); // hold fetched data

    // fetch data from json-server
    useEffect(() => {
        // npm i axios
        // npm i -g json-server
        // using this command (json-server --watch db.json --port 5000) to access the below url
        axios.get("http://localhost:5000/tailoringItems") 
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h3>Tailoring Inventory</h3>
            {/* bootstrap table to display items */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Size</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(it => (
                        <tr key={it.id}>
                            <td>{it.id}</td>
                            <td>{it.name}</td>
                            <td>{it.size}</td>
                            <td>{it.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TailoringInventory;