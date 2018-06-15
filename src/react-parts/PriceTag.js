import React from "react";

export class PriceTag extends React.Component {
  //The props for this component are region and price
  render() {
    let regionModifier;
    let regionFixedFloat;
    let regionCurrency;

    if (this.props.region === "America") {
      regionModifier = 1;
    } else if (this.props.region === "Canada") {
      regionModifier = 1.2;
    } else if (this.props.region === "Bitcoin") {
      regionModifier = 0.000154;
    } else if (this.props.region === "Basement") {
      regionModifier = 10;
    }

    if (this.props.region === "America") {
      regionCurrency = "Dollars";
      regionFixedFloat = 2;
    } else if (this.props.region === "Canada") {
      regionCurrency = "Syrup Coins";
      regionFixedFloat = 2;
    } else if (this.props.region === "Bitcoin") {
      regionCurrency = "Bitcoin";
      regionFixedFloat = 6;
    } else if (this.props.region === "Basement") {
      regionCurrency = "Good Boy Points";
      regionFixedFloat = 2;
    }

    return (
      <div>
        <h3>
          {(parseFloat(this.props.price) * regionModifier).toFixed(
            regionFixedFloat
          )}{" "}
          {regionCurrency}
        </h3>
      </div>
    );
  }
}
