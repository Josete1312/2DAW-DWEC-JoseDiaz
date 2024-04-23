window.onload=inicio;

function inicio(){
    document.formulario.onsubmit=validar;
}

function validar(){
    let enviar=true;
    let primerValor = document.formulario.dato.value;
    let segundoValor = document.formulario.valor.value;
    let mensaje = "";
    if (!validarDato (primerValor)){
        enviar = false;
        mensaje += "Error en la caja de texto del Primer Valor, Dato no válido \n";
    }
    if (!validarDato1 (segundoValor)){
        enviar = false;
        mensaje += "Error en la caja de texto del Segundo Valor, Dato no válido \n";
    }
    if (!enviar){
        alert(mensaje);
        return enviar;
    }
    return true;
}

function validarDato(dato){
    // Empieza por dos letras, termina por una letra o un punto y
    // en medio puede tener letras digitos y los caracteres"-", ".",
    // "\" y "%": con una Longitud comprendida entre 6 y 30 caracteres
    let correcto = true;
    let indice = 0;
    dato = dato.trim().toLowerCase();
    if (dato.length < 6 || dato.length > 30){
        correcto = false;
    }else{
        let adicionales = "áéíóúüñ";
        while (correcto && indice < 2){
            if (dato.charAt(indice) < "a" || dato.charAt(indice) > "z"){
                if (!adicionales.includes(dato.charAt(indice))){
                    correcto = false;
                }
            }
            indice += 1;
        }
        let letra = dato.charAt(dato.length - 1);
        if (letra < "a" || letra > "z"){
            if (!adicionales.includes(letra)){
                if (letra != "."){
                    correcto = false;
                }
            }
        }
        indice = 2;
        let mas = "-.\%";
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
    }
    return correcto;
}

function validarDato1(dato){
    let correcto = true;
    let indice = 0;
    dato = dato.trim().toLowerCase();
    if (dato.length < 6 || dato.length > 30){
        correcto = false;
    }else{
        let adicionales = "áéíóúüñ";
        while (correcto && indice < 2){
            if (dato.charAt(indice) < "a" || dato.charAt(indice) > "z"){
                if (!adicionales.includes(dato.charAt(indice))){
                    correcto = false;
                }
            }
            indice += 1;
        }
        indice = dato.length-3
       
        while (correcto && indice < dato.length - 3){
            let letra = dato.at(indice);
            if (letra < "a" || letra > "z"){
                if (!adicionales.includes(letra)){
                    if (letra != "."){
                        correcto = false;
                    }
                }
            }
        }

        indice = 2;
        let mas = "-.\%";
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
    }
    return correcto;
}
