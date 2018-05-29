import {
  UPDATE_INPUT,
  CALCULATE,
  FINAL_CALCULATE,
  CLEAR
} from "./types"

import * as actions from './actions';
import reducer from './reducers'

describe('Test Actions', () => {
  it('Should Update Input Values', () => {
    const input =  1;
    const expectedAction = {
      type: UPDATE_INPUT,
      input
    }
    expect(actions.updateInput(input)).toEqual(expectedAction)
  });

  it('Should Calculate Mathamatical Operations', () => {
    const operator =  '+';
    const expectedAction = {
      type: CALCULATE,
      operator
    }
    expect(actions.calculate(operator)).toEqual(expectedAction)
  });

  it('Should Calculate Final Result on Press of EqualTo "=" ', () => {
    const expectedAction = {
      type: FINAL_CALCULATE
    }
    expect(actions.calculateFinal()).toEqual(expectedAction)
  });

  it('Should Clear all values and reset result', () => {
    const expectedAction = {
      type: CLEAR
    }
    expect(actions.clearAll()).toEqual(expectedAction)
  });

});



describe('Test Reducers', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        allInputs : [],  
        inputvalue : 0, 
        reset: true ,
        clickedOperator: false
      }
    )
  });


  it('Should handle UPDATE_INPUT', () => {
    expect(
      reducer({
        allInputs : [],  
        inputvalue : 1, 
        reset: false
      },{
        type: UPDATE_INPUT,
        input: 1
      })
    ).toEqual(
      {
        allInputs : [],  
        inputvalue : "11", 
        reset: false,
        clickedOperator: false
      }
    )
  });


  it('Should handle CALCULATE', () => {
    expect(
      reducer({
        allInputs : ['1','+'],  
        inputvalue : '1', 
        reset: false
      },{
        type: CALCULATE,
        operator: '+'
      })
    ).toEqual(
      {
        allInputs : ['1','+','1','+'],  
        inputvalue : 2, 
        reset: true,
        clickedOperator: true
      }
    )
  });

  it('Should handle FINAL_CALCULATE', () => {
    expect(
      reducer({
        allInputs : ['2','+'],  
        inputvalue : '1', 
        reset: false
      },{
        type: FINAL_CALCULATE
      })
    ).toEqual(
      {
        allInputs : [],  
        inputvalue : 3, 
        reset: true,
        clickedOperator: false
      }
    )
  });

  it('Should handle CLEAR', () => {
    expect(
      reducer({
        allInputs : ['4','+'],  
        inputvalue : '1', 
        reset: false
      },{
        type: CLEAR
      })
    ).toEqual(
      {
        allInputs : [],  
        inputvalue : 0, 
        reset: true,
        clickedOperator: false
      }
    )
  });
});

