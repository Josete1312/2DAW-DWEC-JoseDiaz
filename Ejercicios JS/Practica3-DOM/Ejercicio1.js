//Crear un documento HTML que tenga dos cajas de texto una para introducir
//una palabra y la otra para que contenga la definición de esa palabra, también
//tendremos un botón con el literal añadir.
//a. Al pulsar sobre el botyón nos añade el contenido de las cajas de texto
//a una lista de definición que tendremos por debajo, la palabra será el
//término y el contenido de la otra caja de texto será la definición.
//b. Cada término deberá aparecer una única vez y además deberán
//aparecer ordenados por el término en modo descendente.
//c. Cuando un término se repita por primera vez, vamos a incluir en una
//tabla, existente debajo de la tabla de definición, una nueva línea con
//dos celdas, en la primera celda tendremos el término y en la segunda
//tendremos el número uno (las líneas de la tabla van a estar ordenadas
//alfabéticamente en orden ascendente por el término).
//d. Cuando un término se repita por segunda o más veces vamos a ir a la
//tabla e incrementaremos el valor numérico de la segunda celda de la
//línea donde se encuentra el término.

if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    let boton = document.getElementById("añadir");
    if (document.addEventListener) {
        boton.addEventListener("click", procesar);
    } else if (document.attachEvent) {
        boton.attachEvent("onclick", procesar);
    }
}

function procesar() {
    let termino = document.getElementById("palabra").value.trim();
    let definicion = document.getElementById("definicion").value.trim();
    if (termino !== "" && definicion !== "") {
        let listaDefiniciones = document.getElementById("definiciones-list");
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = termino + ": " + definicion;
        listaDefiniciones.appendChild(nuevoItem);

        let tablaBody = document.getElementById("terminos-body");
        let filas = tablaBody.getElementsByTagName("tr");
        let indice = 0;
        let ausente = true;
        while (ausente && indice < filas.length) {
            let celdas = filas.item(indice).getElementsByTagName("td");
            if (termino === celdas.item(0).textContent) {
                ausente = false;
                let conteo = parseInt(celdas.item(1).textContent);
                celdas.item(1).textContent = conteo + 1;
            } else if (termino < celdas.item(0).textContent) {
                ausente = false;
                let nuevaFila = document.createElement("tr");
                let terminoNuevo = document.createElement("td");
                let conteoNuevo = document.createElement("td");
                let terminoValor = document.createTextNode(termino);
                let conteoValor = document.createTextNode("1");
                terminoNuevo.appendChild(terminoValor);
                conteoNuevo.appendChild(conteoValor);
                nuevaFila.appendChild(terminoNuevo);
                nuevaFila.appendChild(conteoNuevo);
                filas.item(indice).before(nuevaFila);
            }
            indice += 1;
        }
        if (ausente) {
            let nuevaFila = document.createElement("tr");
            let terminoNuevo = document.createElement("td");
            let conteoNuevo = document.createElement("td");
            let terminoValor = document.createTextNode(termino);
            let conteoValor = document.createTextNode("1");
            terminoNuevo.appendChild(terminoValor);
            conteoNuevo.appendChild(conteoValor);
            nuevaFila.appendChild(terminoNuevo);
            nuevaFila.appendChild(conteoNuevo);
            tablaBody.appendChild(nuevaFila);
        }
    }
}
