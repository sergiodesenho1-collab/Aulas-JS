//Tipos primitivos 

//String
//Number
// Boolean
//Undefined
//Null
//Symbol

//string:Representa uma sequência de caracteres
let nome ="Marcio Coutinho";
let nome2 = "Adele";
let nome3 = 'joão';
let nome4 = `Maria`;

// number: Representa números , tanto inteiros quanto decimais 
let idade = 30;
let altura = 1.75;

//Boolean:Representa um valor lógico,que pode ser 
// verdadeiro (true) ou falso (false)

let isStudant = true;
let isMarried = false;

let eEstudante = true;
let eCasado = false;

// Undefined:Representa uma variável que foi declarada,mas ainda nao foi atribuida um valor 
let endereco;
let telefone;
console.log(endereco);//undefined

//Null: Representa a ausência intencional de um valor 
let id = Symbol("id");
let id2 =Symbol("id");

console.log(nome);//Marcio coutnho
console.log(nome2);//Adele
console.log(nome3);//João
console.log(nome4);//Maria
console.log(idade);//30
consolo.log(altura);//1 .75
console.log(isStudant);//true
console.lgo(isMarried);//false
console.log(eEStudante);//true
console.log(eCasado);//false
console.log(salario);//null
console.log(id);//symbol(id)
console.log(id2);//symbol(id)
console.log(id === id2)//false , pois cada simbolo é único , mesmo que tenha a mesma descrição 