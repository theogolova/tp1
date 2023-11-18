let apiKey = "fb127d20d8c5df555d204c84bd6bab37";
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let movieDetailsApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`;
fetch(movieDetailsApi)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let detapelis = document.getElementById("detapelis");
    let pelicula = "";
    let generos = ""


    for (let i = 0; i < data.genres.length; i++) {
      generos += `<p><a href="./detalledelgenero.html?id=${data.genres[i].id}">${data.genres[i].name}</p>`
    }

    pelicula += `
    <img class="FavFoto" src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
    <h3 class="titulo_detallepelicula">${data.title}</h3>
    <p class="date_detallepelicula">${data.release_date}
    <h4 class="vote_detallepelicula">Promedio de puntuacion: ${data.vote_average}</h4>
    <p class="desc_detallepelicula">${data.overview}</p>
    <p class="time_detallepelicula">Duracion: ${data.runtime} Minutos</p>
    ${generos}
`;
    detapelis.innerHTML = pelicula;
  })
  .catch(function (err) {
    console.log("Error al obtener detalles de la película:", err);
  });

let movieRecommendationsApi = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`;
fetch(movieRecommendationsApi)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let recData = data.results;
    let recommendations = document.getElementById("recommendations");
    let recomendacion = "";

    for (let i = 1; i < recData.length; i++) {
      recomendacion += `
        <a href="./detallepelicula.html?id=${recData[i].id}">
            <img class="img_recommendations" src="https://image.tmdb.org/t/p/w200/${recData[i].poster_path}">
            <h4 class="title_recommendations">${recData[i].title}</h4>
        </a>
        `;
    }
    recommendations.innerHTML = recomendacion;
  });

let logofooter = document.getElementById("tmdb-logo");

// Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener("mouseover", function () {
  this.style.width = "150px"; // Cambiar el ancho
});

logofooter.addEventListener("mouseout", function () {
  this.style.width = "100px"; // Volver al tamaño original
});
