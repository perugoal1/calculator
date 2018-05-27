import React, { Component } from 'react';
import { connect } from 'react-redux'
import {updateInput, calculate , calculateFinal, clearAll} from '../../actions'

class Keypad extends Component {
    render() {
      let {inputvalue , updateInput,  calculate, calculateFinal , clearAll}  = this.props
      return (
        <div>
           <button className="numButton" onClick={updateInput.bind(this,7)}>7</button>
           <button className="numButton" onClick={updateInput.bind(this,8)}>8</button>
           <button className="numButton" onClick={updateInput.bind(this,9)}>9</button>
           <button className="numButton action" onClick={calculate.bind(this, '+')}>+</button>
           <button className="numButton" onClick={updateInput.bind(this,4)}>4</button>
           <button className="numButton" onClick={updateInput.bind(this,5)}>5</button>
           <button className="numButton" onClick={updateInput.bind(this,6)}>6</button>
           <button className="numButton action"  onClick={calculate.bind(this, '-')}>-</button>
           <button className="numButton" onClick={updateInput.bind(this,1)}>1</button>
           <button className="numButton" onClick={updateInput.bind(this,2)}>2</button>
           <button className="numButton" onClick={updateInput.bind(this,3)}>3</button>
           <button className="numButton result" onClick={calculateFinal}>=</button>
           <button className="numButton clear" onClick={clearAll}>AC</button>
           <button className="numButton" onClick={updateInput.bind(this,0, inputvalue)}>0</button>
           <button className="numButton" onClick={updateInput.bind(this,".", inputvalue)}>.</button>
        </div>
      );
    }
  }
  

  const mapStateToProps = (state) => ({
    inputvalue : state.inputvalue
  })

  const mapDispatchToProps = (dispatch) => ({
    updateInput : function (num, inputvalue){
        if(parseInt(inputvalue, 10) === num){
            return;
        }
        if(inputvalue.toString().indexOf('.') !== -1 && num === "."){
            return;
        }
        
        dispatch(updateInput(num))
    },
    calculate : function (operator){
        dispatch(calculate(operator))
    },
    calculateFinal : function (){
        dispatch(calculateFinal())
    },
    clearAll:  function (){
        dispatch(clearAll())
    }
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Keypad);