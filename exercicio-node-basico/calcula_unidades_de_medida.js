// Elaborar uma aplicação Node.js que a partir de um
// valor digitado pelo usuário e o respectivo prefixo,
// mostrar a representação do valor nos demais
// prefixos.

const readline = require('readline');

let conversoes = [
  {
    tipo: 'Kilobytes',
    referencia: 'K',
    valor: 0,
    denomidorBase: 10 ** 3
  },
  {
    tipo: 'Megabytes',
    referencia: 'M',
    valor: 0,
    denomidorBase: 10 ** 6
  },
  {
    tipo: 'Gigabytes',
    referencia: 'G',
    valor: 0,
    denomidorBase: 10 ** 9
  },
  {
    tipo: 'Terabytes',
    referencia: 'T',
    valor: 0,
    denomidorBase: 10 ** 12
  }
]

function recebeInput() {
  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  teclado.question('Digite o valor numerico: ', (valorNumerico) => {
    teclado.question('Digite a unidade de medida: ', (unidadeDeMedida) => {
      unidadeDeMedida = unidadeDeMedida.toLocaleUpperCase();
      valorNumerico = JSON.parse(valorNumerico);
  
      conversor(unidadeDeMedida, valorNumerico, conversoes);
  
      mostraConversao(conversoes);
    });
  });
  
  teclado.close;
}

function conversor(unidade, valor, arrayConversao) {
  if (unidade == arrayConversao[0].referencia) {
    arrayConversao[0].valor = valor;
    arrayConversao[1].valor = valor / arrayConversao[0].denomidorBase;
    arrayConversao[2].valor = valor / arrayConversao[1].denomidorBase;
    arrayConversao[3].valor = valor / arrayConversao[2].denomidorBase;
  } else if (unidade == arrayConversao[1].referencia) {
    arrayConversao[0].valor = valor * arrayConversao[0].denomidorBase;
    arrayConversao[1].valor = valor;
    arrayConversao[2].valor = valor / arrayConversao[0].denomidorBase;
    arrayConversao[3].valor = valor / arrayConversao[1].denomidorBase;
  } else if (unidadeDeMedida == arrayConversao[2].referencia) {
    arrayConversao[0].valor = valor * arrayConversao[1].denomidorBase;
    arrayConversao[1].valor = valor * arrayConversao[0].denomidorBase;;
    arrayConversao[2].valor = valor;
    arrayConversao[3].valor = valor / arrayConversao[0].denomidorBase;
  } else if (unidadeDeMedida == arrayConversao[3].referencia) {
    arrayConversao[0].valor = valor * arrayConversao[2].denomidorBase;
    arrayConversao[1].valor = valor * arrayConversao[1].denomidorBase;
    arrayConversao[2].valor = valor * arrayConversao[0].denomidorBase;;
    arrayConversao[3].valor = valor;
  }
}

function mostraConversao(arrayDeConversoes) {
  var logValoresDeConversao = function(conversao, index, meuArray) {
    console.table(`${conversao.valor.toFixed(9)} ${conversao.referencia}`);
  }

  arrayDeConversoes.forEach(logValoresDeConversao);
}

recebeInput();