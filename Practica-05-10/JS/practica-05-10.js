window.onload = comienzo;
function comienzo() {
    const urlInput = document.formulario.url.value;
    const mensajeInput = document.formulario.Mensaje.value;
    urlInput.value = "";
    mensajeInput.value = "";
    document.formulario.boton.onclick = comprobarLink;
}
function comprobarLink() {
    const urlInput = formulario.url;
    const mensajeInput = formulario.Mensaje;
    const link = urlInput.value;
    if (validarEmail(link)) {
        mensajeInput.value = "El link es válido";
    } else {
        mensajeInput.value = "El link no es válido";
    }
}

function validarEmail(link) {
    const protocolosValidos = ["http://", "https://"];
    let inicioValido = false;
    for (const protocolo of protocolosValidos) {
        if (link.startsWith(protocolo)) {
            inicioValido = true;
            break;
        }
    }
    if (!inicioValido && !link.startsWith("www.")) {
        return false;
    }
    const dominio = link.split("/")[0].replace("www.", "");
    const dominioPartes = dominio.split(".");
    if (dominioPartes.length !== 2 || dominioPartes[1].length < 2 || dominioPartes[1].length > 4) { //Aqui verificamos que hay entre 2 y 4 caracteres despues del .
        return false;
    }
    return true;

}






