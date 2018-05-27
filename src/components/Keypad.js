import React, { Component } from 'react';
import { connect } from 'react-redux'
import {updateInput, calculate , calculateFinal, clearAll} from '../actions';
import KeyboardAccessibility from '../utilities/KeyboardAccessibility'; //HOC component for keyboard accessibility

class Keypad extends Component {
    render() {
      let {inputvalue , updateInput,  calculate, calculateFinal , clearAll}  = this.props
      return (
        <div>
           <button className="numButton" onClick={updateInput.bind(this,7)} id="num7">7</button>
           <button className="numButton" onClick={updateInput.bind(this,8)} id="num8">8</button>
           <button className="numButton" onClick={updateInput.bind(this,9)} id="num9">9</button>
           <button className="numButton action" onClick={calculate.bind(this, '+')} id="plus">+</button>
           <button className="numButton" onClick={updateInput.bind(this,4)} id="num4">4</button>
           <button className="numButton" onClick={updateInput.bind(this,5)} id="num5">5</button>
           <button className="numButton" onClick={updateInput.bind(this,6)} id="num6">6</button>
           <button className="numButton action"  onClick={calculate.bind(this, '-')} id="minus">-</button>
           <button className="numButton" onClick={updateInput.bind(this,1)} id="num1">1</button>
           <button className="numButton" onClick={updateInput.bind(this,2)} id="num2">2</button>
           <button className="numButton" onClick={updateInput.bind(this,3)} id="num3">3</button>
           <button className="numButton result" onClick={calculateFinal} id="equalTo">=</button>
           <button className="numButton clear" onClick={clearAll} id="allClear">AC</button>
           <button className="numButton" onClick={updateInput.bind(this,0, inputvalue)} id="num0">0</button>
           <button className="numButton" onClick={updateInput.bind(this,".", inputvalue)} id="num.">.</button>
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
  )(KeyboardAccessibility(Keypad));
  