window.onload=inicio;

function inicio() {
    document.formulario.onsubmit=validar;
}

function validar(){
    console.log("validando");
    let enviar = true;
    let codigoTorneo = document.formulario.codigo.value;
    let nombreTorneo = document.formulario.nombre.value;
    let fechaCelebracion = document.formulario.fecha.value;
    let numeroGolpes = document.formulario.golpes.value;
    let ciudadTorneo = document.formulario.ciudad.value;
    let codigoCiudad = document.formulario.codciudad.value;
    let paisTorneo = document.formulario.pais.value;
    let numeroGolpesMejor = document.formulario.golpesmejor.value;
    let nombreUltimoGanador = document.formulario.ganador.value;
    let cuantiaPremio = document.formulario.ganancias.value;
    let codigoEmpresa = document.formulario.empresa.value;
    let tipoTorneo =  document.formulario.tipo.value;
    let edadParticipantes = document.formulario.elements;
    let localidadesTorneo = document.formulario.paises;
    let mensaje = " ";
    let cuenta = 0;
    let contador = 0;


    if (!validarCodigoTorneo(codigoTorneo)) {
        enviar = false;
        mensaje += 'Error en el campo Código del Torneo, dato no válido.\n';
    }

    if (!validarNombreTorneo(nombreTorneo)) {
        enviar = false;
        mensaje += 'Error en el campo Nombre del Torneo, dato no válido.\n';
    }

    if (!validarFechaCelebracion(fechaCelebracion)) {
        enviar = false;
        mensaje += 'Error en el campo Fecha de Celebración, dato no válido.\n';
    }

    if (!validarNumeroGolpes(numeroGolpes)) {
        enviar = false;
        mensaje += 'Error en el campo Número de Golpes, dato no válido.\n';
    }

    if (!validarCiudadTorneo(ciudadTorneo)) {
        enviar = false;
        mensaje += 'Error en el campo Ciudad del Torneo, dato no válido.\n';
    }

    if (!validarCodigoCiudad(codigoCiudad)) {
        enviar = false;
        mensaje += 'Error en el campo Código de Ciudad, dato no válido.\n';
    }

    if (!validarPaisTorneo(paisTorneo)) {
        enviar = false;
        mensaje += 'Error en el campo País del Torneo, dato no válido.\n';
    }

    if (!validarCuantiaPremio(cuantiaPremio)) {
        enviar = false;
        mensaje += 'Error en el campo Cuantía del Premio, dato no válido.\n';
    }

    if (!validarNumeroGolpesMejor(numeroGolpesMejor)) {
        enviar = false;
        mensaje += 'Error en el campo Número de Golpes del Mejor Recorrido, dato no válido.\n';
    }

    if (!validarNombreUltimoGanador(nombreUltimoGanador)) {
        enviar = false;
        mensaje += 'Error en el campo Nombre del Último Ganador, dato no válido.\n';
    }

    if (!validarCodigoEmpresa(codigoEmpresa)) {
        enviar = false;
        mensaje += 'Error en el campo Código de la Empresa, dato no válido.\n';
    }

    //Se debe seleccionar un tipo de torneo.
    if (tipoTorneo == ""){
        enviar=false;
        mensaje+="Debes seleccionar un tipo de torneo\n";
    }

    //Se deben seleccionar al menos dos edades de participación en el torneo
    for (let j=0; j<edadParticipantes.length; j++){
        if(edadParticipantes[j].type==="checkbox"){
            if(edadParticipantes[j].checked){
                cuenta+=1;
            }
        }
    }

    if (cuenta<2){
        enviar = false;
        mensaje+="Debes elegir como minimo dos edades\n";
    }

    //Se deben seleccionar al menos cinco localidades donde se celebran otros 
    //torneos.
    for (let i=0; i<localidadesTorneo.length; i++){
        if (localidadesTorneo[i].selected){
            contador+=1;
        }
    }

    if (contador<5){
        enviar=false;
        mensaje+="Debes seleccionar al menos 5 localidades";
    }

    if (!enviar) {
        alert(mensaje);
    }

    return enviar;
}

