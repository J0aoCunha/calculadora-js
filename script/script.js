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

        if (this.currentOperationText.innerText === "" && operation !== "C") {
            if (this.previosOperationText !== "") {
                this.changeOperation(operation);
            }
            return;
        }


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
            case "DEL":
                this.processDelOperation();
                break;
            case "CE":
                this.processClearCurrentOperation();
                break;
            case "C":
                this.processClearAll();
                break;
            case "=":
                this.processEqualsOperation();
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


    changeOperation(operation) {

        const mathOperation = ["+", "-", "*", "/"];

        if (!mathOperation.includes(operation)) {
            return;
        }

        this.previosOperationText.innerText =
            this.previosOperationText.innerText.slice(0, -1) + operation;
    }


    processClearAll() {
        this.previosOperationText.innerText = "";
        this.currentOperationText.innerText = "";
    }


    processClearCurrentOperation() {
        this.currentOperationText.innerText = "";
    }

    processDelOperation() {
        this.currentOperationText.innerText =
            this.currentOperationText.innerText.slice(0, -1);
    }


    processEqualsOperation() {
        const operation = this.previosOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
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
