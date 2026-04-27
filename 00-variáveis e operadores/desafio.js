let precoCombustivel = 6.8;
let gastoMedio = 14;
let distancia = 173;

//calculando o total de combustivel necessário
let combustivelNecessario = distancia / gastoMedio;
let custoTotal = combustivelNecessario * precoCombustivel;

console.log("O custo total da viagem é: R$ " + custoTotal.toFixed(3));
