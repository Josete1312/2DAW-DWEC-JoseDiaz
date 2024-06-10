if (document.addEventListener)
	window.addEventListener("load", inicio)
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let boton=document.getElementById("obtener");
	let botonEmple=document.getElementById("masTabla");
	if (document.addEventListener){
		boton.addEventListener("click", procesar);
		botonEmple.addEventListener("click", mas);
	} else if (document.attachEvent) {
		boton.attachEvent("onclick", procesar);
		botonEmple.attachEvent("onclick", mas);
	}
	
}

function mas(){
	let nom=document.getElementById("nombre").value.trim();
	let ape=document.getElementById("apellidos").value.trim();
	if (nom!="" && ape!=""){
		let tabla=document.getElementById("tableEmpleados");
		let padre=tabla.tBodies[0];
		let nuevaFila=document.createElement("tr");
		let nuevoNom=document.createElement("td");
		let nuevoApe=document.createElement("td");
		let nuevoSuel=document.createElement("td");
		let datoNom=document.createTextNode(nom);
		let datoApe=document.createTextNode(ape);
		let datoSuel=document.createTextNode("0");
		nuevoNom.append(datoNom);
		nuevoApe.append(datoApe);
		nuevoSuel.append(datoSuel);
		nuevaFila.append(nuevoNom);
		nuevaFila.append(nuevoApe);
		nuevaFila.append(nuevoSuel);
		padre.append(nuevaFila);
	}
}

function procesar(){
	
	let cadenaXML="<fabrica>";
	let tabla=document.getElementById("tableEmpleados");
	let padre=tabla.tBodies[0];
	let filas=padre.rows;
	console.log(filas);
	for (i =0 ; i< filas.length; i++){
		let columnas=filas.item(i).cells;
		console.log(columnas);
		let nom=columnas.item(0).textContent;
		let ape=columnas.item(1).textContent;
		cadenaXML+="<empleado><nombre>"+nom+"</nombre><apellidos>"+ape+
					"</apellidos></empleado>"
	}
	cadenaXML+="</fabrica>";
	let objetoFetch={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:cadenaXML
	}
	
	fetch("php/ajax-06.php" ,objetoFetch)
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
	//let valor=xml.getElementsByTagName("sueldo").item(0).textContent;
	let alum=xml.getElementsByTagName("sueldo");
	let tabla=document.getElementById("tableEmpleados");
	let padre=tabla.tBodies[0];
	let filas=padre.rows;
	for (let i=0; i < alum.length; i++){
		let suel=alum.item(i).textContent;
		let columas=filas.item(i).cells;
		columas.item(2).textContent=suel;
	}
}

