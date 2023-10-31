function invertirCadena() {
    var inputText = document.getElementById("inputText").value;
    var resultado = document.getElementById("resultado");

    var cadenaInvertida = invertir(inputText);
    resultado.textContent = "Cadena invertida: " + cadenaInvertida;
}

function invertir(cadena) {
    return cadena.split('').reverse().join('');
}
