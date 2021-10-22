/**
 * 
 * for ([expressão inicial]; [condição]; [incremento])
 *      declaração
 * 
 */

const array = ['zero', 'one', 'two', 'three', 'four', 'five'];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element #${index}: ${element}.`)
};