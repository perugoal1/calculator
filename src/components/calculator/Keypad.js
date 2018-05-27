import React, { Component } from 'react';
import { connect } from 'react-redux'
import {updateInput, addnumbers} from '../../actions'

class Keypad extends Component {
    render() {
      let {inputvalue , updateInput,  addNumbers }  = this.props
      return (
        <div>
           <button className="numButton" onClick={updateInput.bind(this,7)}>7</button>
           <button className="numButton" onClick={updateInput.bind(this,8)}>8</button>
           <button className="numButton" onClick={updateInput.bind(this,9)}>9</button>
           <button className="numButton action" onClick={addNumbers}>+</button>
           <button className="numButton" onClick={updateInput.bind(this,4)}>4</button>
           <button className="numButton" onClick={updateInput.bind(this,5)}>5</button>
           <button className="numButton" onClick={updateInput.bind(this,6)}>6</button>
           <button className="numButton action">-</button>
           <button className="numButton" onClick={updateInput.bind(this,1)}>1</button>
           <button className="numButton" onClick={updateInput.bind(this,2)}>2</button>
           <button className="numButton" onClick={updateInput.bind(this,3)}>3</button>
           <button className="numButton result">=</button>
           <button className="numButton clear">AC</button>
           <button className="numButton" onClick={updateInput.bind(this,0, inputvalue)}>0</button>
           <button className="numButton" onClick={updateInput.bind(this,".", inputvalue)}>.</button>
        </div>
      );
    }
  }
  

  const mapStateToProps = (state) => ({
    inputvalue : state.inputvalue
  })

  const mapDispatchToProps = (dispatch , ownProps) => ({
    updateInput : function (num, inputvalue){
        console.log(ownProps);

        if(parseInt(inputvalue) == num){
            return;
        }
        
        dispatch(updateInput(num))
    },
    addNumbers : function (){
        dispatch(addnumbers())
    }
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Keypad);