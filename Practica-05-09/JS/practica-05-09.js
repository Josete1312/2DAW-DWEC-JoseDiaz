window.onload = comienzo;
function comienzo() {
    const emailInput = document.formulario.Email.value;
    const mensajeInput = document.formulario.Mensaje.value;
    emailInput.value = "";
    mensajeInput.value = "";
    document.formulario.boton.onclick = comprobarEmail;
}
function comprobarEmail() {
    const emailInput = formulario.Email;
    const mensajeInput = formulario.Mensaje;
    const email = emailInput.value;
    if (validarEmail(email)) {
        mensajeInput.value = "El correo es válido";
    } else {
        mensajeInput.value = "El correo no es válido";
    }
}
function validarEmail(email) {

    if (email.indexOf('@') === -1) { //Aqui vemos si hay un caracter como minimo seguido del @
        return false;
    }
    if (email.indexOf('@') === email.length - 1) {  //Aqui comprobamos que hay un caracter como minimo despues del @
        return false;
    }
    if (email.indexOf('@') === 0) {  //Aqui comprobamos que hay un caracter como minimo antes del @
        return false;
    }
    const partes = email.split('@');
    if (partes.length !== 2 || partes[1].indexOf('.') === -1 || partes[1].indexOf('.') === 0) { //Comprobamos que hay un punto depues del @
        return false;
    }
    const dominioPartes = partes[1].split('.');
    if (dominioPartes.length !== 2 || dominioPartes[1].length < 2 || dominioPartes[1].length > 4) { //Aqui verificamos que hay entre 2 y 4 caracteres despues del .
        return false;
    }
    return true;
}