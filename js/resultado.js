let apiKey = "fb127d20d8c5df555d204c84bd6bab37";
let queryString = location.search;
let busqueda = new URLSearchParams(queryString);
let busquedaTag = busqueda.get("with_keywords");

console.log(busqueda);
console.log(busquedaTag);

fetch(
  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busquedaTag}`
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data.results);
    let listaPeliculas = data.results;
    let nombrePelicula = document.querySelector(".coincidencia");
    let resultadosSimilares = document.querySelector(".resBusqueda");
    let busquedasSimilares = document.querySelector(".resBusquedas");
    let pelisRel = document.querySelector(".busqRelacionadas");
    let busqSimil = "";
    let pelicula = "";
    let similares = "";
    let pelisRelacionadas = "";

    if (listaPeliculas.length === 0) {
      nombrePelicula.innerHTML = "no hay resultado para su búsqueda";
      pelisRel.innerHTML = "no hay resultado para su búsqueda";
    } else {
      pelicula += `
            <article class="coinc un">
                <a href="./detallepelicula.html?id=${listaPeliculas[0].id}">${listaPeliculas[0].title}
                <img class="FavFoto" src="https://image.tmdb.org/t/p/w500/${listaPeliculas[0].poster_path}">
                </a>
            </article>`;
      similares += `
            <h4>Resultados similares a tu busqueda: '${busquedaTag}'</h4>`;
      resultadosSimilares.innerHTML = similares;
      busqSimil += `
            <h4>Coincidencias a tu busqueda: '${busquedaTag}'`;
      busquedasSimilares.innerHTML = busqSimil;

      for (let i = 1; i < listaPeliculas.length; i++) {
        pelisRelacionadas += `
                <article class="relac un">
                    <a href="./detallepelicula.html?id=${listaPeliculas[i].id}" class="detallePelicula" id="${listaPeliculas[i].id}">${listaPeliculas[i].title}
                    <img src="https://image.tmdb.org/t/p/w500/${listaPeliculas[i].poster_path}">
                    </a>
                </article>`;
      }
      pelisRel.innerHTML = pelisRelacionadas;
      resultadosSimilares.innerHTML = pelicula;
    }
  })
  .catch(function (err) {
    console.log(err);
  });