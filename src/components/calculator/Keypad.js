import React, { Component } from 'react';

class Keypad extends Component {
    render() {
      return (
        <div>
           <button className="numButton">7</button>
           <button className="numButton">8</button>
           <button className="numButton">9</button>
           <button className="numButton action">+</button>
           <button className="numButton">4</button>
           <button className="numButton">5</button>
           <button className="numButton">6</button>
           <button className="numButton action">-</button>
           <button className="numButton">1</button>
           <button className="numButton">2</button>
           <button className="numButton">3</button>
           <button className="numButton result">=</button>
           <button className="numButton clear">AC</button>
           <button className="numButton">0</button>
           <button className="numButton">.</button>
        </div>
      );
    }
  }
  
  export default Keypad;