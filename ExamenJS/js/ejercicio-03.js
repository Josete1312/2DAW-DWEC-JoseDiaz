$(document).ready(function () {
  $('#incluir').on('click', function () {
      let familia = $('#familia').val();
      let subfamilia = $('#subfamilia').val();
      let individuos = parseInt($('#individuos').val());
      if (familia &&subfamilia &&!isNaN(individuos)) {
          let fila = '<tr><td>'+familia+ '</td><td>'+subfamilia+'</td><td>'+individuos+'</td></tr>';
          $('#tablaanimales tbody').append(fila);
          let totalIndividuos = parseInt($('#totalIndividuos').text());
          $('#totalIndividuos').text(totalIndividuos + individuos);

          let familias = parseInt($('#totalFamilias').text());
          $('#totalFamilias').text(familias+1);

          let subfamilias = parseInt($('#totalSubfamilias').text());
          $('#totalSubfamilias').text(subfamilias+1);

          $('#familia,#subfamilia,#individuos').val('');
      } else {
          alert("valroes invalidos");
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