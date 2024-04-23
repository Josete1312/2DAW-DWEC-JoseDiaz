window.onload=inicio;

function inicio() {
    document.formulario.onsubmit=validar;
    document.formulario.letras.onkeypress=sololetras;
    document.formulario.numeros.onkeypress=solonumeros;
}

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

function solonumeros(evento) {
    let elevento=evento || window.event;
    let letra=String.fromCharCode(elevento.charCode);
    let admitido=true;
    if (letra<"0" || letra>"9") {
        admitido=false;
    }
    return admitido;
}

function validar() {
    let enviar=true;
    let primervalor=document.formulario.dato.value;
    let segundovalor=document.formulario.valor.value;
    let cuartovalor=document.formulario.numero.value;
    let quintovalor=document.formulario.fecha.value;
    let mensaje=" ";
    
    if (!validardato1(primervalor)) {
        enviar=false;
        mensaje+="error en la caja de primer valor\n";
    }

    if (!validardato3(segundovalor)) {
        enviar=false;
        mensaje+="error en la caja de segundo valor\n";
    }
    
    if (!validarnumero(cuartovalor)) {
        enviar=false;
        mensaje+='error en la caja de numero dato no valido.\n';
    }

    if (!validarfecha(quintovalor)) {
        enviar=false;
        mensaje+='error en la fecha, introduzca una fecha correcta.\n';
    }

    if (!enviar) {
        alert(mensaje);
    }

    return enviar;
}

function validardato1(dato) {
    let correcto=true;
    let indice=0;
    dato=dato.trim().toLowerCase();
    if (dato.length<6 || dato.length>30){
    correcto = false;
    }else{
        let adicionales="áéíóúüñ";
        while (correcto && indice<2) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
                }
            } 
            indice+=1
        }
    
        let letra=dato.at(dato.length-1);
        if (letra<"a" || letra>"z"){
            if (!adicionales.includes(letra)){
                if (letra!=".") {
                   correcto=false; 
                }
            }
        }
        indice=2;
        let mas="-.\%";
        while (correcto && indice<dato.length-1) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    if (!mas.includes(dato.at(indice))) {
                        if (dato.at(indice)<"0" || dato.at(indice)>"9") {
                            correcto=false;
                        }
                    }
                } 
            
            } 
            indice+=1;
        }
    }

    return correcto;
}

function validardato3(dato) {
    let correcto=true;
    let indice=0;
    dato=dato.trim().toLowerCase();
    if (dato.length<6 || dato.length>30){
    correcto = false;
    }else{
        let adicionales="áéíóúüñ";
        while (correcto && indice<2) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    correcto=false;
                }
            } 
            indice+=1
        }
        indice=dato.length-3;
        while (correcto && indice<dato.length){
        if (dato.at(indice)<"a" || dato.at(indice)>"z"){
            if (!adicionales.includes(dato.at(indice))){
                if (dato.at(indice)!=".") {
                   correcto=false; 
                }
            }
        }
        indice+=1;
    }
        indice=2;
        let mas="-.\%";
        while (correcto && indice<dato.length-3) {
            if (dato.at(indice)<"a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    if (!mas.includes(dato.at(indice))) {
                        if (dato.at(indice)<"0" || dato.at(indice)>"9") {
                            correcto=false;
                        }
                    }
                } 
            
            } 
            indice+=1;
        }
    }

    return correcto;
}

function validardato4(dato){
    // empieza por dos letras
    // termina por dos números
    // en medio puede tener 5 o 8 letras o números.
    let correcto=true;
    dato=dato.trim().toLowerCase();
    if (dato.length != 9 && dato.length!=12){
        correto=false;
    } else {
        // empieza por dos letras.
        let indice=0;
        let adicionales="áéíóúüñ";
        while (correcto && indice < 2){
            if (dato.at(indice) < "a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){ 
                    correcto=false;
                }
            }
            indice+=1;
        }
        // termina por dos números
        indice=dato.length -2;
        while (correcto && indice < dato.length){
            if (dato.at(indice) < "0" || dato.at(indice)>"9"){
                    correcto=false;
            }
            indice+=1;
        }
        // en medio puede tener 5 o 8 letras o números.
        indice=2;
        while (correcto && indice < dato.length - 2){
            if (dato.at(indice) < "a" || dato.at(indice)>"z"){
                if (!adicionales.includes(dato.at(indice))){
                    if (dato.at(indice) < "0" || dato.at(indice)>"9"){
                        correcto=false;
                    }
                }
            }
            indice+=1;
        }

    }

}




function validarnumero(dato) {
    //numero de 4 a 8 digitos, con un valor minimo de 3567
    let correcto=true;
    dato=dato.trim();
    if (dato.length<4 || dato.length>8) {
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
            if (numero<3567) {
                correcto=false;
            }
        }
    }
    return correcto;
}

function validarfecha(dato) {
    //fecha correcta dia y mes 1 o 2 digitos y año 4 digitos se divide con - o /
    let correcto=true;
    dato=dato.trim();
    if (dato.length<8 || dato.length>10) {
        correcto=false;
    }else{
        let valores
        if (dato.includes("-")) {
            valores=dato.split("-");
        }else if(dato.includes("/")){
            valores=dato.split("/");
        }else{
            correcto=false;
        }
        if (valores.length!==3) {
            correcto=false;
        } else {
            let dia=valores[0];
            let mes=valores[1];
            let anio=valores[2];   
            if (dia.length<1 || dia.length>2) {
                correcto=false;
            }else if (mes.length<1 || mes.length>2){
                correcto=false;
            }else if (anio.length!=4) {
                correcto=false;
            }else{
                let indice=0;
                while (correcto && indice<dia.length){
                    if (dia.at(indice)<"0" || dia.at(indice)>"9") {
                        correcto=false
                    }
                indice+=1;
                }
                indice=0;
                while (correcto && indice<mes.length){
                    if (mes.at(indice)<"0" || mes.at(indice)>"9") {
                        correcto=false
                    }
                    indice+=1;
                }
                indice=0;
                while (correcto && indice<anio.length){
                    if (anio.at(indice)<"0" || anio.at(indice)>"9") {
                        correcto=false
                    }
                    indice+=1;
                }
                if (correcto) {
                    dia=parseInt(dia,10);
                    mes=parseInt(mes,10);
                    anio=parseInt(anio,10);
                    if (mes<1 || mes>12) {
                        correcto=false;
                    }else{
                        let diames=[31,28,31,30,31,30,31,31,30,31,30,31];
                        if(anio % 400 == 0){
                            diames[1]=29;
                        }else if (anio%4==0 && anio%100 !=0) {
                            diames[1]=29;
                        }
                        if (dia<1 || dia >diames[mes-1]) {
                            correcto=false;
                        }
                    }
                }
            }
        }
    }
    return correcto;
}
