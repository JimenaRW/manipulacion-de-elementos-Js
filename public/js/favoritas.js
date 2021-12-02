const appFav = document.getElementById("root-fav");
const containerFav = document.createElement("div");
containerFav.setAttribute("class", "container");
appFav.appendChild(containerFav);

let favoritos = [];

getFav = async () => {

  let ids_ = await localStorage.getItem('movieFav');
  let ids = ids_.split(',')
  let longitud = ids.length;
  for (let i = 0; i < longitud; i++) {

    let response = await fetch('/api/movies/' + ids[i])
    let result = await response.json();

    favoritos.push(result.data)

  }
  console.log(favoritos)
  cargarFav(favoritos)
}

cargarFav = (data) => {

  data.forEach((movie) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const h1 = document.createElement("h1");

    h1.innerHTML = `${movie.title}
    <div class="check-fav">
        <input type="checkbox" id="fav_${movie.id}" checked data-id="${movie.id}" class="fav">
        <label for="fav_${movie.id}" data-id="${movie.id}" class="fav" ><i class="far fa-star"></i></label>
        <label for="fav_${movie.id}" data-id="${movie.id}" class="fav-relleno"><i class="fas fa-star"></i></label>
    </div>`

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
    containerFav.appendChild(card);

  });

}


getFav()
