import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Dish from './components/dish';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dish/>
    </div>
  );
}

export default App;
