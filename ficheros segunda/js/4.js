$(document).ready(function() {
    $("#calcular").on("click",obtenerAristas);
});

		function obtenerAristas() {
			let caras=$("#caras").val();
			let vertices=$("#vertices").val();

			let formdata=new FormData();
			let url = "./php/ejercicio04.php";

			formdata.append("numcaras", caras);
			formdata.append("numvertices", vertices);

			$.ajax({
				url: url,
				type: "POST",
				data: formdata,
				processData: false, 
				contentType: false, 
				success: function(datos) {
					$("#aristas").val(datos);
				},
				error: function(status,error) {
					console.log("error:" + status,error);
				}
			});
		}