import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import EachSmurf from "./components/EachSmurf";

import axios from "axios";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      active: false,
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  addSmurfForm = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res =>
        this.setState({ smurfs: res.data }, this.props.history.push("/"))
      )
      .catch(err => console.log(err));
  };

  changeSmurf = smurf => {
    axios
      .put(`http://localhost:3333/smurfs/${this.state.smurf.id}`, smurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
    this.props.history.push("/");
  };

  smurfUpdate = (e, id) => {
    e.preventDefault();
    this.setState({
      smurf: this.state.smurfs.find(smurf => smurf.id === id),
      active: true
    });
    this.props.history.push("/smurf-form");
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Form</NavLink>
        </div>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              smurfs={this.state.smurfs}
              active={this.state.active}
              changeSmurf={this.changeSmurf}
              smurf={this.state.smurf}
              {...props}
              addSmurfForm={this.addSmurfForm}
            />
          )}
        />

        <Route
          path="/smurf/:id"
          render={props => (
            <EachSmurf
              smurfUpdate={this.smurfUpdate}
              {...props}
              smurfs={this.state.smurfs}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
