console.log('index.js vinculado correctamente!!!');

const qs = q => document.querySelector(q)

const $ = id => document.getElementById(id)

window.onload = () => {
    /* capturar los siguientes elementos: <body> y <h1> */
    let body = qs(body);
    let h1 = qs(h1);

    /* utilizar prompt */
    let oscuro = prompt("¿Desea modo oscuro?"); //capturando eleccion

    if (oscuro) {
        body.style.backgroundColor = "#7f7f7f​"; // en caso de true cambia el fondo
        document.body.classList.add("fondoMoviesList"); // en casp de true agregar clase
    }

    h1.innerText = "LISTADO DE PELÍCULAS"; // agregando texto
    h1.style.color = white; //agregando color de fuente
    h1.style.backgroundColor = teal; //agregando color de fondo
    h1.style.padding = "20px";

}