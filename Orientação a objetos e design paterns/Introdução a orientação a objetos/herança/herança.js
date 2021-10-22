/* 'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this,4);
    
    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug); */

/* 'use strict'

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4)
    
    this.morde = morde;
    this.latir = function() {
        console.log('Socorro! Au! Au!');
    }
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true);

console.log(pug); */

'use strict'

function Animal() {
    Animal.prototype.qtdePatas = 0;
    Animal.prototype.movimentar = function() {}
}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('Socorro! Au! Au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

