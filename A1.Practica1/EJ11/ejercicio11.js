function lanzarDado() {
    let intentos = 0;
    let numero;

    // Generar números aleatorios hasta que se encuentre un número par
    do {
        numero = Math.floor(Math.random() * 5) + 1;  // Generar un número aleatorio entre 1 y 5
        intentos++;
        console.log("Número generado: " + numero);
    } while (numero % 2 !== 0);  // Continuar mientras el número no sea par

    // Mensaje cuando se encuentra un número par
    console.log(` He conseguido un número par después de ${intentos} veces.`);
}