function contarPalabras() {
    var frase = document.getElementById("frase").value;
    var palabras = frase.split(/\s+/).filter(function(palabra) {
        return palabra.length > 0;
    });
    var resultado = palabras.length;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = "Número de palabras: " + resultado;
}
