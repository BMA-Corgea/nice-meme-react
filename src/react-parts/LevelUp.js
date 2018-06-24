import React from "react";

export class LevelUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleLevelUp = this.handleLevelUp.bind(this);
  }

  handleLevelUp() {
    this.props.onClick(5);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLevelUp}>Level Up</button>
      </div>
    );
  }
}
