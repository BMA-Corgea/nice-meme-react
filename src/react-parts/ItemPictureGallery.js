import React from "react";
import { ImageElement } from "./ImageElement.js";

export class ItemPictureGallery extends React.Component {
  //The props for this component are URLStack and keyFigure
  constructor(props) {
    super(props);

    this.state = {
      URLElements: [],
      visiblePictureId: 0
    };
    this.fillState = this.fillState.bind(this);
    this.increaseVisiblePicture = this.increaseVisiblePicture.bind(this);
    this.reduceVisiblePicture = this.reduceVisiblePicture.bind(this);
  }

  fillState = () => {
    for (
      let imageIndex = 0;
      imageIndex < this.props.URLStack.length;
      imageIndex++
    ) {
      this.state.URLElements.push(
        <ImageElement
          image={this.props.URLStack[imageIndex]}
          key={imageIndex + this.props.keyFigure}
        />
      );
    }
  };

  increaseVisiblePicture() {
    if (this.state.visiblePictureId < this.state.URLElements.length - 1) {
      this.setState({ visiblePictureId: this.state.visiblePictureId + 1 });
    } else {
      this.setState({ visiblePictureId: 0 });
    }
  }

  reduceVisiblePicture() {
    if (this.state.visiblePictureId === 0) {
      this.setState({ visiblePictureId: this.state.URLElements.length - 1 });
    } else if (this.state.visiblePictureId < this.state.URLElements) {
      this.setState({ visiblePictureId: this.state.visiblePictureId - 1 });
    } else {
      this.setState({ visiblePictureId: this.state.visiblePictureId - 1 });
    }
  }

  componentWillMount() {
    this.fillState();
  }

  render() {
    return (
      <div>
        {this.state.URLElements[this.state.visiblePictureId]}
        <h3>
          {this.state.visiblePictureId + 1} of {this.state.URLElements.length}
        </h3>
        <button onClick={this.reduceVisiblePicture}>Previous picture</button>
        <button onClick={this.increaseVisiblePicture}>Next picture</button>
      </div>
    );
  }
}
