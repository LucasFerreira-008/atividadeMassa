const funcionarios = [
    {nome: "Lucas", setor: "Marketing"},
    {nome: "Vinição", setor: "TI"},
    {nome: "Susana", setor: "RH"},
    {nome: "Gabriel", setor: "TI"},
    {nome: "Leo", setor: "Vendas"},
    {nome: "Jocieudo", setor: "Vendas"},
    {nome: "Brenda", setor: "Marketing"}
];

const nomesTI = funcionarios.filter(f => f.setor === "TI").map(f => f.nome);
console.log(nomesTI);
console.log(funcionarios.length);