window.onload=inicio;

function inicio() {
    document.formulario.onsubmit=validar;
    document.formulario.localidad.onkeypress=sololetras;
    document.formulario.unidades.onkeypress=solonumeros;
    document.formulario.minuni.onkeypress=solonumeros;

    //Cuando nos situemos sobre las cajas de texto su contenido se va a borrar, el
    //color de los caracteres será amarillo y el color de fondo rojo, cuando
    //abandonemos la caja de texto la visualización será la inicial.
    let elementos=document.formulario.elements;
    for (i=0; i < elementos.length; i++){
        if (elementos[i].type=="text"){
            elementos[i].onfocus=entrar;
            elementos[i].onblur=salir;
        }
    }
}

//La caja de texto de la localidad de la empresa solamente va a admitir letras
function sololetras(evento) {
    let elevento=evento || window.event;
    let letra=String.fromCharCode(elevento.charCode).toLowerCase();
    let adicionales="áéíóúñ";
    let admitido=true;
    if (letra<"a" || letra>"z") {
        if (!adicionales.includes(letra)) {
            admitido=false;
        }
    }
    return admitido;
}

//Las cajas de texto de unidades del producto disponibles y número de unidades
//mínimas solamente va a admitir dígitos
function solonumeros(evento) {
    let elevento=evento || window.event;
    let letra=String.fromCharCode(elevento.charCode);
    let admitido=true;
    if (letra<"0" || letra>"9") {
        admitido=false;
    }
    return admitido;
}

//Cuando nos situemos sobre las cajas de texto su contenido se va a borrar, el
//color de los caracteres será amarillo y el color de fondo rojo, cuando
//abandonemos la caja de texto la visualización será la inicial.
function entrar(evento){
    let elevento=evento || window.event;
    elevento.target.value="";
    elevento.target.style.color="yellow";
    elevento.target.style.backgroundColor="red";
}

//Cuando nos situemos sobre las cajas de texto su contenido se va a borrar, el
//color de los caracteres será amarillo y el color de fondo rojo, cuando
//abandonemos la caja de texto la visualización será la inicial.
function salir(evento){
    let elevento=evento || window.event;
    elevento.target.style.color="black";
    elevento.target.style.backgroundColor="white";
}

function validar(){
    console.log("validando");
    let enviar=true;
    let codigoProducto = document.formulario.codigo.value;
    let descripcionProducto = document.formulario.descripcion.value;
    let fechaAlta = document.formulario.fecha.value;
    let precioProducto = document.formulario.precio.value;
    let nombreEmpresa = document.formulario.empresa.value;
    let codigoEmpresa = document.formulario.codempre.value;
    let direccionEmpresa = document.formulario.direccion.value;
    let localidadEmpresa = document.formulario.localidad.value;
    let numeroUnidades = document.formulario.minuni.value;
    let unidadesProducto = document.formulario.unidades.value;
    let familiaProducto = document.formulario.familia.value;
    let empresaTransporte = document.formulario.transporte.value;
    let tipoIva = document.formulario.iva.value;
    let sectorProducto = document.formulario.elements;
    let paisesVenta = document.formulario.paises;
    let mensaje = " ";
    let cuenta = 0;
    let contador = 0;

    if (!validarCodigoProducto(codigoProducto)) {
        enviar=false;
        mensaje+='Error en la caja de numero dato no valido.\n';
    }

    console.log("validando");
    if (!validarDescripcion(descripcionProducto)) {
        enviar=false;
        mensaje+='Error en la caja de la descripcion.\n';
    }

    if (!validarfecha(fechaAlta)){
        enviar=false;
        mensaje+='Error en la fecha pon una fecha correcta\n';
    }

    if (!validarPrecioProducto(precioProducto)){
        enviar=false;
        mensaje+='Error en el precio del porducto\n';
    }

    if (!validarNombreEmpresa(nombreEmpresa)){
        enviar=false;
        mensaje+='Error en el nombre de la empresa\n';
    }

    if (!validarCodigoEmpresa(codigoEmpresa)){
        enviar=false;
        mensaje+='Error en el codigo de la empresa\n';
    }

    if (!validarDireccionEmpresa(direccionEmpresa)){
        enviar=false;
        mensaje+='Error en la direccion de la empresa\n';
    }

    if (!validarLocalidadEmpresa(localidadEmpresa)){
        enviar=false;
        mensaje+='Error en la localidad de la empresa\n';
    }

    if (!validarNumeroUnidadesMin(numeroUnidades)){
        enviar=false;
        mensaje+='Error introduzca un numero entero mayor que 30\n';
    }

    if (!validarUnidadesDisponibles(unidadesProducto)){
        enviar=false;
        mensaje+='Error introduzca un numero entero como minimo de 2 digitos y maximo 7 digitos\n';
    }

    if (!validarFamiliaProducto(familiaProducto)){
        enviar=false;
        mensaje+='Error en la familia del producto\n';
    }

    if (!validarEmpresaTransporte(empresaTransporte)){
        enviar=false;
        mensaje+="Error debes poner una empresa de transporte correcta\n";
    }

    //Se debe seleccionar un tipo de IVA
    if (tipoIva == ""){
        enviar=false;
        mensaje+="Debes seleccionar un tipo de iva\n";
    }
    
    //Se deben seleccionar al menos un sector de producción.
    for (let j=0; j<sectorProducto.length; j++){
        if(sectorProducto[j].type=="checkbox"){
            if(sectorProducto[j].checked){
                cuenta+=1;
            }
        }
    }

    if (cuenta<1){
        enviar = false;
        mensaje+="Debes elegir como minimo un Sector del producto\n";
    }

    //Se deben seleccionar al menos tres países en los que se vende el producto.
    for (let i=0; i<paisesVenta.length; i++){
        if (paisesVenta[i].selected){
            contador+=1;
        }
    }

    if (contador<3){
        enviar=false;
        mensaje+="Debes seleccionar al menos 3 paises";
    }

    if (!enviar) {
        alert(mensaje);
    }

    return enviar;

}

