const previosOperation = document.querySelector("#previos-operation");
const currentOpretion = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

console.log(buttons);

class calculator {

    constructor(previosOperation, currentOpretionText) {
        this.previosOperation = previosOperation;
        this.currentOpretionText = currentOpretionText;
        this.previosOperation = "";
    }

    addDigits(digit) {

        if (digit === "." && this.currentOpretion.includes(".")) return;

        this.currentOpretion = digit;
        this.updateScreen();
    }
}

const calc = new calculator(previosOperation, currentOpretion);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addDigits(value);
        } else {
            console.log("op =" + value);
        }
    });
})
