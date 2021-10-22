//push
//Adiciona um ou mais elementos no final do array e retorna o tamanho do novo array

/* 
const nomes = ['Ricardo', 'Rodrigo', 'Roberto', 'Rogério']
const arrLength = nomes.push('Ronaldo');
console.log(arrLength);
console.log(nomes); 
*/

//pop
//Remove o último elemento de um array e retorna o elemento removido

/* 
const nomes = ['Ricardo', 'Rodrigo', 'Roberto', 'Rogério']
const arrDeletedItem = nomes.pop();
console.log(arrDeletedItem);
console.log(nomes); 
 */

//unshift
//Adiciona um ou mais elementos no ínicio de array e retorna o tamanho do novo array

/* 
const nomes = ['Ricardo', 'Rodrigo', 'Roberto', 'Rogério']
const arrLength = nomes.unshift('Robson');
console.log(arrLength);
console.log(nomes); 
/*

//shift
//Remove um ou mais elementos no ínicio de array e retorna o item removido

/* 
const nomes = ['Ricardo', 'Rodrigo', 'Roberto', 'Rogério']
const arrDeletedItem = nomes.shift('Robson');
console.log(arrDeletedItem);
console.log(nomes);  
*/

//concat
//Concatena um ou mais arrays e retorna um novo array

/* 
const nomes = ['Ricardo', 'Rodrigo', 'Roberto', 'Rogério']
const sobrenomes = ['Targino', 'Maia', 'Gomes', 'Luíz']
const arrFusion = nomes.concat(sobrenomes);
console.log(arrFusion); 
*/

//slice
//Retorna um novo array "fatiando" o array de acordo com ínicio e fim

/* 
const nomes = ['Ricardo', 'Rodrigo', 'Roberto', 'Rogério']
//Mostra apenas os índices que estão dentro do parâmetro
const arrSliced = nomes.slice(0,2);
console.log(arrSliced);  

//Mostra a partir do índice dado como parâmetro
const arrSliced2 = nomes.slice(2)
console.log(arrSliced2);   
*/

//splice
//Altera um array adicionando novos elementos enquanto remove elementos antigos

const nomes = ['Ricardo', 'Rodrigo', 'Roberto', 'Rogério']
arrSpliced = nomes.splice(2);
console.log(arrSpliced);  
console.log(nomes);   
arrSplicedAdd = nomes.splice(0,0, 'Rubens');
console.log(arrSplicedAdd); 
console.log(nomes);


//split