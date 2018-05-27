
//

const initialState = {
    allInputs : [],   //  used to store history of previous calucations
    inputvalue : 0,   //  used for curretn value entered
    reset: false      //  used aa a flag to reset the text box when 'AC' or  '=' is pressed
};

const calculatorReducer = (state = initialState, action) => {

    switch (action.type) {
        
      //updates input field
      case 'UPDATE_INPUT':
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
            return {...state , inputvalue : input, reset: false}

     //calculates the result based on click of '+' or  '-' button
      case 'CALCULATE':
            let allInputs = state.allInputs;
            allInputs.push(Math.abs(state.inputvalue));
            allInputs.push(action.operator);

            let inputsForCalc = allInputs.slice();
            inputsForCalc.pop();
            let result = eval(inputsForCalc.join(""));
            return {...state , allInputs : allInputs ,inputvalue : result , reset: true}

     //caluates final result on click of  '=' and resets all the existing calculations
      case 'FINAL_CALCULATE':
            let finalResult = eval(state.allInputs.join("") + state.inputvalue);
            return {...state , allInputs : [] , inputvalue : finalResult , reset: true}

      //clears all the values
      case 'CLEAR':
            return {...state , allInputs : [], inputvalue : 0 , reset: true }

      default:
        return state
    }
  }

  export default calculatorReducer;