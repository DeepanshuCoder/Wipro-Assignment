import React from "react";

// Controlled Component: All the form input fields controlled by the usestate hook and automatically by react
class FlightBookingControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", gender: "", meal: "", request: "", submitted: null };
  }

  // handle input change and also fetch the targetname and value of passenger
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handle form submit
  handleSubmit = (e) => {
    e.preventDefault(); // prevents from the page reloading
    this.setState({ submitted: this.state });
  };

  render() {
    return (
      <div className="col-md-6">
        <h4>Controlled Flight Booking Form</h4>
        <form onSubmit={this.handleSubmit}>
          <input className="form-control mb-2" name="name" placeholder="Passenger Name"
            value={this.state.name} onChange={this.handleChange} />
          <input className="form-control mb-2" name="email" placeholder="Email"
            value={this.state.email} onChange={this.handleChange} />

          <div className="mb-2">
            Gender: 
            <input type="radio" name="gender" value="Male" onChange={this.handleChange}/> Male
            <input type="radio" name="gender" value="Female" onChange={this.handleChange}/> Female
          </div>

          <select className="form-control mb-2" name="meal"
            value={this.state.meal} onChange={this.handleChange}>
            <option value="">Meal Preference</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>

          <textarea className="form-control mb-2" name="request" placeholder="Special Request"
            value={this.state.request} onChange={this.handleChange}></textarea>

          <button className="btn btn-primary">Submit</button>
        </form>

        {this.state.submitted && (
          <table className="table table-bordered mt-3">
            <thead>
              <tr><th>Passenger Name</th><th>Email</th><th>Gender</th><th>Meal</th><th>Request</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.submitted.name}</td>
                <td>{this.state.submitted.email}</td>
                <td>{this.state.submitted.gender}</td>
                <td>{this.state.submitted.meal}</td>
                <td>{this.state.submitted.request}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

// Uncontrolled Component: all the form input fields are controlled by DOM and useref hooks
// useref -> It is manipulate the react DOM
class FlightBookingUncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.flightNo = React.createRef();
    this.source = React.createRef();
    this.dest = React.createRef();
    this.date = React.createRef();
    this.terms = React.createRef();
    this.state = { details: null };
  }

  // handle form submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      details: {
        flightNo: this.flightNo.current.value,
        source: this.source.current.value,
        dest: this.dest.current.value,
        date: this.date.current.value,
        terms: this.terms.current.checked
      }
    });
  };

  render() {
    return (
      <div className="col-md-6">
        <h4>Uncontrolled Flight Booking Form</h4>
        <form onSubmit={this.handleSubmit}>
          <input className="form-control mb-2" placeholder="Flight Number" ref={this.flightNo}/>
          <input className="form-control mb-2" placeholder="Source" ref={this.source}/>
          <input className="form-control mb-2" placeholder="Destination" ref={this.dest}/>
          <input className="form-control mb-2" type="date" ref={this.date}/>
          <div className="form-check mb-2">
            <input type="checkbox" className="form-check-input" ref={this.terms}/> Terms Accepted
          </div>
          <button className="btn btn-success">Submit</button>
        </form>

        {this.state.details && (
          <div className="card mt-3 p-3">
            <h5>Flight Details</h5>
            <p>Flight Number: {this.state.details.flightNo}</p>
            <p>Source: {this.state.details.source}</p>
            <p>Destination: {this.state.details.dest}</p>
            <p>Date: {this.state.details.date}</p>
            <p>Terms Accepted: {this.state.details.terms ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    );
  }
}

// Parent Component in which we are passing both the controlled and uncontrolled components
function ParentApp() {
  return (
    <div className="container mt-4">
      <div className="row">
        <FlightBookingControlled />
        <FlightBookingUncontrolled />
      </div>
    </div>
  );
}

export default ParentApp;
