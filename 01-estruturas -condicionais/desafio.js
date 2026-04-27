const precoEtanaol = 4.5;
const precoGasolina = 5.89;
const tipoCombustivel = "gasolina";
const gastoMedio = 10;
const distancia = 112;

if (tipoCombustivel === "etanol") {
  valorGasto = (distancia / gastoMedio) * precoEtanaol;
} else {
  valorGasto = (distancia / gastoMedio) * precoGasolina;
}

console.log(
  "O valor gasto para realizar esta viagem é: R$ " + valorGasto.toFixed(2),
);
