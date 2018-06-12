import React from "react";
import { ItemBox } from "./ItemBox.js";

export class ItemHolder extends React.Component {
  render() {
    return (
      <div id="holder-of-items">
        <ItemBox itemName="DabBot" itemDesc="A robotic arm that dabs" />
      </div>
    );
  }
}
