function createSquare() {
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.left = Math.random() * window.innerWidth + 'px';
    square.style.animationDuration = Math.random() * 2 + 3 + 's';
    square.style.width = Math.floor(Math.random() * 50) + 20 + 'px';
    square.style.height = square.style.width;
    square.innerHTML = letras[Math.floor(Math.random() * 26)];
    square.style.fontSize = square.style.width
    square.style.textAlign = 'center'
    square.style.background = 'transparent'
    square.style.color = 'white'
    document.body.appendChild(square);
  
    setTimeout(() => {
      square.remove();
    }, 8000);
}

setInterval(createSquare, 150);

function contarPalabrasRepetidas() {
    var texto = document.getElementById('inputTexto').value.toLowerCase();
    var palabras = texto.split(/\s|[,.;]+/).filter(Boolean);
    var contador = {};

    palabras.forEach(function(palabra) {
        contador[palabra] = (contador[palabra])? contador[palabra] + 1 : 1;
    });

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "<h2>Palabras Repetidas</h2>";

    for (var palabra in contador) {
        if (contador.hasOwnProperty(palabra) && contador[palabra] > 1) {
            resultado.innerHTML += "<p>" + palabra + ": " + contador[palabra] + " veces</p>";
        }
    }
}
