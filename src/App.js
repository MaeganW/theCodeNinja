import React, { Component } from 'react';
import logo from './assets/images/shuriken.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>&#123; theCodeNinja &#125;</h1>
        </header>
      </div>
    );
  }
}

export default App;
