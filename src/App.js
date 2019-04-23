import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Dish from './components/dish';
import NewDish from './components/newDish';

class App extends React.Component {
  dishes = ['Tacos','Ceviche','Paella'];

  render() {
    return (
      <div className="App">
        <Header/>
        <NewDish />
        {this.dishes.map((dish, index)=> {
          return <Dish key={index} name={dish}/>
        })}
      </div>
    );
  }
}

export default App;
