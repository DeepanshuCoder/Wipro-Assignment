import React from "react";

class Car extends React.Component {
    render() {
        const { brand, model, color, year } = this.props; // oject destructuring
        return (
            <div>
                <h2>Car Details</h2>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
            </div>
        );
    }
}

export default Car;