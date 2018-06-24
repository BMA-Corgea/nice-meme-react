import React from "react";
import { firebasePictures } from "../pictures/firebase-pictures.js";
import { Attribute } from "./Attribute.js";

export class AttributeHolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strengthMagnitude: 1,
      intelligenceMagnitude: 1,
      agilityMagnitude: 1,
      speedMagnitude: 1,
      staminaMagnitude: 1
    };

    this.handleStatAllocation = this.handleStatAllocation.bind(this);
    this.clearStats = this.clearStats.bind(this);
  }

  handleStatAllocation(event) {
    if (this.props.availablePoints >= 1) {
      if (event.target.alt === "Strength") {
        this.setState({
          strengthMagnitude: this.state.strengthMagnitude + 1
        });
      } else if (event.target.alt === "Intelligence") {
        this.setState({
          intelligenceMagnitude: this.state.intelligenceMagnitude + 1
        });
      } else if (event.target.alt === "Agility") {
        this.setState({
          agilityMagnitude: this.state.agilityMagnitude + 1
        });
      } else if (event.target.alt === "Speed") {
        this.setState({
          speedMagnitude: this.state.speedMagnitude + 1
        });
      } else if (event.target.alt === "Stamina") {
        this.setState({
          staminaMagnitude: this.state.staminaMagnitude + 1
        });
      }
      this.props.onClick(this.props.availablePoints - 1);
    } else {
      alert("Broke boi, Im laffin");
    }
  }

  clearStats() {
    let regainedStats =
      this.state.strengthMagnitude +
      this.state.intelligenceMagnitude +
      this.state.agilityMagnitude +
      this.state.speedMagnitude +
      this.state.staminaMagnitude -
      5;

    this.setState({
      strengthMagnitude: 1,
      intelligenceMagnitude: 1,
      agilityMagnitude: 1,
      speedMagnitude: 1,
      staminaMagnitude: 1
    });

    this.props.onClick(this.props.availablePoints + regainedStats);
  }

  render() {
    return (
      <div>
        <h3>Amount of points to allocate: {this.props.availablePoints}</h3>
        <div className="attributeLayout">
          <Attribute
            attributeTitle="Strength"
            attributeMagnitude={this.state.strengthMagnitude}
          />{" "}
          <img
            src={firebasePictures.plusSign}
            onClick={this.handleStatAllocation}
            alt="Strength"
          />
        </div>
        <div className="attributeLayout">
          <Attribute
            attributeTitle="Intelligence"
            attributeMagnitude={this.state.intelligenceMagnitude}
          />{" "}
          <img
            src={firebasePictures.plusSign}
            onClick={this.handleStatAllocation}
            alt="Intelligence"
          />
        </div>
        <div className="attributeLayout">
          <Attribute
            attributeTitle="Agility"
            attributeMagnitude={this.state.agilityMagnitude}
          />{" "}
          <img
            src={firebasePictures.plusSign}
            onClick={this.handleStatAllocation}
            alt="Agility"
          />
        </div>
        <div className="attributeLayout">
          <Attribute
            attributeTitle="Speed"
            attributeMagnitude={this.state.speedMagnitude}
          />{" "}
          <img
            src={firebasePictures.plusSign}
            onClick={this.handleStatAllocation}
            alt="Speed"
          />
        </div>
        <div className="attributeLayout">
          <Attribute
            attributeTitle="Stamina"
            attributeMagnitude={this.state.staminaMagnitude}
          />{" "}
          <img
            src={firebasePictures.plusSign}
            onClick={this.handleStatAllocation}
            alt="Stamina"
          />
        </div>
        <button onClick={this.clearStats}>Clear Stats</button>
      </div>
    );
  }
}
