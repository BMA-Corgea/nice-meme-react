import React from "react";
import { Footer } from "./Footer.js";
import { firebasePictures } from "../pictures/firebase-pictures.js";
import { NavBar } from "./NavBar.js";
import { SubpageButton } from "./SubpageButton.js";
import { MoreOptionsTag } from "./MoreOptionsTag.js";

export class FrontPagePrototype extends React.Component {
  constructor(props) {
    super(props);

    this.helloWorld = this.helloWorld.bind(this);
  }

  helloWorld() {
    console.log("Hello World!");
  }

  render() {
    return (
      <div className="frontPage">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="frontPageTitle">Black Map Artistry</h1>
        <h3 className="frontPageSubTitle">A new perspective on creativity</h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SubpageButton
          itemTitle="Jiu-Jitsu"
          URLStack={[firebasePictures.orange, firebasePictures.green]}
          keyFigure="BJJ"
          galleryDesc="BJJ is called then gentle art - it is anything but. It will press your presuppositions out of you and leave you in a flow state."
          onClick={this.helloWorld}
        />
        <SubpageButton
          itemTitle="Robotics"
          URLStack={[firebasePictures.orange, firebasePictures.green]}
          keyFigure="Robo"
          galleryDesc="Robots, with their little AI brains are interesting to engineer. If the gears and motors work, then you can be sure that the AI wont."
          onClick={this.helloWorld}
        />
        <SubpageButton
          itemTitle="Auroron"
          URLStack={[firebasePictures.orange, firebasePictures.green]}
          keyFigure="Mana"
          galleryDesc="Auroron is a fantasy world where people use mana and ingenuity to solve problems. Worldbuilding is an expression of creativity in a pure sense of the word."
          onClick={this.helloWorld}
        />
        <SubpageButton
          itemTitle="Blog"
          URLStack={[firebasePictures.orange, firebasePictures.green]}
          keyFigure="Blog"
          galleryDesc="Expressing yourself as a person is a net positive. Even if you dont realize it, your thoughts may resonate with someone else."
          onClick={this.helloWorld}
        />
        <NavBar>
          <h3>Robitcs</h3>
          <h3>Auroron</h3>
          <h3>Jiu-Jitsu</h3>
          <h3>Blog</h3>
          <MoreOptionsTag text="More">
            <h3>About</h3>
            <h3>Summary</h3>
            <h3>Lootboxes</h3>
          </MoreOptionsTag>
        </NavBar>
        <Footer>
          <h3>Facebook</h3>
          <h3>YouTube</h3>
          <h3>Instagram</h3>
          <h3>Twitter</h3>
        </Footer>
      </div>
    );
  }
}
