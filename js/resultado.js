let moviesapi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=aad4ccb8efdd15fad341576d3301e95e'

function search() {
    const data = fetch(moviesapi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            console.log(data.results)
            let contenidomovies = data.results
            let input = documentquerySelector("input")
            input.addEventListener(" ")
        }).catch(function (err) {
            console.err(err)
        })

        const searchButton = document.getElementById("searchButton")
        const resultList = document.getElementById("padresItems")
        resultList.innerHTML = ""
    
        const filter = data.filter()
}









let logofooter = document.getElementById('tmdb-logo');

// Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener('mouseover', function () {
    this.style.width = '150px'; // Cambiar el ancho
});

logofooter.addEventListener('mouseout', function () {
    this.style.width = '100px'; // Volver al tamaño original
});