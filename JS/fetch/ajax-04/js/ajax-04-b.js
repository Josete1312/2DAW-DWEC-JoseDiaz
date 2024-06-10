if (document.addEventListener)
	window.addEventListener("load", inicio)
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let boton=document.getElementById("obtener");
	if (document.addEventListener)
		boton.addEventListener("click", procesar)
	else if (document.attachEvent)
		boton.attachEvent("onclick", procesar);
}

function procesar(){
	let nom=document.getElementById("nombre").value.trim();
	let ape=document.getElementById("apellidos").value.trim();
	
	let cadenaXML="<fabrica><empleado><trabajador nombre='"+nom+"' apellidos='"+ape+
					"' /></empleado></fabrica>";
	
	let objetoFetch={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:cadenaXML
	}
	
	fetch("php/ajax-04-b.php" ,objetoFetch)
		.then(correcto)
		.catch(errores);
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
	let valor=xml.getElementsByTagName("trabajador").item(0).getAttribute("sueldo");
	document.getElementById("sueldo").value=valor;	
}