let apiKey = "fb127d20d8c5df555d204c84bd6bab37";
let queryString = location.search;
let busqueda = new URLSearchParams(queryString);
let busquedaTag = busqueda.get("with_keywords");

console.log(busqueda);
console.log(busquedaTag);

fetch(
  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busquedaTag}`
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
      console.log(data.results);
      let listaPeliculas = data.results;
      let nombrePelicula = document.querySelector(".coincidencia");
      let resultadosSimilares = document.querySelector(".resBusqueda");
      let busquedasSimilares = document.querySelector(".resBusquedas");
      let pelisRel = document.querySelector(".busqRelacionadas");
      let busqSimil = "";
      let pelicula = "";
      let similares = "";
      let pelisRelacionadas = "";

      if(listaPeliculas.length === 0) {
        nombrePelicula.innerHTML = "no hay resultado para su búsqueda"
        pelisRel.innerHTML = "no hay resultado para su búsqueda"
      }
      pelicula += `
            <article class="coinc un">
                <a href="./detallepelicula.html?id=${listaPeliculas[0].id}">${listaPeliculas[0].title}
                <img class="FavFoto" src="https://image.tmdb.org/t/p/w500/${listaPeliculas[0].poster_path}">
                </a>
            </article>`;
      nombrePelicula.innerHTML = pelicula;
      similares += `
            <h4>Resultados similares a tu busqueda: '${busquedaTag}'</h4>`;
      resultadosSimilares.innerHTML = similares;
      busqSimil += `
            <h4>Coincidencias a tu busqueda: '${busquedaTag}'`;
      busquedasSimilares.innerHTML = busqSimil;

      for (let i = 1; i < listaPeliculas.length; i++) {
        pelisRelacionadas += `
                <article class="relac un">
                    <a href="./detallepelicula.html?id=${listaPeliculas[i].id}" class="detallePelicula" id="${listaPeliculas[i].id}">${listaPeliculas[i].title}
                    <img src="https://image.tmdb.org/t/p/w500/${listaPeliculas[i].poster_path}">
                    </a>
                </article>`;
      }
      pelisRel.innerHTML = pelisRelacionadas;
      nombrePelicula.innerHTML = pelicula;
    
  }).catch(function (err) {
    console.log(err);
  })
// let queryString = location.search
// let queryStringObj = new URLSearchParams(queryString)
// let datoFormulario = queryStringObj.get("searchButton")
// let textoBusqueda = document.getElementById("busqueda")
// textoBusqueda.innerText = `Resultado de: ${datoFormulario}`
// const apiKey = "fb127d20d8c5df555d204c84bd6bab37"
// let apiUrl = `https://api.themoviedb.org/3/discover/movie?query=${datoFormulario}&api_key=${apiKey}`

// fetch(apiUrl)
//     .then(function (res){
//         return res.json()
//     })
//     .then(function (data){
//         console.log(data)
//         let results = data.results
//         let modifContenedor = ""
//         let contenedor = document.getElementById("searchResults")

//         if (results.length) {
//             for (let i; i<6; i++){
//                 let movieId = results[i].id
//                 let movieTittle = results[i].title
//                 let fecha = results[i].release_date
//                 let poster = "https://image.tmdb.org/t/p/w200" + posterPath

//                 modifContenedor += `
//                     <article class="peli">
//                         <h3 class="titulo-item">${movieTittle}</h3>
//                         <a href="./detail-movie.html?movie_id=${movieId}" class="addPic"><img id="img" src=${poster} </img></a>
//                         <ul>
//                             <li>Fecha de estreno: ${fecha}</li>
//                         </ul>
//                     </article>
//                 `
//             }
//             contenedor.innerHTML = modifContenedor
//         }
//     })

// document.getElementById('searchButton').addEventListener('click', function(event) {
//     event.preventDefault();
//     const search = document.getElementById('busqueda').value;
//     realizarBusqueda(search);
// });

// function realizarBusqueda(term) {
//     fetch(`https://api.themoviedb.org/3/discover/movie?with_keywords=${term}&api_key=${apiKey}`)
//         .then(function(response) {
//             return response.json(); // Agregué un "return" aquí
//         })
//         .then(function(data) {
//             console.log(data)
//             mostrarResultados(data);
//         })
//         .catch(function(err) {
//             console.error('Error al realizar la búsqueda:', err);
//         });
// }

// function mostrarResultados(resultados) {
//     const searchResults = document.getElementById('searchResults');
//     searchResults.innerHTML = '';

//     for (let i = 0; i < resultados.results.length; i++) {
//       const resultado = resultados.results[i];
//       const elementoResultado = document.createElement('div');
//       elementoResultado.textContent = resultado.original_title; // Suponiendo que cada resultado tiene una propiedad 'title'
//       searchResults.appendChild(elementoResultado);
//     }
//   }

// let logofooter = document.getElementById("tmdb-logo");

// // Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
// logofooter.addEventListener("mouseover", function () {
//   this.style.width = "150px"; // Cambiar el ancho
// });

// logofooter.addEventListener("mouseout", function () {
//   this.style.width = "100px"; // Volver al tamaño original
// });
