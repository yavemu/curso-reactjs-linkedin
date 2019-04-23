import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Dish from './components/dish';
import NewDish from './components/newDish';
import Button from "@material-ui/core/Button";

class App extends React.Component {
  dishes = ['Tacos','Ceviche','Paella'];

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <NewDish />
        {/* {this.dishes.map((dish, index)=> {
          return <Dish key={index} name={dish}/>
        })} */}
        <Button variant="contained" color="secondary" onClick={this.showDishes}>
          Elegir
        </Button>
      </div>
    );
  }
}

export default App;
