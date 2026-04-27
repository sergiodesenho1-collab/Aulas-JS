const valorkwh = 1.5;
const quantidadekwh = 200;
const taxadeiluminação = 0.36;

console.log(
  "O valor total a ser pago é: R$ " +
    (valorkwh * quantidadekwh + taxadeiluminação).toFixed(2),
);
