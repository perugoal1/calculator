import React, { Component } from 'react';
import './App.css';
import Titlebar from './components/calculator/Titlebar';
import DisplayBar from './components/calculator/Displaybar';
import Keypad from './components/calculator/Keypad';

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
