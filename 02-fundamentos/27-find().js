//find() -encontra o primeiro elemento que a uma condição

const pessoas = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const pessoaEncotrada = pessoas.find((pessoa) => pessoa.nome === "Maria");
console.log(pessoaEncotrada);
