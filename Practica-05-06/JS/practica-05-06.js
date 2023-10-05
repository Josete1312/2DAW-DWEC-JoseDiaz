window.onload = comienzo;

function comienzo() {
    const formulario = document.forms.miFormulario;
    const cadenaInput = formulario.elements.Cadena;
    const vocalSubcadenaInput = formulario.elements.VocalSubcadena;
    const mensajeInput = formulario.elements.Mensaje;
    const boton = formulario.elements.boton;
    
    cadenaInput.value = "";
    vocalSubcadenaInput.value = "";
    mensajeInput.value = "";
    
    boton.onclick = comprobarApariciones;
}

function comprobarApariciones() {
    const formulario = document.forms.miFormulario;
    const cadenaInput = formulario.elements.Cadena;
    const vocalSubcadenaInput = formulario.elements.VocalSubcadena;
    const mensajeInput = formulario.elements.Mensaje;
    
    const cadena = cadenaInput.value.toLowerCase();
    const vocalSubcadena = vocalSubcadenaInput.value.toLowerCase();
    
    const apariciones = contarApariciones(cadena, vocalSubcadena);
    
    mensajeInput.value = "La subcadena " + vocalSubcadena + " aparece " + apariciones + " veces en la cadena.";
}

function contarApariciones(cadena, subcadena) {
    let contador = 0;
    let pos = cadena.indexOf(subcadena);
    
    while (pos !== -1) {
        contador++;
        pos = cadena.indexOf(subcadena, pos + 1);
    }
    
    return contador;
}
