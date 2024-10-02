// Funcion para cambiar el color del texto Ejercicio2
function colores() {
  // Definimos un array de objetos con los colores y sus códigos hexadecimales
  let coloresArray = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];
  let codigosArray = ["#F39C12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];

  let color = document.getElementById("color").value;

  // Buscamos el color en el array usando find
  for(let i = 0; i < coloresArray.length; i++) {
    if (coloresArray[i] === color) {
      colorEncontrado = codigosArray[i];
      break;
    }
  }

  if (colorEncontrado) {
    document.getElementById("text").style.color = colorEncontrado;
  }
}

/*function colores(){
    let mapColor = new Map([
        ["Naranja", "#F39C12"],
        ["Lima", "#C0F312"],
        ["Turquesa", "#12F3E5"],
        ["Rosa", "#F312AF"],
        ["Rojo", "#F31212"]
    ]);    
    let color = document.getElementById("color").value;

    if (mapColor.has(color)) {
        document.getElementById("text").style.color = mapColor.get(color);
    }
}*/