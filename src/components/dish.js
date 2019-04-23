import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';

export class Ingredient extends Component {
    render() {
        return <Fragment>
            <h4>Primer Ingrediente</h4>
            <h4>Segundo Ingrediente</h4>
            <h4>Tercer Ingrediente</h4>
        </Fragment>
    }
}

class Dish extends Component {
    ingredients = ["Tortilla","Carne","Cebolla"];

    countIngredients(){
        return this.ingredients.length;
    }

    render() {
        return <div className='dish'>
            <h1>{this.props.name}</h1>
            <h3>{this.countIngredients()} ingredients</h3>
            <Ingredient/>
            <Button variant="contained">
                Default
            </Button>
        </div>
    }
}

export default Dish;