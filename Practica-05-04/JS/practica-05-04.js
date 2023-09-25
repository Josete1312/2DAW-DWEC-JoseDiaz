window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = llamarTodos;
}

function llamarTodos(){
    calcularBinario();
    calcularOctal();
    calcularHexadecimal();
}

function calcularBinario(){
    VstDecimal=parseInt(document.getElementById("Decimal").value);
    VstBinario=VstDecimal.toString(2);
    document.getElementById("Binario").value=VstBinario;
}

function calcularOctal(){
    VstDecimal=parseInt(document.getElementById("Decimal").value);
    VstOctal=VstDecimal.toString(8);
    document.getElementById("Octal").value=VstOctal;
}

function calcularHexadecimal(){
    VstDecimal=parseInt(document.getElementById("Decimal").value);
    VstHex=VstDecimal.toString(16);
    document.getElementById("Hexadecimal").value=VstHex;
}
