/**
 * 
 * if(condition) {
 *    //Code here
 * } else if (condition) {
 *    //Code here
 * }
 * 
 */



//Else if só cai em uma condição por vez
const array = [2,4,5,6,11,38,22,15,7];

/* console.log('\nElse if');
array.forEach(item => {
    if(item % 2 === 0) {
        console.log(`O número: ${item} é divisível por 2`)
    } else if(item % 3 === 0) {
        console.log(`O número: ${item} é divisível por 3`)
    } else if(item % 5 === 0) {
        console.log(`O número: ${item} é divisível por 5`)
    } else {
        console.log(`O número: ${item} é primo`)
    }
}); */

console.log('\nVários if');
array.forEach(item => {
    if(item % 2 === 0) {
        console.log(`O número: ${item} é divisível por 2`)
    } if(item % 3 === 0) {
        console.log(`O número: ${item} é divisível por 3`)
    } if(item % 5 === 0) {
        console.log(`O número: ${item} é divisível por 5`)
    }
});