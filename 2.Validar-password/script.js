function validar() {
    var password = document.getElementById("password").value;
    var resultado = document.getElementById("resultado");

    if (password.length < 8) {
        resultado.innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        return;
    }

    var contieneMayuscula = /[A-Z]/.test(password);
    var contieneNumero = /\d/.test(password);

    if (!contieneMayuscula || !contieneNumero) {
        resultado.innerHTML = "La contraseña debe contener al menos una letra mayúscula y un número.";
        return;
    }

    if (/\s/.test(password)) {
        resultado.innerHTML = "La contraseña no puede contener espacios en blanco.";
        return;
    }

    resultado.innerHTML = "La contraseña es válida.";
}

function generatePassword() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let texto = charset[Math.floor(Math.random() * 73)]
    const limit = Math.floor(Math.random() * 8) + 8
    for(let m = 0; m < limit; m++){
      texto += charset[Math.floor(Math.random() * 73)]
    }
    const textoElement = document.getElementById('texto');
    let i = 0;
    textoElement.innerHTML = ''
    function escribir() {
      //textoElement.innerHTML = ''
        if (i < texto.length) {
            setTimeout(() => {
                if (texto[i] === ' ') {
                    textoElement.innerHTML += '&nbsp;';
                } else {
                    textoElement.innerHTML += texto[i];
                }
                i++;
                escribir();
            }, 100);
        } else {
            convertirAsteriscos();
        }
    }
  
    function convertirAsteriscos() {
        const letras = textoElement.innerText.split('');
        textoElement.innerText = '';
  
        letras.forEach(letra => {
            setTimeout(() => {
                if (letra !== ' ') {
                    textoElement.innerHTML += '*';
                } else {
                    textoElement.innerHTML += '&nbsp;';
                }
            }, 10);
        });
    }
  
    escribir();
  };
  
  generatePassword()
  
  setInterval(generatePassword, 4000)
  