function validarCodigoProducto(dato) {
    //El código del producto va a contener 7 o 11 dígitos. 
    let correcto = true;
    dato = dato.trim();
        if (dato.length !== 7 && dato.length !== 11) {
            correcto = false; 
        }
        for (let i = 0; i < dato.length; i++) {
            if (dato.charAt(i) < "0" || dato.charAt(i) > "9") {
                correcto = false;
            }
        }
        return correcto;
}

function validarDescripcion(dato){
    //La descripción del producto va a empezar por cuatro letras y va a 
    //terminar por una letra, en medio puede tener letras, espacios, el 
    //guión y dígitos. En total va a tener un número de caracteres
    //comprendidos entre 10 y 23.
    let correcto=true;
    let indice=0;
    dato=dato.trim().toLowerCase();
    if (dato.length<6 || dato.length>30){
    correcto = false;
    }else{
        let adicionales="áéíóúüñ";
        while (correcto && indice<4) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
                }
            } 
            indice+=1
        }
    }
    let letra=dato.at(dato.length-1);
        if (letra<"a" || letra>"z"){
            if (!adicionales.includes(letra)){
                   correcto=false; 
            }
        }
    indice = 4;
    let mas = " -";
    while (correcto && indice < dato.length -1){
        if (dato.charAt(indice) < "a" || dato.charAt(indice) > "z"){
            if (!adicionales.includes(dato.charAt(indice))){
                if (!mas.includes(dato.charAt(indice))){
                    if (dato.charAt(indice) < "0" || dato.charAt(indice) > "9"){
                        correcto = false;
                    }
                }
            }
        }
        indice += 1;
    }
return correcto;
}

function validarfecha(dato) {
    //La fecha de alta en la empresa deberá tener una fecha correcta, en la
    //cual el día va a tener dos dígitos, al igual que el mes y el año va a
    //tener cuatro dígitos, siendo su valor mínimo 1930 y su valor máximo 
    //el año actual.
    let correcto=true;
    dato = dato.trim();

    if (dato.length < 8 || dato.length > 10) {
        correcto=false;    
    } else {

    let valores;
    if (dato.includes("-")) {
        valores = dato.split("-");
    } else if (dato.includes("/")) {
        valores = dato.split("/");
    } else {
        correcto=false;    
    }

    if (valores.length !== 3) {
        correcto=false;
        }

    let dia = valores[0];
    let mes = valores[1];
    let anio = valores[2];

    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        return false;
    }

    dia = parseInt(dia, 10);
    mes = parseInt(mes, 10);
    anio = parseInt(anio, 10);

    const anioActual = new Date().getFullYear();

    if (anio < 1930 || anio > anioActual) {
        correcto=false;
    }

    if (mes < 1 || mes > 12) {
        correcto=false;
    }

    const diasPorMes = [31, 28 + (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        correcto=false;
    }
    }
    correcto=true;
}

