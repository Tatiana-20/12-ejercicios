function esAnagrama(cadena1, cadena2) {
    cadena1 = cadena1.replace(/\s/g, '').toLowerCase();
    cadena2 = cadena2.replace(/\s/g, '').toLowerCase();

    if (cadena1.length !== cadena2.length) {
        return false;
    }

    let arreglo1 = cadena1.split('').sort();
    let arreglo2 = cadena2.split('').sort();

    return arreglo1.join('') === arreglo2.join('');
}

function verificarAnagrama() {
    let cadena1 = document.getElementById('cadena1').value;
    let cadena2 = document.getElementById('cadena2').value;
    let resultadoElement = document.getElementById('resultado');

    if (esAnagrama(cadena1, cadena2)) {
        resultadoElement.textContent = '¡Son anagramas!';
    } else {
        resultadoElement.textContent = 'No son anagramas.';
    }
}
