import React from "react";
import { ChangeTheName } from "./ChangeTheName.js";
import { SelectTheMeme } from "./SelectTheMeme.js";
import { ItemHolder } from "./ItemHolder.js";
import { ItemPictureGallery } from "./ItemPictureGallery.js";
import { ImageElement } from "./ImageElement.js";
import { firebasePictures } from "../pictures/firebase-pictures.js";
import { ItemBox } from "./ItemBox.js";
import { PriceTag } from "./PriceTag.js";
import { RegionSelecter } from "./RegionSelecter.js";
import { PasswordField } from "./PasswordField.js";
import { ChildList } from "./ChildList.js";

export class StatefulMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dabberton",
      meme: "Nice meme",
      region: "America"
    };
    this.changeTitleName = this.changeTitleName.bind(this);
    this.changeTitleMeme = this.changeTitleMeme.bind(this);
    this.changeRegionMeme = this.changeRegionMeme.bind(this);
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

  changeRegionMeme(newRegionMeme) {
    this.setState({
      region: newRegionMeme
    });
  }

  render() {
    const starStack = [
      firebasePictures.happyStar,
      firebasePictures.unhappyStar,
      firebasePictures.crezyStar
    ];

    const karaPics = [
      firebasePictures.karaWithoutBeanie,
      firebasePictures.karaWithBeanie
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
        <ImageElement
          image={firebasePictures.happyStar}
          alt="picture"
          desc="This is from Firebase"
        />
        <h1>______________________________</h1>
        <ItemPictureGallery URLStack={starStack} keyFigure="star" />
        <br />
        <br />
        <h1>______________________________</h1>
        <ItemBox
          URLStack={starStack}
          keyFigure="star"
          galleryDesc="These are pictures of Starboy in various moods"
          itemTitle="Starboy"
          price="1400"
          region={this.state.region}
        />
        <br />
        <br />
        <h1>______________________________</h1>
        <PriceTag price="50.50" region={this.state.region} />
        <br />
        <br />
        <h1>______________________________</h1>
        <h3>Where are you from?</h3>
        <RegionSelecter onChange={this.changeRegionMeme} />
        <br />
        <br />
        <h1>______________________________</h1>
        <PasswordField password="Meme">
          <h3>Hello World</h3>
        </PasswordField>
        <br />
        <br />
        <h1>______________________________</h1>
        <h3>Unlock Kara</h3>
        <PasswordField password="Kara">
          <ItemBox
            URLStack={karaPics}
            keyFigure="Cute"
            galleryDesc="These are pictures of Kara from Detroit: Become Human"
            itemTitle="AX400 (Kara android from Detroit: Become Human)"
            price="1337"
            region={this.state.region}
          />
        </PasswordField>
        <br />
        <br />
        <h1>______________________________</h1>
        <ChildList />
        <br />
        <br />
      </div>
    );
  }
}
