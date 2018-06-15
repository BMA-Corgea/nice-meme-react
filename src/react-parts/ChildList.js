import React from "react";

export class ChildList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      currentInput: "",
      listIndex: 0,
      liCompoenents: []
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitListItem = this.submitListItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  inputChange(event) {
    this.setState({ currentInput: event.target.value });
  }

  submitListItem(event) {
    this.state.listItems.push(this.state.currentInput);
    event.preventDefault();

    this.setState({
      listIndex: this.state.listIndex + 1
    });

    this.state.liCompoenents.push(
      <li key={this.state.listIndex}>{this.state.currentInput}</li>
    );
  }

  clearList() {
    this.setState({
      liCompoenents: [],
      listIndex: 0
    });
  }

  render() {
    return (
      <div>
        <h3>Hi</h3>
        <form>
          List Item: <input type="text" onChange={this.inputChange} />
          <button onClick={this.submitListItem}>Submit List Item</button>
        </form>
        <ul>{this.state.liCompoenents}</ul>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    );
  }
}
