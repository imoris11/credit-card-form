import React from 'react';
import './App.css';
import { Card } from './Components/Cards';

function App() {
  const cardDetails = (card) => {
    console.log(card)
  }
  return (
    <div className="App">
      <Card 
        onChange={cardDetails}
       />
    </div>
  );
}

export default App;
