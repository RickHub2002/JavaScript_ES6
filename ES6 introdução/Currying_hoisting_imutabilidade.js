//Currying
//Pre-seta uma valor, neste caso, o valor do parâmetro "a"

function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
console.log(soma2(6));

//Hoisting de variáveis
//O primeiro console.log irá retornar 'undefined' e o segundo o valor da variável

function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

//Hoisting de funções
function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

//Imutabilidade
const user = {
    name: 'Ricardo',
    lastName: 'Targino do Nascimento'
};

function getUserWithFullName(user) {
    return {
        ...user, //spread Operator
        fullName: `${user.name} + ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

//Imutabilidade - outro exemplo
const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Paul',
        grade: 6
    },
    {
        name: 'Ronald',
        grade: 5
    },
    {
        name: 'Maria',
        grade: 8
    },
    {
        name: 'Jonathan',
        grade: 6.5
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos');
console.log(students);

//Tipos e variáveis
//var = 'Variable'
//let = 'Let it change'
//const = 'Constant'

//escopo global

{
    //escopo de bloco
}

//escopo de função
(() => {
    let test = 'valor da função';
    console.log(`Valor de dentro da função ${test}`);

    if(true) {
        let test = 'valor do if';
        console.log(`Valor de dentro do if ${test}`);
    }

    console.log(`Valor após a execução do if ${test}`);
})();