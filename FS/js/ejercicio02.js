window.addEventListener("load", inicio);
function inicio() {
    const boton=document.getElementById('poner');
    boton.addEventListener("click", () => {
        VstCiudad=document.getElementById('ciudad').value.toLowerCase();
        VstPais=document.getElementById('pais').value.toLowerCase();
        VinHabita=parseInt(document.getElementById('habita').value);
        if(VstCiudad===""||VstPais===""||isNaN(VinHabita)){
            alert("Los campos no pueden estar vacios || El valor habitantes no es correcto");
        }else{
            if(!(document.getElementById(VstCiudad)&&document.getElementById(VstPais))){
                var tr = document.createElement("tr");
                var txt1 = document.createTextNode(VstPais);
                var txt2 = document.createTextNode(VstCiudad);
                var txt3 = document.createTextNode(VinHabita);

                var td1 = document.createElement("td");
                td1.setAttribute('id',VstPais);

                var td2 = document.createElement("td");
                td2.setAttribute('id',VstCiudad);

                var td3 = document.createElement("td");
                td3.setAttribute('class', 'habita');
                td3.setAttribute('id', VstPais+VstCiudad);

                td1.appendChild(txt1);
                td2.appendChild(txt2);
                td3.appendChild(txt3);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                document.getElementById("tablaciudad").appendChild(tr);
            }else{
                let aux = parseInt(document.getElementById(VstPais+VstCiudad).innerHTML);
                aux += VinHabita;

                var element = document.querySelector('#tablaciudad tfoot tr:nth-child(2) td:nth-child(2)');
                element.innerHTML = parseInt(element.innerHTML) + 1;



                document.getElementById(VstPais+VstCiudad).innerHTML=aux;

                var lista = document.getElementById('listaciudades');
                var newli = document.createElement('li');
                newPaisCiudad = VstPais+'-'+VstCiudad;
                var textli = document.createTextNode(newPaisCiudad);
                newli.appendChild(textli);

                let inserted = false;
                Array.from(lista.children).forEach(element => {
                    if (element.textContent===newPaisCiudad) {
                        inserted = true;
                    }else if(newPaisCiudad < element.textContent && !inserted){
                        lista.insertBefore(newli, element);
                        inserted = true;
                    }
                });
                
                if (!inserted) {
                    lista.appendChild(newli);
                }
            }

            var listahabitantes = document.getElementsByClassName('habita');
            var suma = 0;
            Array.from(listahabitantes).forEach(element => {
                suma += parseInt(element.textContent);
            });

            document.querySelector('#tablaciudad tfoot tr:nth-child(1) td:nth-child(2)').innerHTML = suma;
            
            

            document.getElementById('ciudad').value="";
            document.getElementById('pais').value="";
            document.getElementById('habita').value="";
        }
    });
}