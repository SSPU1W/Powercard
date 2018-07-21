import React, { Component } from "react";
import "./App.css";
import InputField from "./InputField.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Powercard Finder</h2>
        </div>
        <div className="App-intro">
          <InputField isShown={this.state.show} />
        </div>
      </div>
    );
  }
}

export default App;
