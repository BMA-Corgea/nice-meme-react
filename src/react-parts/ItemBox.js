import React from "react";
import { ItemPictureGallery } from "./ItemPictureGallery.js";
import { PriceTag } from "./PriceTag.js";

export class ItemBox extends React.Component {
  render() {
    return (
      <div className="standardItem">
        <h3>{this.props.itemTitle}</h3>
        <ItemPictureGallery
          URLStack={this.props.URLStack}
          keyFigure={this.props.keyFigure}
        />
        <h3>{this.props.galleryDesc}</h3>
        <PriceTag price={this.props.price} region={this.props.region} />
      </div>
    );
  }
}
