window.addEventListener('load', () => {

    let container = qs('main');
    let subtitulo = qs('h2.subtitulo');
    let enlace = qs('a#enlace')
    let parrafos = document.querySelectorAll('p')
    const logoDH = qs('figure.logoDH');
    const menu = $('menu');

    if(localStorage.getItem('nombre')) {
        if(subtitulo) {
            subtitulo.innerText += ' ' + localStorage.getItem('nombre');
        }
    } else {
        let nombre = prompt('Decime tu nombre')

        if (nombre) {
            localStorage.setItem('nombre', nombre)
            if(subtitulo) {
                subtitulo.innerText += ' ' + nombre;
            }
        } else {
            subtitulo.innerText += ' invitado'
        }
    }

    if (subtitulo) {
        if (localStorage.getItem('fondo')) {
            if(localStorage.getItem('fondo') == 'true')
            document.body.classList.add('fondo')
        } else {
            /* utilización de confirm */
            let fondo = confirm('¿Querés cambiar el color de fondo?');
            localStorage.setItem('fondo', fondo)

            if (localStorage.getItem('fondo') == 'true') {
                document.body.classList.add('fondo')
            }
        }
    
        /* agregando estilos */
        subtitulo.style.textTransform = 'uppercase';
        enlace.style.color = "#E51B3E";
        

        /* agregar clases segun paridad */
        for (let i = 0; i < parrafos.length; i++) {

            if (i % 2 == 0) {
                parrafos[i].classList.add('destacadoPar')
            } else {
                parrafos[i].classList.add('destacadoImpar')
            }

        }
    
    container.style.display = "block";
    }
    /* Agregando interacción con eventos ======================= */
    logoDH.addEventListener('click', () => {
        menu.classList.toggle('mostrar')
    })

    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('mostrar')
    })
    /* Fin Agregando interacción con eventos ======================= */
})

