function criarMultiplicadorr(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const dobrar = criarMultiplicadorr(2);
const triplicar = criarMultiplicadorr(3);

console.log(dobrar(5));
console.log(triplicar(5));