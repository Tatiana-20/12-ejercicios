function reemplazar() {
    var cadena = document.getElementById('cadena').value;
    var resultado = document.getElementById('resultado');
    var nuevaCadena = '';

    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena[i].toLowerCase();

        switch (caracter) {
            case 'a':
                nuevaCadena += '#';
                break;
            case 'e':
                nuevaCadena += '$';
                break;
            case 'i':
                nuevaCadena += '@';
                break;
            case 'o':
                nuevaCadena += '&';
                break;
            case 'u':
                nuevaCadena += '!';
                break;
            default:
                nuevaCadena += cadena[i];
                break;
        }
    }

    resultado.textContent = 'Cadena original: ' + cadena + '\nCadena reemplazada: ' + nuevaCadena;
}
