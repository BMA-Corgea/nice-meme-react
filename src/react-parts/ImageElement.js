import React from "react";

export class ImageElement extends React.Component {
  render() {
    return (
      <div>
        <img className="image" src={this.props.image} alt="fuck" />
        <h3>This is the image element</h3>
      </div>
    );
  }
}
