import React from 'react';
import './App.css';

import BrewList from './components/brewList.js'

function App() {
  return (
    <div className="App">
      <h1>Awesome Breweries around the Country</h1>
     <BrewList />
    </div>
  );
}

export default App;
