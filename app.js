const ERROR_MESSAGE = `Invalid input, please try again.`;


// Function to return the form element
getForm = () => {
    return document.querySelector('#numberInputForm')
}

// Function to return input 1
getInput1 = () => {
    return document.querySelector('#input-num1').value;
}

// Function to return input 2
getInput2 = () => {
    return document.querySelector('#input-num2').value;
}

// Function to return output heading
getOutputHeading = () => {
    return document.querySelector('#output');
}

// Function to return the prime paragraph 
getPrimeOutput = () => {
    return document.querySelector('#primes');
}

// Function to make sure that input is in the range between 2 - 100 inclusive
isWithinValidRange = (input) => {
    return (input >= 2) && (input <=100 );
}

// Function to validate the inputs
validateInputs = (input1, input2) => {
    // Check if the inputs are valid numerical inputs
    if(isNaN(input1) || isNaN(input2))
    {
        return false;
    }
    // Check if inputs are within the valid numerical range
    if(!isWithinValidRange(input1) || !isWithinValidRange(input2))
    {
        return false;
    }
    // If all checks pass, return true
    return true;
}


// Bind an event listener to the form, to validate inputs and display output accordingly
getForm().addEventListener('submit', (event) => {
    event.preventDefault();

    getOutputHeading().innerHTML = '';
    getPrimeOutput().innerHTML = '';

    var val1 = parseInt(getInput1());
    var val2 = parseInt(getInput2());

    if(validateInputs(val1, val2))
    {
        primeValues = [];

        getNumberRange(val1, val2).map( (value, index) => {
            for(var i =2; i < value; i++) {
                if(value % i === 0) {
                    return;
                }
            }

            primeValues.push(value);
        })

        getOutputHeading().style.color = '#08ADB0';
        getOutputHeading().innerHTML = `There are `+primeValues.length+ ` prime number(s).`; 
        getPrimeOutput().innerHTML = primeValues;
    }
    else {
        getOutputHeading().innerHTML = ERROR_MESSAGE;
        getOutputHeading().style.color = 'red';
    }
})

// Function to get the set of numbers between val1 and val2 
getNumberRange = (val1, val2) => {

    var smallerNumber = (val1 > val2) ? val2 : val1;
    var largerNumber = (val1 < val2) ? val2 : val1;

    var list = [];
    for(var i= smallerNumber; i <= largerNumber; i++)
    {
        list.push(i);
    }

    return list;
}


