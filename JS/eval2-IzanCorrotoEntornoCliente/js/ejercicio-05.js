function calcular() {

    fetch(`./php/ejercicio05.php`)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        const vala = document.getElementById('vala');
        const valb = document.getElementById('valb');
        const valc = document.getElementById('valc');

        const valores = xmlDoc.querySelectorAll('ecuacion segundo');

        valores.forEach(valor => {
            const option = document.createElement('a');
            option.value = valor.textContent;
            segundo.add(option);
        });

        
    })
    .catch(error => console.error('Error:', error));
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('solucion').addEventListener('click', function () {
        // Ejecutar la función obtenerNota
        calcular();
    });
});