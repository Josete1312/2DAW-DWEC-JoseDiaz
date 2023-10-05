window.onload = comienzo;

function comienzo() {
    const direccionInput = document.formulario.direccion;
    const mensajeInput = document.formulario.Mensaje;
    direccionInput.value = "";
    mensajeInput.value = "";
    document.formulario.boton.onclick = comprobarDireccion;
}

function comprobarDireccion() {
    const direccionInput = document.formulario.direccion;
    const mensajeInput = document.formulario.Mensaje;
    const direccion = direccionInput.value.trim();
    
    if (direccion.length >= 8 && direccion.length <= 42) {
        if (verificarDireccion(direccion)) {
            mensajeInput.value = "Dirección válida";
        } else {
            mensajeInput.value = "Dirección no cumple con el formato";
        }
}
}
function verificarDireccion(str) {
    return /^[a-zA-Z][a-zA-Z0-9ºª\/\-]*[a-zA-Z0-9ºª]$/.test(str); //Aqui lo que hacemos es que empieze si o si con letra en el medoio aparezcan caracteres especiales o numeros y termine en ltra/numero/caracter especial
}

