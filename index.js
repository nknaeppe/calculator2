

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")

function del() {
    const content = display.textContent;   
    display.textContent = content.slice(0, content.length - 1);
}

function clear() {
    display.textContent = "";
}


function operate(displayText) {

    let calcChain = [];
    const operators = ["+", "*", "-", "/"];

    function splitString(text) {
    return text.split(/([{\+\-\/*])/);
    }

    function add(num1, num2)
    {
    return num1 + num2;
    }
    function substract(num1, num2)
    {
    return num1 - num2;
    }
    function multiply(num1, num2) {
    return num1 * num2;
    }
    function divide(num1, num2) {
    return num1 / num2;
    }

    function pointCalc(calcChain) {
    for (let pos = 0; pos < calcChain.length; pos++){
        const elem = calcChain[pos]
        if (operators.includes(elem)) {
            const num1 = calcChain[+pos - 1];
            const num2 = calcChain[+pos + 1];
            if ((elem === "/") || (elem === "*")) {
                if (elem === "/") {
                    const differential = divide(+num1, +num2);
                    calcChain[pos - 1] = differential;
                }
                else if (elem === "*") {
                    const product = multiply(+num1, +num2);
                    calcChain[pos - 1] = product;
                }
                calcChain.splice(+pos, 2)
                pos -= pos;
            }
        }
    }
    }

    function dashCalc(calcChain) {
    for (let pos = 0; pos < calcChain.length; pos++){
        const elem = calcChain[pos]
        if (operators.includes(elem)) {
            const num1 = calcChain[+pos - 1]
            const num2 = calcChain[+pos + 1]
            if ((elem === "+") || (elem === "-")){
        
                if (elem === "+") {
                    const sum = add(+num1, +num2);
                    calcChain[pos - 1] = sum;
                }
                else if (elem === "-") {
                    const substraction = substract(+num1, +num2);
                    calcChain[pos - 1] = substraction;
                }
                calcChain.splice(+pos, 2)
                pos -= pos;
            
            }   
        }
    }
    }
    calcChain = splitString(displayText);
    console.log(calcChain);
    while (calcChain.length > 1) {
        pointCalc(calcChain);
        dashCalc(calcChain);
    }
    return calcChain[0];

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

            display.textContent = operate(display.textContent.trim()).toFixed(2); 
        }
        else {
            display.textContent +=buttonText;           
        }
    })
})

