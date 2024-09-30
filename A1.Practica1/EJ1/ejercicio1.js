function holamundo() {
    document.write("Hola, mundo!");
    
    // Este mensaje se mostrará en la consola después de 2 segundos
    setTimeout(() => {
        console.log("Se ejecutará después de 2 segundos");
        
        // Mostrar la alerta después de los 2 segundos
        alerta1();
    }, 1000);
}

function alerta1() {
    alert("¡ESTÁS DE SUERTE! TE HAS GANADO UN PROYECTOR");
}
