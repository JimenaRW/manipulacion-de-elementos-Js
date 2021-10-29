console.log('index.js vinculado correctamente!!!');

const qs = q => document.querySelector(q)

const $ = id => document.getElementById(id)

window.addEventListener ('load', () => {

    let container = qs('main.container');
    let subtitulo = qs('h2.subtitulo');
    let enlace = qs('a#enlace')
    let parrafos = document.querySelectorAll('p')
    const logoDH = qs('figure.logoDH');
    const menu = $('menu');
    
    let nombre = prompt('Decime tu nombre')
    
    if(nombre){
        subtitulo.innerText += ' ' + nombre;
    }else{
        subtitulo.innerText += ' invitado'
    } 

    /* agregando estilos */
    subtitulo.style.textTransform = 'uppercase';
    enlace.style.color = "#E51B3E";

    /* utilización de confirm */
    let fondo = confirm('¿Querés cambiar el color de fondo?');

    if(fondo){
        document.body.classList.add('fondo')
    }
    
    /* agregar clases segun paridad */
    for (let i = 0; i < parrafos.length; i++) {
        
        if(i%2==0){
            parrafos[i].classList.add('destacadoPar')
        }else{
            parrafos[i].classList.add('destacadoImpar')
        }
        
    }

    container.style.display = "block";

    /* Agregando interacción con eventos ======================= */
    logoDH.addEventListener('click', () => {
        menu.classList.toggle('mostrar')
    })

    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('mostrar')
    })
    /* Fin Agregando interacción con eventos ======================= */
})


