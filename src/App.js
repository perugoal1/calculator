import React, { Component } from 'react';
import './App.css';
import Titlebar from './components/Titlebar.js';
import DisplayBar from './components/Displaybar.js';
import Keypad from './components/Keypad.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titlebar />
        <DisplayBar />
        <Keypad />
      </div>
    );
  }
}

export default App;
