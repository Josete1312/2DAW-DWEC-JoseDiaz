if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    let boton = document.getElementById("pasarProvincias");
    if (document.addEventListener) {
        boton.addEventListener("click", procesar);
    } else if (document.attachEvent) {
        boton.attachEvent("onclick", procesar);
    }
}

function procesar() {
    let comunidadesSelect = document.getElementById("comunidades");
    let provinciasSelect = document.getElementById("provincias");
    provinciasSelect.innerHTML = "";

    let listaProvincias = [];
    for (let i = 0; i < comunidadesSelect.options.length; i++) {
        let comunidadOption = comunidadesSelect.options[i];
        if (comunidadOption.selected) {
            switch (comunidadOption.value) {
                case "Andalucía":
                    listaProvincias.push("Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla");
                    break;
                case "Aragón":
                    listaProvincias.push("Huesca", "Teruel", "Zaragoza");
                    break;
                case "Asturias":
                    listaProvincias.push("Asturias");
                    break;
                case "Cantabria":
                    listaProvincias.push("Cantabria");
                    break;
                case "Castilla y León":
                    listaProvincias.push("Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora");
                    break;
                case "Castilla-La Mancha":
                    listaProvincias.push("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo");
                    break;
                case "Cataluña":
                    listaProvincias.push("Barcelona", "Girona", "Lleida", "Tarragona");
                    break;
                case "Comunidad Valenciana":
                    listaProvincias.push("Alicante", "Castellón", "Valencia");
                    break;
                case "Extremadura":
                    listaProvincias.push("Badajoz", "Cáceres");
                    break;
                case "Galicia":
                    listaProvincias.push("A Coruña", "Lugo", "Ourense", "Pontevedra");
                    break;
                case "Islas Baleares":
                    listaProvincias.push("Baleares");
                    break;
                case "Islas Canarias":
                    listaProvincias.push("Las Palmas", "Santa Cruz de Tenerife");
                    break;
                case "La Rioja":
                    listaProvincias.push("La Rioja");
                    break;
                case "Madrid":
                    listaProvincias.push("Madrid");
                    break;
                case "Murcia":
                    listaProvincias.push("Murcia");
                    break;
                case "Navarra":
                    listaProvincias.push("Navarra");
                    break;
                case "País Vasco":
                    listaProvincias.push("Álava", "Gipuzkoa", "Bizkaia");
                    break;
                case "Ceuta":
                    listaProvincias.push("Ceuta");
                    break;
                case "Melilla":
                    listaProvincias.push("Melilla");
                    break;
                default:
                    break;
            }
        }
    }

    listaProvincias.sort().reverse().forEach(function(provincia) {
        let opcion = document.createElement("option");
        opcion.text = provincia;
        opcion.value = provincia;
        provinciasSelect.add(opcion);
    });
}
