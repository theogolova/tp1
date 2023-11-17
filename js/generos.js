let genreApi = "https://api.themoviedb.org/3/genre/movie/list?api_key=fb127d20d8c5df555d204c84bd6bab37"

fetch(genreApi)
    .then(function(res) {
        return res.json()
    })
    .then(function (data) {
        let generos = ""

        for (let index = 0; index < 19; index++) {
            let genero = data.genres[index];
            generos += `
            <div class="item">
                <h3><a href="./detalledelgenero.html?id=${genero.id}" id="${genero.id}" class="detallePelicula">${genero.name}</a></h3>
            </div>
          `;
        }
        console.log(data.genres)
        const divGeneros = document.getElementById("divgeneros")
        divGeneros.innerHTML = generos
    })



let logofooter = document.getElementById('tmdb-logo');

// Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener('mouseover', function () {
    this.style.width = '150px'; // Cambiar el ancho
});

logofooter.addEventListener('mouseout', function () {
    this.style.width = '100px'; // Volver al tamaño original
});