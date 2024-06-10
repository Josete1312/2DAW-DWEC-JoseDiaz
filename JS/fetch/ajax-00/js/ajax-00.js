if (document.addEventListener)
	window.addEventListener("load", inicio)
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let botonSG=document.getElementById("segovia");
	let botonSE=document.getElementById("sevilla");
	if (document.addEventListener){
		botonSG.addEventListener("click", function () {procesar("segovia.txt")});
		botonSE.addEventListener("click", function () {procesar("sevilla.txt")});
	} else if (document.attachEvent){
		botonSG.attachEvent("onclick", function () {procesar("segovia.txt")});
		botonSE.attachEvent("onclick", function () {procesar("sevilla.txt")});
	}
}

function procesar(fichero){
	
	let objetoFetch={
		method:"GET",
		headers:{"Content-Type":"application/x-www-form-urlencoded"}
	}
	
	fetch("texto/"+fichero, objetoFetch)
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
	document.getElementById("contenido").textContent=dato;	
}
