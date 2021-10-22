//Definição

/* Design patterns ou padrões de projeto são soluções generalistas para
problemas recorrentes durante o desenvolvimento de um software. Não
trata de um framework ou um código pronto, mas de uma definição de alto
nível de como um problema pode ser solucionado. */

//Formato de um pattern

/*  
    Nome
    Exemplo
    Contexto
    Problema
    Solução 
*/

//Tipos de um pattern

/* 
    Criação
    Estruturais
    Comportamentais 
*/

//Patterns de criação

/* 
Os padrões de criação são aqueles que abstraem e/ou adiam o processo
criação dos objetos.Eles ajudam a tornar um sistema independente de
como seus objetos são criados, compostos e representados. 
*/

//Exemplos de patterns de criação

/*     
    Abstract Factory
    Builder
    Factory method
    Prototype
    Singleton 
*/

//Patterns estruturais

/* 
Os padrões estruturais se preocupam com a forma como classes e objetos
são compostos para formar estruturas maiores. 
*/

//Exemplos de patterns estruturais

/* 
    Adapter             Business Delegate
    Bridge               Flyweight
    Composite         Proxy
    Decorator
    Facade 
*/

//Patterns comportamentais

/* 
Os padrões comportamentais se concentram nos algoritmos e atribuições
de responsabilidades entre os objetos. Eles não descrevem apenas padrões
de objetos ou de classes, mas também os padrões  de comunicação entre
objetos 
*/  

//Exemplos de patterns comportamentais

/* 
    Chain of responsibility
    Command          State       
    Interpreter          Strategy
    Iterator               Template Method
    Mediator            Visitor
    Observer 
*/

//Patterns mais utilizados no JavaScript

/* 
    Factory
    Singleton
    Decorator
    Observer
    Module 
*/

//1 - Factory

/* 
Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o *new*, são
consideradas funções Factory(fábrica). 
*/

//Exemplo de factory

/* function fakeUser() {
        this.name:  'Ricardo',
        this.lastName:  'Targino'
}

//Não é factory
const user = new fakeUser(); */

/* function fakeUser() {
    return {
        name:  'Ricardo',
        lastName:  'Targino'
    }
}

//Factory
const user =  fakeUser();
console.log(user); */

//2 - Singleton

/* 
O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la
toda vez em que for necessário utilizá-la. 
*/

//Exemplo de singleton

/* function pessoa() {
    if (!pessoa.instance) {
        pessoa.instance = this;
    }

    return pessoa.instance;
}

const person = pessoa.call({name: 'Ricardo'});

const person2 = pessoa.call({name: 'Rodrigo'});

console.log(person);
console.log(person2); */

//3 - Decorator

/* 
Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento
sem modificá-la explicitamente. 
*/

//Exemplo de decorator

/* let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum (2, 3)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum (4, 5)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum (2, 3))); */

//4 - Observer

/* É um patern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção
de objetos(observers) e notifica todos eles quando ocorrem mudanças no estado. */

//Exemplo de observer

/* class observable {
    constructor() {
        this.observables = [];
    };

    subscribe(fn) {
        this.observables.push(fn)
    };

    notify(data) {
        this.observables.forEach(fn => fn(data))
    };

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new observable();

const logData1 = data => console.log(`Subscribe 1: ${data} `)
const logData2 = data => console.log(`Subscribe 2: ${data} `)
const logData3 = data => console.log(`Subscribe 3: ${data} `)

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2'); */

//5 - Module

/* É um patern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor
variáveis globais. */

//Exemplo de module

let name = 'Padrão'

function getName() {
    return name;
};

function setName(newName) {
    name = newName;
};

module.exports = {
    getName,
    setName
};