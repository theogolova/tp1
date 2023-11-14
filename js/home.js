let formulario = document.querySelector(".buscador");
let moviesapi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=aad4ccb8efdd15fad341576d3301e95e';

fetch(moviesapi)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {

    let peliculas = ""

    for (let index = 0; index < 5; index++) {
      let pelicula = data.results[index];

      // Agregar el contenido de cada película a la cadena
      peliculas += `
        <div class="item">
          <img class="img" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
          <h3 class="titulo-item">${pelicula.original_title}</h3>
          <p class="fechapelicula">Fecha de estreno: <br>${pelicula.release_date}</p>
        </div>
      `;
      console.log(data.results)
    }

    const moviesList = document.getElementById("padreItems");
    moviesList.innerHTML = peliculas; // Aasigna el valor al innerHTML

    input.addEventListener("evento", function () {
      // Aquí puedes poner el código que se ejecutará cuando ocurra el evento en el input
      console.log("Evento en el input");
    });
  })
  .catch(function (err) {
    console.error(err);
  });



  let logofooter = document.getElementById('tmdb-logo');

// Esto es un ejemplo: cambia el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener('mouseover', function () {
  this.style.width = '150px'; // Cambiar el ancho
});

logofooter.addEventListener('mouseout', function () {
  this.style.width = '100px'; // Volver al tamaño original
});