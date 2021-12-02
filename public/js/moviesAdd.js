if(qs('body.movieAdd')) {
    window.addEventListener('load', () => {
        
        console.log('moviesAdd.js vinculado correctamente!!!');
    
        // Manipulando elementos con Javascript ============
    
        let titulo = qs('h1.moviesAddTitulo');
        let section = qs('section');
        let article = qs('article');
        let inputTitle = qs('input#title');
        let estadoSecreto = 0;
    
        /* sobre titulo */
        titulo.innerText = "AGREGAR PELÍCULAS";
        titulo.classList.add("titulo");
    
        /* sobre artículo */
        article.classList.add("fondoTransparente");
        section.classList.add("fondoCRUD");
    
        // Fin Manipulando elementos con Javascript ============
    
        // Agregando interacción con eventos =======================
        titulo.addEventListener('mouseover', function () {
            this.style.color = "red";
        })
        titulo.addEventListener('mouseout', function () {
            this.style.color = "blue";
        })
    
        const checkKey = (key) => {
            switch (true) {
                case key == 's' && estadoSecreto === 0:
                    ++estadoSecreto;
                    break;
                case key == 'e' && estadoSecreto === 1:
                    ++estadoSecreto;
                    break;
                case key == 'c' && estadoSecreto === 2:
                    ++estadoSecreto;
                    break;
                case key == 'r' && estadoSecreto === 3:
                    ++estadoSecreto;
                    break;
                case key == 'e' && estadoSecreto === 4:
                    ++estadoSecreto;
                    break;
                case key == 't' && estadoSecreto === 5:
                    ++estadoSecreto;
                    break;
                case key == 'o' && estadoSecreto === 6:
                    estadoSecreto = 0;
                    alert('SECRETO MÁGICO!!')
                    break;
    
                default:
                    estadoSecreto = 0;
                    break;
            }
        }
        inputTitle.addEventListener('keypress', (e) => {
            checkKey(e.key)
            console.log(estadoSecreto)
        })
         // Fin Agregando interacción con eventos =======================
    
    })
 
}
