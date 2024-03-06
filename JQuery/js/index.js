$(document).ready(function () {
    $("#botondefiniciones").click(function () {
        var VstPalabra = $("#palabra").val().toLowerCase();
        var VstDefinicion = $("#concepto").val().toLowerCase();
        VstDefinicion = capitalizeFirstLetter(VstDefinicion);

        if (VstPalabra === "" || VstDefinicion === "") {
            alert("Los campos no pueden estar vacíos.");
        } else {
            var aux = $("#" + VstPalabra);
            if (aux.length === 0) {
                var Vdt = $("<dt></dt>").text(VstPalabra).attr('id', VstPalabra);
                var Vdd = $("<dd></dd>").text(VstDefinicion).attr('id', "D" + VstPalabra);

                $("#listaDefiniciones").append(Vdt);
                $("#" + VstPalabra ).append(Vdd);
                $("#palabra, #concepto").val("");

            }else{
                var Vdd = $("<dd></dd>").text(VstDefinicion).attr('id', "D" + VstPalabra);
                $("#" + VstPalabra ).append(Vdd);
                $("#palabra, #concepto").val("");
            }
        }
    });
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}



$(document).ready(function () {
    $("#botondefinicioneseliminar").click(function () {
        var VstPalabra = $("#palabra").val().toLowerCase();

        if (VstPalabra === "") {
            alert("Los campos no pueden estar vacíos.");
        } else {
            var VstPalabraEliminar = $("#" + VstPalabra);
            if (VstPalabraEliminar.length != 0) {
                VstPalabraEliminar.remove();
                $("#palabra").val("");
            } else {
                alert("La palabra no tiene definiciones.");
            }
        }
    });
});

$(document).ready(function () {
    $("#añadirlocalidades").click(function () {
        let VstLocalidad=$("#localidad").val();

        if (VstLocalidad === "" ) {
            alert("Los campos no pueden estar vacíos.");
        } else {
            let conjunto=$("#listalocalidades>li");
            let ausente=true;
            let indice=0;
            while (ausente && indice< $(conjunto).length){
                if ($(conjunto).eq(indice).text()==VstLocalidad)
                    ausente=false
                else if ($(conjunto).eq(indice).text() > VstLocalidad){
                    ausente=false;
                    $(conjunto).eq(indice).before("<li>"+VstLocalidad+"</li>");
                }
                indice +=1;
            }
            if (ausente)
                $("#listalocalidades").append("<li>"+VstLocalidad + "</li>");
                $("#localidad").val("");
        }
    });
});

$(document).ready(function () {
    $("#botoncoches").click(function () {
        let marca = $("#marca").val();
        let modelo = $("#modelo").val();
        let precio = $("#precio").val();
        if(marca === '' || modelo === '' || precio === ''){
            alert('Los campos no pueden estar vacíos.');
        }else{
            let tablaCoches = $("#tablacoches>tbody");
            let filas = $(tablaCoches).find("tr");
            let ausente = true;
            let indice = 0;
            while (ausente && indice < filas.length) {
                let celdas = $(filas[indice]).find("td");
                let marcaExistente = $(celdas[0]).text();
                let modeloExistente = $(celdas[1]).text();
                if (marca == marcaExistente && modelo == modeloExistente) {
                    ausente = false;
                } else if (marca < marcaExistente || (marca == marcaExistente && modelo < modeloExistente)) {
                    $(filas[indice]).before("<tr><td>" + marca + "</td><td>" + modelo + "</td><td>" + precio + "</td></tr>");
                    ausente = false;
                }
                indice += 1;
            }
            if (ausente) {
                $(tablaCoches).append("<tr><td>" + marca + "</td><td>" + modelo + "</td><td>" + precio + "</td></tr>");
            }
            $("#marca, #modelo, #precio").val("");

        }
    });

    $("#botonquitarcoche").click(function () {
        let marcaEliminar = $("#marca").val();
        let modeloEliminar = $("#modelo").val();

        if(marca === '' || modelo === ''){
            alert('Los campos no pueden estar vacíos.');
        }else{
            let tablaCoches = $("#tablacoches");
            let filas = $(tablaCoches).find("tr");
            for (let i = 0; i < filas.length; i++) {
                let celdas = $(filas[i]).find("td");
                let marcaExistente = $(celdas[0]).text();
                let modeloExistente = $(celdas[1]).text();

                if (marcaEliminar == marcaExistente && modeloEliminar == modeloExistente) {
                    $(filas[i]).remove();
                    break;
                }
            }
            $("#marca, #modelo, #precio").val("");
        }
    });
});

const ciudadesPorComunidad = {
    andalucia: ["Sevilla", "Málaga", "Córdoba"],
    aragon: ["Zaragoza", "Huesca", "Teruel"],
    asturias: ["Oviedo", "Gijón", "Avilés"],
};

const comentariosPorCiudad = {
    Sevilla: ["Ciudad: Sevilla - Comunidad: Andalucia"],
    Málaga: ["Ciudad: Málaga - Comunidad: Andalucia"],
    Córdoba: ["Ciudad: Córdoba - Comunidad: Andalucia"],
    Zaragoza: ["Ciudad: Zaragoza - Comunidad: Aragon"],
    Huesca: ["Ciudad: Huesca - Comunidad: Aragon"],
    Teruel: ["Ciudad: Teruel - Comunidad: Aragon"],
    Oviedo: ["Ciudad: Oviedo - Comunidad: Asturias"],
    Gijón: ["Ciudad: Gijón - Comunidad: Asturias"],
    Avilés: ["Ciudad: Avilés - Comunidad: Asturias"],
};

$(document).ready(function () {
    $("#comunidadesselect").change(function () {
        var comunidadSeleccionada = $("#comunidadesselect").val();
        $("#ciudades").empty();
        for (const comunidad in ciudadesPorComunidad) {
            if (comunidad === comunidadSeleccionada) {
                ciudadesPorComunidad[comunidad].forEach(element => {
                    $("#ciudades").append("<option value='" + element + "'>" + element + "</option>");
                });
            }
        }
    });
    $("#ciudades").change(function () {
        var ciudadSeleccionada = $("#ciudades").val();
        for (const comentarios in comentariosPorCiudad) {
            if (comentarios === ciudadSeleccionada) {
                comentariosPorCiudad[comentarios].forEach(element => {
                    $("#comentariociudadautonoma").append("<li id='"+element+"'>"+element+"</li>");
                });
            }
        }
    });
});


$(document).ready(function () {
    $("#botoncolores").click(function () {
        var colorPar = generarColorAleatorio().join(",");
        var colorImpar = generarColorAleatorio().join(",");
        
        $("#tablacomunidades tr:even").css("background-color", "rgb(" + colorPar + ")");
        $("#tablacomunidades tr:odd").css("background-color", "rgb(" + colorImpar  + ")");
    });

    $("#identificadorTexto").mouseenter(function () {

        $(this).css({
            "font-family": "Comic Sans MS",
            "font-size": "16px",
            "font-weight": "bold",
            "color": "white",
            "background-color": "green"
        });
    }).mouseleave(function () {
        $(this).css({
            "font-family": "",
            "font-size": "",
            "font-weight": "",
            "color": "",
            "background-color": ""
        });
    });

    function generarColorAleatorio() {
        return [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ];
    }
});






