const getInputValue = (index) => document.getElementById(`grocery${index}`).value;
const isInputValueInvalid = (value) => Object.is(value, NaN);
const resetInputValues = () => {
    for(let i = 1; i <= 3; i++) {
        document.getElementById(`grocery${i}`).value = "";
    }
}

const groceryTracker = () => {

    const inputValues = []

    for( let i = 1; i <= 3; i++) {
        
        const value = parseFloat(getInputValue(i))
      
        if(isInputValueInvalid(value) || value < 0 ) {
            alert("Please enter positive a number");
            document.getElementById(`grocery${i}`).focus();
            return;
        }
        
        inputValues.push(value)
    }

    const sumTotalAmount = inputValues.length > 0 ? inputValues.reduce((acc, value) => acc + value) : []

    document.getElementById("result").innerHTML = `The total amount is:$ ${sumTotalAmount}`;

    resetInputValues()
    
}

 


 