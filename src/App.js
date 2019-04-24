import React from 'react';
import './styles/App.css';
import Header from './components/header';
import NewDish from './components/newDish';
import Dishes from './components/dishes';

import data from './assets/data/dishes.json';

class App extends React.Component {
  
  state = {
    dishes: data.dishes
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  updateDish = (index, newName) => {
    let newState = {...this.state};
    newState.dishes[index].name = newName;
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <NewDish />
        <Dishes dishes={this.state.dishes} onUpdateDish={this.updateDish} />
      </div>
    );
  }
}

export default App;
