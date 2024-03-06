if (document.addEventListener)
	window.addEventListener("load", inicio)
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let boton=document.getElementById("obtener");
	if (document.addEventListener){
		boton.addEventListener("click", procesar);
	} else if (document.attachEvent) {
		boton.attachEvent("onclick", procesar);
	}
}

function procesar(){
    let velo = document.getElementById("velo").value.trim();
    let roza = document.getElementById("roza").value.trim();
	
    if(velo===''||roza===''){
        alert('Los campos no pueden estar vacios');
    }else{
        let conexion;
        if (window.XMLHttpRequest)
            conexion = new XMLHttpRequest
        else if (window.ActiveXObject)
            conexion= new ActiveXObject("Microsoft.XMLHttp");

        if (document.addEventListener)
            conexion.addEventListener("readystatechange", recibido)
        else if (document.attachEvent)
            conexion.attachEvent("onreadystatechange", recibido);

        conexion.open("POST","php/ejercicio06.php");
        conexion.setRequestHeader("Content-Type","application/json");

        let misDatos = {
            Velocidad : velo,
            Rozamiento: roza
        }

        let objetosJSON=JSON.stringify(misDatos);
        conexion.send(objetosJSON);
    }

}



function recibido(evento){
	if (evento.target.readyState==4)
		if (evento.target.status==200){
			let datos=evento.target.responseText;	
			let variosDatos=JSON.parse(datos);
            document.getElementById("dis").value = variosDatos.Distancia;
		}
}

