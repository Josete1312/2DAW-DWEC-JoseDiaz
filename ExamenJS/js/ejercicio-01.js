window.onload = comienzo;

function comienzo(){
    document.forms.farmacia.onsubmit = comprobar;
}

function comprobar(event){
    event.preventDefault();
    const formulario = document.forms.farmacia;

    let codFarmacia = formulario.codigo.value;
    codFarmacia=codFarmacia.toUpperCase();

    let nomFarmacia = formulario.nombre.value;
    nomFarmacia=nomFarmacia.toUpperCase();

    let codInter = formulario.cinter.value;

    let fechaIni = formulario.fecha.value;

    let titular = formulario.titular.value;

    let colegiada = formulario.colegiada.value;

    const distribuye = formulario.distribuye.value;

    let nomDis = formulario.nomdis.value;

    let precio = formulario.precio.value;
    
    let ventas=formulario.ventas.value;
    
    let error="";

    let validar=true;

    if (!validarNombre(nomFarmacia)){
        validar=false;
        error+="El nombre no es válido\n"
    }
    if (!validarCodigo(codFarmacia)){
        validar=false;
        error+="El codigo no es valido\n";
    }
    if (!validarPrecio(precio)){
        validar=false;
        error+="El precio no es valido\n";
    }
    if (!validarFecha(fechaIni)){
        validar=false;
        error+="La fecha no es valido\n";
    }
    if (!validarColegiada(colegiada)){
        validar=false;
        error+="Colegiada no es valido\n";
    }
    if (!validarTitular(titular)){
        validar=false;
        error+="Titular no es valido\n";
    }
    if (!validarCodInter(codInter)){
        validar=false;
        error+="Codigo internacional no es valido\n";
    }
    if (!validarDistribuidora(nomDis)){
        validar=false;
        error+="Nombre de la distribuidora no es valido\n";
    }
    if (!validarImporte(ventas)){
        validar=false;
        error+="Importe de las ventas no es valido\n";
    }

        let compañiasSeleccionadas = 0;
        let medicamentoSeleccionado = false;
        let parafarmaciaSeleccionados = 0;
    
        const compañias = ['bayer', 'roche', 'pfizer', 'abbott', 'merck', 'sanofi', 'novartis', 'celgene', 'gsk', 'abbvie'];
        for (let i = 0; i < compañias.length; i++) {
            if (formulario[compañias[i]].checked) {
                compañiasSeleccionadas++;
            }
        }
    
        if (formulario.medicamento.value !== "") {
            medicamentoSeleccionado = true;
        }
    
        parafarmaciaSeleccionados = formulario.paraf.selectedOptions.length;
    
        if (compañiasSeleccionadas < 2) {
            validar = false;
            error += "Debe seleccionar al menos dos compañías farmacéuticas\n";
        }
    
        if (!medicamentoSeleccionado) {
            validar = false;
            error += "Debe seleccionar un medicamento como el más vendido\n";
        }
    
        if (parafarmaciaSeleccionados < 5) {
            validar = false;
            error += "Debe seleccionar al menos cinco productos de parafarmacia más vendidos\n";
        }

    if (!validar){
        window.alert(error);
    }
}

//Validacion Codigo de la Farmacia

function validarCodigo(codigo){
    if (codigo.length!=16 || codigo.length!=18){
        return false;
    }

    let cadena1="0123456789";
    let cadena2="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
    let cadena3='ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ0123456789';
    let cadena4='ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ0123456789-/*+';
    let cadena5='&#$';

    for (let i=0;i<2;i++){
        if (!cadena1.includes(codigo.charAt(i))){
            return false;
        }
    }


    if (codigo.length==16){

        for (let i=2; i<6;i++){
            if (!cadena2.includes(codigo.charAt(i))){
                return false;
            }
        }

        if (!cadena5.includes(codigo.charAt(6))){
            return false;
        }

        for (let i=7;i<12;i++){
            if (!cadena3.includes(codigo.charAt(i))){
                return false;
            }
        }

        if (codigo.charAt(12)!=='-'){
            return false;
        }

        for (let i=13;i<16;i++){
            if (!cadena4.includes(codigo.charAt(i))){
                return false;
            }
        }

    }
}

