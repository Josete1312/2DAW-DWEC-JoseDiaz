function calcular() {

    var numcaras=$('#caras').val();
    var numvertices=$('#vertices').val();

    const formData=new FormData();
    formData.append('numcaras', numcaras);
    formData.append('numvertices', numvertices);
    console.log(formData);

    var formData2={
        numcaras:numcaras,
        numvertices: numvertices
    }

    $.ajax({
        url: './php/ejercicio04.php',
        type: 'POST',
        data: formData2,
        success: function (respuesta) {
            $('#aristas').val(respuesta);
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    $('#calcular').click(function () {
        // Ejecutar la función obtenerNota
        calcular();
    });
});