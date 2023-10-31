function duplicarElementos(array) {
    return array.map(elemento => elemento * 2);
}

function ejecutarPrograma() {
    const cantidad = prompt("Ingrese la cantidad de números enteros a generar aleatoriamente:");
    const numeros = [];

    for (let i = 0; i < cantidad; i++) {
        numeros.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
    }

    const resultado = duplicarElementos(numeros);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Números originales: ${numeros.join(', ')}</p>
        <p>Números duplicados: ${resultado.join(', ')}</p>
    `;
}
