import React, { Component } from "react";
import "./App.css";
import { StatefulMeme } from "./react-parts/StatefulMeme.js";
import { FrontPagePrototype } from "./react-parts/FrontPagePrototype.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRender: 0,
      whichRender: 0
    };

    this.decideRender = this.decideRender.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeWhichRender = this.changeWhichRender.bind(this);
  }

  decideRender() {
    if (Number(this.state.whichRender) === 0) {
      return <StatefulMeme />;
    } else if (Number(this.state.whichRender) === 1) {
      return <FrontPagePrototype />;
    } else {
      console.log(this.state.whichRender + " is not 0 or 1");
      return (
        <div>
          <h3>Wrong number, dummy!</h3>
        </div>
      );
    }
  }

  handleClick(event) {
    this.changeWhichRender(this.state.currentRender);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ currentRender: event.target.value });
  }

  changeWhichRender(renderNumber) {
    this.setState({
      whichRender: renderNumber
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          Which page to select:{" "}
          <input type="number" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Decide Page</button>
        </form>
        {this.decideRender()}
      </div>
    );
  }
}

export default App;
