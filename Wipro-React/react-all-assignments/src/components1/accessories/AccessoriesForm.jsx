import React from "react";

// here manages form + submission
class AccessoriesForm extends React.Component {
    state = { name: "", description: "", category: "", brand: "", inStock: false, warranty: "", submitted: null };

    // handle input change
    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({ [name]: type === "checkbox" ? checked : value }); // using the ternary operator
    };

    // handle form submit & using spread operator
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: { ...this.state } });
    };

    render() {
        return (
            <div className="container mt-4">
                <form className="card p-3" onSubmit={this.handleSubmit}>
                    <h4>Accessories Form</h4>
                    <input className="form-control mb-2" name="name" placeholder="Accessory Name"
                        value={this.state.name} onChange={this.handleChange} />
                    <textarea className="form-control mb-2" name="description" placeholder="Description"
                        value={this.state.description} onChange={this.handleChange}></textarea>
                    <select className="form-control mb-2" name="category" value={this.state.category} onChange={this.handleChange}>
                        <option value="">Select Category</option><option>Electronics</option><option>Fashion</option><option>Home</option>
                    </select>
                    <div className="mb-2">
                        <label><input type="radio" name="brand" value="Sony" onChange={this.handleChange} /> Sony</label>
                        <label className="ms-2"><input type="radio" name="brand" value="Samsung" onChange={this.handleChange} /> Samsung</label>
                    </div>
                    <div className="mb-2">
                        <label><input type="checkbox" name="inStock" checked={this.state.inStock} onChange={this.handleChange} /> In Stock</label>
                    </div>
                    <input type="number" className="form-control mb-2" name="warranty" placeholder="Warranty (years)"
                        value={this.state.warranty} onChange={this.handleChange} />
                    <button className="btn btn-primary">Submit</button>
                </form>

                {/* show all data in table */}
                {this.state.submitted && (
                    <table className="table table-bordered mt-3">
                        <tbody>
                            <tr><th>Name</th><td>{this.state.submitted.name}</td></tr>
                            <tr><th>Description</th><td>{this.state.submitted.description}</td></tr>
                            <tr><th>Category</th><td>{this.state.submitted.category}</td></tr>
                            <tr><th>Brand</th><td>{this.state.submitted.brand}</td></tr>
                            <tr><th>In Stock</th><td>{this.state.submitted.inStock ? "Yes" : "No"}</td></tr>
                            <tr><th>Warranty</th><td>{this.state.submitted.warranty} years</td></tr>
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default AccessoriesForm;
