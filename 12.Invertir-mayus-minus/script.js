function convertir() {
    let listaPalabras = document.getElementById('listaPalabras');
    let palabras = listaPalabras.children;

    function invertirLetras(palabra) {
        let nuevaPalabra = '';
        for (let i = 0; i < palabra.length; i++) {
            let char = palabra[i];
            if (char === char.toUpperCase()) {
                nuevaPalabra += char.toLowerCase();
            } else {
                nuevaPalabra += char.toUpperCase();
            }
        }
        return nuevaPalabra;
    }

    for (let i = 0; i < palabras.length; i++) {
        let palabraOriginal = palabras[i].textContent;
        let palabraModificada = invertirLetras(palabraOriginal);
        palabras[i].textContent = palabraModificada;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let listaPalabras = document.getElementById('listaPalabras');
    let palabras = ['pErRo', 'gAtO', 'cAsA', 'áRbOl', 'cOmPuTaDoRa', 'lIbRo', 'pElOtA', 'sOl', 'mOnTaÑa', 'pLaYa'];
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let li = document.createElement('li');
        li.textContent = palabra;
        listaPalabras.appendChild(li);
    }
});
