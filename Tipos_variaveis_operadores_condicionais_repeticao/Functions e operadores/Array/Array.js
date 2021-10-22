const users = ['Rodrigo', 'Roberto', 'Martha', 'Bruce'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Rodrigo',
        age: 22,
        gender: gender.MAN
    },
    {
        name: 'Roberto',
        age: 25,
        gender: gender.MAN
    },
    {
        name: 'Martha',
        age: 18,
        gender: gender.WOMAN
    },
    {
        name: 'Bruce',
        age: 42,
        gender: gender.MAN
    }
];

/* // Retornar a quantidade de itens de um array
console.log(`Itens: ${persons.length}`);

//Verificar se é um array
console.log(`A variável persons é um array? '${Array.isArray(persons)}'`);

//Iterar os itens de um array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} Index: ${index} Array:`, arr);
}); */

//RETORNAM UM NOVO ARRAY

//Filtrar array
const men = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas apenas com homens', men);

//Retornar um novo
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao javaScript ES6';
    return person;
});

console.log('\nPessoas com a adição do course', personWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas' , totalAge);

//Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);
console.log('\nSoma de idades das pessoas que possue idade par', totalEvenAges);