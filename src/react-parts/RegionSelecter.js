import React from "react";

export class RegionSelecter extends React.Component {
  //The prop for this component is a function: onChange()
  constructor(props) {
    super(props);

    this.changeRegion = this.changeRegion.bind(this);
  }
  changeRegion(e) {
    let regionValue = e.target.value;

    this.props.onChange(regionValue);
  }

  render() {
    return (
      <div>
        <select onChange={this.changeRegion}>
          <option>America</option>
          <option>Canada</option>
          <option>Bitcoin</option>
          <option>Basement</option>
        </select>
      </div>
    );
  }
}
