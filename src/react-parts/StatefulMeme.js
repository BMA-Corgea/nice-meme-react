import React from "react";
import { ChangeTheName } from "./ChangeTheName.js";
import { SelectTheMeme } from "./SelectTheMeme.js";
import { ItemHolder } from "./ItemHolder.js";
import { ItemPictureGallery } from "./ItemPictureGallery.js";
import { ImageElement } from "./ImageElement.js";

export class StatefulMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dabberton",
      meme: "Nice meme"
    };
    this.changeTitleName = this.changeTitleName.bind(this);
    this.changeTitleMeme = this.changeTitleMeme.bind(this);
  }

  changeTitleName(newTitleName) {
    this.setState({
      name: newTitleName
    });
  }

  changeTitleMeme(newTitleMeme) {
    this.setState({
      meme: newTitleMeme
    });
  }

  render() {
    var starStack = [
      "../pictures/happy-placeholder-star.jpg",
      "../pictures/unhappy-placeholder-star.jpg"
    ];

    return (
      <div>
        <h1>
          {this.state.meme}, Mr. {this.state.name}!
        </h1>
        <h1>______________________________</h1>
        <ChangeTheName name={this.state.name} onClick={this.changeTitleName} />
        <br />
        <br />
        <h1>______________________________</h1>
        <SelectTheMeme meme={this.state.meme} onChange={this.changeTitleMeme} />
        <br />
        <br />
        <h1>______________________________</h1>
        <ItemHolder />
        <br />
        <br />
        <h1>______________________________</h1>
        <ItemPictureGallery URLStack={starStack} />
        <br />
        <br />
        <h1>______________________________</h1>
        <ImageElement image="https://i.imgur.com/R85CSNg.jpg" />
        <br />
        <br />
        <h1>______________________________</h1>
        <ImageElement
          image="../pictures/happy-placeholder-star.jpg"
          alt="picture"
        />
      </div>
    );
  }
}
