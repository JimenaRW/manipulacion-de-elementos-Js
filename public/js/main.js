if(qs('body.home')) {
    window.addEventListener('load', async () => {
        console.log('main.js success');
    
        const app = document.getElementById("root");
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        app.appendChild(container);
          
        
        const peliculas = async () => {
            try {
                // Aqui debemos agregar nuestro fetch
                let response = await fetch(window.origin + '/api/movies')
                let result = await response.json()
                
    
                // Codigo que debemos usar para mostrar los datos en el frontend
                result.data.forEach((movie) => {
                    const card = document.createElement("div");
                    card.setAttribute("class", "card");
            
                    const h1 = document.createElement("h1");
                    h1.textContent = movie.title;
            
                    const p = document.createElement("p");
                    p.textContent = `Rating: ${movie.rating}`;
                            
                    const duracion = document.createElement("p");
                    duracion.textContent = `Duración: ${movie.length}`;
            
                    container.appendChild(card);
                    card.appendChild(h1);
                    card.appendChild(p);
                    if (movie.genre !== null) {
                        const genero = document.createElement("p");
                        genero.textContent = `Genero: ${movie.genre.name}`;
                        card.appendChild(genero);
                    }
                    card.appendChild(duracion);
                });
                    
            } catch (error) {
                console.log(error)
            }
        }
        
        peliculas()
         
    })

}
  