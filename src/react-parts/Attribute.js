import React from "react";

export class Attribute extends React.Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.attributeTitle}: {this.props.attributeMagnitude}
        </h3>
      </div>
    );
  }
}
