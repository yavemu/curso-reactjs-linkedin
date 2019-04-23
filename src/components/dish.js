import React, { Component, Fragment } from 'react';

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
        return <Fragment>
            <h1>Un Platillo</h1>
            <Ingredient/>
        </Fragment>
    }
}

export default Dish;