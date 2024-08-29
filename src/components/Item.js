import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="huesos"></img>
      </div>
    );
  }
}

export default Item;
