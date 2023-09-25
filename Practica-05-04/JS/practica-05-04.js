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
    VstDecimal=document.getElementById("Decimal").value;
    VstBinario=parseInt(VstDecimal).toString(2);
    document.getElementById("Binario").value=VstBinario;
}

function calcularOctal(){
    VstDecimal=document.getElementById("Decimal").value;
    VstOctal=parseInt(VstDecimal).toString(8);
    document.getElementById("Octal").value=VstOctal;
}

function calcularHexadecimal(){
    VstDecimal=document.getElementById("Decimal").value;
    VstHex=parseInt(VstDecimal).toString(16);
    document.getElementById("Hexadecimal").value=VstHex;
}