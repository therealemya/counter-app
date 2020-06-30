import React from 'react';
import logo from './logo.svg';
import './App.css';
import header from './components/header';
import counter from './components/counter';
import footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header />
      <counter />
      <footer />
      </div>
  );
}

export default App;
