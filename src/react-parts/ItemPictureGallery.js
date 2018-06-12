import React from "react";

export class ItemPictureGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      URLElements: []
    };

    this.parseURLs = this.parseURLs.bind(this);
    this.createElementForPicture = this.createElementForPicture.bind(this);
  }

  parseURLs(URLArray) {
    for (let URLIndex = 0; URLIndex < URLArray.length; URLIndex++) {
      this.state.URLElements.push(
        this.createElementForPicture(URLArray[URLIndex])
      );
    }
  }

  createElementForPicture(URL) {
    return "<img src={require('" + URL + "')} />";
  }

  componentWillMount() {
    console.log("wow");
  }

  render() {
    this.parseURLs(this.props.URLStack);

    console.log(this.state.URLElements);

    for (
      let elementIndex = 0;
      elementIndex < this.state.URLElements.length;
      elementIndex++
    ) {
      console.log(this.state.URLElements[elementIndex]);
    }

    let TestImage = this.state.URLElements[0];
    let OtherTestImage = (
      <img src={require("../pictures/happy-placeholder-star.jpg")} />
    );

    return (
      <div>
        {this.createElementForPicture("../pictures/happy-placeholder-star.jpg")}
        <img src={require("../pictures/happy-placeholder-star.jpg")} />
        <img src={require("../pictures/unhappy-placeholder-star.jpg")} />
        {OtherTestImage}
        <div>{TestImage}</div>
      </div>
    );
  }
}
