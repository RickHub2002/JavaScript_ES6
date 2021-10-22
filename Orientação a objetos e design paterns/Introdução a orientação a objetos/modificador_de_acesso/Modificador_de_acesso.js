//Privado e público

'use strict';

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Ricardo');

console.log(p);
//Person {getName: f, setName: f}

p.getName();
// 'Ricardo'

p.name;
// undefined

p.setName('Henrique');

p.getName();
// 'Henrique'