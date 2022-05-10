import './App.css';
import React, { useState } from 'react';
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div className="App">
      <h1>Catch Them ALL!</h1>
      <Pokemon></Pokemon>
    </div>
  );
}

export default App;
