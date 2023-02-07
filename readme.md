# Curso de Programacion Soy Dalto Senior

[Enlace del Video](https://www.youtube.com/watch?v=xOinGb2MZSk&t=0s&ab_channel=SoyDalto)

## Window Object

- *open()*: Carga un recurso en el contexto de un nuevo navegador o uno que ya existe
- *close()*: Cierra la ventana actual, o la ventana en la que se llamo
- *closed*: Indica si la ventana referenciada esta cerrada o no
- *stop()*: detiene la carga de recursos en el contexto de navegacion actual

```JS
let ventana = window.open("https://youtube.com");
console.log("La ventana esta cerrada? → " + ventana.closed);
ventana.close();
console.log("La ventana esta cerrada? → " + ventana.closed);
```

- *alert()*: muestra un cuadro de alerta con el contendio especifico y un boton Aceptar
- *print()*: abre el cuadro de dialogo imprimir para imprimir el documento actual
- *prompt()*: Abre un cuadro de dialogo con un mensaje que solicita al usuario un dato (string)

```JS
window.alert("Que miras pe*o**do?");
window.print();

let nombre = window.prompt("Dame un dato");
console.log(nombre);

let respuesta = window.confirm("Estas seguro que queres p**a ??");
console.log(respuesta);
```

- *screen*: return una referencia al objeto de pantalla asociado con la ventana

```JS
const screen = window.screen;

console.log(screen);
document.write(screen.availWidth);
```

- *screenLeft*: Return la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla
- *screenTop*: Return la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla

```JS
const pantallaLeft = window.screenLeft;
const pantallaTop = window.screenTop;

document.write(
    `Left: <b>${pantallaLeft}</b> <br>
    Right: <b>${pantallaTop}</b> <br>
`);
```

- *scrollX*: Return el numero de pixeles que el documento se desplaza actualmente horizontalmente
- *scrollY*: Return el numero de pixeles que el documento se desplaza actualmente verticalmente
- *scroll()*: Return la ventana a un lugar particular en el documento (con options y con posiciones)

```JS
//Eje horizontal
const scrollX = window.scrollX;
alert("Eje horizontal ScrollX: " + scrollX);

//Eje vertical
const scrollY = window.scrollY;
alert("Eje vertical ScrollY: " + scrollY);

window.scroll(0,100);
```

- `window.location.href`: Return la URL de la pagina actual
- `window.location.hostname`: Return nombre de dominio del servidor
- `window.location.pathname`: Return la ruta y el nombre de archivo de la pagina actual osea todo lo que viene despues del dominio de la pagina
- `window.location.protocol`: Return el protocolo web utilizado (http o https)
- `window.location.assign()`: carga un nuevo documento

```JS
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.assign("https://www.youtube.com/"));
```
