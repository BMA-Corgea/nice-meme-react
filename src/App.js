import React, { Component } from "react";
import "./App.css";
import { StatefulMeme } from "./react-parts/StatefulMeme.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatefulMeme />
      </div>
    );
  }
}

export default App;
