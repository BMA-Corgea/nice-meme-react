import React from "react";
import { ItemBox } from "./ItemBox.js";

export class SubpageButton extends React.Component {
  //This component needs props itemTitle, URLStack, keyFigure, galleryDesc, and onClick

  render() {
    return (
      <div className="SubpageButton">
        <ItemBox
          URLStack={this.props.URLStack}
          itemTitle={this.props.itemTitle}
          keyFigure={this.props.keyFigure}
          galleryDesc={this.props.galleryDesc}
        />
        <br />
        <button onClick={this.props.onClick}>
          Click here for {this.props.itemTitle}
        </button>
      </div>
    );
  }
}
