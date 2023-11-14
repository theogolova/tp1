<<<<<<< HEAD
let formulario = document.querySelector(".buscador")
let moviesapi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=aad4ccb8efdd15fad341576d3301e95e'
fetch(moviesapi)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    console.log(data.results)
    let contenidomovies = data.results
    let input = documentquerySelector("input")
    input.addEventListener(" ")
=======
>>>>>>> 59f9268646a187f68b9df25e25dfae0c5cf186f3




<<<<<<< HEAD
})
.catch(function(console.error) {
    console.log("error: " + error);
})

let logofooter = document.getElementById('tmdb-logo');

// Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener('mouseover', function() {
    this.style.width = '150px'; // Cambiar el ancho
});

logofooter.addEventListener('mouseout', function() {
    this.style.width = '100px'; // Volver al tamaño original
});
>>>>>>> 59f9268646a187f68b9df25e25dfae0c5cf186f3
