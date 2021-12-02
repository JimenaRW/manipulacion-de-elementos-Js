const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);


const getMovie = async () => {

    try {
        // Aqui debemos agregar nuestro fetch
        let response = await fetch("/api/movies")
        let result = await response.json()

        cargarMovie(result.data)
    } catch (err) {
        console.log(err)
    }

}

const cargarMovie = async (data) => {
    // Codigo que debemos usar para mostrar los datos en el frontend
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");

        h1.innerHTML = `${movie.title}
        <div class="check-fav">
            <input type="checkbox" id="fav_${movie.id}" ${ array.includes(movie.id.toString()) ? 'checked' : null } data-id="${movie.id}" class="fav">
            <label for="fav_${movie.id}" data-id="${movie.id}" class="fav" ><i class="far fa-star"></i></label>
            <label for="fav_${movie.id}" data-id="${movie.id}" class="fav-relleno"><i class="fas fa-star"></i></label>
        </div>`
        ;
       ;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
            const genero = document.createElement("p");
            genero.textContent = `Genero: ${movie.genre.name}`;
            card.appendChild(genero);
        }
        card.appendChild(duracion);

        
        container.appendChild(card);
        
    });
    
    
}


getMovie()