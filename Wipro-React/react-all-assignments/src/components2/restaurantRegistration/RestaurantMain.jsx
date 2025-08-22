import React, { useState, useEffect } from "react";

// here i'm using all react lifecycle methods...
const RestaurantApp = () => {
  // form state
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    contact: "",
    address: "",
    cuisine: "",
    hours: ""
  });

  // submitted data
  const [submitted, setSubmitted] = useState(null);

  // run on every render
  useEffect(() => {
    console.log("Form rendered");
  });

  // run only once on mount
  useEffect(() => {
    console.log("Welcome to Restaurant Registration App");
  }, []);

  // run whenever form data changes
  useEffect(() => {
    console.log("Form data updated", formData);
  }, [formData]);

  // auto-save every 5 seconds
  useEffect(() => {
    const autoSave = setInterval(() => {
      console.log("Auto-saving form data...", formData);
    }, 5000);
    return () => clearInterval(autoSave); // cleanup
  }, [formData]);

  // handle input change & using the spread operator 
  // here i'm using the arrow function so there is no need for binding react is automatically binding
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();  // prevents from page reloading
    setSubmitted(formData);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">🍴 Restaurant Registration Form</h2>
      <p>Welcome to Restaurant Registration 🏢</p>

      {/* restaurantApp form and add the bootstrap also*/}
      <form onSubmit={handleSubmit} className="mb-3">
        <input className="form-control mb-2" name="restaurantName" placeholder="Restaurant Name" onChange={handleChange} />
        <input className="form-control mb-2" name="ownerName" placeholder="Owner Name" onChange={handleChange} />
        <input className="form-control mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="form-control mb-2" name="contact" placeholder="Contact Number" onChange={handleChange} />
        <input className="form-control mb-2" name="address" placeholder="Address" onChange={handleChange} />
        <input className="form-control mb-2" name="cuisine" placeholder="Cuisine Type" onChange={handleChange} />
        <input className="form-control mb-2" name="hours" placeholder="Opening Hours" onChange={handleChange} />
        <button className="btn btn-primary">Submit</button>
      </form>

      {/* show submitted JSON Data here */}
      {submitted && (
        <div>
          <h5>📂 Submitted Data (JSON)</h5>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RestaurantApp;
