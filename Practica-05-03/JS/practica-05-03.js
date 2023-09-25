window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = calcularNumerosPrimos;
}

function calcularNumerosPrimos() {
    let VstInicio = document.getElementById("Numero_Inicial").value;
    let VstFinal = document.getElementById("Numero_Final").value;
    let VIntInicio = parseInt(VstInicio);
    let VIntFinal = parseInt(VstFinal);
    let VstResuelto = "";

    for (let VIntIndice = VIntInicio; VIntIndice <= VIntFinal; VIntIndice++) {
        if (esPrimo(VIntIndice)) {
            if (VstResuelto !== "") {
                VstResuelto += "|";
            }
            VstResuelto += VIntIndice;
        }
    }

    document.getElementById("num").value = VstResuelto;
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let VIntIndice = 2; VIntIndice <= Math.sqrt(numero); VIntIndice++) {
        if (numero % VIntIndice === 0) {
            return false;
        }
    }
    return true;
}
