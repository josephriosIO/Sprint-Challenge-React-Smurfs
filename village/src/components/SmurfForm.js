import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.smurf
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.props.addSmurfForm(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        height: "",
        age: ""
      }
    });
  };

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  render() {
    const { name, age, height } = this.state.smurf;
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
