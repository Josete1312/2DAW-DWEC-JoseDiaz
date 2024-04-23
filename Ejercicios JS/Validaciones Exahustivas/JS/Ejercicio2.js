window.onload=inicio;

function inicio(){
    document.formulario.onsubmit=validar;
}

function validar(){
    let enviar=true;
    let codigoProducto = document.formulario.codigo.value;
    let descripcionProducto = document.formulario.descripcion.value;
    let fechaAlta = document.formulario.fecha.value;
    let percioProducto = document.formulario.precio.value;
    let nombreEmpresa = document.formulario.empresa.value;
    let codigoEmpresa = document.formulario.codempre.value;
    let direccionEmpresa = document.formulario.direccion.value;
    let localidadEmpresa = document.formulario.localidad.value;
    let numeroUnidades = document.formulario.minuni.value;
    let unidadesProducto = document.formulario.unidades.value;
    let familiaProducto = document.formulario.familia.value;
    let empresaTransporte = document.formulario.transporte.value;
    //let tipoIva = document.
    let sectorProducto = document.formulario.elements;
    let paisesVenta = documente.formulario.paises;
    let mensaje = " ";

    if (!validarCodigoProducto(codigoProducto)) {
        enviar=false;
        mensaje+='Error en la caja de numero dato no valido.\n';
    }

    return enviar;

}

function validarCodigoProducto(dato) {
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