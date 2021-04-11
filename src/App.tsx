import React from 'react';
import './App.css';
import CircularRating from './components/CircularRating';

function App() {
  return (
    <div className="App">
      <CircularRating rating={90} maxRating={100} />
    </div>
  );
}

export default App;
