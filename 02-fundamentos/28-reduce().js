// reduce() é um método de array que reduz uma coleção de valores a um
// unico valor, aplicando uma função a cada elemento da coleção.
//Ele é frequentemente usado para somar números, concatenar strings
//ou acumular resultados de alguma forma.
const funcionarios = [
  { nome: "João", salario: 3000 },
  { nome: "Maria", salario: 4000 },
  { nome: "Pedro", salario: 2500 },
];

//Exmplo1:Somar os salarios dos fucionarios
const totalSalarios = funcionarios.reduce((acumuLador, fucionario) => {
  return acumuLador + fucionario.salario;
}, 0);

console.log(`total de salários: R$ ${totalSalarios}`);
