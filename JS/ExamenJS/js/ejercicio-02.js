document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("poner").addEventListener("click", function() {

        var ciudad = document.getElementById("ciudad").value;

        var pais = document.getElementById("pais").value;
        
        var habs = document.getElementById("habita").value;

        var footer=Array.from(document.querySelectorAll('#tablaciudad tfoot tr'));
        var habsLine=footer[0];
        var habsTd=Array.from(habsLine.querySelectorAll('td'));
            habsZone=habsTd[1];
            if (habsZone.textContent==''){
                habsZone.textContent=habs;
            } else{
                var anterior=parseInt(habsZone.textContent);
                var habs=parseInt(habs);
                var nuevo=anterior+habs;
                habsZone.textContent=nuevo;
            }


        if (ciudad && pais && habs) {

            var existente = false;

            var lista = document.querySelectorAll("#tablaciudad tbody tr");

            lista.forEach(function(elemento) {
                var value=Array.from(elemento.querySelectorAll('td'));

                if (value[0].textContent === pais && value[1].textContent === ciudad) {

                    existente=true;
                }

            });


            if (!existente){

            var nuevaFila = "<tr><td>" + pais + "</td><td>" + ciudad + "</td><td>" + habs + "</td></tr>";

            document.getElementById("tablaciudad").getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeend", nuevaFila);



            // Ordenar la tabla alfabéticamente por marca y modelo en modo descendente

            var rows = Array.from(document.querySelectorAll("#tablaciudad tbody tr"));

            rows.sort(function(a, b) {

                var habsA = a.cells[2].textContent;

                var habsB = b.cells[2].textContent;



                var comparacionHabs = habsA.localeCompare(habsB);

                return comparacionHabs !== 0 ? comparacionHabs : habsA.localeCompare(habsB);

            });



            // Limpiar y agregar los elementos ordenados a la tabla

            var tbody = document.getElementById("tablaciudad").getElementsByTagName("tbody")[0];

            tbody.innerHTML = "";

            rows.forEach(function(row) {

                tbody.appendChild(row);

            });
        }
        else{

            
            repesLine=footer[1];
            repesTd=Array.from(repesLine.querySelectorAll('td'));
            repes=repesTd[1];
            if (repes.textContent==''){
                repes.textContent=1;
            } else{
                repes.textContent++;
            }

            var listaRepetidas=document.getElementById('listaciudades');
            var newLine=document.createElement('li');
            newLine.textContent=pais+'-'+ciudad;
            listaRepetidas.appendChild(newLine);

            var rows = Array.from(document.querySelectorAll("#listaciudades li"));

            rows.sort(function(a, b) {

                var textA = a.textContent;

                var textB = b.textContent;

                var comparacion = textA.localeCompare(textB);

                return comparacion !== 0 ? comparacion : textB.localeCompare(textA);

            });
        }



            // Limpiar los campos del formulario

            document.querySelector("input[name='ciudad']").value = "";

            document.querySelector("input[name='pais']").value = "";

            document.querySelector("input[name='habita']").value = "";

        } else {

            alert("Por favor, complete todos los campos.");

        }

    });

});