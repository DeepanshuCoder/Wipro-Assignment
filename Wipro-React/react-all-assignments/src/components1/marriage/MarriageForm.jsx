import React from "react";

// handles marriage form
class MarriageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bride: "", groom: "", date: "", venue: "", submitted: null };
  }

  // handle input change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // here i am handling form submit
  handleSubmit = (e) => {
    e.preventDefault();  // it is prevents from the reloading of the page
    this.setState({
      submitted: {
        bride: this.state.bride,
        groom: this.state.groom,
        date: this.state.date,
        venue: this.state.venue,
      },
    });
  };

  render() {
    return (
      <div className="container mt-4"> 
        <div className="card p-3">
          <h3 className="mb-3">Marriage Form</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mb-2">
              <label>Bride Name</label>
              <input
                type="text"
                className="form-control"
                name="bride"
                value={this.state.bride}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mb-2">
              <label>Groom Name</label>
              <input
                type="text"
                className="form-control"
                name="groom"
                value={this.state.groom}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mb-2">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mb-2">
              <label>Venue</label>
              <input
                type="text"
                className="form-control"
                name="venue"
                value={this.state.venue}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>

        {/* here i am showing the marriageForm submitted details */}
        {this.state.submitted && (
          <div className="card mt-3 p-3">
            <h5>Marriage Details</h5>
            <p>Bride: {this.state.submitted.bride}</p>
            <p>Groom: {this.state.submitted.groom}</p>
            <p>Date: {this.state.submitted.date}</p>
            <p>Venue: {this.state.submitted.venue}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MarriageForm;
