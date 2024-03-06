$(document).ready(function () {
  $('#incluir').on('click', function () {
      let familia = $('#familia').val();
      let subfamilia = $('#subfamilia').val();
      let individuos = parseInt($('#individuos').val());

      // Verificar si la familia y subfamilia ya existen en la tabla
      let filaExistente = $('#tablaanimales tbody tr').filter(function () {
          return $(this).find('td:first-child').text() === familia &&
                 $(this).find('td:nth-child(2)').text() === subfamilia;
      });

      if (familia && subfamilia && !isNaN(individuos)) {
          if (filaExistente.length > 0) {
              // Si la fila existe, sumar individuos
              let cantidadExistente = parseInt(filaExistente.find('td:nth-child(3)').text());
              filaExistente.find('td:nth-child(3)').text(cantidadExistente + individuos);
          } else {
              // Si la fila no existe, agregar una nueva fila
              let fila = '<tr><td>'+familia+'</td><td>'+subfamilia+'</td><td>'+individuos+'</td></tr>';
              $('#tablaanimales tbody').append(fila);
          }

          // Ordenar filas por familia ascendente y por subfamilia descendente
          let filasOrdenadas = $('#tablaanimales tbody tr').toArray().sort(function(a, b) {
              let familiaA = $(a).find('td:first-child').text();
              let subfamiliaA = $(a).find('td:nth-child(2)').text();
              let familiaB = $(b).find('td:first-child').text();
              let subfamiliaB = $(b).find('td:nth-child(2)').text();
              if (familiaA === familiaB) {
                  return subfamiliaB.localeCompare(subfamiliaA); // Orden descendente por subfamilia
              }
              return familiaA.localeCompare(familiaB); // Orden ascendente por familia
          });

          // Reemplazar filas en la tabla con las filas ordenadas
          $('#tablaanimales tbody').empty().append(filasOrdenadas);

          // Actualizar totales de familias y subfamilias
          let totalFamilias = $('#tablaanimales tbody tr').length;
          $('#totalFamilias').text(totalFamilias);

          let totalSubfamilias = $('#tablaanimales tbody tr').length;
          $('#totalSubfamilias').text(totalSubfamilias);

          // Actualizar total de individuos
          let totalIndividuos = 0;
          $('#tablaanimales tbody tr').each(function () {
              totalIndividuos += parseInt($(this).find('td:nth-child(3)').text());
          });
          $('#totalIndividuos').text(totalIndividuos);

          // Limpiar campos de entrada
          $('#familia, #subfamilia, #individuos').val('');
      } else {
          alert("Valores inválidos");
      }
  });

  $('#aplicar').on('click',function () {
      let colorA=Math.floor(Math.random() * 256);
      let colorB=Math.floor(Math.random() * 256);
      let colorC=Math.floor(Math.random() * 256);
      let colorD=Math.floor(Math.random() * 256);

      let color1="rgb("+colorA+","+colorB +","+colorC+")";
      let color2="rgb("+colorB+","+colorC +","+colorD+")";
      let color3="rgb("+colorC+","+colorD +","+colorA+ ")";
      let color4="rgb("+colorD+","+colorA +","+colorB+ ")";

      $('#coches tbody tr:first-child td:first-child').css('background-color',color1);
      $('#coches tbody tr:nth-child(2) td:nth-child(2)').css('background-color',color1);
      $('#coches tbody tr:nth-child(3) td:nth-child(3)').css('background-color',color1);

      $('#coches tbody tr:first-child td:nth-child(2)').css('background-color',color2);
      $('#coches tbody tr:nth-child(2) td:nth-child(3)').css('background-color',color2);
      $('#coches tbody tr:nth-child(4) td:nth-child(1)').css('background-color',color2);

      $('#coches tbody tr:first-child td:nth-child(3)').css('background-color',color3);
      $('#coches tbody tr:nth-child(3) td:first-child').css('background-color',color3);
      $('#coches tbody tr:nth-child(4) td:nth-child(2)').css('background-color',color3);

      $('#coches tbody tr:nth-child(2) td:first-child').css('background-color',color4);
      $('#coches tbody tr:nth-child(3) td:nth-child(2)').css('background-color',color4);
      $('#coches tbody tr:nth-child(4) td:nth-child(3)').css('background-color',color4);

    });
  }	
);