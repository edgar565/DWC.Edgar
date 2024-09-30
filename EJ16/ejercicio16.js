function calcularNotas() {
    let notas = [];
    let entrada;
    let totalNotas = 0;

    while (true) {
        entrada = prompt("Ingrese una nota (0-100) o escriba 'salir' para terminar:");

        // Comprobar si el usuario desea salir
        if (entrada.toLowerCase() === 'salir') {
            break;
        }

        // Convertir la entrada a número
        let nota = Number(entrada);

        // Verificar que la nota esté en el rango correcto
        if (!isNaN(nota) && nota >= 0 && nota <= 100) {
            notas.push(nota);
        } else {
            alert("Por favor, ingrese un número válido entre 0 y 100.");
        }
    }

    // Calcular la cantidad de notas, la más alta, la más baja y el promedio
    const cantidadNotas = notas.length;
    let notaAlta = cantidadNotas > 0 ? Math.max(...notas) : 0;
    let notaBaja = cantidadNotas > 0 ? Math.min(...notas) : 0;
    let promedio = 0;

    if (cantidadNotas > 0) {
        promedio = notas.reduce((acc, cur) => acc + cur, 0) / cantidadNotas;
    }

    // Mostrar los resultados
    let resultado = `Cantidad de notas ingresadas: ${cantidadNotas}\n`;
    resultado += `Nota más alta: ${notaAlta}\n`;
    resultado += `Nota más baja: ${notaBaja}\n`;
    resultado += `Promedio: ${promedio.toFixed(2)}\n`;
    resultado += `Estado: ${promedio >= 70 ? "Aprobado" : "Reprobado"}`;

    alert(resultado);
}