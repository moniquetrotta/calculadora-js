function calculadora() {
  const operacao = Number(prompt('Escolha uma Operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4- Divisão real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

  if (!operacao || operacao >= 7) {
    alert('Erro!\n Operacão Inválida.');
    calculadora();
  } else {

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2) {
      alert('Erro!\n Parâmetros inválidos.');
      calculadora();
    } else {

      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
      }
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
      }
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
      }
      function divisaoR() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
      }
      function divisaoI() {
        resultado = n1 % n2;
        alert(`O resto da divisão de ${n1} % ${n2} = ${resultado}`)
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`)
      }
      function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais!')
        } else {
          alert('Digite uma opção válida');
          novaOperacao();
        }
      }
    }
  }
    /* if (operacao == 1) {
   soma();
   novaOperacao();
 } else if (operacao == 2) {
   subtracao();
   novaOperacao();
 } else if (operacao == 3) {
   multiplicacao();
   novaOperacao();
 } else if (operacao == 4) {
   divisaoR();
   novaOperacao();
 } else if (operacao == 5) {
   divisaoI();
   novaOperacao();
 } else if (operacao == 6) {
   potenciacao();
   novaOperacao();
 }*/
    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoR();
        break;
      case 5:
        divisaoI();
        break;
      case 6:
        potenciacao();
        break;
    }
  

}
calculadora();