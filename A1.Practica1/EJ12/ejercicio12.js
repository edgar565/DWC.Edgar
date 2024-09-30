function calcularIngreso() {
    // Obtener los valores ingresados
    const precioA = parseFloat(document.getElementById("precioA").value);
    const precioB = parseFloat(document.getElementById("precioB").value);
    const cantidadC = parseInt(document.getElementById("cantidadC").value);

    const resultadoDiv = document.getElementById("resultado");

    // Validar si todos los valores fueron ingresados correctamente
    if (isNaN(precioA) || isNaN(precioB) || isNaN(cantidadC)) {
        resultadoDiv.textContent = "Por favor ingrese todos los valores correctamente.";
        resultadoDiv.style.color = "red";
        return;
    }

    // Verificar si los precios de los productos A y B son iguales
    if (precioA === precioB) {
        const sumaPrecios = precioA + precioB;
        const ingresoTotal = sumaPrecios * cantidadC;
        resultadoDiv.textContent = `Ingreso total: ${ingresoTotal}`;
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = "Los precios no son iguales. No se puede calcular el ingreso total.";
        resultadoDiv.style.color = "red";
    }
}
