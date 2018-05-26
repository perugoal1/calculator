import React, { Component } from 'react';

class Displaybar extends Component {
    render() {
      return (
        <div>
          <div className="display">
           1 + 3
          </div>
          <div className="inputDisplay">
            <input type="number"  className="inputDisplayTxt"/>
          </div>
        </div>
      );
    }
  }
  
  export default Displaybar;

  
