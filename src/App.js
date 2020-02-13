import React from 'react';
import { Card } from 'react-atm-cards';
function App() {
  const cardDetails = card => {
    console.log(card);
  };
  return (
    <div className='App'>
      <Card onChange={cardDetails} />
    </div>
  );
}

export default App;
