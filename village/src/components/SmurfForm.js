import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.smurf
    };
  }

  addSmurf = event => {
    const { active } = this.props;
    event.preventDefault();
    // add code to create the smurf using the api
    if (active) {
      this.props.changeSmurf(this.state.smurf);
    } else {
      this.props.addSmurfForm(this.state.smurf);
    }

    this.setState({
      smurf: {
        name: "",
        height: "",
        age: "",
        imageUrl: ""
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
    const { name, age, height, imageUrl } = this.state.smurf;
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
          <input
            onChange={this.handleInputChange}
            placeholder="image"
            value={imageUrl}
            name="imageUrl"
          />
          <button type="submit">{`${
            this.props.active ? "update" : "add"
          } smurf`}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