function validarCodigoTorneo(dato) {
//El código del torneo va a tener un conjunto letras que pueden tener
//los valores “SER”, “ES”, “DEBE” y ”CAR”; a continuación tres dígitos, 
//luego dos caracteres que pueden ser cualquiera de los siguientes “#”,
//“$”, “&”, “%”; le siguen cinco letras; continua con seis caracteres que
//cada uno puede ser una letra, un dígito, los caracteres “/” y “+”;
//sigue con seis letras y termina por tres dígitos o bien cuatro letras.
    let correcto = true;
    let normaCodTorneo = new RegExp('^(SER|ES|DEBE|CAR)\\d{3}[#$&%][a-zA-Z]{5}[a-zA-Z\\d\\/\\+]{6}[a-zA-Z]{6}(\\d{3}|[a-zA-Z]{4})$');
    if (!normaCodTorneo.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarNombreTorneo(dato) {
//El nombre del torneo va a empezar por cinco letras, va a terminar 
//por dos caracteres que pueden ser letras, dígitos o el punto; y en 
//medio va a tener una serie de caracteres que pueden ser letras,
//dígitos o los caracteres “-“, “|”, “?”, y “¿”. Va a tener en total de 9 a
//20 caracteres.
    let correcto = true;
    let normaNombreTorneo = new RegExp('^[a-zA-Z]{5}[a-zA-Z\\d\\-|?¿]{9,20}[a-zA-Z\\d.]{2}$');
    if (!normaNombreTorneo.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarFechaCelebracion(dato) {
//La fecha de celebración del torneo va a ser una fecha correcta en la 
//cual el día y el mes van a tener dos dígitos, el año va a tener 4 dígitos, 
//el caracteres separados va a ser “-“; vamos a considerar que el mes
//de febrero tiene 29 días y el año va a ser un número comprendido 
//entre 1890 y 2075.
    let correcto = true;
    let normaFechaCelebracion = new RegExp('^((19|20)\\d\\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$');
    if (!normaFechaCelebracion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarNumeroGolpes(dato) {
//El número de golpes del tornero va a ser un número que va a tener
//de 2 a 4 dígitos, siendo su valor mínimo 75.
    let correcto = true;
    let normaNumeroGolpes = new RegExp('^\\d{2,4}$');
    if (!normaNumeroGolpes.test(dato) && parseInt(dato) >= 75) {
        correcto = false;
    }
    return correcto;
}

function validarCiudadTorneo(dato) {
//La ciudad donde se celebra el torneo va a empezar por cuatro letras
//va a terminar por tres letras y en medio va a contener letras,
//espacios, o los caracteres “º”, “ª”, “-“, “.” o “%”. Va a tener en total 
//entre 8 y 25 caracteres.
    let correcto = true;
    let normaCiudadTorneo = new RegExp('^[a-zA-Z ]{8,25}$');
    if (!normaCiudadTorneo.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarCodigoCiudad(dato) {
//El código de la ciudad donde se celebra el torneo va a empezar por 
//dos letras; le siguen tres dígitos; continúa con uno de los siguientes 
//valores “ARPA”, “DOM”, “DE” o “POR”; continua por cinco letras y
//termina por cuatro caracteres que pueden ser letras o dígitos.
    let correcto = true;
    let normaCodigoCiudad = new RegExp('^[a-zA-Z]{2}\\d{3}(ARPA|DOM|DE|POR)[a-zA-Z]{5}[a-zA-Z\\d]{4}$');
    if (!normaCodigoCiudad.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarPaisTorneo(dato) {
//El País donde se celebra el torneo va a tener uno de los siguientes
//valores “USA”, “Inglaterra”, “Escocia”, “España” o “Japón”
    let correcto = true;
    let normaPaisTorneo = new RegExp('^(USA|Inglaterra|Escocia|España|Japón)$');
    if (!normaPaisTorneo.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarCuantiaPremio(dato) {
//La cuantía del premio va a ser un número real, que puede tener
//parte decimal o no, en la parte entera puede tener hasta 7 dígitos 
//con un valor mínimo de 375000 y en la parte decimal puede tener
//hasta dos decimales.
    let correcto = true;
    let normaCuantiaPremio = new RegExp('^\\d{1,7}(\\.\\d{1,2})?$');
    if (!normaCuantiaPremio.test(dato) && parseFloat(dato) >= 375000) {
        correcto = false;
    }
    return correcto;
}

function validarNombreMejor(dato) {
//El nombre del jugador con el mejor recorrido del torneo va a
//empezar por letra, va a terminar por letra y en medio va a tener
//letras o espacios. Va a tener una longitud total de entre 12 y 20
//caracteres.
    let correcto = true;
    let normaNombreMejor = new RegExp('^[a-zA-Z ]{12,20}$');
    if (!normaNombreMejor.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarNumeroGolpesMejor(dato) {
//El número de golpes del mejor recorrido del torneo va a ser un 
//número que puede tener de 2 a 5 dígitos con un valor mínimo de 
//215.
    let correcto = true;
    let normaNumeroGolpesMejor = new RegExp('^\\d{2,5}$');
    if (!normaNumeroGolpesMejor.test(dato) && parseInt(dato) >= 215) {
        correcto = false;
    }
    return correcto;
}

function validarNombreUltimoGanador(dato) {
//El nombre último ganador del torneo va a empezar por tres letras;
//termina por cinco letras y en medio va a tener de 11 a 17 caracteres
//que pueden ser letras, espacios o los caracteres “-“ y “º”.
    let correcto = true;
    let normaNombreUltimoGanador = new RegExp('^[a-zA-Z]{3}[a-zA-Z \\-º]{11,17}[a-zA-Z]{5}$');
    if (!normaNombreUltimoGanador.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarCodigoEmpresa(dato) {
//El código de la empresa que organiza el torneo va a tener 5 o 9 
//letras; a continuación va a tener 3 o 7 dígitos
    let correcto = true;
    let normaCodigoEmpresa = new RegExp('^[a-zA-Z]{5,9}\\d{3,7}$');
    if (!normaCodigoEmpresa.test(dato)) {
        correcto = false;
    }
    return correcto;
}
