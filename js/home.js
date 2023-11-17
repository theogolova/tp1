let formulario = document.querySelector(".buscador");
let apiKey = "fb127d20d8c5df555d204c84bd6bab37";
let moviesapi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

let seriesapi = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

let moviesDestacadasApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`

fetch(moviesapi)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let peliculas = "";

    for (let index = 0; index < 5; index++) {
      let pelicula = data.results[index];
      console.log(pelicula.id);
      // Agregar el contenido de cada película a la cadena
      peliculas += `
        <div class="item">
          <a href="./detallepelicula.html?id=${pelicula.id}" class="detallePelicula" id="${pelicula.id}">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
            <h3 class="titulo-item">${pelicula.title}</h3>
            <p class="fechapelicula">Fecha de estreno: <br>${pelicula.release_date}</p>
          <a>
        </div>
      `;
    }
    const moviesList = document.getElementById("padreItems");
    moviesList.innerHTML = peliculas; // Aasigna el valor al innerHTML
  })
  .catch(function (err) {
    console.error(err);
  });

fetch(seriesapi)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let series = "";

    for (let index = 0; index < 5; index++) {
      let serie = data.results[index];
      console.log(serie.id);
      // Agregar el contenido de cada película a la cadena
      series += `
        <div class="item">
          <a href="./detalleserie.html?id=${serie.id}" class="detalleSerie" id="${serie.id}">
            <img class="img" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
            <h3 class="titulo-item">${serie.name}</h3>
          <a>
        </div>
      `;
    }