function validarPrecioProducto(dato) {
    //El precio del producto va a ser un número, que la parte entera 
    //siempre va a ser mayor que 10 y la parte decimal puede tener hasta
    //dos dígitos.
    let precioStr = dato.toString().trim();
    let partes = precioStr.split('.');
    let correcto = true;

    if (partes.length !== 2) {
        correcto = false;
    } else {
        let parteEntera = partes[0];
        let parteDecimal = partes[1];

        if (!esNumeroValido(parteEntera) || parseInt(parteEntera, 10) <= 10) {
            correcto = false;
        }

        if (parteDecimal && (parteDecimal.length > 2 || !esNumeroValido(parteDecimal))) {
            correcto = false;
        }
    }

    return correcto;

    function esNumeroValido(str) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) < "0" || str.charAt(i) > "9") {
                return false;
            }
        }
        return true;
    }
}

function validarNombreEmpresa(dato){
    //El nombre de la empresa que distribuye el producto va a empezar
    //por tres letras y va a terminar por una letra o un dígito, en medio
    //puede tener letras, espacios y el punto. En total va a tener un
    //número de caracteres comprendidos entre 10 y 27.
    let correcto = true;
    dato = dato.trim().toLowerCase();
    let indice = 0;
    if (dato.length<10 || dato.length>27){
        correcto = false;
    }else{
        let adicionales="áéíóúüñ";
        while (correcto && indice<3) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
                }
            } 
            indice+=1
        }
    }
    indice=dato.length-1;
    while (correcto && indice < dato.length){
        if (dato.at(indice) < "a" || dato.at(indice) > "z"){
            if (!adicionales.includes(dato.at(indice))){
                if (dato.at(indice) < "0" || dato.at(indice)>"9"){
                    correcto=false;
                }
            }
        }
    }
    indice = 4;
    let mas = " .";
    while (correcto && indice < dato.length -1){
        if (dato.charAt(indice) < "a" || dato.charAt(indice) > "z"){
            if (!adicionales.includes(dato.charAt(indice))){
                if (!mas.includes(dato.charAt(indice))){
                        correcto = false;
                }
            }
        }
        indice += 1;
    }
return correcto;
}

function validarCodigoEmpresa(dato) {
    //El código de la empresa va a tener tres dígitos, un punto, luego 
    //cuatro letras que puede tener uno de los siguientes valores: ABCE, 
    //CADE, FEGU, IJOK, LIMA; a continuación, va a tener de 5 a 8 dígitos, 
    //un punto y va a terminar con un conjunto de 5 caracteres, que 
    //pueden ser letras o dígitos. 
    let correcto = true;
    dato = dato.trim().toUpperCase();

    if (dato.length < 17 || dato.length > 22) {
        correcto = false;
    } else {
        for (let i = 0; i < 3; i++) {
            if (dato.charAt(i) < "0" || dato.charAt(i) > "9") {
                correcto = false;
            }
        }

        if (dato.charAt(3) !== '.') {
            correcto = false;
        }

        let letrasValidas = ["ABCE", "CADE", "FEGU", "IJOK", "LIMA"];
        let letrasSegmento = dato.substr(4, 4);
        if (!letrasValidas.includes(letrasSegmento)) {
            correcto = false;
        }

        let segundoPuntoIndex = dato.indexOf('.', 8);
        if (segundoPuntoIndex === -1 || segundoPuntoIndex < 13 || segundoPuntoIndex > 18) {
            correcto = false;
        }

        let ultimosCaracteres = dato.substr(segundoPuntoIndex + 1);
        if (ultimosCaracteres.length !== 5) {
            correcto = false;
        }

        for (let i = segundoPuntoIndex + 1; i < dato.length; i++) {
            let char = dato.charAt(i);
            if ((char < "A" || char > "Z") && (char < "0" || char > "9")) {
                correcto = false;
            }
        }
    }

    return correcto;
}
    

