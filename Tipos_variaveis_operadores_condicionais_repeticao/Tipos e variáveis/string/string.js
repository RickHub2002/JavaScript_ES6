//Retornar o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retornar um array quebrando a string com um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Texto', 'Otxet');
console.log(`\nSubstituição de valor: ${replacedText}`);

//Retorna a "fatia" de um valor
const slicedTextLastChar = 'Texto'.slice(-1);
console.log(`\nÚltima letra da string: ${slicedTextLastChar}`);

const slicedTextWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última: ${slicedTextWithoutLastChar}`);

const slicedTextSecondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunda letra até o fim: ${slicedTextSecondToEnd}`);

//Retornar N caracteres a partir de uma posição
const subStringText = 'Texto'.substr(0, 2);
console.log(`\nAs duas primeiras letras são: ${subStringText}`);