window.onload = comienzo;

function comienzo() {
    const localidadInput = document.formulario.localidad;
    const mensajeInput = document.formulario.Mensaje;
    localidadInput.value = "";
    mensajeInput.value = "";
    document.formulario.boton.onclick = comprobarLocalidad;
}

function comprobarLocalidad() {
    const localidadInput = document.formulario.localidad;
    const mensajeInput = document.formulario.Mensaje;
    const localidad = localidadInput.value.trim(); //Usamos la funcion trim para borrar suspuestos espacios en la cadena

    if (localidad.length >= 7 && localidad.length <= 35) {
        const tresprimeras = localidad.substring(0, 3); //Selecicionamos las 3 primeras letras de la cadena
        const dosultimas = localidad.substring(localidad.length - 2); //Seleccionamos las dos ultimasletras dela cadena

        if (esLetraONumero(tresprimeras) && esLetraONumero(dosultimas) && esLetraOespacio(localidad)) {
            mensajeInput.value = "Localidad válida";
        } else {
            mensajeInput.value = "Localidad no cumple con el formato";
        }
    } else {
        mensajeInput.value = "La longitud de la localidad debe estar entre 7 y 35 caracteres";
    }
}

function esLetraONumero(str) {
    return /^[a-zA-Z0-9]+$/.test(str); //Comprobamos si la cadena tiene numeroso letras
}

function esLetraOespacio(str) {
    return /^[a-zA-Z\s]+$/.test(str); //Comprbamos si la cadena tiene letras o espacios
}
