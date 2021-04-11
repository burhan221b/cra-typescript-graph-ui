import React from 'react';
import './App.css';
import CircularRating from './components/CircularRating';
import HorizontalBarGraphCount from './components/HorizontalBarGraphCount';

function App() {
  const test_bar_data = [{ count: 4, color: 'blue' }, { count: 10, color: 'green' }]
  return (
    <div className="App">
      <CircularRating rating={90} maxRating={100} />
      <HorizontalBarGraphCount data={test_bar_data} />
    </div>
  );
}

export default App;
