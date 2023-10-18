const previosOperation = document.querySelector("#previos-operation");
const currentOpretion = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

console.log(buttons);

class calculator {

    constructor(previosOperation, currentOpretion) {
        this.previosOperation = previosOperation;
        this.currentOpretion = currentOpretion;
    }


}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        console.log(value);

    });
})
