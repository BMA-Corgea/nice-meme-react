import React from "react";
import { firebasePictures } from "../pictures/firebase-pictures.js";
import { LootBox } from "./LootBox.js";

export class LootBoxHolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      box1: 0,
      box2: 0,
      box3: 0,
      box4: 0,
      box5: 0,
      box1box: "locked",
      box2box: "locked",
      box3box: "locked",
      box4box: "locked",
      box5box: "locked",
      boxAmount: 10,
      currentBoxQuantity: 0
    };

    this.determineQuality = this.determineQuality.bind(this);
    this.showBox = this.showBox.bind(this);
    this.setBoxStates = this.setBoxStates.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleZeroBoxes = this.handleZeroBoxes.bind(this);
    this.handleBoxBuy = this.handleBoxBuy.bind(this);
    this.buyBoxChange = this.buyBoxChange.bind(this);
    this.rebox = this.rebox.bind(this);
    this.handleUnlockStateOne = this.handleUnlockStateOne.bind(this);
    this.handleUnlockStateTwo = this.handleUnlockStateTwo.bind(this);
    this.handleUnlockStateThree = this.handleUnlockStateThree.bind(this);
    this.handleUnlockStateFour = this.handleUnlockStateFour.bind(this);
    this.handleUnlockStateFive = this.handleUnlockStateFive.bind(this);
    this.unlockAllBoxes = this.unlockAllBoxes.bind(this);
  }

  determineQuality() {
    let boxQuality = Math.floor(Math.random() * 100 + 1);

    return boxQuality;
  }

  showBox(boxQualityValue) {
    let boxSrc;
    let boxAlt;

    if (boxQualityValue < 40) {
      this.boxSrc = firebasePictures.gray;
      this.boxAlt = "gray";
    } else if (40 <= boxQualityValue && boxQualityValue < 65) {
      this.boxSrc = firebasePictures.green;
      this.boxAlt = "green";
    } else if (65 <= boxQualityValue && boxQualityValue < 85) {
      this.boxSrc = firebasePictures.blue;
      this.boxAlt = "blue";
    } else if (85 <= boxQualityValue && boxQualityValue < 95) {
      this.boxSrc = firebasePictures.purple;
      this.boxAlt = "purple";
    } else if (95 <= boxQualityValue) {
      this.boxSrc = firebasePictures.orange;
      this.boxAlt = "orange";
    }

    return <img src={this.boxSrc} alt={this.boxAlt} title={boxQualityValue} />;
  }

  setBoxStates() {
    this.setState({
      box1: this.showBox(this.determineQuality()),
      box2: this.showBox(this.determineQuality()),
      box3: this.showBox(this.determineQuality()),
      box4: this.showBox(this.determineQuality()),
      box5: this.showBox(this.determineQuality())
    });
  }

  handleClick() {
    if (
      this.state.box1box === "unlocked" &&
      this.state.box2box === "unlocked" &&
      this.state.box3box === "unlocked" &&
      this.state.box4box === "unlocked" &&
      this.state.box5box === "unlocked"
    ) {
      if (this.state.boxAmount >= 1) {
        this.setState({
          boxAmount: this.state.boxAmount - 1
        });

        this.rebox();
        this.setBoxStates();
      }
    } else {
      alert("Will you please unlock all your boxes first?");
    }
  }

  rebox() {
    this.setState({
      box1box: "locked",
      box2box: "locked",
      box3box: "locked",
      box4box: "locked",
      box5box: "locked"
    });
  }

  componentWillMount() {
    this.setBoxStates();
  }

  handleZeroBoxes() {
    if (this.state.boxAmount === 0) {
      return <h3>Youre out of boxes, broke boi</h3>;
    } else {
      return <button onClick={this.handleClick}>Another Set of Boxes</button>;
    }
  }

  handleBoxBuy(event) {
    if (Number(this.props.wallet) >= Number(this.state.currentBoxQuantity)) {
      this.buyBoxes(this.state.currentBoxQuantity);
      this.props.onClick(this.state.currentBoxQuantity);
      event.preventDefault();
    } else {
      console.log(
        "The amount of boxes is " +
          this.state.currentBoxQuantity +
          " and the amount of wallet is " +
          this.props.wallet
      );
      alert("Give me more money, broke boi!");
      event.preventDefault();
    }
  }

  buyBoxChange(event) {
    this.setState({
      currentBoxQuantity: event.target.value
    });
  }

  buyBoxes() {
    this.setState({
      boxAmount:
        Number(this.state.boxAmount) + Number(this.state.currentBoxQuantity)
    });
  }

  handleUnlockStateOne() {
    this.setState({
      box1box: "unlocked"
    });
  }

  handleUnlockStateTwo() {
    this.setState({
      box2box: "unlocked"
    });
  }

  handleUnlockStateThree() {
    this.setState({
      box3box: "unlocked"
    });
  }

  handleUnlockStateFour() {
    this.setState({
      box4box: "unlocked"
    });
  }

  handleUnlockStateFive() {
    this.setState({
      box5box: "unlocked"
    });
  }

  unlockAllBoxes() {
    this.setState({
      box1box: "unlocked",
      box2box: "unlocked",
      box3box: "unlocked",
      box4box: "unlocked",
      box5box: "unlocked"
    });
  }

  render() {
    return (
      <div>
        <LootBox
          contents={this.state.box1}
          openStatus={this.state.box1box}
          onClick={this.handleUnlockStateOne}
        />
        <LootBox
          contents={this.state.box2}
          openStatus={this.state.box2box}
          onClick={this.handleUnlockStateTwo}
        />
        <LootBox
          contents={this.state.box3}
          openStatus={this.state.box3box}
          onClick={this.handleUnlockStateThree}
        />
        <LootBox
          contents={this.state.box4}
          openStatus={this.state.box4box}
          onClick={this.handleUnlockStateFour}
        />
        <LootBox
          contents={this.state.box5}
          openStatus={this.state.box5box}
          onClick={this.handleUnlockStateFive}
        />
        <br />
        <h3>The amount of boxes remaining is: {this.state.boxAmount}</h3>
        {this.handleZeroBoxes()}
        <button onClick={this.unlockAllBoxes}>Unlock All Boxes</button>
        <br />
        <form>
          Amount of boxes to buy:{" "}
          <input type="number" onChange={this.buyBoxChange} />
          <button onClick={this.handleBoxBuy}>Buy boxes</button>
        </form>
      </div>
    );
  }
}
