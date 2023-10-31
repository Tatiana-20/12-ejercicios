function buscar() {
    var cadena = document.getElementById("cadena").value;
    var palabraClave = document.getElementById("palabraClave").value;
    var resultadoElement = document.getElementById("resultado");

    if (cadena.includes(palabraClave)) {
        resultadoElement.innerHTML = "La palabra clave aparece en la cadena.";
    } else {
        resultadoElement.innerHTML = "La palabra clave NO aparece en la cadena.";
    }
}
