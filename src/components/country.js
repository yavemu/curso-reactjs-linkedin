import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

export class Country extends Component {

  componentWillUnmount() {
    console.log("componente desmontado");
  }

  deleteCountry(name) {
    this.props.onDelete(name);
  }

  render() {
    return (
      <li>
        <IconButton size="small">
          <Delete onClick={() => this.deleteCountry(this.props.name)} />
        </IconButton>
        {this.props.name}
      </li>
    );
  }
}

export default Country;
