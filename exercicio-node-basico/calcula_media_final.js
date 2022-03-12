// Considerando que a aprovação de um aluno em
// determinada disciplina requer uma média final maior
// ou igual a 6,0 (seis). Elaborar um programa que
// receba duas notas, realize o cálculo da média, exiba
// o valor calculado, indicando se o aluno está aprovado
// ou reprovado.

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite a primeira nota: ', (nota1) => {
  teclado.question('Digite a segunda nota: ', (nota2) => {
    nota1 = JSON.parse(nota1);
    nota2 = JSON.parse(nota2);
    var media_final = (nota1 + nota2) / 2;
    
    if (media_final >= 6) {
      console.log('Aprovado' + media_final);
    } else if (media_final < 6) {
      console.log('Reprovado');
    }
  });
});