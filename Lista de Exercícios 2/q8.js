const soma = (a, b) => a + b;
const multiplicacao = (a, b) => a * b;
const subtracao = (a, b) => a - b;

function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}

console.log(aplicarOperacao(8, 2, soma));
console.log(aplicarOperacao(8, 2, multiplicacao));
console.log(aplicarOperacao(8, 2, subtracao));