import React from "react";
import { firebasePictures } from "../pictures/firebase-pictures.js";

export class MoreOptionsTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      triangleClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleUnclick = this.handleUnclick.bind(this);
    this.triangleClick = this.triangleClick.bind(this);
  }

  handleClick() {
    this.setState({
      triangleClicked: true
    });
  }

  handleUnclick() {
    this.setState({
      triangleClicked: false
    });
  }

  triangleClick() {
    if (this.state.triangleClicked) {
      return (
        <div>
          <img
            src={firebasePictures.HighlightedTriangle}
            onClick={this.handleUnclick}
            alt="highlighted triangle"
          />
          <br />
          <div className="moreOptions">{this.props.children}</div>
        </div>
      );
    } else {
      return (
        <img
          src={firebasePictures.UnhighlightedTriangle}
          onClick={this.handleClick}
          alt="unhighlighted triangle"
        />
      );
    }
  }

  render() {
    return (
      <div className="moreOptionsTag">
        <h3>{this.props.text}</h3>
        {this.triangleClick()}
      </div>
    );
  }
}
