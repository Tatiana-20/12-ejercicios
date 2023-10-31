function mostrarLongitud() {
    var frase = document.getElementById('inputFrase').value;
    var palabras = frase.split(/\s+/).filter(Boolean);
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    palabras.forEach(function(palabra) {
        var longitud = palabra.length;
        resultado.innerHTML += '<p>La palabra "' + palabra + '" tiene una longitud de ' + longitud + ' caracteres.</p>';
    });
}
