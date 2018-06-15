import React from "react";

export class ImageElement extends React.Component {
  //This element needs 3 props: image, alt, and desc
  render() {
    return (
      <div>
        <img className="image" src={this.props.image} alt={this.props.alt} />
        <h3>{this.props.desc}</h3>
      </div>
    );
  }
}
