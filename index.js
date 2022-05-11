let num1 = 0;
let num2 = 0;
let operator = "";

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


buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
    } )

