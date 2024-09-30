function verificarNumeros() {
    // Obtener los valores ingresados por el usuario
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    
    const mensajeDiv = document.getElementById("mensaje");

    // Verificar si alguno de los números es menor a 10
    if (num1 < 10 || num2 < 10 || num3 < 10) {
        mensajeDiv.textContent = "Alguno de los números son menores a diez.";
    } else {
        mensajeDiv.textContent = "Todos los números son 10 o mayores.";
    }
}
