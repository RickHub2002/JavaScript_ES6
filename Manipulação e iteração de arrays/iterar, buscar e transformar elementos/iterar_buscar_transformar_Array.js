//For each
//Iteração de cada item dentro de um array

const arr = [2,3,4,5,6];

/* 
arr.forEach((numero, arr, index) => console.log(numero, index, arr));
*/

//Map
//Retorna um novo array, de mesmo tamanho, iterando cada item de um array

/* 
const numeroIndex = arr.map((numero, index) => `Índice: ${index}, número:  ${numero}`);
console.log(numeroIndex); 
*/

//Flat
//Retorna um novo array com todos os elementos  de um sub-array concatenados de forma recursiva
//de acordo com a profundidade especificada(depth).

/* 
const idades = [18,25,33,58,[30,28,]];
console.log(idades.flat(2));
 */

//flatMap
//Retorna um novo array assim como a função map e executa um flat de profundidade 1

/* 
console.log(arr.flatMap(numero => [numero * 2]));
console.log(arr.flatMap(numero => [[numero * 2]]));
 */

//Keys
//Retorna um *array iterator* que contém as chaves para cada elemento do array

/* 
const arrIterator = arr.keys();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
 */

//Values
//Retorna um *array iterator* que contém os valores para cada elemento do array

/* 
const arrIterator = arr.values();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
 */

//Entries
//Retorna um *array iterator* que contém os pares chaves/valor para cada elemento do array

/* 
const arrIterator = arr.entries();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next()); 
*/

//Find
//Retorna o primeiro tem de um array que satisfaz a condição

/* 
const firstEvenNumber = arr.find(numero => numero % 2 === 0);

console.log(firstEvenNumber);
 */

//findIndex
//Retorna o índice do primeiro item de um array que satisfaz a condição

/* 
const firstEvenNumberIndex = arr.findIndex(numero => numero % 2 === 0);

console.log(firstEvenNumberIndex);
 */

//Filter
//Retorna um novo array com todos os elementos que satisfazem a condição

/* 
const oddNumber = arr.filter(numero => numero % 2 !== 0);

console.log(oddNumber);
 */

const arr2 = [2,5,5,3,6,8]

//indexOf
//Retorna  primeiro índice em que um elemento pode ser encontrado no array

/* 
const firstIndexOfItem = arr2.indexOf(5);

console.log(firstIndexOfItem);
 */

//lastIndexOff
//Retorna  último índice em que um elemento pode ser encontrado no array

/* 
const lastIndexOfItem = arr2.lastIndexOf(5);

console.log(lastIndexOfItem);
 */

//Includes
//Retorna um booleano verificando se determinado elemento existe no array

/* 
const arrIncludes = arr2.includes(2);
console.log(arrIncludes); 

const arrIncludes2 = arr2.includes(10);
console.log(arrIncludes2); 
*/

//Some
//Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

const persons = [
    {name: 'Ricardo', age: 18},
    {name: 'Ruan', age: 22},
    {name: 'Ronaldo', age: 26},
    {name: 'Regina', age: 15},
    {name: 'Roberto', age: 17},
]

/* 

const legalAge = persons.some(person => person.age  >= 18);
console.log(legalAge); 

const legalAge2 = persons.findIndex(person => person.age  >= 18);
console.log(legalAge2); 

const legalAge3 = persons.find(person => person.age  >= 18);
console.log(legalAge3); 

const legalAge4 = persons.filter(person => person.age  >= 18);
console.log(legalAge4);
 */

//Every
//Retorna um booleano verificando se todos os itens do array satisfazem a condição

/* 
const everyPerson = persons.every(person => person.age >= 18);
console.log(everyPerson); 
*/

//Sort
//Ordena os elementos de um array de acordo com a condição

/* 
const growingAges = persons.sort((current, next) => current.age - next.age);
console.log(growingAges);
 */

//Reverse
//Inverte os elementos do array

/* 
const reversePersons = persons.reverse();
console.log(reversePersons);
 */

//Join
//Junta todos os elementos de um array, separados por um delimitador e retorna uma string

/* 
console.log(arr2.join('---')); 
*/

//Reduce
//Retorna um novo tipo de dado iterando cada posição de um array

const totalNumbers = arr2.reduce((total, number) => total += number, 0);
console.log(totalNumbers);