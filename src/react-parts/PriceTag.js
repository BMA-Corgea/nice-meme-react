import React from "react";

export class PriceTag extends React.Component {
  render() {
    let regionModifier;

    if (this.props.region === "America") {
      regionModifier = 1;
    } else if (this.props.region === "Canada") {
      regionModifier = 1.2;
    } else if (this.props.region === "Bitcoin") {
      regionModifier = 0.000154;
    } else if (this.props.region === "Basement") {
      regionModifier = 10;
    }

    let regionCurrency;

    if (this.props.region === "America") {
      regionCurrency = "Dollars";
    } else if (this.props.region === "Canada") {
      regionCurrency = "Syrup Coins";
    } else if (this.props.region === "Bitcoin") {
      regionCurrency = "Bitcoin";
    } else if (this.props.region === "Basement") {
      regionCurrency = "Good Boy Points";
    }

    return (
      <div>
        <h3>
          {parseFloat(this.props.price) * regionModifier} {regionCurrency}
        </h3>
      </div>
    );
  }
}