function validarDireccionEmpresa(dato){
    //La dirección de la empresa va a empezar por dos letras, va a terminar 
    //por letra, dígito o punto y en medio va a contener letras, números, el 
    //punto, la coma, el guion y los caracteres “º”, “ª”, “\”. En total va a 
    //tener entre 10 y 28 caracteres.
    let correcto = true;
    dato = dato.trim().toLowerCase();
    let indice = 0;
    if (dato.length<10 || dato.length>28){
        correcto = false;
    }else{
        let adicionales = "áéíóúüñ";
        while (correcto && indice<2) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
                }
            } 
            indice+=1
        }
        indice = dato.length-1;
        let mas = ".";
        while (correcto && indice < dato.length){
            if (dato.at(indice) < "a" || dato.at(indice) > "z"){
                if (!adicionales.includes(dato.at(indice))){
                    if (dato.at(indice) < "0" || dato.at(indice)>"9"){
                        if (!mas.includes(dato.charAt(indice))){
                            correcto=false;
                        }
                    }
                }
            }
        }
        let mas1 = "ºª\\.,-";
        indice = 2;
        while (correcto && indice < dato.length-1){
            if (dato.charAt(indice) < "a" || dato.charAt(indice) > "z"){
                if (!adicionales.includes(dato.charAt(indice))){
                    if (!mas1.includes(dato.charAt(indice))){
                        if (dato.charAt(indice) < "0" || dato.charAt(indice) > "9"){
                            correcto = false;
                        }
                    }
                }
            }
    
        }
    }
    return correcto;
}

function validarLocalidadEmpresa(dato){
    //La localidad de la empresa va a contener de cinco a veinte letras.
    let correcto = true;
    dato = dato.trim().toLowerCase();
    let indice = 0;
    if (dato.length<5 || dato.length>20){
        correcto = false;
    }else{
        let adicionales = "áéíóúüñ";
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
                }
            } 
            indice+=1
    }
    return correcto;
}

function validarNumeroUnidadesMin(dato){
    //El número de unidades mínimas va a ser un número entero de entre 
    //2 y 4 dígitos, siendo el valor mínimo de 30.
    let correcto=true;
    dato=dato.trim();
    if (dato.length<2 || dato.length>4) {
        correcto=false;
    }else{
        let indice=0;
        while (correcto && indice>dato.length) {
            if (dato.at(indice)<"0" || dato.at(indice)> "9") {
                correcto=false;
            }
            indice+=1;
        }
        if (correcto) {
            let numero=parseInt(dato,10);
            if (numero<30) {
                correcto=false;
            }
        }
    }
    return correcto;
}

function validarUnidadesDisponibles(dato){
    //Las unidades del producto disponibles van a ser un número entero
    //de entre 2 y 7 dígitos.
    let correcto = true;
    dato = dato.trim();
    if (dato.length<2 || dato.length>7){
        correcto = false;
    }else{
        let indice=0;
        while (correcto && indice>dato.length) {
            if (dato.at(indice)<"0" || dato.at(indice)> "9") {
                correcto=false;
            }
            indice+=1;
        }
        if (correcto) {
            let numero=parseInt(dato,10);
        }else{
            correcto=false;
        }
    }
    return correcto;
}

function validarFamiliaProducto(dato){
    //La familia a la que pertenece el producto va a empezar con cinco 
    //letras y va a terminar con tres letras, en medio puede tener letras, 
    //dígitos, espacios, los caracteres el guion, el punto y la barra “|”.En
    //total va a tener de 10 a 21 caracteres.
    let correcto = true;
    dato = dato.trim().toLowerCase();
    let indice = 0;
    if (dato.length<10 || dato.length>21){
        correcto = false;
    }else{
        let adicionales="áéíóúüñ";
        while (correcto && indice<5) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
                }
            } 
            indice+=1
        }
    }

    indice=dato.length-3;
    while (correcto && indice < dato.length){
        if (dato.at(indice) < "a" || dato.at(indice) > "z"){
            if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
            }
        }
    }

    indice = 5;
    let mas1 = " -.|";
        while (correcto && indice < dato.length-3){
            if (dato.charAt(indice) < "a" || dato.charAt(indice) > "z"){
                if (!adicionales.includes(dato.charAt(indice))){
                    if (!mas1.includes(dato.charAt(indice))){
                        if (dato.charAt(indice) < "0" || dato.charAt(indice) > "9"){
                            correcto = false;
                        }
                    }
                }
            }
    
        }
    return correcto;
}

function validarEmpresaTransporte(dato){
    //La empresa de transporte utilizada va a tener uno de los siguientes valores
    //SEUR
    //NACEX
    //DHL
    //MRW
    let correcto = true;
    dato = dato.trim().toUpperCase();
    let empresasTransporte = ["SEUR", "NACEX", "DHL", "MRW"]

    if (!empresasTransporte.includes(dato)){
        correcto = false;
    }
    return correcto;
}