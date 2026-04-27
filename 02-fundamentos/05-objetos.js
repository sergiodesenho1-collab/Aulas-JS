//objeto é uma coleção de propriedades, onde cada propriedade é composta por um nome e um valor.
// O valor pode ser de qualquer tipo, incluindo outros objetos ou funções. Os objetos são usados para representar entidades
//  do mundo real, como pessoas, carros, etc.

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

//Acessando as propriedades
console.log(pessoa.nome); //acessando a propriedade nome
console.log(pessoa.idade); //acessando a propriedade idade
console.log(pessoa.profissao); //acessando a propriedade profissao
console.log(pessoa.taTrabalhando); //acessando a propriedade taTrabalhando
console.log(pessoa); //acesso o objeto completo

pessoa.saudacao(); //chamando o método saudacao do objeto pessoa
