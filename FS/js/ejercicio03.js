$(document).ready(function () {
    $("#aplicar").click(function () {
        var c1 = generarColorAleatorio();
        var color1 = c1[0]+','+c1[1]+','+c1[2];
        var color2 = c1[1]+','+c1[2]+','+c1[3];
        var color3 = c1[2]+','+c1[3]+','+c1[0];
        var color4 = c1[3]+','+c1[0]+','+c1[1];
        
        for(var i=-2;i<10;i=i+1){
            for(var j=1;j<4;j=j+1){
                colorear(color3, i, j);
                i++;
                colorear(color2, i, j);
                i++;
                colorear(color1, i, j);
                i++;
                colorear(color4, i, j);
                i=i-2;
            }
        }

        $("#coches tr:nth-child(1) th:nth-child(1) ").css("background-color", "rgb(" + color1 + ")");
        $("#coches tr:nth-child(1) th:nth-child(2) ").css("background-color", "rgb(" + color2 + ")");
        $("#coches tr:nth-child(1) th:nth-child(3) ").css("background-color", "rgb(" + color3 + ")");
    });

    $("#incluir").click(function () {
        var VstFam = $("#familia").val().trim().toLowerCase();
        var VstSubFam = $("#subfamilia").val().trim().toLowerCase();
        var VinNum = parseInt($("#individuos").val());
        if(VstFam===''||VstSubFam===''||isNaN(VinNum)){
            alert('Los parámetros no pueden estar vacíos y el número de individuos debe ser un número válido');
        } else {
            let tableanimales = $("#tablaanimales>tbody");
            let filas = $(tableanimales).find("tr");
            let ausente = true;
            let indice = 0;
            while (ausente && indice < filas.length) {
                let celdas = $(filas[indice]).find("td");
                let FamEx = $(celdas[0]).text();
                let SubFamEx = $(celdas[1]).text()
                if (VstFam == FamEx && VstSubFam == SubFamEx) {
                    var aux1 = VstFam+VstSubFam;
                    var aux = parseInt($("#"+aux1).text());
                    $("#"+aux1).text(aux + VinNum);
                    ausente = false;
                } else if (VstFam > FamEx) {
                    $(filas[indice]).before("<tr><td class='fami'>" + VstFam + "</td><td class='subfami'>" + VstSubFam + "</td><td class='indi' id='"+VstFam+VstSubFam+"'>" + VinNum + "</td></tr>");
                    ausente = false;
                } else if (VstFam == FamEx && VstSubFam < SubFamEx) {
                    $(filas[indice]).before("<tr><td class='fami'>" + VstFam + "</td><td class='subfami'>" + VstSubFam + "</td><td class='indi' id='"+VstFam+VstSubFam+"'>" + VinNum + "</td></tr>");
                }
                indice += 1;
            }
            if (ausente) {
                $(tableanimales).append("<tr><td class='fami'>" + VstFam + "</td><td class='subfami'>" + VstSubFam + "</td><td class='indi' id='"+VstFam+VstSubFam+"'>" + VinNum + "</td></tr>");
            }

            $('#tablaanimales tfoot tr:nth-child(2) td:nth-child(2)').text(calcularFamilia());
            $('#tablaanimales tfoot tr:nth-child(3) td:nth-child(2)').text(calcularSubFamilia());
            $('#tablaanimales tfoot tr:nth-child(1) td:nth-child(2)').text(calcularIndividuos());
            calcularSubFamilia();
            calcularSubFamilia();
            calcularIndividuos();

            $("#familia, #subfamilia, #individuos").val("");
        }
    });
});

function calcularFamilia() {
    let array = [];
    $(".fami").each(function() {
        array.push($(this).text());
    });
    let conjunto = new Set(array);
    return conjunto.size;
}

function calcularSubFamilia() {
    let array = [];
    $(".subfami").each(function() {
        array.push($(this).text());
    });
    let conjunto = new Set(array);
    return conjunto.size;
}

function calcularIndividuos() {
    let array = [];
    let suma = 0;
    $(".indi").each(function() {
        array.push($(this).text());
    });
    console.log(array);
    array.forEach(element => {
        suma += parseInt(element);
    });
    console.log(suma);
    return suma;
}




function colorear(color, num1, num2){
    $("#coches tr:nth-child("+num1+") td:nth-child("+num2+") ").css("background-color", "rgb(" + color + ")");
}

function generarColorAleatorio() {
    return [
        n1 = Math.floor(Math.random() * 256),
        n2 = Math.floor(Math.random() * 256),
        n3 = Math.floor(Math.random() * 256),
        n4 = Math.floor(Math.random() * 256)
    ];
}