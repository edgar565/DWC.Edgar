function mostrarPiramide() {
    // Obtener el valor del input
    const input = document.getElementById("inputNumber").value;
    const piramideDiv = document.getElementById("piramide");
    
    // Si no es un número válido o no es positivo, limpiar la pantalla
    if (isNaN(input) || input <= 0) {
        piramideDiv.textContent = ""; // Limpiar la pirámide
        return; // No hacer nada más
    }

    // Convertir el valor a un número entero
    const numero = parseInt(input);

    // Generar la pirámide de asteriscos
    let piramide = "";
    for (let i = 1; i <= numero; i++) {
        piramide += "* ".repeat(i) + "\n"; // Generar cada línea con i asteriscos
    }

    // Mostrar la pirámide
    piramideDiv.textContent = piramide;
}