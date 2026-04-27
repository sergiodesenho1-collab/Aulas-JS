let nome = "Sergio";
let idade = 36;
console.log("Meu nome é " + " e minha idade é " + " anos.");

let mensagem = "Sergio";
console.log("Meu nome é " + mensagem + " e minha idade é " + idade + " anos.");

let mensagem2 = `Meu nome é ${nome} e minha idade é ${idade} anos.`;

let pessoa = {
  nome: "Sergio",
  idade: 30,
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

pessoa.taTrabalhando = false;
console.log(pessoa.taTrabalhando);

let nota = 5.5;
if (nota >= 7) {
  console.log("reprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("aprovado");
} else {
  console.log("reprovado");
}
console.log("nota");
