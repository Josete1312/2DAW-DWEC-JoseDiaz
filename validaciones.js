window.onload = comienzo;

function comienzo() {
    const nifInput = document.formulario.cif;
    const mensajeInput = document.formulario.Mensaje;
    nifInput.value = "";
    mensajeInput.value = "";
    document.formulario.validar.onclick = esNif;
}

function esNif() {
    const nifInput = document.formulario.cif;
    const mensajeInput = document.formulario.Mensaje;
    const nif = nifInput.value.trim();
    const letraControl = 'TRWAGMYFPDXBNJZSQVHLCKE';

    // Eliminar espacios y convertir a mayúsculas
    const cadena = nif.replace(/\s/g, '').toUpperCase();

    // Comprobar si la cadena tiene un formato válido
    let resultado;

    switch (true) {
        case /(^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$)|(^[XYZLKMYFPDXBNJZSQVHLCKE][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$)/.test(cadena):
            let numero;
            if (/[XYZ]/.test(cadena[0])) {
                // Sustituir X, Y, Z por 0, 1, 2
                numero = parseInt(cadena.replace(/[XYZ]/, '012').slice(0, -1));
            } else {
                numero = parseInt(cadena.slice(0, -1));
            }
            const letraCalculada = letraControl[numero % 23];
            resultado = letraCalculada === cadena[cadena.length - 1] ? "NIF correcto" : "NIF incorrecto";
            break;

        case /^\d{6,8}$/.test(cadena) && parseInt(cadena) >= 100000:
            resultado = "DNI";
            break;

        default:
            resultado = "No es NIF ni DNI";
            break;
    }

    mensajeInput.value = resultado;
}

