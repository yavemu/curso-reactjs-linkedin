import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';

export class Ingredient extends Component {
    render() {
        return <Fragment>
            <h4>Primer Ingrediente</h4>
            <h4>Segundo Ingrediente</h4>
        </Fragment>
    }
}

class Dish extends Component {
    render() {
        return <div className='dish'>
            <h1>Un Platillo</h1>
            <Ingredient/>
            <Button variant="contained">
                Default
            </Button>
        </div>
    }
}

export default Dish;