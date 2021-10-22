/* 'use strict';

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);

console.log(pug); */

'use strict';

class Animal {
    constructor() {
        this.qtdePatas = 0;
    }
    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Socorro! Au! Au!')
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
