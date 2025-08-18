import React, { Component } from "react";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "", director: "", year: "", genre: "Action",
      rating: "", desc: "", platforms: [],
      movies: [], show: true
    };
    console.log("constructor executed");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps executed");
    return null;
  }

  componentDidMount() { console.log("componentDidMount executed"); }
  shouldComponentUpdate() { console.log("shouldComponentUpdate executed"); return true; }
  getSnapshotBeforeUpdate() { console.log("getSnapshotBeforeUpdate executed"); return null; }
  componentDidUpdate() { console.log("componentDidUpdate executed"); }
  componentWillUnmount() { console.log("componentWillUnmount executed"); }

  // handle input change & and also using the condition otherwise it printed the value infinite times (looping)
  handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState(prev => ({
        platforms: checked
          ? [...prev.platforms, value]
          : prev.platforms.filter(p => p !== value)
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  // handle form submit with array of object
  handleSubmit = e => {
    e.preventDefault();
    const { title, director, year, genre, rating, desc, platforms } = this.state;
    this.setState(prev => ({
      movies: [...prev.movies, { title, director, year, genre, rating, desc, platforms }],
      title: "", director: "", year: "", genre: "Action", rating: "", desc: "", platforms: []
    }));
  };

  render() {
    console.log("render executed");
    if (!this.state.show) return <button onClick={() => this.setState({ show: true })}>Show Form</button>;
    return (
      <div className="container mt-3">
        <button className="btn btn-secondary mb-3" onClick={() => this.setState({ show: false })}>Unmount Form</button>
        <div className="card p-3">
          <h4>Add Movie</h4>
          <form onSubmit={this.handleSubmit}>
            <input className="form-control mb-2" name="title" placeholder="Movie Title" value={this.state.title} onChange={this.handleChange} />
            <input className="form-control mb-2" name="director" placeholder="Director" value={this.state.director} onChange={this.handleChange} />
            <input className="form-control mb-2" type="number" name="year" placeholder="Release Year" value={this.state.year} onChange={this.handleChange} />
            <select className="form-control mb-2" name="genre" value={this.state.genre} onChange={this.handleChange}>
              <option>Action</option><option>Comedy</option><option>Drama</option>
              <option>Sci-Fi</option><option>Horror</option>
            </select>
            <div className="mb-2">
              Rating: {[1,2,3,4,5].map(r => (
                <label key={r} className="me-2">
                  <input type="radio" name="rating" value={r} checked={this.state.rating===String(r)} onChange={this.handleChange}/> {r}
                </label>
              ))}
            </div>
            <textarea className="form-control mb-2" name="desc" placeholder="Description" value={this.state.desc} onChange={this.handleChange}/>
            <div className="mb-2">
              {["Netflix","Amazon Prime","Disney+","Others"].map(p => (
                <label key={p} className="me-2">
                  <input type="checkbox" value={p} checked={this.state.platforms.includes(p)} onChange={this.handleChange}/> {p}
                </label>
              ))}
            </div>
            <button className="btn btn-primary">Add Movie</button>
          </form>
        </div>

        <table className="table mt-3">
          <thead><tr><th>Title</th><th>Director</th><th>Year</th><th>Genre</th><th>Rating</th><th>Platforms</th></tr></thead>
          <tbody>
            {this.state.movies.map((m,i) => (
              <tr key={i}>
                <td>{m.title}</td><td>{m.director}</td><td>{m.year}</td>
                <td>{m.genre}</td><td>{m.rating}</td><td>{m.platforms.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieForm;
