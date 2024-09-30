function verificarNavidad() {
    // Obtener la fecha ingresada por el usuario
    const fechaIngresada = new Date(document.getElementById("fecha").value);
    
    const mensajeDiv = document.getElementById("mensaje");

    // Verificar si el día y el mes corresponden a Navidad (25 de diciembre)
    const dia = fechaIngresada.getDate();
    const mes = fechaIngresada.getMonth(); // Enero es 0, Diciembre es 11

    if (dia === 25 && mes === 11) { // Mes 11 es diciembre
        mensajeDiv.textContent = "¡Es Navidad!";
        mensajeDiv.style.color = "green";
    } else {
        mensajeDiv.textContent = "No es Navidad.";
        mensajeDiv.style.color = "red";
    }
}
