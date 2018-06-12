import React from "react";

export class ItemBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="standardItem">
          <h1>{this.props.itemName}</h1>
          <img
            src={require("../pictures/happy-placeholder-star.jpg")}
            alt="Happy Placeholder Star"
            title="Dont mind me, Im just a happy star UwU"
          />
          <p>{this.props.itemDesc}</p>
        </div>
        <br /> <br />
        <br />
      </div>
    );
  }
}
