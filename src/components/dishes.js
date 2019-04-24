import React, { Component } from "react";
import { GridList } from "@material-ui/core";

import Dish from "./dish.js";

export class Dishes extends Component {
  goBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };
  
  render() {
    return (
      <div>
        <GridList>
          {this.props.dishes.map((dish, index) => (
            <Dish key={index} {...dish} />
          ))}
        </GridList>
      </div>
    );
  }
}

export default Dishes;
