//Criando um objeto
let pessoa = {
  nome: "Sergio",
  idade: 30,
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

//Modificando as propriedades
pessoa.idade = 31; //modificando a propriedade idade
pessoa.profissao = "Engenheiro"; //modificando a propriedade profissao

console.log(pessoa);

//Adicionando novas propriedades
pessoa.cidade = "Arapiraca"; //adicionando a propriedade cidade

console.log(pessoa);

//deletando uma propriedade
delete pessoa.taTrabalhando;
console.log(pessoa);
