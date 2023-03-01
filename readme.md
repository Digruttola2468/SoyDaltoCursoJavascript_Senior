# Curso de Programacion Soy Dalto Senior

[Enlace del Video](https://www.youtube.com/watch?v=xOinGb2MZSk&t=0s&ab_channel=SoyDalto)

## Callbacks

Es una funcion dentro de otra funcion

```JS
function prueba(callback) {
    callback("pedro");
}

function decirNombre(nombre) {
    console.log(nombre);
}

prueba(decirNombre);
```

Existe otra manera de decir lo mismo como por ejemplo

```JS
function prueba(callback) {
    callback("pedro");
}

prueba( nombre => console.log(nombre));
```

## Promesas

```JS
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

```
