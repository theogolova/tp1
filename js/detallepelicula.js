let logofooter = document.getElementById('tmdb-logo');

// Ejemplo: Cambiar el tamaño al pasar el mouse sobre el logo
logofooter.addEventListener('mouseover', function() {
    this.style.width = '150px'; // Cambiar el ancho
});




logofooter.addEventListener('mouseout', function() {
    this.style.width = '100px'; // Volver al tamaño original
});