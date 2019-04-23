import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';

export class Ingredient extends Component {
    render() {
        return <Fragment>
            
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
            <ul>
                {this.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <Button variant="contained">
                Default
            </Button>
        </div>
    }
}

export default Dish;