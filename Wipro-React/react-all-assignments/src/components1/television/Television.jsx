import React from "react";

class TelevisionManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { models: ["Samsung", "LG"], newModel: "" };
    }

    // handle input change as well as using the (e.target.value) to fetch the models values
    handleChange = (e) => {
        this.setState({ newModel: e.target.value });
    };

    // add new model using spread operator
    addModel = () => {
        if (this.state.newModel.trim() !== "") {
            this.setState((prev) => ({
                models: [...prev.models, prev.newModel],
                newModel: ""
            }));
        }
    };

    render() {
        return (
            <div>
                <h2>Television Manager</h2>
                <input
                    type="text"
                    value={this.state.newModel}
                    onChange={this.handleChange}
                    placeholder="Enter TV model"
                />
                <button onClick={this.addModel}>Add</button>

                {/* Passes al the models to the child */}
                <TelevisionList models={this.state.models} />
            </div>
        );
    }
}

// here I'm displays the TV models
function TelevisionList({ models }) {
    return (
        <ul>
            {models.map((m, i) => (
                <li key={i}>{m}</li>
            ))}
        </ul>
    );
}

export default TelevisionManager;
