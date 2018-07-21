import React, { Component } from "react";
import "./InputFieldStyleSheet.css";

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isShown) {
      return (
        <div className="cardEditorTemplate">
          <textarea className="cardInputTextArea"/>
        </div>
      );
    } else {
      return <div />;
    }
  }

  checkInputField = () => {

  };
}
