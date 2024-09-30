function calcularSalario() {
    // Obtener los valores de los campos de entrada
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let salario = parseFloat(document.getElementById("salario").value); // Convertir salario a número decimal
    let edad = parseInt(document.getElementById("edad").value); // Convertir edad a número entero

    // Validar que todos los campos estén completos y que el salario y edad sean números válidos
    if (isNaN(salario) || isNaN(edad) || !nombre || !apellidos) {
        document.getElementById("resultado").innerHTML = "Por favor, completa todos los campos correctamente.";
        return;
    }

    // Cálculo del salario basado en las condiciones
    if (salario < 2000 && salario > 1000) {
        if (edad > 45) {
            salario = salario * 1.03;
        } else {
            salario = salario * 1.1;
        }
    } else if (salario < 1000) {
        if (edad < 30) {
            salario = 1100;
        } else if (edad < 45 && edad > 30) {
            salario = salario * 1.03;
        } else {
            salario = salario * 1.15;
        }
    }

    // Mostrar la información en la página
    let resultado = `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Apellidos:</strong> ${apellidos}<br>
        <strong>Edad:</strong> ${edad}<br>
        <strong>Salario actualizado:</strong> ${salario.toFixed(2)}
    `;
    document.write(resultado);
}
