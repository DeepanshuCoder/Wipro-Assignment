import React from "react";

class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fruits: ["Apple", "Banana"], newFruit: "" };
  }

  // handle the input change or using the (e.target.value) to fetch the fruits value
  handleChange = (e) => {
    this.setState({ newFruit: e.target.value });
  };

  // add new fruit & using the spread operator
  addFruit = () => {
    if (this.state.newFruit.trim() !== "") {
      this.setState((prev) => ({
        fruits: [...prev.fruits, prev.newFruit],
        newFruit: ""
      }));
    }
  };

  render() {
    return (
      <div>
        <h2>Fruit List App</h2>
        <input
          type="text"
          value={this.state.newFruit}
          onChange={this.handleChange}
          placeholder="Enter fruit"
        />
        <button onClick={this.addFruit}>Add</button>
        {/* Passes the  fruits to child */}
        <FruitList fruits={this.state.fruits} />
      </div>
    );
  }
}

//Here I'm displays the fruits
function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
}

export default Fruits;
