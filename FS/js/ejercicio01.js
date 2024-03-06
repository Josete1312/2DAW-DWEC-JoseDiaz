window.onload=function(){
    document.farmacia.onsubmit=validar;
    
}

function validar(){
    let correcto=true;
    let VstMensajeError="";
    var VstCodigo=document.farmacia.codigo.value;
    console.log(VstCodigo);


    VstCodigo=VstCodigo.toUpperCase();
    if(VstCodigo===""){
        VstMensajeError+="No se ha introducido el campo Código\n"
        correcto=false;
    }else if(!ValidarCo(VstCodigo)){
        VstMensajeError+="Formato Codigo Incorrecto\n"
    }



    if(correcto==false)
    alert(VstMensajeError);
    return correcto;
}


function ValidarCo(VstCodigo){
    VstDig = '0123456789';
    VstLet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    VstEsp = '#&$';
    
}
