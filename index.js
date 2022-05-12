

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")
function add(x, y) {
    return x + y;
    
}

function subtract() {
    return x - y;    
}

function multiply() {
    return x * y;    
}

function divide(x,y) {
    if (y === 0)
    { return "error" } 
    return x / y;
}

function operate(x , y, operator) {
    if (operator === "/")
    {
        let output = divide(x, y);
        if (output === "error") {
            return "Divide by 0";
        }
        else {
            return output;
        }
    }
    if (operator === "*")
    {
        return multiply(x,y)
    }
    if (operator === "-")
    {
        return   subtract(x,y)
    } 
    if (operator === "+")
    {
        return add(x,y)
    }   
}

function del() {
    const content = display.textContent;   
    display.textContent = content.slice(0, content.length - 1);
}

function clear() {
    display.textContent = "";
}
function splitInput(inputText) {
    
    let operators = ["+", "-", "/", "*"];

    for (let i = 0; i < Array.length; i++){
        let operatorPos = inputText.indexOf(operators[i]);
        if (operatorPos >= 0) {
            let output = [inputText.substring(0, operatorPos), inputText.substring(operatorPos + 1, inputText.length), operators[i]];
            return output;
        }
    }
}





buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        let buttonText = button.textContent;

        if (buttonText === "Clear") {
            display.textContent =""
        }
        else if (buttonText === "Del") {  
            del();
        }
        else if (buttonText === "=") {

            let output = splitInput(display.textContent.trim()); 
            console.log(typeof(output))
            display.textContent = output[0];
        }
        else {
            display.textContent +=buttonText;           
        }
    })
})

