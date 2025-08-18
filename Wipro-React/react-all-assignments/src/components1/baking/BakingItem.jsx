import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// here managing the baking form + list
function BakingForm() {
  // state for form inputs
  const [form, setForm] = useState({ name: "", qty: "", ingredients: "", time: "", category: "" });
  // state for submitted items
  const [items, setItems] = useState([]);

  // handle input change as well as using spread operator
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();  // prevents from loading of the page when click on the submit button
    setItems([...items, form]);
    setForm({ name: "", qty: "", ingredients: "", time: "", category: "" });
  };

  return (
    <div className="container mt-4">
      <div className="card p-3">
        <h3>Baking Items Form</h3>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="name" placeholder="Item Name"
            value={form.name} onChange={handleChange} />
          <input className="form-control mb-2" name="qty" placeholder="Quantity"
            value={form.qty} onChange={handleChange} />
          <textarea className="form-control mb-2" name="ingredients" placeholder="Ingredients"
            value={form.ingredients} onChange={handleChange}></textarea>
          <input className="form-control mb-2" name="time" placeholder="Baking Time"
            value={form.time} onChange={handleChange} />
          <select className="form-control mb-2" name="category"
            value={form.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Cake">Cake</option>
            <option value="Bread">Bread</option>
            <option value="Pastry">Pastry</option>
          </select>
          <button className="btn btn-success">Add Baking Item</button>
        </form>
      </div>

      {/* display all the bakery submitted items in table */}
      {items.length > 0 && (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Name</th><th>Qty</th><th>Ingredients</th><th>Time</th><th>Category</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i}>
                <td>{it.name}</td><td>{it.qty}</td><td>{it.ingredients}</td>
                <td>{it.time}</td><td>{it.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BakingForm;
