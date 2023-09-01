//  CALCULADORA FEITA NO CURSO BASICO DE JAVASCRIPT DA DIO

function calculadora() {
    const operacao = Number(prompt('Escolha uma operaçao: \n1- Soma (+)\n 2- Subtração (-) \n 3- Multiplicação (*) \n 4- Divisão real (/)\n 5- Divisão inteira (%) \n 6- Potenciação (**).'))

    if (!operacao || operacao >= 7) {
        alert('ERRO - Operaçao invalida');
        calculadora();
    } else {

        let numero1 = Number(prompt('Insira o primerio valor!'));
        let numero2 = Number(prompt('Insira o segundo valor!'));
        let resultado;

        if (!numero1 || !numero2) {
            alert('ERRO - Operaçao invalida');
            calculadora();
        } else {

            function soma() {
                resultado = numero1 + numero2
                alert(`${numero1} + ${numero2} = ${resultado}`);
                novaOperaçao();
            }
            function subtracao() {
                resultado = numero1 - numero2
                alert(`${numero1} - ${numero2} = ${resultado}`);
                novaOperaçao();
            }
            function multiplicacao() {
                resultado = numero1 * numero2
                alert(`${numero1} * ${numero2} = ${resultado}`);
                novaOperaçao();
            }
            function divisaoReal() {
                resultado = numero1 / numero2
                alert(`${numero1} / ${numero2} = ${resultado}`);
                novaOperaçao();
            }
            function divisaoInteira() {
                resultado = numero1 % numero2
                alert(`O resto da divisão ${numero1} e ${numero2} é igual a ${resultado}`);
                novaOperaçao();
            }
            function potenciacao() {
                resultado = numero1 ** numero2
                alert(`${numero1} elevado a ${numero2} é igual a ${resultado}`);
                novaOperaçao();
            }

            function novaOperaçao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1- Sim \n 2- Não')

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Adeus!!');
                } else {
                    alert('Digite algum numero!!')
                    novaOperaçao();
                }
            }

        }

    }

    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }

}


calculadora();