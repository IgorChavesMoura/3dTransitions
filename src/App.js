import React, { Component } from 'react';

import Cube from './components/cube/Cube';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <Cube />
        
      </div>
    );
  }
}

export default App;
