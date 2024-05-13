$(document).ready(function() {
    $("#btnRegiones").click(function() {
      let paisSeleccionado = $("#paises").val();
      let regionesSelect = $("#regiones");
  
      if (paisSeleccionado === "") {
        alert("Por favor, selecciona un país.");
      } else {
        regionesSelect.empty();
  
        switch (paisSeleccionado) {
          case "Alemania":
            agregarRegiones(["Baden-Wurtemberg", "Baviera", "Berlín", "Brandeburgo", "Bremen", "Hamburgo", "Hesse", "Mecklemburgo-Pomerania Occidental", "Baja Sajonia", "Renania del Norte-Westfalia", "Renania-Palatinado", "Sarre", "Sajonia", "Sajonia-Anhalt", "Shleswig-Holstein", "Turingia"]);
            break;
          case "Francia":
            agregarRegiones(["Alsacia", "Aquitania", "Auvernia", "Borgona", "Bretaña", "Champagne-Ardenne", "Córcega", "Franco Condado", "Languedoc-Rosellón", "Lemosín", "Lorena", "Mediodía-Pirineos", "Norte-Paso de Calais", "Normandía", "País del Loira", "París Isla de Francia", "Picardía", "Poitou-Charentes", "Provenza-Alpes-Costa Azul", "Ródano-Alpes", "Riviera Azul"]);
            break;
          case "Inglaterra":
            agregarRegiones(["Gran Londres (Greater London)", "Sudeste de Inglaterra (South East England)", "Sudoeste de Inglaterra (South West England)", "Midlands del Oeste (West Midlands)", "Noroeste de Inglaterra (North West England)", "Noreste de Inglaterra (North East England)", "Yorkshire y Humber (Yorkshire and the Humber)", "Midlands Orientales (East Midlands)", "Este de Inglaterra (East of England)"]);
            break;
          case "Italia":
            agregarRegiones(["Abruzos", "Basilicata", "Calabria", "Campania", "Cerdeña", "Emilia-Romaña", "Friuli-Venecia Julia", "Lacio", "Liguria", "Lombardía", "Marcas", "Molise", "Piamonte", "Apulia", "Sicilia", "Toscana", "Trentino-Alto Adigio", "Umbría", "Valle de Aosta", "Véneto"]);
            break;
          case "Portugal":
            agregarRegiones(["Alentejo", "Algarve", "Gran Lisboa", "Región de Lisboa", "Lisboa y Valle del Tajo", "Regiones Autónomas de Portugal", "Región Centro (Portugal)", "Región Norte (Portugal)"]);
            break;
          default:
            break;
        }
      }
    });
  
    function agregarRegiones(regiones) {
      let regionesSelect = $("#regiones");
      $.each(regiones, function(index, region) {
        regionesSelect.append($("<option>", {
          value: region,
          text: region
        }));
      });
    }
  });
  