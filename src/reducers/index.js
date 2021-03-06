import {
    UPDATE_INPUT,
    CALCULATE,
    FINAL_CALCULATE,
    CLEAR
} from "../types"

const initialState = {
    allInputs : [],   //  used to store history of previous calucations
    inputvalue : 0,   //  used for curretn value entered
    reset: true,      //  used aa a flag to reset the text box when 'AC' or  '=' is pressed
    clickedOperator :  false // used as a flag to validate agianst mutiple operator bitton click such as '+' or '-'
};

const calculatorReducer = (state = initialState, action) => {

    switch (action.type) {
        
      //updates input field
      case UPDATE_INPUT:
            let input;
            if(state.reset){
                input = action.input.toString();
            }
            else{
                input = state.inputvalue.toString() + action.input.toString();    
                if(parseInt(state.inputvalue, 10) === 0){
                    input = parseInt(input,10);
                }
            }  
            return {...state , inputvalue : input, reset: false, clickedOperator: false}

     //calculates the result based on click of '+' or  '-' button
      case CALCULATE:
            let allInputs = state.allInputs.slice();
            if(state.clickedOperator){
                let input = state.inputvalue;
                allInputs.pop();
                allInputs.push(action.operator);
                return {...state , allInputs : allInputs, reset: true , inputvalue : input, clickedOperator: true };
            }
            else{
                allInputs.push(Math.abs(state.inputvalue).toString());
                allInputs.push(action.operator);
    
                let inputsForCalc = allInputs.slice();
                inputsForCalc.pop();
                let result = eval(inputsForCalc.join(""));
                return {...state , allInputs : allInputs ,inputvalue : result , reset: true, clickedOperator: true}
            }     
            

     //caluates final result on click of  '=' and resets all the existing calculations
      case FINAL_CALCULATE:
            let finalResult = eval(state.allInputs.join("") + state.inputvalue);
            return {...state , allInputs : [] , inputvalue : finalResult , reset: true, clickedOperator: false }

      //clears all the values
      case CLEAR:
            return {...state , allInputs : [], inputvalue : 0 , reset: true, clickedOperator: false }

      default:
        return state
    }
  }

  export default calculatorReducer;