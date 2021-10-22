/* let user = {
    name: 'Ricardo',
    age: 19
}

//Alterando as propriedades de um objeto
console.log(user);
user.name = 'Rodrigo';
user.age = 25;
//Ou
console.log(user);
user['name'] = 'Roberto';
user['age'] = 29;
console.log(user);

const prop = 'móvel';
user[prop] = 'mesa';
console.log(prop);

//Criando uma propriedade
user.lastName = 'Targino do Nascimento';
console.log(user);

//Deletando uma propriedade
delete user.name;
console.log(user) */

//console.log(`Nome do usuário: ${user.name}, sobrenome do usuário: ${user.lastName} e a idade do usuário: ${user.age}`);

//Funções em tipo Object
const user = {
    name: 'Ricardo',
    lastName: 'Targino do Nascimento'
}

/* //Recuperar as chaves do objeto
console.log(`Propriedades do objeto user: ${Object.keys(user)}`);

//Recuperar os valores das chaves do objeto
console.log(`\nValores das propriedades do objeto user: ${Object.values(user)}`);

//Retorna um array de arrays contendo nome da propriedade e valor da propriedade
console.log(`\nLista de propriedades e valores: ${Object.entries(user)}`); */

//Mergear propriedades do objeto
Object.assign(user, {fullName: 'Ricardo Targino do Nascimento'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 19}));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo; 

console.log('\nVariável newObj após as alterações', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Ricardo'};
Object.seal(person);

person.name = 'Ricardo Targino';
delete person.name;
person.age = 19;

console.log('\nVariável person após as alterações', person);
