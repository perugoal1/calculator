const initialState = {
    display : "",
    result : 0,
    inputvalue : 0
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_INPUT':
            let input = state.inputvalue.toString() + action.input.toString();    
            if(parseInt(state.inputvalue) == 0){
                input = parseInt(input);
            }
            return {...state , inputvalue : input}
            break;
      case 'ADD':
            let addresult = parseInt(state.result) + parseInt(state.inputvalue);
            let adddisplay = state.display.toString() + " + " + state.inputvalue.toString()
            return {...state , result : addresult , display : adddisplay}
            break;
      case 'SUBTRACT':
            let subresult = parseInt(state.result) - parseInt(state.inputvalue);
            let subdisplay = state.display.toString() + " - " + state.inputvalue.toString()
            return {...state , result : subresult , display : subdisplay}
            break;
      case 'CLEAR':
            return {...state , result : 0 , display : "" , result : 0}
            break;
      default:
        return state
    }
  }

  export default calculatorReducer;