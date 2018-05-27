import React, { Component } from 'react';
import { connect } from 'react-redux'

class Displaybar extends Component {
    render() {
      return (
        <div>
          {/* Displays History of Previuos Calculations */}
          <div className="display">
           {this.props.allInputs.join(" ")}
          </div>

          {/* Holds both the Result and the entered input */}
          <div className="inputDisplay">
            <input type="text"  className="inputDisplayTxt" value={this.props.inputvalue}  readOnly/>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    inputvalue: state.inputvalue,
    allInputs: state.allInputs
  })

  export default connect(
    mapStateToProps
  )(Displaybar);

  
