function obtenerSaludo() {
    const hora = new Date().getHours();
    let saludo = '';

    if (hora >= 7 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 20) {
        saludo = "Buenas tardes";
    } else if (hora >= 20 || hora < 2) {
        saludo = "Buenas noches";
    } else {
        saludo = "¿Qué haces despierto a estas horas?";
    }

    return saludo;
}
document.getElementById("saludo").textContent = obtenerSaludo();
