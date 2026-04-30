//filter()-filtra os elementos de array com base em uma
//condição e retorna um novo array com os elementos que atendem
//a essa condiçao.

const pessoas = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const pessoasMaioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);
console.log(pessoasMaioresDeIdade);
