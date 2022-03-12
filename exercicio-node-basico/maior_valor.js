// Considerando três números inteiros digitados pelo 
// usuário, determinar e exibir o maior número.

const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,output: process.stdout
});

teclado.question('Digite o primeiro numero: ', (firstNum) => {
    teclado.question('Digite o segundo numero: ', (secondNum) => {
        teclado.question('Digite o terceiro: ', (thirdNum) => {
            myNums = [firstNum, secondNum, thirdNum];

            myNums.sort((a, b) => {
                return b - a;
            });

            console.log(myNums[0]);
        });
    });
});
