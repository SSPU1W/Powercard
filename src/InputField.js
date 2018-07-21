import React, { Component } from "react";
import "./InputFieldStylesheet.css";

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { cardType: "White" };
  }

  render() {
    if (this.props.isShown) {
      if (this.state.cardType == "White") {
        return (
        <div className="cardLight cardEditorTemplate">
          <textarea className="cardLight cardInputTextArea" placeholder="Enter card..."/>
          <div className="cardLight cardSelectorOptionArea">
            <div className="cardLight cardSelector" id="whiteSelector" onClick={this.handleCardChange.bind(this, "White")}>White</div>
            <div className="cardLight cardSelector" id="blackSelector" onClick={this.handleCardChange.bind(this, "Black")}>Black</div>
            <div className="cardLight cardSelector" id="submitSelector" onClick={this.handleCardChange.bind(this, "Submit")}>Submit</div>
          </div>
        </div>
        );
      }
      else {
        return (
        <div className="cardDark cardEditorTemplate">
          <textarea className="cardDark cardInputTextArea" placeholder="Enter card..."/>
          <div className="cardDark cardSelectorOptionArea">
            <div className="cardDark cardSelector" id="whiteSelector" onClick={this.handleCardChange.bind(this, "White")}>White</div>
            <div className="cardDark cardSelector" id="blackSelector" onClick={this.handleCardChange.bind(this, "Black")}>Black</div>
            <div className="cardDark cardSelector" id="submitSelector" onClick={this.handleCardChange.bind(this, "Submit")}>Submit</div>
          </div>
        </div>
        )
      }
    } else {
      return <div />;
    }
  }

  handleCardChange(cardType) {
    console.log("Card change");
    if (cardType === "White") {
      this.setState({cardType: "White"});
      console.log("White");
    }
    else if (cardType === "Black") {
      this.setState({cardType: "Black"});
      console.log("Black");
    }
  }
}
