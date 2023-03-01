class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

//console.log(new Persona("Ivan","ivandigruttola"));

const Dato = [
    ["ivan","@Ivan"],
    ["Brisa","@soyBrisa"],
    ["sebastian","@sebass"],
    ["nona"]
]

const personas = [];

for (let i = 0; i < Dato.length; i++) {
    personas[i] = new Persona(Dato[i][0],Dato[i][1])
}

let nombre = "Pedro";

const promesa = new Promise( (resolve,reject) => {
    if (nombre !== "Pedro") reject("Lo siento, El nombre NO es pedro");
    else resolve(nombre);
} )

promesa.then( resultado => {
    console.log(resultado);
}).catch( e => {
    console.log(e);
})
