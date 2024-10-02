// Función para mostrar la traspuesta de la matriz Ejercicio4
function traspuesta() {
  // Crear una matriz de 3x3
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // Mostrar la matriz original
  const matrizOriginal = document.getElementById("matriz-original");
  matrizOriginal.textContent = matriz.map((fila) => fila.join(" ")).join("\n");

  // Calcular la traspuesta de la matriz
  const traspuesta = matriz[0].map((_, colIndex) =>
    matriz.map((fila) => fila[colIndex])
  );

  // Mostrar la traspuesta de la matriz
  const traspuestaElement = document.getElementById("traspuesta");
  traspuestaElement.textContent = traspuesta
    .map((fila) => fila.join(" "))
    .join("\n");
}
