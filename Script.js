/*alert("hola");
let nombre = prompt("introduce tu nombre");
console.log(nombre);

let numeros = [1,2,3];
for (let i =0; i<numeros.length; i++){
console.log(i);
}

let person = {
nombre:"Iker",
edad: 38,
apellido:"Murga",
nombre_completo: function(){
return this.nombre + " " + this.apellido;
},
saludar: function(){
return "Hola me llamo " + this.nombre;
},
saludarAOtro: function(persona){
return "Hola" + persona.nombre;
}
};

let miguel={
nombre: "Miguel"
edad: function(persona){
persona.edad;
}
};
miguel.edad(person);
console.log(person.saludarAOtro(miguel));

console.log(person.saludar());

let perro = {
nombre: "Milu",
ruido: "Guau",
saludar: function(){
return this.nombre + "dice" + this.ruido;
}
};

let gato ={
nombre: "Salem",
ruido: "Miau",
saludar: function(){
return this.nombre + " dice " + this.ruido;
}
};

function crearAnimal(nombre, ruido){
return{
nombre:nombre,
ruido: ruido,
saludar: function(){
return this.nombre + " dice " + this.ruido;
}
};
}

let gato=crearAnimal("salem", "miao");
let perro=crearAnimal("milu", "guau");

console.log(gato.saludar());
console.log(perro.saludar());

class Animal{
constructor(nombre, ruido){
this.nombre =nombre;
this.ruido= ruido;
}
saludar(){
return this.nombre + "dice" + this.ruido;
}
}

let gato= new Animal("salem", "miau");
let perro = new Animal("milu", "guau");
let animales=[perro, gato];

let animales=[new Animal("milu", "guau"), new Animal("salem", "miao")];
animales.push(new Animal("pato", "quack"));

for(let i=0; i<animales.length; i++){
console.log(animales[i].saludar());
}

let resultado = " ";
animales.forEach(function (animal){
//console.log(animal.saludar());
//let intermedio = "<p>" + animal.saludar() + "</p>";
//resultado = resultado + intermedio;
resultado += "<p>" + animal.saludar() + "<p>";
});

console.log(resultado);
document.getElementById("lista_mascotas").innerHTML=resultado;


function saludar(){
let nombre=document.getElementById("nombre").value;
alert(nombre);
}

console.log(gato.saludar());
console.log(perro.saludar());*/


class Animal{
    constructor(nombre, accion){
    this.nombre =nombre;
    this.accion= accion;
    }
}

let animales = [];

function saludar(){
    let nombre = document.getElementById("nombre").value;
    let accion =document.getElementById("accion").value;

    let animal =new Animal (nombre, accion);

    animales.push(animal);
    for(let i=0; i<animales.length; i++){
        console.log(animales[i].nombre);
        console.log(animales[i].accion);
    }
}

function listar(){
    let resultado ="";
    for(let i=0; i<animales.length; i++){
        resultado += "<p>" + animales[i].nombre + " dice " + animales[i].accion + "</p>";
    }
        document.getElementById("lista_mascotas").innerHTML = resultado;

};

let resultado = " ";
animales.forEach(function (animal){
resultado += "<p>" + animal.saludar() + "<p>";
});




//let resultado = " ";
//animales.forEach(function (animal){
//resultado += "<p>" + animal.saludar() + "<p>";
//});
//console.log(resultado);

