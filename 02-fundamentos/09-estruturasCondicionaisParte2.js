//Estruturas Condicionais - Parte 2
//Switch Case: é uma estrutura de controle que permite executar diferentes
//  blocos de código com base no valor de uma expressão.
// Ele é útil quando temos várias condições para verificar,
// tornando o código mais organizado e legível.

let fruta = "Banana";

switch (fruta) {
  case "Maçã":
    console.log("O valor da maçã são R$ 2 reais");
    break;

  case "Banana":
    console.log("O valor da banana são R$ 1,50 ");
    break;

  case "Laranja":
    console.log("O valor da laranja são R$ 1,00");
    break;
  default:
    console.log("Fruta não encontrada");
}
