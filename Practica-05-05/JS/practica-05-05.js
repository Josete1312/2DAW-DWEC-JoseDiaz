window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = comprobarVocales;
}

function comprobarVocales(){
    const cadena=document.formulario.Cadena.value.toLowerCase();
    VstnumVocales=contarVocales(cadena);
    VstnumA=contarCaracteres(cadena,"a");
    VstnumE=contarCaracteres(cadena,"e");
    VstnumI=contarCaracteres(cadena,"i");
    VstnumO=contarCaracteres(cadena,"o");
    VstnumU=contarCaracteres(cadena,"u");
    const consonantes=cadena.length - VstnumVocales;
    document.formulario.Num.value=VstnumVocales
    document.formulario.ContA.value=VstnumA;
    document.formulario.ContE.value=VstnumE;
    document.formulario.ContI.value=VstnumI;
    document.formulario.ContO.value=VstnumO;
    document.formulario.ContU.value=VstnumU;
    document.formulario.Cons.value=consonantes;
}

function contarVocales(cadena){
    VstVocales=["a","e","i","o","u"];
    let contador=0;
    for(let i=0; i<cadena.length; i++){
        if(VstVocales.includes(cadena[i])){
            contador++;
        }
    }
    return contador;
}

function contarCaracteres(cadena, consonantes){
    let contador=0;
    for(let i=0; i<cadena.length; i++){
        if (cadena[i]===consonantes){
            contador++;
        }
    }
    return contador;
}
