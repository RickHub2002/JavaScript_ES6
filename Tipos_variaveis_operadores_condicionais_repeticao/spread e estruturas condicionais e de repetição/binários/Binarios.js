// in
something in somethingItems

//Arrays
var arvores = new Array("pau-brasil", "carvalho", "loureiro", "sakura");
0 in arvores;               //Retorna true
3 in arvores;               //retorna true
5 in arvores;               //retorna false
"carvalho" in arvores;      //retorna false, é necessário especificar o número do index, não o valor
"length" in arvores;        //Retorna true (length é uma propriedade de Array)

//Objetos predefinidos
"PI" in Math;               //Retorna true
var minhaString = new String("parede");
"length" in minhaString;    //Retorna true

//Objetos personalizados
var meuCarro = {Marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro;        //Retorna true
"modelo" in meuCarro;       //Retorna true

//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //Code here
}