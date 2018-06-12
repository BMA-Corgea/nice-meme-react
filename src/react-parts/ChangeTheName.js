import React from "react";

export class ChangeTheName extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let nameValue = document.getElementById("nameInput").value;

    if (nameValue === "") {
      alert(`Enter a name!!!!!!!!!`);
    } else {
      //      alert(`Hello Mr. ` + nameValue + `!`);
      this.props.onClick(nameValue);
    }
  }

  render() {
    return (
      <div>
        Name: <input type="text" id="nameInput" /> <br />
        <br />
        <button onClick={this.handleSubmit} className="standardButton">
          Submit
        </button>
      </div>
    );
  }
}
