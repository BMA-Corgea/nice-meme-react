import React from "react";

export class StatBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childElements: [],
      hideStatus: "unhidden"
    };

    this.pushToState = this.pushToState.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleUnhide = this.handleUnhide.bind(this);
    this.hideFunctionality = this.hideFunctionality.bind(this);
  }

  pushToState() {
    let elementIndex = 0;

    this.setState({
      childElements: this.props.children.map(child => {
        return (
          <li key={elementIndex++} className="stat-children">
            {child}
          </li>
        );
      })
    });
  }

  componentWillMount() {
    this.pushToState();
  }

  hideFunctionality() {
    if (this.state.hideStatus === "unhidden") {
      return (
        <div>
          <ul>{this.state.childElements}</ul>
          <br />
          <button onClick={this.handleHide}>Hide Stat Bar</button>
        </div>
      );
    } else if (this.state.hideStatus === "hidden") {
      return (
        <div>
          <button onClick={this.handleUnhide}>Unhide Stat Bar</button>
        </div>
      );
    }
  }

  handleHide() {
    this.setState({
      hideStatus: "hidden"
    });
  }

  handleUnhide() {
    this.setState({
      hideStatus: "unhidden"
    });
  }

  render() {
    return <div className="stat-bar">{this.hideFunctionality()}</div>;
  }
}
