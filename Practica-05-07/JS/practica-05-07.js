window.onload = comienzo;
function comienzo() {
    const nombreInput = document.formulario.Nombre.value;
    const mensajeInput = document.formulario.mensaje.value;
    nombreInput.value = "";
    mensajeInput.value = "";
    document.formulario.boton.onclick = comprobarNombre;
}
function comprobarNombre() {
    const formulario = document.forms.formulario;
    const nombreInput = formulario.Nombre;
    const mensajeInput = formulario.mensaje;
    const nombre = nombreInput.value;
    if (validarNombre(nombre)) {
        mensajeInput.value = "El nombre es válido";
    } else {
        mensajeInput.value = "El nombre no cumple con las características";
    }
}
function validarNombre(nombre) {
    if (nombre.length < 3) {
        return false;
    }
    if (!/^[a-zA-Z].*[a-zA-Z]$/.test(nombre)) {
        return false;
    }
    if (!/^[a-zA-Zºª\- ]*$/.test(nombre)) {
        return false;
    }
    if (nombre.length < 3 || nombre.length > 27) {
        return false;
    }
    return true;
}