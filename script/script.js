const previosOperationText = document.querySelector("#previos-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator {

    constructor(previosOperationText, currentOperationText) {
        this.previosOperationText = previosOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    addDigits(digit) {

        if (digit === "." && this.currentOperation.includes(".")) return;

        this.currentOperation = digit;
        this.updateScreen();
    }


    processOperation(operation) {
        let operationValue;
        const previous = +this.previosOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;


        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }


    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {


        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            if (previous === 0) {
                operationValue = current;
            }

            this.previosOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";

        }
    }

}

const calc = new calculator(previosOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addDigits(value);
        } else {
            calc.processOperation(value);
        }
    });
})
