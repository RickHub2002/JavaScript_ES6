const myNumber = 12.40823;

//Transformar número em string
const numberAsString = myNumber.toString();
console.log(`Número transformado em string: ${numberAsString}`);

//Retorna um número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com duas casas decimais: ${fixedTwoDecimals}`);

//Transforma uma string em um float
console.log(`\nString parseada para float: ${parseFloat('20.25')}`);

//Transforma uma string em um int
console.log(`\nString parseada para int: ${parseInt('18.50')}`);