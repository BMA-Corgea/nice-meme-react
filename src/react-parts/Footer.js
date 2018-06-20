import React from "react";

export class Footer extends React.Component {
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
          <li key={elementIndex++} className="footer-children">
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
      <div className="footer">
        <ul>{this.state.childElements}</ul>
      </div>
    );
  }
}
