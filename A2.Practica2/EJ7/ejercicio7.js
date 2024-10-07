// Generar array de números aleatorios de lotería
let numerosLoteria = generarNumerosLoteria();
let intentos = 0;

// Función para generar 5 números aleatorios entre 1 y 10
function generarNumerosLoteria() {
    let numeros = [];
    while (numeros.length < 5) {
        let num = Math.floor(Math.random() * 10) + 1;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }
    return numeros;
}

// Función para intentar adivinar el número
function intentarAdivinar() {
    const userNumber = parseInt(document.getElementById("userNumber").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        resultadoDiv.textContent = "Por favor, introduce un número válido entre 1 y 10.";
        return;
    }

    let mensaje = "";
    let encontrado = false;

    for (let i = 0; i < numerosLoteria.length; i++) {
        if (userNumber === numerosLoteria[i]) {
            mensaje = `¡Correcto! El número ${userNumber} está en la posición ${i + 1}.`;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        mensaje = `El número ${userNumber} no esta en los números premiados de la lotería.`;
    }

    intentos++;
    resultadoDiv.textContent = mensaje;
    document.getElementById("intentos").textContent = `Intentos: ${intentos}`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    numerosLoteria = generarNumerosLoteria();
    intentos = 0;
    document.getElementById("resultado").textContent = "";
    document.getElementById("intentos").textContent = "";
    document.getElementById("userNumber").value = "";
}
