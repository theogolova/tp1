let apiKey = "fb127d20d8c5df555d204c84bd6bab37";
let queryString = location.search;
let genres = new URLSearchParams(queryString);
let genresTag = genres.get('id');

console.log(genresTag)

fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.asc&with_genres=${genresTag}`
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let divgeneros = document.getElementById("divgeneros")
    let peliculasGeneros = data.results;
    console.log(peliculasGeneros)
    let pelicula = "";

    for (let i = 1; i < peliculasGeneros.length; i++) {
      pelicula += `
                <article class="relac un">
                    <a href="detallepelicula.html?id=${peliculasGeneros[i].id}" class="detalleGenero" id="${peliculasGeneros[i].id}">${peliculasGeneros[i].title}</a>
                    <img src="https://image.tmdb.org/t/p/w500/${peliculasGeneros[i].poster_path}">
                </article>`;
      
    }divgeneros.innerHTML = pelicula;
  })
  .catch(function (err) {
    console.log(err);
  });

let logofooter = document.getElementById('tmdb-logo');

// Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener('mouseover', function() {
    this.style.width = '150px'; // Cambiar el ancho
});

logofooter.addEventListener('mouseout', function() {
    this.style.width = '100px'; // Volver al tamaño original
});