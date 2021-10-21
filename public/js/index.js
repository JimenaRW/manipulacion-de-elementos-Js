console.log('index.js vinculado correctamente!!!');

const qs = q => document.querySelector(q)

const $ = id => document.getElementById(id)

window.onload = () => {
    /* capturar los siguientes elementos: <main>, <h2>, <a> y <p>, */
    let main = qs('main'); //capturando main
    let h2 = document.querySelector('.subtitulo'); //capturando selector subtitulo de h2
    let a = qs('a') //capturando a
    let parrafos = document.querySelectorAll('p') //capturando todos los p
    
    /* utilizar un prompt */
    let nombre = prompt('Decime tu nombre') //capturando nombre
    
    if(nombre){
        h2.innerText += ' ' + nombre; // en caso que exista agregarlo como texto al h2
    }else{
        h2.innerText += ' invitado' // en caso que no exista agregar 'invitado' como texto al h2
    } 

    /* agregando estilos */
    h2.style.textTransform = 'uppercase'; // darle uppercase al h2
    a.style.color = "#E51B3E"; //agregarle color al elemento a

    /* utilización de confirm */
    let response = confirm('¿Querés cambiar el color de fondo?'); //agregar un fondo o no

    if(response){
        document.body.classList.add('fondo') // true => agrega la clase fondo al body
    }
    
    /* agregar clases segun paridad */
    for (let i = 0; i < parrafos.length; i++) {
        
        if(i%2==0){
            parrafos[i].classList.add('destacadoPar')
        }else{
            parrafos[i].classList.add('destacadoImpar')
        }
        
    }

    /* agregando estilo al main */
    main.style.display = "block"; // display block
}


