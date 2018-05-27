import React, { Component } from 'react';
import { connect } from 'react-redux'

class Displaybar extends Component {
    render() {
      return (
        <div>
          <div className="display">
           {this.props.display}
          </div>
          <div className="inputDisplay">
            <input type="text"  className="inputDisplayTxt" value={this.props.inputvalue}  readOnly/>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    inputvalue: state.inputvalue,
    display: state.display,
    result: state.result
  })

  export default connect(
    mapStateToProps
  )(Displaybar);

  
