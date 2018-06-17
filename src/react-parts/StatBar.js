import React from "react";

export class StatBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childElements: []
    };

    this.pushToState = this.pushToState.bind(this);
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

  render() {
    return (
      <div className="stat-bar">
        <ul>{this.state.childElements}</ul>
      </div>
    );
  }
}
