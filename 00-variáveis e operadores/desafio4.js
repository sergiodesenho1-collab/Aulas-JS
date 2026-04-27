const skol = 5.0;
const quantidade = 200;
const valordoDesconto = 0.36;

console.log(
  "O valor total a ser pago é: R$ " +
    (skol * quantidade + valordoDesconto).toFixed(2),
);
