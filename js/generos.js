let genreApi = "https://api.themoviedb.org/3/genre/movie/list?api_key=aad4ccb8efdd15fad341576d3301e95e"

fetch(genreApi)
    .then(res => {
        return res.json()
    })
    .then(data => {
        let generos = ""

        for (let index = 0; index < 5; index++) {
            let genero = data.genres[index];

            generos += ` 
            <div class="item">
                <h3 class="itemgeneros"><a href="./generos/${genero.name}.html">${genero.name}</a></h3>
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