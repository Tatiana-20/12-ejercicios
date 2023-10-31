document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var cadena = document.getElementById('cadena').value;
    var mayusculas = cadena.toUpperCase();
    var minusculas = cadena.toLowerCase();

    var resultadoHTML = `
        <h2>Cadena en Mayúsculas:</h2>
        <p>${mayusculas}</p>
        <h2>Cadena en Minúsculas:</h2>
        <p>${minusculas}</p>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});
