const recebido = '{"produto":"Monitor", "preco":900, "estoque":4}';

const recebidoConvertido = JSON.parse(recebido);

recebidoConvertido.preco = recebidoConvertido.preco - recebidoConvertido.preco * 0.1;
recebidoConvertido.estoque = recebidoConvertido.estoque - 1;

const versaoFinal = JSON.stringify(recebidoConvertido);
console.log(versaoFinal);