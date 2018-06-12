import React from "react";

export class SelectTheMeme extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let memeValue = e.target.value;

    this.props.onChange(memeValue);
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option>Nice meme</option>

          <option>Suck it</option>

          <option>Consume pant</option>
        </select>
      </div>
    );
  }
}
