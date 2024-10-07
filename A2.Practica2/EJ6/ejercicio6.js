function verificarPalindromo() {
  // Obtener el texto del input
  const texto = document.getElementById("inputText").value;

  // Eliminar espacios, acentos y convertir a minúsculas
  const textoFormateado = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remueve acentos
    .replace(/[^a-z0-9]/g, ""); // Remueve caracteres no alfanuméricos

  // Verificar si el texto formateado es igual al texto invertido
  const esPalindromo =
    textoFormateado === textoFormateado.split("").reverse().join("");

  // Mostrar el resultado en la página
  const resultado = document.getElementById("resultado");
  if (esPalindromo) {
    resultado.textContent = `"${texto}" es un palíndromo.`;
  } else {
    resultado.textContent = `"${texto}" no es un palíndromo.`;
  }
}
