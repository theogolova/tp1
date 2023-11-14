let formulario = document.querySelector(".buscador");
let moviesapi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=aad4ccb8efdd15fad341576d3301e95e';

fetch(moviesapi)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    console.log(data.results);
    
    let contenidomovies = data.results;
    
    // Corrección: Selecciona el elemento input correctamente
    let input = document.querySelector("input");
    
    input.addEventListener("evento", function() {
      // Aquí puedes poner el código que se ejecutará cuando ocurra el evento en el input
      console.log("Evento en el input");
    });
  })
  .catch(function(err) {
    console.error(err);
  });


let logofooter = document.getElementById('tmdb-logo');

// Esto es un ejemplo: cambia el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener('mouseover', function() {
    this.style.width = '150px'; // Cambiar el ancho
});

logofooter.addEventListener('mouseout', function() {
    this.style.width = '100px'; // Volver al tamaño original
});