window.onload=comprobar;

			function comprobar() {
				document.farmacia.onsubmit = function () {
					return iniciar();
				}
			}
			function iniciar() {
				let numeroColegiada=document.farmacia.colegiada.value;
				let titularFarmacia=document.farmacia.titular.value;
				let codInternacional=document.farmacia.cinter.value;
				let nombreDis=document.farmacia.nomdis.value;

				if (valdiarColegiada(numeroColegiada) && valdiartitular(titularFarmacia) && validarcodInt(codInternacional) && validarNombredistirbuidora(nombreDis)&&comprobarcheckbox) {
					return true;
				}else{
					alert("Datos no validos");
					return false;
				}

			}

			function valdiarColegiada(num) {
				let regex= /^[a-zA-Z]{3}[\d]{3,5}[&$?+¿\\]{3}[a-zA-Z\d]{6}[#@|]{2}[\d]{2}$/;
				if (regex.test(num)) {
					return true;
				}else{
					return false;
				}
			}

			function valdiartitular(num) {
				let regex= /^[a-zA-Z]{2}[a-zA-Z.ºª\-]{8,25}[a-zA-Z.]{3}$/;
				if (regex.test(num)) {
					return true;
				}else{
					return false;
				}
			}

			function validarcodInt(num) {
				let regex= /^([a-zA-Z]{4}|[a-zA-Z]{7})(\d{5}|\d{9})$/;

				if (regex.test(num)) {
					return true;
				}else{
					return false;
				}
			}

			function validarNombredistirbuidora(num) {
				let regex= new RegExp (/^[a-zA-Z]{1}[a-zA-Z\d./&?!\-]{8,39}[a-zA-Z.]{2}$/)
				if (regex.test(num)) {
					return true;
				}else{
					return false;
				}
			}

            function comprobarcheckbox() {
                let bayer =document.farmacia.bayer;
                let roche =document.farmacia.roche;
                let pfizer =document.farmacia.pfizer;
                let abbot =document.farmacia.abbot;
                let merck =document.farmacia.merck;
                let sanofi =document.farmacia.sanofi;
                let novartis =document.farmacia.novartis;
                let celgene =document.farmacia.celgene;
                let gsk =document.farmacia.gsk;
                let abbvie =document.farmacia.abbvie;

                let cont = 0;

                if (bayer.checked) {
                    cont++;
                }else if (roche.checked) {
                    cont++;
                }
                else if (pfizer.checked) {
                    cont++;
                }else if (abbot.checked) {
                    cont++;
                }else if (merck.checked) {
                    cont++;
                }else if (sanofi.checked) {
                    cont++;
                }else if (novartis.checked) {
                    cont++;
                }else if (celgene.checked) {
                    cont++;
                }else if (gsk.checked) {
                    cont++;
                }else if (abbvie.checked) {
                    cont++;
                }
                    if (cont>=2) {
                        return true;
                    }else{
                        return false;
                    }
            }
