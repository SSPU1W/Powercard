import React, { Component } from "react";
import "./App.css";
import InputField from "./InputField.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    this.setState({ show: true });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Powercard Finder</h2>
        </div>
        <div className="App-intro">
          <button onClick={this.toggleDiv}>New Powercard</button>
          <InputField isShown={this.state.show} />
        </div>
      </div>
    );
  }
}

export default App;
