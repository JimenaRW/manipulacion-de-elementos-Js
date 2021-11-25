if(qs('body.home') || qs('body.newMovie')) {
    console.log('movies.js vinculado correctamente!!!');
    
    window.addEventListener('load', () => {
        
        let body = qs('body');
        let h1 = qs('h1');
        let logo = qs('figure#logoDH')
    
    /* 
        // Manipulando elementos con JavaScript ===========
    
        let oscuro = confirm("¿Desea modo oscuro?");
    
        if (oscuro) {
            body.style.backgroundColor = "#7f7f7f​";
            body.classList.add("fondoMoviesList");
        }
        // Fin Manipulando elementos con JavaScript ===========
    */
        
        //   Agregando interacción con eventos =======================
        logo.addEventListener('mouseover', () => {
            console.log(logo)
            body.style.backgroundColor = "#7f7f7f"
            body.classList.add("fondoMoviesList")
    
        })
        // Fin Agregando interacción con eventos =======================
    
        h1.innerText = "LISTADO DE PELÍCULAS"; // agregando texto
        h1.style.color = 'white'; //agregando color de fuente
        h1.style.backgroundColor = 'teal'; //agregando color de fondo
        h1.style.padding = "20px";
    
    })

}
