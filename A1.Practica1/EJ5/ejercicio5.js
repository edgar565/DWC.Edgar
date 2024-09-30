function comprobarDato() {
    let numero = document.getElementById("data").value;
      if (isNaN(numero)) {
        alert("El dato introducido no es un número");
      } else {
        alert("El dato introducido es un número");
      }
}
