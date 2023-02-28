const tiempo = setInterval( ()=>{
    document.write("HOLA");
},2000 );

const otro = setTimeout( ()=>{
    clearTimeout(tiempo);
},7000 );
