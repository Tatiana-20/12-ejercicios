const frutas = [
    'manzana', 'banana', 'naranja', 'pera', 'uva', 
    'piña', 'sandía', 'melón', 'limón', 'kiwi',
    'mango', 'cereza', 'papaya', 'ciruela', 'frambuesa',
    'arándano', 'higo', 'granada', 'guayaba', 'pomelo'
];

function verificarFruta() {
    const frutaInput = document.getElementById('frutaInput').value.toLowerCase();
    const estaEnLaLista = frutas.includes(frutaInput);
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.textContent = (estaEnLaLista)? "¡Sí! "+frutaInput+" está en la lista." : "Lo siento, "+frutaInput+" no está en la lista.";
}
