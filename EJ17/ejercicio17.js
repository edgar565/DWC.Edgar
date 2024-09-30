function dividirSerie() {
    // Obtener la entrada del usuario
    const entrada = document.getElementById('numeros').value;

    // Convertir la entrada en un array de números, eliminando espacios en blanco
    const serie = entrada.split(',').map(num => parseFloat(num.trim()));

    // Verificar que los elementos ingresados son números válidos
    if (serie.some(isNaN)) {
        alert('Por favor, ingrese solo números válidos.');
        return;
    }

    let pequeños = [];
    let grandes = [];

    // Calcular el promedio de la serie para decidir el valor de corte
    const promedio = serie.reduce((acc, num) => acc + num, 0) / serie.length;

    // Recorrer la serie y dividir los números en grandes y pequeños según el promedio
    serie.forEach(num => {
        if (num <= promedio) {
            pequeños.push(num);
        } else {
            grandes.push(num);
        }
    });

    // Mostrar los resultados en la página
    document.getElementById('pequenos').textContent = pequeños.join(', ');
    document.getElementById('grandes').textContent = grandes.join(', ');
}
