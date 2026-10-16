const alunos = [
    {nome: "Ana", media: 8.5},
    {nome: "Bruno", media: 6},
    {nome: "Carla", media: 9},
    {nome: "Davi", media: 5.5}
];

const mediaMenor7 = alunos.find(aluno => aluno.media < 7).nome;

const mediaMaioOuIgual9 = alunos.some(aluno => aluno.media >= 9);

const todosMediaMaiorOuIgual7 = alunos.every(aluno => aluno.media >= 7);

console.log(mediaMenor7);
console.log(mediaMaioOuIgual9);
console.log(todosMediaMaiorOuIgual7);