// Función para generar un array con 10 números aleatorios del 1 al 5 Ejercicio 5
function contraseñaSegura() {
  // Generar un array con 10 números aleatorios del 1 al 5
  const arrayNumeros = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 5) + 1
  );

  // Mostrar el array generado en la consola
  console.log("Array generado:", arrayNumeros);

  // Obtener el contenedor donde mostrar los resultados
  const resultadoDiv = document.getElementById("resultado");

  // Función para mostrar los asteriscos
  function mostrarAsteriscos(arr) {
    resultadoDiv.innerHTML = ""; // Limpiar el contenido anterior
    arr.forEach((num) => {
      let asteriscos = "*".repeat(num); // Crear una cadena de asteriscos según el número
      let p = document.createElement("p"); // Crear un nuevo párrafo
      p.textContent = asteriscos; // Asignar los asteriscos como contenido
      resultadoDiv.appendChild(p); // Agregar el párrafo al div de resultados
    });
  }

  // Llamar a la función para mostrar los asteriscos según el array generado
  mostrarAsteriscos(arrayNumeros);
}
