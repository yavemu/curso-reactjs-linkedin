import React, { Component } from "react";
import { Fab, TextField } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewDish extends Component {
  newDish = React.createRef();

  addDish = event => {
    event.preventDefault();
    this.props.onAddDish(this.newDish.value);
    this.newDish.value = "";
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.addDish}>
        <TextField
          label="Platillo..."
          type="text"
          margin="normal"
          variant="outlined"
          inputRef={e => (this.newDish = e)}
        />
        <Fab
          color="primary"
          size="medium"
          className="dish-form-icon"
          onClick={this.addDish}
        >
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

export default NewDish;