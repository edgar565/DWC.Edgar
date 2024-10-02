// Función para sacar solo los elementos impares de un array Ejercicio 1

function impares(){
    let array = ["The Beatles", "Pink Floyd", "The Rolling Stones", "Nirvana", "AC/DC"];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            console.log(array[i]);
        }
    }
}
impares();