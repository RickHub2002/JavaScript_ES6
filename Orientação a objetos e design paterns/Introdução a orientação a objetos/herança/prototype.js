/* function Pessoa(nome) {
    this.name = nome;
}

const p = new Pessoa('Ricardo');
console.log(p) */

function Pessoa(name) {
    return {
        name: 'Teste'
    }   
};

const p = new Pessoa('Ricardo');
console.log(p)

//Mantém o valor atribuido a propriedade name, no caso do return explícito