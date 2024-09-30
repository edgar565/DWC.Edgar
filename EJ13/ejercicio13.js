function generarCancion() {
    // Obtener el número de limones ingresado por el usuario
    const numLimones = parseInt(document.getElementById("numLimones").value);
    const resultadoDiv = document.getElementById("resultado");
    
    // Limpiar el contenido previo
    resultadoDiv.innerHTML = '';

    // Validar que se haya ingresado un número válido
    if (numLimones <= 0) {
        resultadoDiv.textContent = "Por favor, introduce un número válido de limones.";
        resultadoDiv.style.color = "red";
        return;
    }

    // Generar la canción
    let cancion = '';
    for (let i = 1; i < numLimones; i++) {
        cancion += `${i} limón${i > 1 ? 'es' : ''}, y medio limón.<br>`;
    }

    // Añadir la última estrofa en mayúsculas
    cancion += `¡¡¡Y ${numLimones} LIMÓN${numLimones > 1 ? 'ES' : ''} Y MEDIO LIMÓN!!!`;

    // Mostrar la canción en la página
    resultadoDiv.innerHTML = cancion;
    resultadoDiv.style.color = "black";
}
