$(window).on("load", inicio)

function inicio(){
	$("#calcular").on("click", procesar);
}

function procesar(){
	let numcaras=$("#caras").val().trim();
	let numvertices=$("#vertices").val().trim();
	if(numcaras===''||numvertices===''){
        alert('Los datos no pueden estar vacios');
    }else{
        let datos = new FormData();
        datos.append("numcaras",numcaras);
        datos.append("numvertices",numvertices);
        let objetoAjax={method:"POST",
                        url:"php/ejercicio04.php" ,
                        data:datos,
                        success:recibido,
                        contentType:false,
                        processData:false
        }
        $.ajax(objetoAjax);
    }
}



function recibido(dato){
	$("#aristas").val(dato);	

}