# Curso de Programacion Soy Dalto Senior

[Enlace del Video](https://www.youtube.com/watch?v=xOinGb2MZSk&t=0s&ab_channel=SoyDalto)

## Eventos

Existen dos formas efectivas de realizar un click en un boton

```JS
const bt = document.querySelector(".button");

bt.addEventListener("click",()=>{
    alert("Hola")
});
```

```JS
const bt = document.querySelector(".button");

bt.addEventListener("click",saludar);

function saludar() {
    alert("Funcion Saludar: Hola")
}
```

- *El objeto Event*

```JS
const bt = document.querySelector(".button");

bt.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target);
});
```

- *Flujo de Eventos o "Event Flow"*

```JS
const bt = document.querySelector(".bt-1");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");

bt.addEventListener("click",(e)=>{
    alert("button");
});
container1.addEventListener("click",(e)=>{
    alert("Contenedor aquamarine");
});
container2.addEventListener("click",(e)=>{
    alert("Contenedor Verde");
});
```

- *Event Bubbling vs Event Capturing*

```JS
const bt = document.querySelector(".bt-1");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");

bt.addEventListener("click",(e)=>{
    alert("button");
});
container1.addEventListener("click",(e)=>{
    alert("Contenedor aquamarine");
},true);    //Primero se ejecuta este
container2.addEventListener("click",(e)=>{
    alert("Contenedor Verde");
});
```

- *event.stopPropagation()*

```JS
const bt = document.querySelector(".bt-1");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");

bt.addEventListener("click",(e)=>{
    alert("button");
    e.stopPropagation();
});
container1.addEventListener("click",(e)=>{
    alert("Contenedor aquamarine");
},true);    //Primero se ejecuta este
container2.addEventListener("click",(e)=>{
    alert("Contenedor Verde");
});
```

## Eventos del Mouse

- *click*
- *dblclick*: ocurre con un doble click
- *mouseover*: cuando el puntero del mouse se mueve sobre un elemento o sobre uno de sus hijos
- *mouseout*: cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios

--*Otros*--

- *contextmenu*: con un click en el boton derecho en un elemento para abrir un menu contextual
- *mouseenter*: cuando el puntero se mueve sobre un elemento
- *mouseleave*: cuando el puntero se mueve fuera de un elemento
- *mouseup*: cuando un usuario suelta un boton del mouse sobre un elemento
- *mousedown*: cuando un usuario apreta un boton del mouse sobre un elemento
- *mousemove*: cuando el puntero se mueve mientras esta sobre un elemento

## Eventos del Teclado

- *keypress*: cuando una tecla se presiona
- *keydown*: cuando una tecla se deja de presionar
- *onkeyup*: despues de que los dos eventos anteriores hayan concluido consecutivamente

## Eventos de la Interfaz

- *error*: cuando sucede un error durante la carga de un archivo multimedia
- *load*: cuando un objeto se ha cargado
- *beforeunload*: antes de que el documento este a punto de descargarse
- *unload*: ocurre una vez que se ha descargado una pagina
- *resize*: ocurre cuando se cambia el tamaño de la vista del documento
- *scroll*: cuando se desplaza la barra de desplazamiento de un elemento
- *select*: despues de que el usuario selecciona algun texto de `<input>` o `<textarea>`

## Time

- setTimeout()
- clearTimeout()

```JS
const tiempo = setTimeout( ()=>{
    document.write("HOLA");
},2000 );

clearTimeout(tiempo);
```

- setInterval()
- clearInterval()

```JS
const tiempo = setInterval( ()=>{
    document.write("HOLA");
},2000 );

const otro = setTimeout( ()=>{
    clearTimeout(tiempo);
},7000 );
```
