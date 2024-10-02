// Función para sacar los elemento de la diagonal de una matriz Ejercicio 3
function matrix() {
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // Mostrar la matriz
  console.log("Matriz:");
  matriz.forEach((fila) => console.log(fila));

  // Mostrar elementos de la diagonal
  console.log("\nElementos de la diagonal:");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][i]);
  }
}
matrix();