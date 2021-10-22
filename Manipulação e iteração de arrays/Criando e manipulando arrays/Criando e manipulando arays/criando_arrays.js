//Criando um array

//Tradicional

/* 
const arr = [1, 2, 3, 4, 5];
const arr2 = ['Ricardo', 'Rodrigo', 'Roberto', 'Ronaldo']; 
*/

//Array instanciado

/*
const arr3 = new Array(1,2,3);
*/

//Array.of
//Cria um array dos valores passados como parâmetro

/*
const arr4 = Array.of(1,2,3,4,5);
*/

/*
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
*/

//Array 
//o processo será similar ao Array.of, porém, se for passado apenas um valor, o mesmo será 
//contabilizado como espaços vazios.

/* 
const arr = Array(3);
// [3 espaços vazios]
const arr2 = Array(3,2);
console.log(arr);
console.log(arr2); 
*/

//Array.from 
//Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object

const divs = document.querySelectorAll('div');
const arr = Array.from(divs);
