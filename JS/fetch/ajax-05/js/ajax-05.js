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
		
	let miObjeto= new Object();
	miObjeto.nombre=nom;
	miObjeto.apellidos=ape;
	let objetoJSON=JSON.stringify(miObjeto);
	
	let objetoFetch={
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:objetoJSON,
		cache:"no-cache"
	}
	
	fetch("php/ajax-05.php" ,objetoFetch)
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
	let valores=JSON.parse(dato);
	document.getElementById("sueldo").value=valores.sueldo;	
}