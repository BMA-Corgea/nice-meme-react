import React from "react";
import { firebasePictures } from "../pictures/firebase-pictures.js";

export class LootBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleUnlock = this.handleUnlock.bind(this);
    this.showContents = this.showContents.bind(this);
  }

  handleUnlock() {
    this.props.onClick("unlocked");
  }

  showContents() {
    if (this.props.openStatus === "locked") {
      return (
        <img
          src={firebasePictures.chest}
          onClick={this.handleUnlock}
          alt="loot box"
          className="closedLootBox"
        />
      );
    } else if (this.props.openStatus === "unlocked") {
      return <div>{this.props.contents}</div>;
    }
  }

  render() {
    return <div className="lootBox">{this.showContents()}</div>;
  }
}
