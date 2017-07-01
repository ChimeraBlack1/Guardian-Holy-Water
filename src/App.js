import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/header.js';
import Water from './components/water.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Water />
      </div>
    );
  }
}

export default App;
