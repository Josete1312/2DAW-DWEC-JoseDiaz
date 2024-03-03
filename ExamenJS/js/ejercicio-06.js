function calcular() {

    var xhr = new XMLHttpRequest();

    var vel=document.getElementById('velo').value;
    var roza=document.getElementById('roza').value;

    var datos={
        Velocidad: vel,
        Rozamiento: roza
    }
    var datosJSON=JSON.stringify(datos);
            xhr.open('POST', './php/ejercicio06.php', true);

            xhr.onload = function() {
                if (xhr.status == 200) {
                    var resultadoJSON =xhr.responseText;
                    var resultado=JSON.parse(resultadoJSON);

                    document.getElementById('dis').value = resultado.Distancia;
                } else {
                    console.error(xhr.responseText);
                }
            };

            xhr.onerror = function() {
                console.error('Error de red');
            };

            xhr.send(datosJSON);
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('obtener').addEventListener('click', function () {
        // Ejecutar la función obtenerNota
        calcular();
    });
});