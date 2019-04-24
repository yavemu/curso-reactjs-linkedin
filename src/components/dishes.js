import React, { Component } from "react";
import {  Button, GridList } from "@material-ui/core";

import data from '../assets/data/dishes.json';
import Dish from "./dish.js";

export class Dishes extends Component {
  goBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };
  
  render() {
    return (
      <div>
        <h1>Platillos</h1>
        <Button variant="contained" color="secondary" onClick={this.goBack}>
          Regresar
        </Button>

        <GridList>
          {data.dishes.map((dish, index) => (
            <Dish key={index} {...dish} />
          ))}
        </GridList>
      </div>
    );
  }
}

export default Dishes;
