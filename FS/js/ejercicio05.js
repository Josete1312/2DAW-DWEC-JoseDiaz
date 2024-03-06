if (document.addEventListener)
	window.addEventListener("load", inicio)
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let boton=document.getElementById("solucion");
	if (document.addEventListener)
		boton.addEventListener("click", procesar)
	else if (document.attachEvent)
		boton.attachEvent("onclick", procesar);
}

function procesar(){
	let vala=document.getElementById("vala").value.trim();
	let valb=document.getElementById("valb").value.trim();
	let valc=document.getElementById("valc").value.trim();

    if(vala===''||valb===''||valc===''){
        alert('No puede haber campos vacios.');
    }else{
        let cadenaXML="<ecuacion><segundo><a>"+vala+"</a><b>"+valb+"</b><c>"+valc+"</c></segundo></ecuacion>";
        let objetoFetch={
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:cadenaXML
        }
        fetch("php/ejercicio05.php" ,objetoFetch)
            .then(correcto)
            .catch(errores);
    }
}

function correcto(respuesta){
	if (respuesta.ok)
		respuesta.text().then(recibido);
}



function errores(){
	alert("Error en la conexión");
}

function recibido(dato){
	let parser = new DOMParser();
	let xml = parser.parseFromString(dato, "application/xml");
	document.getElementById("sol1").value=xml.getElementsByTagName("sol1").item(0).textContent;
	document.getElementById("sol2").value=xml.getElementsByTagName("sol2").item(0).textContent;
}