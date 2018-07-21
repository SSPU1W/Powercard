import React, { Component } from "react";

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isShown) {
      return (
        <div>
          <form onSubmit={this.checkInputField()}>
            <label class="form-input-title">Input Power Card Text</label>
            <input class="form-input" type="text" />
            <label class="form-label-title">Black Card</label>
            <input class="form-radio-button" type="radio" name="CardSelector" />
            <label class="form-label-title">White Card</label>
            <input class="form-radio-button" type="radio" name="CardSelector" />
            <input type="submit" />
          </form>
        </div>
      );
    } else {
      return <div />;
    }
  }

  checkInputField = () => {};
}
