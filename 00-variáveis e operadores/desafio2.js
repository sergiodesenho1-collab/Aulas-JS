const bandeira = 3; //Preço da gasolina por litro
const cobradoPorQuilometro = 4.5; //Preço do etanol por litro
const quantidadedeQuilometros = 173; //Distância da viagem

console.log(
  "O custo total da viagem é: R$ " +
    (bandeira * quantidadedeQuilometros).toFixed(2),
);
