let diaSemana = Math.floor(Math.random());

switch (diaSemana) {
  case 0:
    nomeDia = "Hoje é Domingo";
    break;
  case 1:
    nomeDia = "Hoje é segunda-feira";
    break;

  case 2:
    nomeDia = "Hoje é terça-feira";
    break;

  case 3:
    nomeDia = "Hoje é Quarta-feira";
    break;

  case 4:
    nomeDia = "Hoje é Quinta-feira";
    break;
  case 5:
    nomeDia = "Hoje é sexta-feira";
    break;

  case 6:
    nomeDia = "Hoje é sábado";
    break;
  default:
    nomeDia = "Numero inválido, não existe mais dias semana";
}
console.log(nomeDia);
