/**
 * 
 * switch(expressão) {
 *  case valor1:
 *      [break;]
 *  case valor2:
 *      [break;]
 *  case valor3:
 *      [break;]
 *  default:
 *      [break;]
 * }
 * 
 */

const fruit = 'mamão';

switch(fruit) {
    case 'banana':
        console.log('R$ 3,00 / kg')
        break;
    case 'mamão':
    case 'banana':
        console.log('R$ 2,00 / kg')
        break;
    default:
        console.log('Produto fora de estoque');
        break;
}

//Para rodar sempre o default em uma certa condição, é só remover o 'break'