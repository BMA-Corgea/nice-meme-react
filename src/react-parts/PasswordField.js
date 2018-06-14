import React from "react";

export class PasswordField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      lock: "locked"
    };

    this.submitPassword = this.submitPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showContents = this.showContents.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submitPassword(event) {
    if (this.state.value === this.props.password) {
      this.setState({ lock: "unlocked" });
    }
    event.preventDefault();
  }

  showContents() {
    if (this.state.lock === "unlocked") {
      return this.props.children;
    }
  }

  showPassword() {
    if (this.state.lock === "locked") {
      return (
        <form>
          Password: <input type="text" onChange={this.handleChange} />
          <button onClick={this.submitPassword}>Submit password</button>
        </form>
      );
    }
  }

  render() {
    return (
      <div>
        {this.showPassword()}
        {this.showContents()}
      </div>
    );
  }
}
