//Crea un documento HTML que tenga una lista desplegable con todas las
//comunidades autónomas y a su derecha otra lista desplegable, que
//inicialmente va a estar vacía, y que a su izquierda va a tener el literal
//“Provincias”.
//a. Cuando se seleccione una comunidad autónoma vamos a incluir en la
//otra lista desplegable las provincias de esa comunidad autónoma,
//solamente se deberá mostrar las provincias de la comunidad
//autónoma selecciona.

if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    let comunidadSelect = document.getElementById("comunidad");
    if (document.addEventListener) {
        comunidadSelect.addEventListener("change", procesar);
    } else if (document.attachEvent) {
        comunidadSelect.attachEvent("onchange", procesar);
    }
}

function procesar() {
    let comunidad = document.getElementById("comunidad").value;
    let provinciasSelect = document.getElementById("provincia");

    while (provinciasSelect.options.length > 1) {
        provinciasSelect.remove(1);
    }

    switch(comunidad) {
        case "Andalucía":
            agregarProvincias(["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"]);
            break;
        case "Aragón":
            agregarProvincias(["Huesca", "Teruel", "Zaragoza"]);
            break;
        case "Asturias":
            agregarProvincias(["Asturias"]);
            break;
        case "Cantabria":
            agregarProvincias(["Cantabria"]);
            break;
        case "Castilla y León":
            agregarProvincias(["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"]);
            break;
        case "Castilla-La Mancha":
            agregarProvincias(["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"]);
            break;
        case "Cataluña":
            agregarProvincias(["Barcelona", "Girona", "Lleida", "Tarragona"]);
            break;
        case "Comunidad Valenciana":
            agregarProvincias(["Alicante", "Castellón", "Valencia"]);
            break;
        case "Extremadura":
            agregarProvincias(["Badajoz", "Cáceres"]);
            break;
        case "Galicia":
            agregarProvincias(["A Coruña", "Lugo", "Ourense", "Pontevedra"]);
            break;
        case "Islas Baleares":
            agregarProvincias(["Baleares"]);
            break;
        case "Islas Canarias":
            agregarProvincias(["Las Palmas", "Santa Cruz de Tenerife"]);
            break;
        case "La Rioja":
            agregarProvincias(["La Rioja"]);
            break;
        case "Madrid":
            agregarProvincias(["Madrid"]);
            break;
        case "Murcia":
            agregarProvincias(["Murcia"]);
            break;
        case "Navarra":
            agregarProvincias(["Navarra"]);
            break;
        case "País Vasco":
            agregarProvincias(["Álava", "Gipuzkoa", "Bizkaia"]);
            break;
        case "Ceuta":
            agregarProvincias(["Ceuta"]);
            break;
        case "Melilla":
            agregarProvincias(["Melilla"]);
            break;
        default:
            break;
    }
}

function agregarProvincias(provincias) {
    let provinciasSelect = document.getElementById("provincia");
    provincias.forEach(function(provincia) {
        let opcion = document.createElement("option");
        opcion.text = provincia;
        opcion.value = provincia;
        provinciasSelect.add(opcion);
    });
}
