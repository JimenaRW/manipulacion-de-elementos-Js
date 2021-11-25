if(qs('body.detail')) {

    window.addEventListener('load', function ()  {
        let formularioApi = $('formulario-api');
    
        const getPelicula = async () => {
            let url = window.location.href;
            let urlApi = url.slice(0,22) + 'api/movies/' + url.slice(36);
            let response = await fetch(urlApi)
            let result = await response.json()
    
            mostrarItem(result.data)
        }
    
        const mostrarItem = movie => {
            let item = 
            `
            <h1>${movie.title}</h1>    
            <br>
            <form class="card formulario">
                <h1>${movie.title}</h1>
                <input type="hidden" name="id">
                <div class="contain-input">        
                    <label for="title">Título </label>
                    <input type="text" name="title" id="title" value="${movie.title}" required disabled>
                </div>
                <div class="contain-input">
                    <label for="rating">Calificación </label>
                    <input type="number" name="rating" id="rating" value=${movie.rating} required disabled>
                </div>
                <div class="contain-input">
                <label for="awards">Premios </label>
                <input type="number" name="awards" id="awards" value=${movie.awards} required disabled>
                </div>
                <div class="contain-input">
                    <label for="release_date">Fecha de creación </label>
                    <input type="date" name="release_date" id="release_date" value=${movie.release_date.slice(0,10)} required disabled>
                </div>
                <div class="contain-input">
                    <label for="length">Duración </label>
                    <input type="number" name="length" id="length" value=${movie.length} required disabled>
                </div>
                <br>
                <div class="action">
                    <a class="botonModificar" href="/movies/edit/${movie.id}"><i class="fas fa-edit"></i> Modificar</a>
                    <a class="botonBorrar" href="/movies/delete/${movie.id}"><i class="fas fa-trash-alt"></i> Borrar</a>
                    <a class="botonVolver" href="/movies">Listado de Películas</a>
                </div>
            </form>
            </tr>
            `
            formularioApi.innerHTML += item;
        }
    
        getPelicula()
    
    })
}
