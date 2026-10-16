const carrinho = [
    {nome: "Teclado", preco: 150, quantidade: 1},
    {nome: "Mouse", preco: 80, quantidade: 2},
    {nome: "Cabo USB", preco: 25, quantidade: 3}
];

const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
console.log(`Total da compra: R$${total}`);