import React from "react";

export class PutInFunds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFunds: 0
    };

    this.handleFunds = this.handleFunds.bind(this);
    this.updateCurrentFunds = this.updateCurrentFunds.bind(this);
  }

  handleFunds(event) {
    this.props.onClick(this.state.currentFunds);
    event.preventDefault();
  }

  updateCurrentFunds(event) {
    this.setState({
      currentFunds: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          How many funds to put in?<input
            type="number"
            onChange={this.updateCurrentFunds}
          />
          <button onClick={this.handleFunds}>Insert Funds</button>
        </form>
      </div>
    );
  }
}
