import React, { Component } from "react";
import { Fab, TextField } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewDish extends Component {

    newDish = React.createRef();

    addDish = (e) => {
        console.log("Agregar platillo");
        e.preventDefault();
        console.log("Imprimiendo referencia [this.newDish.value] ", this.newDish.value);
        
    }

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