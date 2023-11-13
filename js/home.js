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




})
.catch(function(console.error) {
    console.log("error: " + error);
})
