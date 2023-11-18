let apiKey = "fb127d20d8c5df555d204c84bd6bab37";
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let seriesDetailsApi = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;
fetch(seriesDetailsApi)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let detaseries = document.getElementById("detaseries");
    let serie = "";
    let generos = ""

    for (let i = 0; i < data.genres.length; i++) {
      generos += `<p><a href="./detalledelgenero.html?id=${data.genres[i].id}">${data.genres[i].name}</p>`
    }

    serie += `
    <img class="FavFotoSeries" src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
    <h3 class="titulo_detalleserie">${data.name}</h3>
    <p class="date_detalleserie">Primera vez emitida: ${data.first_air_date}
    <h4 class="vote_detalleserie">Promedio de puntuacion: ${data.vote_average}</h4>
    <p class="desc_detalleserie">${data.overview}</p>
    <p class="time_detalleserie">Temporadas: ${data.number_of_seasons}</p>
    <p class="time_detalleserie">Temporadas: ${data.number_of_episodes}</p>
    ${generos}
`;
    detaseries.innerHTML = serie;
  })
  .catch(function (err) {
    console.log("Error al obtener detalles de la película:", err);
  });

let serieRecommendationsApi = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${apiKey}`;
fetch(serieRecommendationsApi)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let recsData = data.results;
    let recommendationsS = document.getElementById("serieRecom");
    let recomendacionS = "";

    for (let i = 1; i < recsData.length; i++) {
      recomendacionS += `
        <a href="./detallepelicula.html?id=${recsData[i].id}">
            <img class="img_serierecommendations" src="https://image.tmdb.org/t/p/w200/${recsData[i].poster_path}">
            <h4 class="title_serierecommendations">${recsData[i].name}</h4>
        </a>
        `;
    } recommendationsS.innerHTML = recomendacionS;
  });

let logofooter = document.getElementById("tmdb-logo");

// Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener("mouseover", function () {
  this.style.width = "150px"; // Cambiar el ancho
});

logofooter.addEventListener("mouseout", function () {
  this.style.width = "100px"; // Volver al tamaño original
});