//validacion nombre
function validarNombre(nombre){
    let cadena1="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
    let cadena2="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ0123456789?%&";
    let cadena3="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ.";

    if (nombre.length>37 || nombre.length<15){
        return false;
    }
    for (let i=0;i<4;i++){
        if (!cadena1.includes(nombre.charAt(i))){
            return false;
        } 
    }

    for (let i=3;i<nombre.length-4;i++){
        if (!cadena2.includes(nombre.charAt(i))){
            return false;
        }
    }
    
    for (let i=nombre.length-4;i<nombre.length;i++){
        if (!cadena3.includes(nombre.charAt(i))){
            return false;
        }
    }
    return true;
}

//validacion direccion
function validarPrecio(precio){
    
    let cadena1="0123456789";
    if (precio.includes('.')){
        precio=split('.');
        if (precio[0].length<1||precio[0].length>5){
            return false;
        }
        for (let i=0;i<precio[0].length;i++){
            if (!cadena1.includes(precio[0].charAt(i))){
                return false;
            }
        }
        if (precio[1].length<1||precio[1].length>2){
            return false;
        }
        for (let i=0;i<precio[1].length;i++){
            if (!cadena1.includes(precio[1].charAt(i))){
                return false;
            }
        }
    } else{
        for (let i=0;i<precio.length;i++){
            if (!cadena1.includes(precio.charAt(i))){
                return false;
            }
        }
    }
    return true;
}

//Validar Fecha
function validarFecha(fecha){
    let cadena1="0123456789";
    if (!fecha.includes('-') && !fecha.includes('/')){
        return false;
    }

    if (fecha.includes('-')){
        fecha=fecha.split('-');
    } else if(fecha.includes('/')){
        fecha=fecha.split('/');
    }
    if (!fecha[0] || !fecha[1] || !fecha[2]){
        return false;
    }
        if (fecha[0].length<1||fecha[0].length>2){
            return false;
        }
        for (let i=0; i<fecha[0].length;i++){
            if (!cadena1.includes(fecha[0].charAt(i))){
                return false;
            }
        }
        if (fecha[1].length<1||fecha[1].length>2){
            return false;
        }
        for (let i=0; i<fecha[1].length;i++){
            if (!cadena1.includes(fecha[1].charAt(i))){
                return false;
            }
        }
        if (fecha[2].length!=4){
            return false;
        }
        for (let i=0; i<fecha[2].length;i++){
            if (!cadena1.includes(fecha[2].charAt(i))){
                return false;
            }
        }

    return true;
}

function validarColegiada(col){
    var normaCol=/^[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ]{3}\d{3,5}[\&\?\+\¿\/]{3}[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ\d]{6}[\#\@\|]{2}\d{2}\i$/;
    if (!normaCol.test(col)){
        return false;
    }
    return true;
}

function validarTitular(titular){
    var normaTitular=/^[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ]{2}[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ\-\.\ª\º]{8,24}[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ\.]{3}\i$/;
    if (!normaTitular.test(titular)){
        return false;
    }
    return true;
}
function validarCodInter(cod){
    var normaCod=/^[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ]{4,6}[\d]{5,9}\i$/;
    if (!normaCod.test(cod)){
        return false;
    }
    return true;
}

function validarDistribuidora(dist){
    var normaDist=new RegExp('/^[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ][ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ\\d\\-\\.\\/\\&\\?\\!]{8,39}[ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ\\d\\.]{2}\\i$/')
    if (!normaDist.test(normaDist)){
        return false;
    }
    return true;
}

function validarImporte(imp){
    return /^\d+(\.\d{1,2})?$/.test(imp)
}