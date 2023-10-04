window.onload = comienzo;
function comienzo() {
    const fechaInput = document.formulario.Fecha.value;
    const mensajeInput = document.formulario.Mensaje.value;
    fechaInput.value = "";
    mensajeInput.value = "";
    document.formulario.boton.onclick = comprobarFecha;
}
function comprobarFecha() {
    const formulario = document.forms.formulario;
    const fechaInput = formulario.Fecha;
    const mensajeInput = formulario.Mensaje;
    const fechas = fechaInput.value;
    if (validarFecha(fechas)) {
        mensajeInput.value = "La fecha es valida";
    } else {
        mensajeInput.value = "LA fecha no es valida";
    }
}

function validarFecha(fechas){
    const separar=fechas.split("/-"); //Slip seraparador de la fecha
    const dia=parseInt(separar[0]);
    const mes=parseInt(separar[1]);
    const ano=parseInt(separar[2]);

    if (dia<0||dia>31){
        return false;
    }
    if (dia==31&&(mes==4||mes==6||mes==9||mes==11)){
        return false;
    }
    if (dia>29&&mes==2){
        return false;
    }
    if(dia==29&&mes==2&&ano%4!=0){
        return false;
    }
    if (mes<0||mes>12){
        return false;
    }
    return true;
}