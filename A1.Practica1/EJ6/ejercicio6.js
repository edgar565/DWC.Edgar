const edadInput = document.getElementById('edadInput');
const clasificarButton = document.getElementById('clasificar');
const resultadoParagraph = document.getElementById('resultado');

clasificarButton.addEventListener('click', () => {
    const edad = edadInput.value.trim();

    if (edad === 'salir') {
        alert('Hasta luego!');
        return;
    }

    const edadNumero = Number(edad);

    if (isNaN(edadNumero)) {
        resultadoParagraph.textContent = 'Por favor, ingresa un número válido';
        return;
    }

    let categoria;

    if (edadNumero < 12) {
        categoria = 'Niño';
    } else if (edadNumero >= 12 && edadNumero <= 17) {
        categoria = 'Adolescente';
    } else if (edadNumero >= 18 && edadNumero <= 64) {
        categoria = 'Adulto';
    } else {
        categoria = 'Adulto mayor';
    }

    resultadoParagraph.textContent = `Usted es un(a) ${categoria}`;
});