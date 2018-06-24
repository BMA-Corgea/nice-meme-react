import React from "react";
import { ItemPictureGallery } from "./ItemPictureGallery.js";
import { PriceTag } from "./PriceTag.js";

export class ItemBox extends React.Component {
  constructor(props) {
    super(props);

    this.handlePricing = this.handlePricing.bind(this);
  }

  handlePricing() {
    if (this.props.price && this.props.region) {
      return <PriceTag price={this.props.price} region={this.props.region} />;
    } else {
      return <div />;
    }
  }
  //This component needs props itemTitle, URLStack, keyFigure, galleryDesc, price, and region
  render() {
    return (
      <div className="standardItem">
        <h3>{this.props.itemTitle}</h3>
        <ItemPictureGallery
          URLStack={this.props.URLStack}
          keyFigure={this.props.keyFigure}
        />
        <h3>{this.props.galleryDesc}</h3>
        {this.handlePricing()}
      </div>
    );
  }
}
