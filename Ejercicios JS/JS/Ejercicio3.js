//Ordenar Tabla de manera ASCENDENTE
if (document.addEventListener){
    window.addEventListener("load", inicio);
} else if (document.attachEvent){
    window.attachEvent("onload", inicio);
}

function inicio(){
    let boton = document.getElementById("hacer");
    if (document.addEventListener){
        boton.addEventListener("click", procesar);
    } else if (document.attachEvent){
        boton.attachEvent("onclick", procesar);
    }
}

function procesar(){
    let com = document.getElementById("comu").value.trim();
    let pro = document.getElementById("prov").value.trim();
    let hab = document.getElementById("habit").value.trim();
    if(com !== "" && hab !== "" && pro !==""){
        let padre = document.querySelector("table>tbody");
        let filas = padre.getElementsByTagName("tr");
        let indice = 0;
        let ausente = true;
        while(ausente && indice < filas.length){
            let celdas = filas.item(indice).getElementsByTagName("td");
            if(com == celdas.item(0).textContent){
                ausente = false;
            } else if(com < celdas.item(0).textContent){
                ausente = false;
                let nuevafila = document.createElement("tr");
                let comnueva = document.createElement("td");
                let provnueva = document.createElement("td");
                let habnueva = document.createElement("td");
                let comvalor = document.createTextNode(com);
                let habvalor = document.createTextNode(hab);
                let provalor = document.createTextNode(pro);
                comnueva.append(comvalor);
                habnueva.append(habvalor);
                provnueva.append(provalor);
                nuevafila.append(comnueva);
                nuevafila.append(provnueva);
                nuevafila.append(habnueva);
                filas.item(indice).before(nuevafila);
            }
            indice += 1;
        }

        if(ausente){
            let nuevafila = document.createElement("tr");
            let comnueva = document.createElement("td");
            let provnueva = document.createElement("td");
            let habnueva = document.createElement("td");
            let comvalor = document.createTextNode(com);
            let habvalor = document.createTextNode(hab);
            let provalor = document.createTextNode(pro);
            comnueva.append(comvalor);
            habnueva.append(habvalor);
            provnueva.append(provalor);
            nuevafila.append(comnueva);
            nuevafila.append(provnueva);
            nuevafila.append(habnueva);
        }
    }
}
