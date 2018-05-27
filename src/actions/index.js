//updates input field
export const updateInput = (input) => ({
    type: 'UPDATE_INPUT',
    input
})


//calculates the result based on click of '+' or  '-' button
export const calculate = (operator) => ({
    type: 'CALCULATE',
    operator
})

//caluates final result on click of  '=' and resets all the existing calculations
export const calculateFinal = () => ({
    type: 'FINAL_CALCULATE',
})

//clears all the values
export const clearAll = () => ({
    type: 'CLEAR',
})